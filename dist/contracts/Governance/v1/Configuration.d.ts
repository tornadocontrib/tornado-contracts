import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface ConfigurationInterface extends Interface {
    getFunction(nameOrSignature: "CLOSING_PERIOD" | "EXECUTION_DELAY" | "EXECUTION_EXPIRATION" | "PROPOSAL_THRESHOLD" | "QUORUM_VOTES" | "VOTE_EXTEND_TIME" | "VOTING_DELAY" | "VOTING_PERIOD" | "setClosingPeriod" | "setExecutionDelay" | "setExecutionExpiration" | "setProposalThreshold" | "setQuorumVotes" | "setVoteExtendTime" | "setVotingDelay" | "setVotingPeriod"): FunctionFragment;
    encodeFunctionData(functionFragment: "CLOSING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXECUTION_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXECUTION_EXPIRATION", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROPOSAL_THRESHOLD", values?: undefined): string;
    encodeFunctionData(functionFragment: "QUORUM_VOTES", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTE_EXTEND_TIME", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTING_DELAY", values?: undefined): string;
    encodeFunctionData(functionFragment: "VOTING_PERIOD", values?: undefined): string;
    encodeFunctionData(functionFragment: "setClosingPeriod", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setExecutionDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setExecutionExpiration", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setProposalThreshold", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setQuorumVotes", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setVoteExtendTime", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setVotingDelay", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setVotingPeriod", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "CLOSING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXECUTION_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXECUTION_EXPIRATION", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROPOSAL_THRESHOLD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "QUORUM_VOTES", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTE_EXTEND_TIME", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTING_DELAY", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "VOTING_PERIOD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClosingPeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecutionDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setExecutionExpiration", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setProposalThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setQuorumVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVoteExtendTime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVotingDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setVotingPeriod", data: BytesLike): Result;
}
export interface Configuration extends BaseContract {
    connect(runner?: ContractRunner | null): Configuration;
    waitForDeployment(): Promise<this>;
    interface: ConfigurationInterface;
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
    VOTE_EXTEND_TIME: TypedContractMethod<[], [bigint], "view">;
    VOTING_DELAY: TypedContractMethod<[], [bigint], "view">;
    VOTING_PERIOD: TypedContractMethod<[], [bigint], "view">;
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
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "CLOSING_PERIOD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "EXECUTION_DELAY"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "EXECUTION_EXPIRATION"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "PROPOSAL_THRESHOLD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "QUORUM_VOTES"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "VOTE_EXTEND_TIME"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "VOTING_DELAY"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "VOTING_PERIOD"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "setClosingPeriod"): TypedContractMethod<[closingPeriod: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setExecutionDelay"): TypedContractMethod<[executionDelay: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setExecutionExpiration"): TypedContractMethod<[
        executionExpiration: BigNumberish
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
    filters: {};
}
