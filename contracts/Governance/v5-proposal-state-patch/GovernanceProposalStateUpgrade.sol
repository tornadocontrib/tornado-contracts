// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import { Governance } from "../v1/Governance.sol";
import { GovernanceExploitPatchUpgrade } from "../v4-exploit-patch/GovernanceExploitPatchUpgrade.sol";

contract GovernanceProposalStateUpgrade is GovernanceExploitPatchUpgrade {
    constructor(
        address stakingRewardsAddress,
        address gasCompLogic,
        address userVaultAddress
    ) public GovernanceExploitPatchUpgrade(stakingRewardsAddress, gasCompLogic, userVaultAddress) {}

    /// @notice Return the version of the contract
    function version() external pure virtual override returns (string memory) {
        return "5.proposal-state-patch";
    }

    function state(uint256 proposalId) public view virtual override returns (ProposalState) {
        require(proposalId <= proposalCount() && proposalId > 0, "Governance::state: invalid proposal id");
        Proposal storage proposal = proposals[proposalId];
        if (getBlockTimestamp() <= proposal.startTime) {
            return ProposalState.Pending;
        } else if (getBlockTimestamp() <= proposal.endTime) {
            return ProposalState.Active;
        } else if (proposal.executed) {
            return ProposalState.Executed;
        } else if (
            proposal.forVotes <= proposal.againstVotes || proposal.forVotes + proposal.againstVotes < QUORUM_VOTES
        ) {
            return ProposalState.Defeated;
        } else if (getBlockTimestamp() >= proposal.endTime.add(EXECUTION_DELAY).add(EXECUTION_EXPIRATION)) {
            return ProposalState.Expired;
        } else if (getBlockTimestamp() >= proposal.endTime.add(EXECUTION_DELAY)) {
            return ProposalState.AwaitingExecution;
        } else {
            return ProposalState.Timelocked;
        }
    }
}