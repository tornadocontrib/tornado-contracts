// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import { RelayerRegistry } from '../Governance/RelayerRegistry.sol';

contract RelayerRegistryBurnable is RelayerRegistry {
    constructor(
        address _torn,
        address _governance,
        address _ens,
        address _staking,
        address _feeManager
    ) public RelayerRegistry(_torn, _governance, _ens, _staking, _feeManager) {}

    /**
     * @dev Allows anyone (like external relayers) to contribute rewards for TORN holders
     */
    function burnAmount(uint256 toBurn) external {
        address relayer = msg.sender;
        torn.safeTransferFrom(relayer, address(staking), toBurn);
        staking.addBurnRewards(toBurn);
        emit StakeBurned(relayer, toBurn);
    }
}