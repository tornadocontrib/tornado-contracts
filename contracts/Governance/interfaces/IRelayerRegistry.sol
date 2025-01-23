// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IRelayerRegistry {
    function torn() external view returns (address);

    function governance() external view returns (address);

    function ens() external view returns (address);

    function getRelayerBalance(address relayer) external view returns (uint256);

    function getRelayerEnsHash(address relayer) external view returns (bytes32);

    function isRelayerRegistered(address relayer, address toResolve) external view returns (bool);
}
