// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import { IRelayerRegistry } from '../interfaces/IRelayerRegistry.sol';
import { IGovernance } from '../interfaces/IGovernance.sol';

/**
 * @dev Staked Balance Aggregator
 */
contract BalanceAggregator {
    struct StakedBalance {
        uint256 balance;
        bool isContract;
    }

    IERC20 public immutable torn;
    IGovernance public immutable governance;
    IRelayerRegistry public immutable relayerRegistry;

    constructor(IERC20 _torn, IGovernance _governance, IRelayerRegistry _relayerRegistry) {
        torn = _torn;
        governance = _governance;
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
        return
            StakedBalance({
                balance: torn.balanceOf(_addr) +
                    governance.lockedBalance(_addr) +
                    relayerRegistry.getRelayerBalance(_addr),
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
