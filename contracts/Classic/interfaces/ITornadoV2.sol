// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ITornadoV2 {
    function weth() external view returns (address);

    function deposit(
        uint256[] memory _ids,
        bytes32[] memory _commitments,
        bytes memory permitData
    ) external payable;

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
    ) external payable;

    function nextIndex(uint256 id) external view returns (uint32);

    function getLastRoot(uint256 id) external view returns (bytes32);

    function token(uint256 id) external view returns (address);

    function denomination(uint256 id) external view returns (uint256);

    function filledSubtrees(uint256 id, uint256 index) external view returns (bytes32);

    function zeros(uint256 id, uint256 index) external view returns (bytes32);
    
    function roots(uint256 id, uint256 index) external view returns (bytes32);

    function isSpent(bytes32 _nullifierHash) external view returns (bool);
}