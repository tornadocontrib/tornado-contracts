// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IGovernance {
    enum ProposalState {
        Pending,
        Active,
        Defeated,
        Timelocked,
        AwaitingExecution,
        Executed,
        Expired
    }

    struct Proposal {
        // Creator of the proposal
        address proposer;
        // target addresses for the call to be made
        address target;
        // The block at which voting begins
        uint256 startTime;
        // The block at which voting ends: votes must be cast prior to this block
        uint256 endTime;
        // Current number of votes in favor of this proposal
        uint256 forVotes;
        // Current number of votes in opposition to this proposal
        uint256 againstVotes;
        // Flag marking whether the proposal has been executed
        bool executed;
        // Flag marking whether the proposal voting time has been extended
        // Voting time can be extended once, if the proposal outcome has changed during CLOSING_PERIOD
        bool extended;
        // Receipts of ballots for the entire set of voters
        // mapping(address => Receipt) receipts;
    }

    /// @notice Ballot receipt record for a voter
    struct Receipt {
        // Whether or not a vote has been cast
        bool hasVoted;
        // Whether or not the voter supports the proposal
        bool support;
        // The number of votes the voter had, which were cast
        uint256 votes;
    }

    /// @dev Locked token balance for each account
    function lockedBalance(address) external view returns (uint256);

    /// @dev Delegatee records
    function delegatedTo(address) external view returns (address);

    /// @dev The official record of all proposals ever proposed
    function proposals(uint256) external view returns (Proposal memory);
    /// @dev proposal count
    function proposalCount() external view returns (uint256);
    /// @dev The latest proposal for each proposer
    function latestProposalIds(address) external view returns (uint256);
    /// @dev Timestamp when a user can withdraw tokens
    function canWithdrawAfter(address) external view returns (uint256);
    /// @dev TORN token
    function torn() external view returns (address);

    function state(uint256 proposalId) external view returns (ProposalState);
}