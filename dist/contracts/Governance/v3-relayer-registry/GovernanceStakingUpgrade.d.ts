import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace Governance {
    type ReceiptStruct = {
        hasVoted: boolean;
        support: boolean;
        votes: BigNumberish;
    };
    type ReceiptStructOutput = [
        hasVoted: boolean,
        support: boolean,
        votes: bigint
    ] & {
        hasVoted: boolean;
        support: boolean;
        votes: bigint;
    };
}
export interface GovernanceStakingUpgradeInterface extends Interface {
    getFunction(nameOrSignature: "CLOSING_PERIOD" | "EXECUTION_DELAY" | "EXECUTION_EXPIRATION" | "PROPOSAL_THRESHOLD" | "QUORUM_VOTES" | "Staking" | "VOTE_EXTEND_TIME" | "VOTING_DELAY" | "VOTING_PERIOD" | "canWithdrawAfter" | "castDelegatedVote" | "castVote" | "checkIfQuorumReached" | "delegate" | "delegatedTo" | "execute" | "gasCompensationVault" | "getReceipt" | "hasAccountVoted" | "initialize" | "latestProposalIds" | "lock" | "lockWithApproval" | "lockedBalance" | "proposalCount" | "proposals" | "propose" | "proposeByDelegate" | "returnMultisigAddress" | "setClosingPeriod" | "setExecutionDelay" | "setExecutionExpiration" | "setGasCompensations" | "setProposalThreshold" | "setQuorumVotes" | "setVoteExtendTime" | "setVotingDelay" | "setVotingPeriod" | "state" | "torn" | "undelegate" | "unlock" | "userVault" | "version" | "withdrawFromHelper"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Delegated" | "ProposalCreated" | "ProposalExecuted" | "RewardUpdateFailed" | "RewardUpdateSuccessful" | "Undelegated" | "Voted"): EventFragment;
    encodeFunctionData(functionFragment: "CLOSING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXECUTION_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXECUTION_EXPIRATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROPOSAL_THRESHOLD", values?: undefined): string;
    encodeFunctionData(functionFragment: "QUORUM_VOTES", values?: undefined): string;
    encodeFunctionData(functionFragment: "Staking", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTE_EXTEND_TIME", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "canWithdrawAfter", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "castDelegatedVote", values: [AddressLike[], BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "castVote", values: [BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "checkIfQuorumReached", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "delegatedTo", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "execute", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "gasCompensationVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "getReceipt", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasAccountVoted", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "latestProposalIds", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lock", values: [
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "lockWithApproval", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "lockedBalance", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "propose", values: [AddressLike, string]): string;
    encodeFunctionData(functionFragment: "proposeByDelegate", values: [AddressLike, AddressLike, string]): string;
    encodeFunctionData(functionFragment: "returnMultisigAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "setClosingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setExecutionDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setExecutionExpiration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setGasCompensations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setProposalThreshold", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setQuorumVotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setVoteExtendTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setVotingDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setVotingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "torn", values?: undefined): string;
    encodeFunctionData(functionFragment: "undelegate", values?: undefined): string;
    encodeFunctionData(functionFragment: "unlock", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "userVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "version", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawFromHelper", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "CLOSING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXECUTION_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXECUTION_EXPIRATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROPOSAL_THRESHOLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "QUORUM_VOTES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "Staking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTE_EXTEND_TIME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canWithdrawAfter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castDelegatedVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "castVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkIfQuorumReached", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "gasCompensationVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getReceipt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasAccountVoted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestProposalIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockWithApproval", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "propose", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeByDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "returnMultisigAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClosingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecutionDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecutionExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasCompensations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setQuorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoteExtendTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVotingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "torn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "undelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "userVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromHelper", data: BytesLike): Result;
}
export declare namespace DelegatedEvent {
    type InputTuple = [account: AddressLike, to: AddressLike];
    type OutputTuple = [account: string, to: string];
    interface OutputObject {
        account: string;
        to: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProposalCreatedEvent {
    type InputTuple = [
        id: BigNumberish,
        proposer: AddressLike,
        target: AddressLike,
        startTime: BigNumberish,
        endTime: BigNumberish,
        description: string
    ];
    type OutputTuple = [
        id: bigint,
        proposer: string,
        target: string,
        startTime: bigint,
        endTime: bigint,
        description: string
    ];
    interface OutputObject {
        id: bigint;
        proposer: string;
        target: string;
        startTime: bigint;
        endTime: bigint;
        description: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ProposalExecutedEvent {
    type InputTuple = [proposalId: BigNumberish];
    type OutputTuple = [proposalId: bigint];
    interface OutputObject {
        proposalId: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RewardUpdateFailedEvent {
    type InputTuple = [account: AddressLike, errorData: BytesLike];
    type OutputTuple = [account: string, errorData: string];
    interface OutputObject {
        account: string;
        errorData: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RewardUpdateSuccessfulEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UndelegatedEvent {
    type InputTuple = [account: AddressLike, from: AddressLike];
    type OutputTuple = [account: string, from: string];
    interface OutputObject {
        account: string;
        from: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace VotedEvent {
    type InputTuple = [
        proposalId: BigNumberish,
        voter: AddressLike,
        support: boolean,
        votes: BigNumberish
    ];
    type OutputTuple = [
        proposalId: bigint,
        voter: string,
        support: boolean,
        votes: bigint
    ];
    interface OutputObject {
        proposalId: bigint;
        voter: string;
        support: boolean;
        votes: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface GovernanceStakingUpgrade extends BaseContract {
    connect(runner?: ContractRunner | null): GovernanceStakingUpgrade;
    waitForDeployment(): Promise<this>;
    interface: GovernanceStakingUpgradeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    CLOSING_PERIOD: TypedContractMethod<[], [bigint], "view">;
    EXECUTION_DELAY: TypedContractMethod<[], [bigint], "view">;
    EXECUTION_EXPIRATION: TypedContractMethod<[], [bigint], "view">;
    PROPOSAL_THRESHOLD: TypedContractMethod<[], [bigint], "view">;
    QUORUM_VOTES: TypedContractMethod<[], [bigint], "view">;
    Staking: TypedContractMethod<[], [string], "view">;
    VOTE_EXTEND_TIME: TypedContractMethod<[], [bigint], "view">;
    VOTING_DELAY: TypedContractMethod<[], [bigint], "view">;
    VOTING_PERIOD: TypedContractMethod<[], [bigint], "view">;
    canWithdrawAfter: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    castDelegatedVote: TypedContractMethod<[
        from: AddressLike[],
        proposalId: BigNumberish,
        support: boolean
    ], [
        void
    ], "nonpayable">;
    castVote: TypedContractMethod<[
        proposalId: BigNumberish,
        support: boolean
    ], [
        void
    ], "nonpayable">;
    checkIfQuorumReached: TypedContractMethod<[
        proposalId: BigNumberish
    ], [
        boolean
    ], "view">;
    delegate: TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
    delegatedTo: TypedContractMethod<[arg0: AddressLike], [string], "view">;
    execute: TypedContractMethod<[proposalId: BigNumberish], [void], "payable">;
    gasCompensationVault: TypedContractMethod<[], [string], "view">;
    getReceipt: TypedContractMethod<[
        proposalId: BigNumberish,
        voter: AddressLike
    ], [
        Governance.ReceiptStructOutput
    ], "view">;
    hasAccountVoted: TypedContractMethod<[
        proposalId: BigNumberish,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    initialize: TypedContractMethod<[_torn: AddressLike], [void], "nonpayable">;
    latestProposalIds: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    lock: TypedContractMethod<[
        owner: AddressLike,
        amount: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    lockWithApproval: TypedContractMethod<[
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    lockedBalance: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    proposalCount: TypedContractMethod<[], [bigint], "view">;
    proposals: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            string,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean,
            boolean
        ] & {
            proposer: string;
            target: string;
            startTime: bigint;
            endTime: bigint;
            forVotes: bigint;
            againstVotes: bigint;
            executed: boolean;
            extended: boolean;
        }
    ], "view">;
    propose: TypedContractMethod<[
        target: AddressLike,
        description: string
    ], [
        bigint
    ], "nonpayable">;
    proposeByDelegate: TypedContractMethod<[
        from: AddressLike,
        target: AddressLike,
        description: string
    ], [
        bigint
    ], "nonpayable">;
    returnMultisigAddress: TypedContractMethod<[], [string], "view">;
    setClosingPeriod: TypedContractMethod<[
        closingPeriod: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setExecutionDelay: TypedContractMethod<[
        executionDelay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setExecutionExpiration: TypedContractMethod<[
        executionExpiration: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setGasCompensations: TypedContractMethod<[
        gasCompensationsLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setProposalThreshold: TypedContractMethod<[
        proposalThreshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setQuorumVotes: TypedContractMethod<[
        quorumVotes: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setVoteExtendTime: TypedContractMethod<[
        voteExtendTime: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setVotingDelay: TypedContractMethod<[
        votingDelay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setVotingPeriod: TypedContractMethod<[
        votingPeriod: BigNumberish
    ], [
        void
    ], "nonpayable">;
    state: TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
    torn: TypedContractMethod<[], [string], "view">;
    undelegate: TypedContractMethod<[], [void], "nonpayable">;
    unlock: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    userVault: TypedContractMethod<[], [string], "view">;
    version: TypedContractMethod<[], [string], "view">;
    withdrawFromHelper: TypedContractMethod<[
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "CLOSING_PERIOD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "EXECUTION_DELAY"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "EXECUTION_EXPIRATION"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "PROPOSAL_THRESHOLD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "QUORUM_VOTES"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "Staking"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "VOTE_EXTEND_TIME"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "VOTING_DELAY"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "VOTING_PERIOD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "canWithdrawAfter"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "castDelegatedVote"): TypedContractMethod<[
        from: AddressLike[],
        proposalId: BigNumberish,
        support: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "castVote"): TypedContractMethod<[
        proposalId: BigNumberish,
        support: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "checkIfQuorumReached"): TypedContractMethod<[proposalId: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "delegate"): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "delegatedTo"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "execute"): TypedContractMethod<[proposalId: BigNumberish], [void], "payable">;
    getFunction(nameOrSignature: "gasCompensationVault"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getReceipt"): TypedContractMethod<[
        proposalId: BigNumberish,
        voter: AddressLike
    ], [
        Governance.ReceiptStructOutput
    ], "view">;
    getFunction(nameOrSignature: "hasAccountVoted"): TypedContractMethod<[
        proposalId: BigNumberish,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[_torn: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "latestProposalIds"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "lock"): TypedContractMethod<[
        owner: AddressLike,
        amount: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "lockWithApproval"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "lockedBalance"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "proposalCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "proposals"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            string,
            string,
            bigint,
            bigint,
            bigint,
            bigint,
            boolean,
            boolean
        ] & {
            proposer: string;
            target: string;
            startTime: bigint;
            endTime: bigint;
            forVotes: bigint;
            againstVotes: bigint;
            executed: boolean;
            extended: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "propose"): TypedContractMethod<[
        target: AddressLike,
        description: string
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "proposeByDelegate"): TypedContractMethod<[
        from: AddressLike,
        target: AddressLike,
        description: string
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "returnMultisigAddress"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setClosingPeriod"): TypedContractMethod<[closingPeriod: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setExecutionDelay"): TypedContractMethod<[executionDelay: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setExecutionExpiration"): TypedContractMethod<[
        executionExpiration: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setGasCompensations"): TypedContractMethod<[
        gasCompensationsLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setProposalThreshold"): TypedContractMethod<[
        proposalThreshold: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setQuorumVotes"): TypedContractMethod<[quorumVotes: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setVoteExtendTime"): TypedContractMethod<[voteExtendTime: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setVotingDelay"): TypedContractMethod<[votingDelay: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setVotingPeriod"): TypedContractMethod<[votingPeriod: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "state"): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "torn"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "undelegate"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "unlock"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "userVault"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "version"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdrawFromHelper"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getEvent(key: "Delegated"): TypedContractEvent<DelegatedEvent.InputTuple, DelegatedEvent.OutputTuple, DelegatedEvent.OutputObject>;
    getEvent(key: "ProposalCreated"): TypedContractEvent<ProposalCreatedEvent.InputTuple, ProposalCreatedEvent.OutputTuple, ProposalCreatedEvent.OutputObject>;
    getEvent(key: "ProposalExecuted"): TypedContractEvent<ProposalExecutedEvent.InputTuple, ProposalExecutedEvent.OutputTuple, ProposalExecutedEvent.OutputObject>;
    getEvent(key: "RewardUpdateFailed"): TypedContractEvent<RewardUpdateFailedEvent.InputTuple, RewardUpdateFailedEvent.OutputTuple, RewardUpdateFailedEvent.OutputObject>;
    getEvent(key: "RewardUpdateSuccessful"): TypedContractEvent<RewardUpdateSuccessfulEvent.InputTuple, RewardUpdateSuccessfulEvent.OutputTuple, RewardUpdateSuccessfulEvent.OutputObject>;
    getEvent(key: "Undelegated"): TypedContractEvent<UndelegatedEvent.InputTuple, UndelegatedEvent.OutputTuple, UndelegatedEvent.OutputObject>;
    getEvent(key: "Voted"): TypedContractEvent<VotedEvent.InputTuple, VotedEvent.OutputTuple, VotedEvent.OutputObject>;
    filters: {
        "Delegated(address,address)": TypedContractEvent<DelegatedEvent.InputTuple, DelegatedEvent.OutputTuple, DelegatedEvent.OutputObject>;
        Delegated: TypedContractEvent<DelegatedEvent.InputTuple, DelegatedEvent.OutputTuple, DelegatedEvent.OutputObject>;
        "ProposalCreated(uint256,address,address,uint256,uint256,string)": TypedContractEvent<ProposalCreatedEvent.InputTuple, ProposalCreatedEvent.OutputTuple, ProposalCreatedEvent.OutputObject>;
        ProposalCreated: TypedContractEvent<ProposalCreatedEvent.InputTuple, ProposalCreatedEvent.OutputTuple, ProposalCreatedEvent.OutputObject>;
        "ProposalExecuted(uint256)": TypedContractEvent<ProposalExecutedEvent.InputTuple, ProposalExecutedEvent.OutputTuple, ProposalExecutedEvent.OutputObject>;
        ProposalExecuted: TypedContractEvent<ProposalExecutedEvent.InputTuple, ProposalExecutedEvent.OutputTuple, ProposalExecutedEvent.OutputObject>;
        "RewardUpdateFailed(address,bytes)": TypedContractEvent<RewardUpdateFailedEvent.InputTuple, RewardUpdateFailedEvent.OutputTuple, RewardUpdateFailedEvent.OutputObject>;
        RewardUpdateFailed: TypedContractEvent<RewardUpdateFailedEvent.InputTuple, RewardUpdateFailedEvent.OutputTuple, RewardUpdateFailedEvent.OutputObject>;
        "RewardUpdateSuccessful(address)": TypedContractEvent<RewardUpdateSuccessfulEvent.InputTuple, RewardUpdateSuccessfulEvent.OutputTuple, RewardUpdateSuccessfulEvent.OutputObject>;
        RewardUpdateSuccessful: TypedContractEvent<RewardUpdateSuccessfulEvent.InputTuple, RewardUpdateSuccessfulEvent.OutputTuple, RewardUpdateSuccessfulEvent.OutputObject>;
        "Undelegated(address,address)": TypedContractEvent<UndelegatedEvent.InputTuple, UndelegatedEvent.OutputTuple, UndelegatedEvent.OutputObject>;
        Undelegated: TypedContractEvent<UndelegatedEvent.InputTuple, UndelegatedEvent.OutputTuple, UndelegatedEvent.OutputObject>;
        "Voted(uint256,address,bool,uint256)": TypedContractEvent<VotedEvent.InputTuple, VotedEvent.OutputTuple, VotedEvent.OutputObject>;
        Voted: TypedContractEvent<VotedEvent.InputTuple, VotedEvent.OutputTuple, VotedEvent.OutputObject>;
    };
}
