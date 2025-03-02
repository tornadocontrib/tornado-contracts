// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface ITovarishRegistry {
    struct Relayer {
        string ensName;
        address owner;
        uint256 balance;
        bool isRegistered;
        bool isPrior;
        string tovarishHost;
        string tovarishChains;
        string[] records;
    }

    function lastUpdate() external view returns (uint256);

    function getChainIds() external view returns (uint64[] memory);

    function relayerRegistry() external view returns (address);

    function relayersData(string[] memory additionalRelayers) external view returns (Relayer[] memory);
}
