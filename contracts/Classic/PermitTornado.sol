// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import { ISignatureTransfer } from './interfaces/ISignatureTransfer.sol';
import { IVerifier, IHasher, IERC20, SafeERC20, ERC20Tornado } from './ERC20Tornado.sol';

/**
 * Extends ERC20Tornado with ERC-2612 and TornadoProxyLight Router contract support
 *
 * For new chains deploy permit2 contract first using the tool (present at foundry https://github.com/Arachnid/deterministic-deployment-proxy)
 */
contract PermitTornado is ERC20Tornado {
    using SafeERC20 for IERC20;
    
    struct PermitCommitments {
        address instance;
        bytes32 commitmentsHash;
    }

    bytes public constant COMMITMENT_TYPE = "PermitCommitments(address instance,bytes32 commitmentsHash)";

    bytes32 public constant COMMITMENT_TYPEHASH = keccak256(bytes(COMMITMENT_TYPE));

    string public constant WITNESS_TYPE_STRING = string(abi.encodePacked("PermitCommitments witness)", COMMITMENT_TYPE, "TokenPermissions(address token,uint256 amount)"));
    
    // https://docs.uniswap.org/contracts/v3/reference/deployments/ethereum-deployments
    ISignatureTransfer public constant permit2 = ISignatureTransfer(0x000000000022D473030F116dDEE9F6B43aC78BA3);

    mapping(bytes32 => address) public verifiedCommitments;

    event VerifiedCommitment(bytes32 indexed commitment, address owner);

    address public immutable tornadoProxyLight;

    constructor(
        IVerifier _verifier,
        IHasher _hasher,
        uint256 _denomination,
        uint32 _merkleTreeHeight,
        IERC20 _token,
        address _tornadoProxyLight
    ) ERC20Tornado(_verifier, _hasher, _denomination, _merkleTreeHeight, _token) {
        tornadoProxyLight = _tornadoProxyLight;
    }

    function _processDeposit() internal virtual override {
        if (msg.sender == tornadoProxyLight) {
            token.safeTransferFrom(tx.origin, address(this), denomination);
            return;
        }
        
        super._processDeposit();
    }

    function depositCommitment(
        bytes32 _commitment,
        address owner
    ) external nonReentrant {
        require(verifiedCommitments[_commitment] == owner, "Unapproved commitment");
        require(!commitments[_commitment], "The commitment has been submitted");

        uint32 insertedIndex = _insert(_commitment);
        commitments[_commitment] = true;

        emit Deposit(_commitment, insertedIndex, block.timestamp);
    }

    function pushVerifiedCommitments(bytes32[] memory _commitments, address owner) internal {
        for (uint256 i = 0; i < _commitments.length; i++) {
            bytes32 _commitment = _commitments[i];

            // Prevent losing money with wrong commitment
            require(verifiedCommitments[_commitment] == address(0), "The commitment has been verified");
            require(!commitments[_commitment], "The commitment has been submitted");

            verifiedCommitments[_commitment] = owner;

            emit VerifiedCommitment(_commitment, owner);
        }
    }

    /**
     * Verify commitments from signature as a part of deposit verification (to prevent MEV).
     * We use deadline to verify commitment because they occupy the same byte size and using bigger value wouldn't revert on most wallets.
     * If any wallet rejects signing signature should use permit2 with typed data instead.
     */
    function permitCommitments(
        address owner,
        bytes32[] memory _commitments,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external nonReentrant {
        uint256 amount = denomination * _commitments.length;
        bytes32 commitmentsHash = keccak256(abi.encodePacked(_commitments));

        token.permit(owner, address(this), amount, uint256(commitmentsHash), v, r, s);
        token.safeTransferFrom(owner, address(this), amount);

        pushVerifiedCommitments(_commitments, owner);
    }

    function witness(PermitCommitments memory permitData) public pure returns (bytes32) {
        return keccak256(
            abi.encode(COMMITMENT_TYPEHASH, permitData.instance, permitData.commitmentsHash)
        );
    }
    
    /**
     * https://docs.uniswap.org/contracts/permit2/reference/signature-transfer#batch-permitwitnesstransferfrom
     */
    function permit2Commitments(
        address owner,
        bytes32[] memory _commitments,
        uint256 nonce,
        uint256 deadline,
        bytes calldata _signature
    ) external nonReentrant {
        uint256 amount = denomination * _commitments.length;
        bytes32 commitmentsHash = keccak256(abi.encodePacked(_commitments));

        permit2.permitWitnessTransferFrom(
            ISignatureTransfer.PermitTransferFrom({
                permitted: ISignatureTransfer.TokenPermissions({
                    token: address(token),
                    amount: amount
                }),
                nonce: nonce,
                deadline: deadline
            }),
            ISignatureTransfer.SignatureTransferDetails({
                to: address(this),
                requestedAmount: amount
            }),
            owner,
            witness(PermitCommitments({
                instance: address(this),
                commitmentsHash: commitmentsHash
            })),
            WITNESS_TYPE_STRING,
            _signature
        );

        pushVerifiedCommitments(_commitments, owner);
    }
}