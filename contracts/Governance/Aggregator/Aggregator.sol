// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { GovernanceAggregator } from "./GovernanceAggregator.sol";
import { RelayerAggregator } from "./RelayerAggregator.sol";

contract Aggregator is GovernanceAggregator, RelayerAggregator {
    constructor(
        address _ensRegistry,
        address _relayerRegistry
    ) RelayerAggregator(_ensRegistry, _relayerRegistry) {}
}