// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ENS } from '@ensdomains/ens-contracts/contracts/registry/ENS.sol';
import { Resolver } from '@ensdomains/ens-contracts/contracts/resolvers/Resolver.sol';
import { IRelayerRegistry } from '../interfaces/IRelayerRegistry.sol';

struct Relayer {
    address owner;
    uint256 balance;
    bool isRegistered;
    string[20] records;
}

contract RelayerAggregator {
    ENS public immutable ENSRegistry;
    IRelayerRegistry public immutable RelayerRegistry;

    constructor(address _ENS, address _IRelayerRegistry) {
        ENSRegistry = ENS(_ENS);
        RelayerRegistry = IRelayerRegistry(_IRelayerRegistry);
    }

    function relayersData(bytes32[] memory _relayers, string[] memory _subdomains) public view returns (Relayer[] memory) {
        Relayer[] memory relayers = new Relayer[](_relayers.length);

        for (uint256 i = 0; i < _relayers.length; i++) {
            relayers[i].owner = ENSRegistry.owner(_relayers[i]);
            Resolver resolver = Resolver(ENSRegistry.resolver(_relayers[i]));

            for (uint256 j = 0; j < _subdomains.length; j++) {
                bytes32 subdomainHash = keccak256(abi.encodePacked(_relayers[i], keccak256(abi.encodePacked(_subdomains[j]))));
                relayers[i].records[j] = resolver.text(subdomainHash, "url");
            }

            relayers[i].isRegistered = RelayerRegistry.isRelayerRegistered(relayers[i].owner, relayers[i].owner);
            relayers[i].balance = RelayerRegistry.getRelayerBalance(relayers[i].owner);
        }
        return relayers;
    }
}