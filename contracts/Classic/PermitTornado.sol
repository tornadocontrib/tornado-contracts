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
    // https://docs.uniswap.org/contracts/v3/reference/deployments/ethereum-deployments
    ISignatureTransfer public constant permit2 = ISignatureTransfer(0x000000000022D473030F116dDEE9F6B43aC78BA3);

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

    function addCommitment(bytes32 _commitment) internal {
        require(!commitments[_commitment], "The commitment has been submitted");

        uint32 insertedIndex = _insert(_commitment);
        commitments[_commitment] = true;

        emit Deposit(_commitment, insertedIndex, block.timestamp);
    }

    function depositWithPermit(
        bytes32 commitment,
        address owner,
        uint256 deadline,
        uint8 v,
        bytes32 r,
        bytes32 s
    ) external nonReentrant {
        token.permit(owner, address(this), denomination, deadline, v, r, s);
        token.safeTransferFrom(owner, address(this), denomination);

        addCommitment(commitment);
    }

    function depositWithPermit2(
        bytes32 commitment,
        address owner,
        ISignatureTransfer.PermitTransferFrom calldata _permit,
        bytes calldata _signature
    ) external nonReentrant {
        permit2.permitTransferFrom(
            _permit,
            ISignatureTransfer.SignatureTransferDetails({
                to: address(this),
                requestedAmount: denomination
            }),
            owner,
            _signature
        );

        addCommitment(commitment);
    }
}