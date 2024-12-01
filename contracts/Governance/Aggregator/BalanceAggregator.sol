// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import { IERC20 } from "@openzeppelin/contracts-v3/token/ERC20/IERC20.sol";
import { IRelayerRegistry } from './RelayerAggregator.sol';

interface ICore {
    function lockedBalance(address _addr) external view returns (uint256);
}

/**
 * @dev Staked Balance Aggregator
 */
contract BalanceAggregator {
    struct StakedBalance {
        uint256 balance;
        bool isContract;
    }

    IERC20 public immutable torn;
    ICore public immutable core;
    IRelayerRegistry public immutable relayerRegistry;

    constructor(IERC20 _torn, ICore _core, IRelayerRegistry _relayerRegistry) public {
        torn = _torn;
        core = _core;
        relayerRegistry = _relayerRegistry;
    }

    function getStakedBalances(address[] memory addresses) external view returns (StakedBalance[] memory) {
        StakedBalance[] memory stakedBalances = new StakedBalance[](addresses.length);

        for (uint i; i < addresses.length; ++i) {
            stakedBalances[i] = getStaked(addresses[i]);
        }

        return stakedBalances;
    }

    function getStaked(address _addr) public view returns (StakedBalance memory) {
        return StakedBalance({
            balance: torn.balanceOf(_addr) + core.lockedBalance(_addr) + relayerRegistry.getRelayerBalance(_addr),
            isContract: isContract(_addr)
        });
    }

    function isContract(address _addr) public view returns (bool) {
        uint32 size;
        assembly {
            size := extcodesize(_addr)
        }
        return (size > 0);
    }
}