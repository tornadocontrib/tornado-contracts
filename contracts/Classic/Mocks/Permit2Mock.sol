// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20 } from '../interfaces/IERC20.sol';
import { ParseSignature } from '../libraries/ParseSignature.sol';
import { ISignatureTransfer } from '../interfaces/ISignatureTransfer.sol';

contract Permit2Mock {
    enum SignatureType {
        PERMIT,
        PERMIT2
    }
    
    struct PermitCommitments {
        address instance;
        bytes32 commitmentsHash;
    }

    uint256 public denomination;
    IERC20 public token;

    bytes public constant COMMITMENT_TYPE = "PermitCommitments(address instance,bytes32 commitmentsHash)";

    bytes32 public constant COMMITMENT_TYPEHASH = keccak256(bytes(COMMITMENT_TYPE));

    string public constant WITNESS_TYPE_STRING = string(abi.encodePacked("PermitCommitments witness)", COMMITMENT_TYPE, "TokenPermissions(address token,uint256 amount)"));

    // https://docs.uniswap.org/contracts/v3/reference/deployments/ethereum-deployments
    ISignatureTransfer public constant permit2 = ISignatureTransfer(0x000000000022D473030F116dDEE9F6B43aC78BA3);

    mapping(bytes32 => bool) public commitments;

    error InvalidSignatureType();

    constructor(uint256 _denomination, IERC20 _token) {
        denomination = _denomination;
        token = _token;
    }

    function witness(PermitCommitments memory permitData) public pure returns (bytes32) {
        return keccak256(
            abi.encode(COMMITMENT_TYPEHASH, permitData.instance, permitData.commitmentsHash)
        );
    }

    function getSignatureType(bytes memory permitData) public pure returns (SignatureType) {
        (bytes1 sigType) = abi.decode(permitData, (bytes1));

        if (uint8(sigType) == uint8(0)) {
            return SignatureType.PERMIT;
        } else if (uint8(sigType) == uint8(1)) {
            return SignatureType.PERMIT2;
        } else {
            revert InvalidSignatureType();
        }
    }

    function depositPermit(
        bytes32[] memory _commitments,
        bytes memory permitData
    ) external {
        // Process token transfer with permit signatures

        SignatureType sigType = getSignatureType(permitData);

        if (sigType == SignatureType.PERMIT) {

            (, address owner, bytes memory signature) = abi.decode(permitData, (bytes1, address, bytes));

            (uint8 v, bytes32 r, bytes32 s) = ParseSignature.parse(signature);

            uint256 amount = denomination * _commitments.length;
            bytes32 commitmentsHash = keccak256(abi.encodePacked(_commitments));
            
            token.permit(owner, address(this), amount, uint256(commitmentsHash), v, r, s);
            token.transferFrom(owner, address(this), amount);

        } else {

            (, address owner, uint256 nonce, uint256 deadline, bytes memory signature) = abi.decode(
                permitData, (bytes1, address, uint256, uint256, bytes)
            );

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
                signature
            );

        }
    }
}