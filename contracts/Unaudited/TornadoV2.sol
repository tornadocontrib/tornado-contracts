// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IHasher } from '../Classic/interfaces/IHasher.sol';
import { IVerifier } from '../Classic/interfaces/IVerifier.sol';
import { IWETH } from '../Classic/interfaces/IWETH.sol';
import { IERC20, SafeERC20 } from '../Classic/libraries/SafeERC20.sol';
import { ReentrancyGuard } from '../Classic/libraries/ReentrancyGuard.sol';

import { IVault } from './interfaces/IVault.sol';
import { ISignatureTransfer } from './interfaces/ISignatureTransfer.sol';
import { ParseSignature } from './libraries/ParseSignature.sol';

/**
 * @notice (WIP) Singleton Tornado Cash contract
 * @author tornadocontrib.eth
 */
contract TornadoV2 is ReentrancyGuard {
    using SafeERC20 for IERC20;

    enum SignatureType {
        PERMIT,
        PERMIT2
    }

    struct PermitCommitments {
        bytes32 instancesHash;
        bytes32 commitmentsHash;
    }

    bytes public constant COMMITMENT_TYPE = 'PermitCommitments(bytes32 instancesHash,bytes32 commitmentsHash)';

    bytes32 public constant COMMITMENT_TYPEHASH = keccak256(bytes(COMMITMENT_TYPE));

    string public constant WITNESS_TYPE_STRING =
        string(
            abi.encodePacked(
                'PermitCommitments witness)',
                COMMITMENT_TYPE,
                'TokenPermissions(address token,uint256 amount)'
            )
        );

    // https://docs.uniswap.org/contracts/v3/reference/deployments/ethereum-deployments
    ISignatureTransfer public constant permit2 = ISignatureTransfer(0x000000000022D473030F116dDEE9F6B43aC78BA3);

    uint256 public constant FIELD_SIZE = 21888242871839275222246405745257275088548364400416034343698204186575808495617;
    uint256 public constant ZERO_VALUE = 21663839004416932945382355908790599225266501822907911457504978515578255421292; // = keccak256("tornado") % FIELD_SIZE
    uint32 public constant ROOT_HISTORY_SIZE = 30;

    uint16 public constant REVISION = 0;

    IWETH public weth;
    IHasher public hasher;
    IVerifier public verifier;
    uint32 public levels;

    address public feeTo;
    uint16 public constant feeRate = 30;

    event Deposit(uint256 indexed id, address from, bytes32 indexed commitment, uint32 leafIndex, uint256 timestamp);

    event Withdrawal(
        uint256 indexed id,
        address to,
        bytes32 nullifierHash,
        address indexed relayer,
        uint256 fee,
        uint256 timestamp
    );

    struct InstanceStorage {
        mapping(uint256 => bytes32) filledSubtrees;
        mapping(uint256 => bytes32) zeros;
        mapping(uint256 => bytes32) roots;
        uint32 currentRootIndex;
        uint32 nextIndex;
        IERC20 token;
        uint256 denomination;
        // total deposits - total withdrawals
        uint32 delta;
        uint256 rewards;
        IVault vault;
    }

    struct InstanceView {
        uint32 currentRootIndex;
        uint32 nextIndex;
        IERC20 token;
        bool native;
        uint256 denomination;
        // total deposits - total withdrawals
        uint32 delta;
        uint256 rewards;
        IVault vault;
    }

    mapping(uint256 => InstanceStorage) internal instances;
    mapping(bytes32 => bool) public hasInstance;

    mapping(bytes32 => bool) public nullifierHashes;
    mapping(bytes32 => bool) public commitments;

    uint256 public instanceIndex;

    error Initialized();

    error DuplicatedInstance();

    error InvalidSignatureType();

    receive() external payable {
        require(msg.sender == address(weth), 'Not from WETH');
    }

    function initialize(
        IWETH _weth,
        IVerifier _verifier,
        IHasher _hasher,
        uint32 _levels,
        address _feeTo,
        CreateInstance[] memory _instances
    ) external virtual {
        if (address(hasher) != address(0)) {
            revert Initialized();
        }

        require(_levels > 0, '_levels should be greater than zero');
        require(_levels < 32, '_levels should be less than 32');

        weth = _weth;
        levels = _levels;
        hasher = _hasher;
        verifier = _verifier;

        feeTo = _feeTo;

        for (uint256 i; i < _instances.length; ++i) {
            CreateInstance memory _instance = _instances[i];
            createInstance(_instance.token, _instance.denomination, _instance.vault);
        }
    }

    struct CreateInstance {
        IERC20 token;
        uint256 denomination;
        IVault vault;
    }

    function createInstance(
        IERC20 _token,
        uint256 _denomination,
        IVault _vault
    ) public virtual nonReentrant returns (uint256 id) {
        id = instanceIndex;

        bytes32 instanceHash = keccak256(abi.encode(address(_token), _denomination, address(_vault)));

        if (hasInstance[instanceHash]) {
            revert DuplicatedInstance();
        }

        hasInstance[instanceHash] = true;

        instances[id].token = _token;
        instances[id].denomination = _denomination;
        instances[id].vault = _vault;

        bytes32 currentZero = bytes32(ZERO_VALUE);
        for (uint32 i = 0; i < levels; i++) {
            instances[id].zeros[i] = currentZero;
            instances[id].filledSubtrees[i] = currentZero;
            currentZero = hashLeftRight(currentZero, currentZero);
        }

        instances[id].roots[0] = currentZero;

        instanceIndex++;
    }

    function witness(PermitCommitments memory permitData) public pure returns (bytes32) {
        return keccak256(abi.encode(COMMITMENT_TYPEHASH, permitData.instancesHash, permitData.commitmentsHash));
    }

    function getSignatureType(bytes memory permitData) public pure returns (SignatureType) {
        bytes1 sigType = abi.decode(permitData, (bytes1));

        if (uint8(sigType) == uint8(0)) {
            return SignatureType.PERMIT;
        } else if (uint8(sigType) == uint8(1)) {
            return SignatureType.PERMIT2;
        } else {
            revert InvalidSignatureType();
        }
    }

    function _parseDeposit(
        uint256[] memory _ids,
        bytes32[] memory _commitments
    ) internal view returns (IERC20 _token, uint256 _amount, IVault _vault) {
        require(_ids.length == _commitments.length, 'Incorrect input');

        _token = instances[_ids[0]].token;
        _vault = instances[_ids[0]].vault;

        for (uint i; i < _ids.length; ++i) {
            require(_token == instances[_ids[i]].token, 'Incorrect Token');
            require(_vault == instances[_ids[i]].vault, 'Incorrect Vault');

            _amount += instances[_ids[i]].denomination;
        }
    }

    /**
     * @dev Deposit funds into the contract. The caller must send (for ETH) or approve (for ERC20) value equal to or `denomination` of this instance.
     * @param _commitments the note commitment, which is PedersenHash(nullifier + secret)
     * @dev Does not support fee-on-transfer tokens
     */
    function deposit(
        uint256[] memory _ids,
        bytes32[] memory _commitments,
        bytes memory permitData
    ) external payable virtual nonReentrant {
        (IERC20 _token, uint256 _amount, IVault _vault) = _parseDeposit(_ids, _commitments);
        bool native = address(_token) == address(weth);

        require(msg.value == 0 || (native && msg.value == _amount), 'Please send correct ETH');

        // Let Vault handle deposits
        if (address(_vault) != address(0)) {
            _vault.deposit{ value: msg.value }(_ids, address(_token), msg.sender, _amount, permitData);

            // Handle native ETH deposits
        } else if (native && msg.value == _amount) {
            weth.deposit{ value: _amount }();

            // Handle approved token deposits
        } else if (permitData.length == 0) {
            _token.safeTransferFrom(msg.sender, address(this), _amount);

            // Handle signature deposits (PERMIT, PERMIT2)
        } else {
            SignatureType sigType = getSignatureType(permitData);

            if (sigType == SignatureType.PERMIT) {
                (, address owner, bytes memory signature) = abi.decode(permitData, (bytes1, address, bytes));

                (uint8 v, bytes32 r, bytes32 s) = ParseSignature.parse(signature);

                bytes32 commitmentsHash = keccak256(abi.encodePacked(_commitments));

                _token.permit(owner, address(this), _amount, uint256(commitmentsHash), v, r, s);
                _token.safeTransferFrom(owner, address(this), _amount);
            } else {
                (, address owner, uint256 nonce, uint256 deadline, bytes memory signature) = abi.decode(
                    permitData,
                    (bytes1, address, uint256, uint256, bytes)
                );

                bytes32 witnessHash;

                {
                    witnessHash = witness(
                        PermitCommitments({
                            instancesHash: keccak256(abi.encodePacked(_ids)),
                            commitmentsHash: keccak256(abi.encodePacked(_commitments))
                        })
                    );
                }

                permit2.permitWitnessTransferFrom(
                    ISignatureTransfer.PermitTransferFrom({
                        permitted: ISignatureTransfer.TokenPermissions({ token: address(_token), amount: _amount }),
                        nonce: nonce,
                        deadline: deadline
                    }),
                    ISignatureTransfer.SignatureTransferDetails({ to: address(this), requestedAmount: _amount }),
                    owner,
                    witnessHash,
                    WITNESS_TYPE_STRING,
                    signature
                );
            }
        }

        for (uint256 i; i < _commitments.length; ++i) {
            _processDeposit(_ids[i], _commitments[i]);
            instances[_ids[i]].delta++;
        }
    }

    function _processDeposit(uint256 id, bytes32 _commitment) internal {
        require(!commitments[_commitment], 'The commitment has been submitted');

        uint32 insertedIndex = _insert(id, _commitment);
        commitments[_commitment] = true;

        emit Deposit(id, tx.origin, _commitment, insertedIndex, block.timestamp);
    }

    /**
     * @dev Withdraw a deposit from the contract. `proof` is a zkSNARK proof data, and input is an array of circuit public inputs
     * `input` array consists of:
     * - merkle root of all deposits in the contract
     * - hash of unique deposit nullifier to prevent double spends
     * - the recipient of funds
     * - optional fee that goes to the transaction sender (usually a relay)
     */
    function withdraw(
        uint256 id,
        bytes calldata _proof,
        bytes32 _root,
        bytes32 _nullifierHash,
        address payable _recipient,
        address payable _relayer,
        uint256 _relayerFee,
        uint256 _refund,
        bytes memory _data
    ) external payable virtual nonReentrant {
        _processWithdraw(id, _proof, _root, _nullifierHash, _recipient, _relayer, _relayerFee, _refund, _data);
        _processSend(id, _recipient, _relayer, _relayerFee, _refund, _data);
    }

    function _processSend(
        uint256 id,
        address payable _recipient,
        address payable _relayer,
        uint256 _relayerFee,
        uint256 _refund,
        bytes memory _data
    ) internal {
        IERC20 _token = instances[id].token;
        bool native = address(_token) == address(weth);
        uint256 _denomination = instances[id].denomination;

        if (address(instances[id].vault) != address(0)) {
            instances[id].vault.withdraw{ value: msg.value }(
                id,
                address(_token),
                _recipient,
                _denomination,
                _relayer,
                _relayerFee,
                _refund,
                _data
            );

            instances[id].delta--;

            return;
        }

        if (native) {
            weth.withdraw(_denomination);
        }

        uint256 toSend;
        {
            (uint256 rewards, uint256 fees) = _processFees(id);
            toSend = _denomination + rewards - fees - _relayerFee;
        }

        instances[id].delta--;

        if (native) {
            // sanity checks
            require(msg.value == 0, 'Message value is supposed to be zero for ETH instance');
            require(_refund == 0, 'Refund value is supposed to be zero for ETH instance');

            (bool success, ) = _recipient.call{ value: toSend }(_data);
            require(success, 'payment to _recipient did not go thru');

            if (_relayerFee > 0) {
                (success, ) = _relayer.call{ value: _relayerFee }('');
                require(success, 'payment to _relayer did not go thru');
            }
        } else {
            require(msg.value == _refund, 'Incorrect refund amount received by the contract');

            _token.safeTransfer(_recipient, toSend);

            if (_relayerFee > 0) {
                _token.safeTransfer(_relayer, _relayerFee);
            }

            if (_refund > 0 || _data.length != 0) {
                (bool success, ) = _recipient.call{ value: _refund }(_data);
                require(success, 'refund to _recipient did not go thru');
            }
        }
    }

    function _processFees(uint256 id) internal returns (uint256, uint256) {
        IERC20 _token = instances[id].token;
        bool native = address(_token) == address(weth);
        uint256 _denomination = instances[id].denomination;

        // reward to pay to
        uint256 rewards = instances[id].rewards / (instances[id].delta * _denomination);

        instances[id].rewards -= rewards;

        // withdrawal fees to collect (doesn't collect when this is the last withdrawal)
        uint256 fees = (instances[id].delta > 1) ? ((_denomination * feeRate) / 10000) : 0;
        uint256 devFee = (feeTo != address(0)) ? (fees / 2) : 0;
        uint256 dividend = fees - devFee;

        if (devFee != 0) {
            if (native) {
                (bool success, ) = feeTo.call{ value: devFee }('');
                require(success, 'payment to feeTo did not go thru');
            } else {
                _token.safeTransfer(feeTo, devFee);
            }
        }

        instances[id].rewards += dividend;

        return (rewards, fees);
    }

    function _processWithdraw(
        uint256 id,
        bytes calldata _proof,
        bytes32 _root,
        bytes32 _nullifierHash,
        address payable _recipient,
        address payable _relayer,
        uint256 _fee,
        uint256 _refund,
        bytes memory _data
    ) internal {
        require(_fee <= instances[id].denomination, 'Fee exceeds transfer value');
        require(!nullifierHashes[_nullifierHash], 'The note has been already spent');
        require(isKnownRoot(id, _root), 'Cannot find your merkle root'); // Make sure to use a recent one

        uint256 recipientInt = uint256(uint160(address(_recipient)));

        if (_data.length != 0) {
            // Make sure the hashed value is under PRIME_Q value
            recipientInt = uint256(uint248(bytes31(keccak256(abi.encode(_recipient, _data)))));
        }

        require(
            verifier.verifyProof(
                _proof,
                [
                    uint256(_root),
                    uint256(_nullifierHash),
                    recipientInt,
                    uint256(uint160(address(_relayer))),
                    _fee,
                    _refund
                ]
            ),
            'Invalid withdraw proof'
        );

        nullifierHashes[_nullifierHash] = true;

        emit Withdrawal(id, _recipient, _nullifierHash, _relayer, _fee, block.timestamp);
    }

    /**
     * @dev Hash 2 tree leaves, returns MiMC(_left, _right)
     */
    function hashLeftRight(bytes32 _left, bytes32 _right) public view returns (bytes32) {
        require(uint256(_left) < FIELD_SIZE, '_left should be inside the field');
        require(uint256(_right) < FIELD_SIZE, '_right should be inside the field');
        uint256 R = uint256(_left);
        uint256 C = 0;
        (R, C) = hasher.MiMCSponge(R, C);
        R = addmod(R, uint256(_right), FIELD_SIZE);
        (R, C) = hasher.MiMCSponge(R, C);
        return bytes32(R);
    }

    function _insert(uint256 id, bytes32 _leaf) internal returns (uint32 index) {
        uint32 _nextIndex = instances[id].nextIndex;
        require(_nextIndex != uint32(2) ** levels, 'Merkle tree is full. No more leaves can be added');
        uint32 currentIndex = _nextIndex;
        bytes32 currentLevelHash = _leaf;
        bytes32 left;
        bytes32 right;

        for (uint32 i = 0; i < levels; i++) {
            if (currentIndex % 2 == 0) {
                left = currentLevelHash;
                right = instances[id].zeros[i];
                instances[id].filledSubtrees[i] = currentLevelHash;
            } else {
                left = instances[id].filledSubtrees[i];
                right = currentLevelHash;
            }
            currentLevelHash = hashLeftRight(left, right);
            currentIndex /= 2;
        }

        uint32 newRootIndex = (instances[id].currentRootIndex + 1) % ROOT_HISTORY_SIZE;
        instances[id].currentRootIndex = newRootIndex;
        instances[id].roots[newRootIndex] = currentLevelHash;
        instances[id].nextIndex = _nextIndex + 1;
        return _nextIndex;
    }

    /**
     * @dev Whether the root is present in the root history
     */
    function isKnownRoot(uint256 id, bytes32 _root) public view returns (bool) {
        if (_root == 0) {
            return false;
        }
        uint32 _currentRootIndex = instances[id].currentRootIndex;
        uint32 i = _currentRootIndex;
        do {
            if (_root == instances[id].roots[i]) {
                return true;
            }
            if (i == 0) {
                i = ROOT_HISTORY_SIZE;
            }
            i--;
        } while (i != _currentRootIndex);
        return false;
    }

    /**
     * @dev Returns the last root
     */
    function nextIndex(uint256 id) public view returns (uint32) {
        return instances[id].nextIndex;
    }

    function getLastRoot(uint256 id) public view returns (bytes32) {
        return instances[id].roots[instances[id].currentRootIndex];
    }

    function token(uint256 id) external view returns (address) {
        return address(instances[id].token);
    }

    function denomination(uint256 id) external view returns (uint256) {
        return instances[id].denomination;
    }

    function instance(uint256 id) external view returns (InstanceView memory) {
        return
            InstanceView({
                currentRootIndex: instances[id].currentRootIndex,
                nextIndex: instances[id].nextIndex,
                token: instances[id].token,
                native: address(instances[id].token) == address(weth),
                denomination: instances[id].denomination,
                delta: instances[id].delta,
                rewards: instances[id].rewards,
                vault: instances[id].vault
            });
    }

    function filledSubtrees(uint256 id, uint256 index) external view returns (bytes32) {
        return instances[id].filledSubtrees[index];
    }

    function zeros(uint256 id, uint256 index) external view returns (bytes32) {
        return instances[id].zeros[index];
    }

    function roots(uint256 id, uint256 index) external view returns (bytes32) {
        return instances[id].roots[index];
    }

    /**
     * @dev whether a note is already spent
     * It is discouraged to use function on remote RPC environment
     * You should always sync the whole withdrawal events and find from them to ensure privacy
     */
    function isSpent(bytes32 _nullifierHash) public view returns (bool) {
        return nullifierHashes[_nullifierHash];
    }

    /** @dev whether an array of notes is already spent */
    function isSpentArray(bytes32[] calldata _nullifierHashes) external view returns (bool[] memory spent) {
        spent = new bool[](_nullifierHashes.length);
        for (uint256 i = 0; i < _nullifierHashes.length; i++) {
            if (isSpent(_nullifierHashes[i])) {
                spent[i] = true;
            }
        }
    }
}
