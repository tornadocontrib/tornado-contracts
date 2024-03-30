// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import { GovernanceAggregator } from "./GovernanceAggregator.sol";
import { RelayerAggregator } from "./RelayerAggregator.sol";

contract Aggregator is GovernanceAggregator, RelayerAggregator {
    constructor(
        address _ensRegistry,
        address _relayerRegistry
    ) public RelayerAggregator(_ensRegistry, _relayerRegistry) {}
}