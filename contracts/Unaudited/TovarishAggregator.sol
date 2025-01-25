// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20 } from '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import { IRelayerRegistry } from '../Governance/interfaces/IRelayerRegistry.sol';
import { IGovernance, GovernanceAggregator } from '../Governance/Aggregator/GovernanceAggregator.sol';
import { ITovarishRegistry } from './interfaces/ITovarishRegistry.sol';

contract TovarishAggregator is GovernanceAggregator {
    struct StakedBalance {
        uint256 tornBalance;
        uint256 lockedBalance;
        uint256 relayerBalance;
        uint256 balance;
        bool isContract;
    }

    IERC20 public immutable torn;
    IRelayerRegistry public immutable relayerRegistry;
    ITovarishRegistry public immutable tovarishRegistry;

    constructor(ITovarishRegistry _tovarishRegistry) GovernanceAggregator(IGovernance(address(0))) {
        tovarishRegistry = _tovarishRegistry;
        relayerRegistry = IRelayerRegistry(tovarishRegistry.relayerRegistry());
        torn = IERC20(relayerRegistry.torn());
        governance = IGovernance(relayerRegistry.governance());
    }

    function lastUpdate() external view returns (uint256) {
        return tovarishRegistry.lastUpdate();
    }

    function relayersData(
        string[] memory additionalRelayers
    ) external view returns (ITovarishRegistry.Relayer[] memory) {
        return tovarishRegistry.relayersData(additionalRelayers);
    }

    function getStakedBalances(address[] memory addresses) external view returns (StakedBalance[] memory) {
        StakedBalance[] memory stakedBalances = new StakedBalance[](addresses.length);

        for (uint i; i < addresses.length; ++i) {
            stakedBalances[i] = getStaked(addresses[i]);
        }

        return stakedBalances;
    }

    function getStaked(address _addr) public view returns (StakedBalance memory) {
        uint256 tornBalance = torn.balanceOf(_addr);
        uint256 lockedBalance = governance.lockedBalance(_addr);
        uint256 relayerBalance = relayerRegistry.getRelayerBalance(_addr);
        uint256 balance = tornBalance + lockedBalance + relayerBalance;

        return
            StakedBalance({
                tornBalance: tornBalance,
                lockedBalance: lockedBalance,
                relayerBalance: relayerBalance,
                balance: balance,
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
