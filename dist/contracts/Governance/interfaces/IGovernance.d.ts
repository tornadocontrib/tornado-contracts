import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace IGovernance {
    type ProposalStruct = {
        proposer: AddressLike;
        target: AddressLike;
        startTime: BigNumberish;
        endTime: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        executed: boolean;
        extended: boolean;
    };
    type ProposalStructOutput = [
        proposer: string,
        target: string,
        startTime: bigint,
        endTime: bigint,
        forVotes: bigint,
        againstVotes: bigint,
        executed: boolean,
        extended: boolean
    ] & {
        proposer: string;
        target: string;
        startTime: bigint;
        endTime: bigint;
        forVotes: bigint;
        againstVotes: bigint;
        executed: boolean;
        extended: boolean;
    };
}
export interface IGovernanceInterface extends Interface {
    getFunction(nameOrSignature: "canWithdrawAfter" | "delegatedTo" | "latestProposalIds" | "lockedBalance" | "proposalCount" | "proposals" | "state" | "torn"): FunctionFragment;
    encodeFunctionData(functionFragment: "canWithdrawAfter", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "delegatedTo", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "latestProposalIds", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lockedBalance", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "proposalCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "proposals", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "state", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "torn", values?: undefined): string;
    decodeFunctionResult(functionFragment: "canWithdrawAfter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "latestProposalIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposalCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "state", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "torn", data: BytesLike): Result;
}
export interface IGovernance extends BaseContract {
    connect(runner?: ContractRunner | null): IGovernance;
    waitForDeployment(): Promise<this>;
    interface: IGovernanceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    canWithdrawAfter: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    delegatedTo: TypedContractMethod<[arg0: AddressLike], [string], "view">;
    latestProposalIds: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    lockedBalance: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    proposalCount: TypedContractMethod<[], [bigint], "view">;
    proposals: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        IGovernance.ProposalStructOutput
    ], "view">;
    state: TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
    torn: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "canWithdrawAfter"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "delegatedTo"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "latestProposalIds"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "lockedBalance"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "proposalCount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "proposals"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        IGovernance.ProposalStructOutput
    ], "view">;
    getFunction(nameOrSignature: "state"): TypedContractMethod<[proposalId: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "torn"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
