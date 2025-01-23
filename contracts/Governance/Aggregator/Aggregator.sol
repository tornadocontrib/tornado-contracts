// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IGovernance, GovernanceAggregator } from './GovernanceAggregator.sol';
import { RelayerAggregator } from './RelayerAggregator.sol';

contract Aggregator is GovernanceAggregator, RelayerAggregator {
    constructor(
        address _ensRegistry,
        address _relayerRegistry,
        IGovernance _governance
    ) RelayerAggregator(_ensRegistry, _relayerRegistry) GovernanceAggregator(_governance) {}
}
