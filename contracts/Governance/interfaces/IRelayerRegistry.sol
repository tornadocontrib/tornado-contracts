// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IRelayerRegistry {
    function getRelayerBalance(address relayer) external view returns (uint256);

    function getRelayerEnsHash(address relayer) external view returns (bytes32);

    function isRelayerRegistered(address relayer, address toResolve) external view returns (bool);
}
