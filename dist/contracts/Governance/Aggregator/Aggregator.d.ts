import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export type RelayerStruct = {
    owner: AddressLike;
    balance: BigNumberish;
    isRegistered: boolean;
    records: string[];
};
export type RelayerStructOutput = [
    owner: string,
    balance: bigint,
    isRegistered: boolean,
    records: string[]
] & {
    owner: string;
    balance: bigint;
    isRegistered: boolean;
    records: string[];
};
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
export interface AggregatorInterface extends Interface {
    getFunction(nameOrSignature: "ENSRegistry" | "RelayerRegistry" | "getAllProposals" | "getGovernanceBalances" | "getUserData" | "relayersData"): FunctionFragment;
    encodeFunctionData(functionFragment: "ENSRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "RelayerRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllProposals", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getGovernanceBalances", values: [AddressLike, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "getUserData", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "relayersData", values: [BytesLike[], string[]]): string;
    decodeFunctionResult(functionFragment: "ENSRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "RelayerRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllProposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovernanceBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayersData", data: BytesLike): Result;
}
export interface Aggregator extends BaseContract {
    connect(runner?: ContractRunner | null): Aggregator;
    waitForDeployment(): Promise<this>;
    interface: AggregatorInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ENSRegistry: TypedContractMethod<[], [string], "view">;
    RelayerRegistry: TypedContractMethod<[], [string], "view">;
    getAllProposals: TypedContractMethod<[
        governance: AddressLike
    ], [
        GovernanceAggregator.ProposalWithStateStructOutput[]
    ], "view">;
    getGovernanceBalances: TypedContractMethod<[
        governance: AddressLike,
        accs: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getUserData: TypedContractMethod<[
        governance: AddressLike,
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
    relayersData: TypedContractMethod<[
        _relayers: BytesLike[],
        _subdomains: string[]
    ], [
        RelayerStructOutput[]
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ENSRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "RelayerRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAllProposals"): TypedContractMethod<[
        governance: AddressLike
    ], [
        GovernanceAggregator.ProposalWithStateStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getGovernanceBalances"): TypedContractMethod<[
        governance: AddressLike,
        accs: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getFunction(nameOrSignature: "getUserData"): TypedContractMethod<[
        governance: AddressLike,
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
    getFunction(nameOrSignature: "relayersData"): TypedContractMethod<[
        _relayers: BytesLike[],
        _subdomains: string[]
    ], [
        RelayerStructOutput[]
    ], "view">;
    filters: {};
}
