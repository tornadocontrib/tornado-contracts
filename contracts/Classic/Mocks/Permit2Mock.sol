// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ISignatureTransfer } from '../interfaces/ISignatureTransfer.sol';

contract Permit2Mock {
    struct PermitCommitments {
        address instance;
        bytes32 commitmentsHash;
    }

    uint256 public denomination;
    address public token;

    bytes public constant COMMITMENT_TYPE = "PermitCommitments(address instance,bytes32 commitmentsHash)";

    bytes32 public constant COMMITMENT_TYPEHASH = keccak256(bytes(COMMITMENT_TYPE));

    string public constant WITNESS_TYPE_STRING = string(abi.encodePacked("PermitCommitments witness)", COMMITMENT_TYPE, "TokenPermissions(address token,uint256 amount)"));

    // https://docs.uniswap.org/contracts/v3/reference/deployments/ethereum-deployments
    ISignatureTransfer public constant permit2 = ISignatureTransfer(0x000000000022D473030F116dDEE9F6B43aC78BA3);

    mapping(bytes32 => address) public verifiedCommitments;

    event VerifiedCommitment(bytes32 indexed commitment, address owner);

    constructor(uint256 _denomination, address _token) {
        denomination = _denomination;
        token = _token;
    }

    function pushVerifiedCommitments(bytes32[] memory _commitments, address owner) internal {
        for (uint256 i = 0; i < _commitments.length; i++) {
            bytes32 _commitment = _commitments[i];

            // Prevent losing money with wrong commitment
            require(verifiedCommitments[_commitment] == address(0), "The commitment has been verified");
            // require(!commitments[_commitment], "The commitment has been submitted");

            verifiedCommitments[_commitment] = owner;

            emit VerifiedCommitment(_commitment, owner);
        }
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
    ) external {
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

    function permit2Test(
        address owner,
        uint256 nonce,
        uint256 deadline,
        bytes calldata _signature
    ) external {
        permit2.permitTransferFrom(
            ISignatureTransfer.PermitTransferFrom({
                permitted: ISignatureTransfer.TokenPermissions({
                    token: address(token),
                    amount: denomination
                }),
                nonce: nonce,
                deadline: deadline
            }),
            ISignatureTransfer.SignatureTransferDetails({
                to: address(this),
                requestedAmount: denomination
            }),
            owner,
            _signature
        );
    }
}