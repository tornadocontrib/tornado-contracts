import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace GovernanceAggregator {
    type ProposalWithStateStruct = {
        proposer: AddressLike;
        target: AddressLike;
        startTime: BigNumberish;
        endTime: BigNumberish;
        forVotes: BigNumberish;
        againstVotes: BigNumberish;
        executed: boolean;
        extended: boolean;
        state: BigNumberish;
    };
    type ProposalWithStateStructOutput = [
        proposer: string,
        target: string,
        startTime: bigint,
        endTime: bigint,
        forVotes: bigint,
        againstVotes: bigint,
        executed: boolean,
        extended: boolean,
        state: bigint
    ] & {
        proposer: string;
        target: string;
        startTime: bigint;
        endTime: bigint;
        forVotes: bigint;
        againstVotes: bigint;
        executed: boolean;
        extended: boolean;
        state: bigint;
    };
}
export interface GovernanceAggregatorInterface extends Interface {
    getFunction(nameOrSignature: "getAllProposals" | "getGovernanceBalances" | "getUserData" | "governance"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllProposals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGovernanceBalances", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "getUserData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getAllProposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovernanceBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
}
export interface GovernanceAggregator extends BaseContract {
    connect(runner?: ContractRunner | null): GovernanceAggregator;
    waitForDeployment(): Promise<this>;
    interface: GovernanceAggregatorInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getAllProposals: TypedContractMethod<[
    ], [
        GovernanceAggregator.ProposalWithStateStructOutput[]
    ], "view">;
    getGovernanceBalances: TypedContractMethod<[
        accs: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getUserData: TypedContractMethod<[
        account: AddressLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            string
        ] & {
            balance: bigint;
            latestProposalId: bigint;
            latestProposalIdState: bigint;
            timelock: bigint;
            delegatee: string;
        }
    ], "view">;
    governance: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getAllProposals"): TypedContractMethod<[
    ], [
        GovernanceAggregator.ProposalWithStateStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getGovernanceBalances"): TypedContractMethod<[accs: AddressLike[]], [bigint[]], "view">;
    getFunction(nameOrSignature: "getUserData"): TypedContractMethod<[
        account: AddressLike
    ], [
        [
            bigint,
            bigint,
            bigint,
            bigint,
            string
        ] & {
            balance: bigint;
            latestProposalId: bigint;
            latestProposalIdState: bigint;
            timelock: bigint;
            delegatee: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "governance"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
