// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IGovernance } from '../interfaces/IGovernance.sol';

contract GovernanceAggregator {
    struct ProposalWithState {
        address proposer;
        address target;
        uint256 startTime;
        uint256 endTime;
        uint256 forVotes;
        uint256 againstVotes;
        bool executed;
        bool extended;
        IGovernance.ProposalState state;
    }

    IGovernance public immutable governance;

    constructor(IGovernance _governance) {
        governance = _governance;
    }

    function getAllProposals() public view returns (ProposalWithState[] memory proposals) {
        proposals = new ProposalWithState[](governance.proposalCount());

        for (uint256 i = 0; i < proposals.length; i++) {
            IGovernance.Proposal memory proposal = governance.proposals(i + 1);

            proposals[i] = ProposalWithState({
                proposer: proposal.proposer,
                target: proposal.target,
                startTime: proposal.startTime,
                endTime: proposal.endTime,
                forVotes: proposal.forVotes,
                againstVotes: proposal.againstVotes,
                executed: proposal.executed,
                extended: proposal.extended,
                state: governance.state(i + 1)
            });
        }
    }

    function getGovernanceBalances(address[] calldata accs) public view returns (uint256[] memory amounts) {
        amounts = new uint256[](accs.length);
        for (uint256 i = 0; i < accs.length; i++) {
            amounts[i] = governance.lockedBalance(accs[i]);
        }
    }

    function getUserData(
        address account
    )
        public
        view
        returns (
            uint256 balance,
            uint256 latestProposalId,
            uint256 latestProposalIdState,
            uint256 timelock,
            address delegatee
        )
    {
        balance = governance.lockedBalance(account);
        latestProposalId = governance.latestProposalIds(account);
        if (latestProposalId != 0) {
            latestProposalIdState = uint256(governance.state(latestProposalId));
        }
        timelock = governance.canWithdrawAfter(account);
        delegatee = governance.delegatedTo(account);
    }
}
