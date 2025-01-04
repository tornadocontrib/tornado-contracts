// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

interface IGovernance2 {
    function setExecutionDelay(uint256 delay) external;
}

contract ProposalStateChangeGovernance {
    function executeProposal() public {
        IGovernance2(address(this)).setExecutionDelay(3 days);
    }
}
