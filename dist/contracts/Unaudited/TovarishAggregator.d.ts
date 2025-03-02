import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
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
export declare namespace TovarishAggregator {
    type StakedBalanceStruct = {
        tornBalance: BigNumberish;
        lockedBalance: BigNumberish;
        relayerBalance: BigNumberish;
        balance: BigNumberish;
        isContract: boolean;
    };
    type StakedBalanceStructOutput = [
        tornBalance: bigint,
        lockedBalance: bigint,
        relayerBalance: bigint,
        balance: bigint,
        isContract: boolean
    ] & {
        tornBalance: bigint;
        lockedBalance: bigint;
        relayerBalance: bigint;
        balance: bigint;
        isContract: boolean;
    };
}
export declare namespace ITovarishRegistry {
    type RelayerStruct = {
        ensName: string;
        owner: AddressLike;
        balance: BigNumberish;
        isRegistered: boolean;
        isPrior: boolean;
        tovarishHost: string;
        tovarishChains: string;
        records: string[];
    };
    type RelayerStructOutput = [
        ensName: string,
        owner: string,
        balance: bigint,
        isRegistered: boolean,
        isPrior: boolean,
        tovarishHost: string,
        tovarishChains: string,
        records: string[]
    ] & {
        ensName: string;
        owner: string;
        balance: bigint;
        isRegistered: boolean;
        isPrior: boolean;
        tovarishHost: string;
        tovarishChains: string;
        records: string[];
    };
}
export interface TovarishAggregatorInterface extends Interface {
    getFunction(nameOrSignature: "getAllProposals" | "getChainIds" | "getGovernanceBalances" | "getStaked" | "getStakedBalances" | "getUserData" | "governance" | "isContract" | "lastUpdate" | "relayerRegistry" | "relayersData" | "torn" | "tovarishRegistry"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllProposals", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChainIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "getGovernanceBalances", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "getStaked", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getStakedBalances", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "getUserData", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "isContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lastUpdate", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayerRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayersData", values: [string[]]): string;
    encodeFunctionData(functionFragment: "torn", values?: undefined): string;
    encodeFunctionData(functionFragment: "tovarishRegistry", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getAllProposals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getGovernanceBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakedBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUserData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayersData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "torn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tovarishRegistry", data: BytesLike): Result;
}
export interface TovarishAggregator extends BaseContract {
    connect(runner?: ContractRunner | null): TovarishAggregator;
    waitForDeployment(): Promise<this>;
    interface: TovarishAggregatorInterface;
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
    getChainIds: TypedContractMethod<[], [bigint[]], "view">;
    getGovernanceBalances: TypedContractMethod<[
        accs: AddressLike[]
    ], [
        bigint[]
    ], "view">;
    getStaked: TypedContractMethod<[
        _addr: AddressLike
    ], [
        TovarishAggregator.StakedBalanceStructOutput
    ], "view">;
    getStakedBalances: TypedContractMethod<[
        addresses: AddressLike[]
    ], [
        TovarishAggregator.StakedBalanceStructOutput[]
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
    isContract: TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
    lastUpdate: TypedContractMethod<[], [bigint], "view">;
    relayerRegistry: TypedContractMethod<[], [string], "view">;
    relayersData: TypedContractMethod<[
        additionalRelayers: string[]
    ], [
        ITovarishRegistry.RelayerStructOutput[]
    ], "view">;
    torn: TypedContractMethod<[], [string], "view">;
    tovarishRegistry: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getAllProposals"): TypedContractMethod<[
    ], [
        GovernanceAggregator.ProposalWithStateStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "getChainIds"): TypedContractMethod<[], [bigint[]], "view">;
    getFunction(nameOrSignature: "getGovernanceBalances"): TypedContractMethod<[accs: AddressLike[]], [bigint[]], "view">;
    getFunction(nameOrSignature: "getStaked"): TypedContractMethod<[
        _addr: AddressLike
    ], [
        TovarishAggregator.StakedBalanceStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getStakedBalances"): TypedContractMethod<[
        addresses: AddressLike[]
    ], [
        TovarishAggregator.StakedBalanceStructOutput[]
    ], "view">;
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
    getFunction(nameOrSignature: "isContract"): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "lastUpdate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "relayerRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "relayersData"): TypedContractMethod<[
        additionalRelayers: string[]
    ], [
        ITovarishRegistry.RelayerStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "torn"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tovarishRegistry"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
