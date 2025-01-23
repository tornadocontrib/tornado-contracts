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

    function relayerRegistry() external view returns (address);

    function relayersData(string[] memory additionalRelayers) external view returns (Relayer[] memory);
}
