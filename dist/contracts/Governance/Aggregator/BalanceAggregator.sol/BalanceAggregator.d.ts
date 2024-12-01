import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export declare namespace BalanceAggregator {
    type StakedBalanceStruct = {
        balance: BigNumberish;
        isContract: boolean;
    };
    type StakedBalanceStructOutput = [
        balance: bigint,
        isContract: boolean
    ] & {
        balance: bigint;
        isContract: boolean;
    };
}
export interface BalanceAggregatorInterface extends Interface {
    getFunction(nameOrSignature: "core" | "getStaked" | "getStakedBalances" | "isContract" | "relayerRegistry" | "torn"): FunctionFragment;
    encodeFunctionData(functionFragment: "core", values?: undefined): string;
    encodeFunctionData(functionFragment: "getStaked", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getStakedBalances", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "isContract", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "relayerRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "torn", values?: undefined): string;
    decodeFunctionResult(functionFragment: "core", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStaked", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getStakedBalances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "torn", data: BytesLike): Result;
}
export interface BalanceAggregator extends BaseContract {
    connect(runner?: ContractRunner | null): BalanceAggregator;
    waitForDeployment(): Promise<this>;
    interface: BalanceAggregatorInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    core: TypedContractMethod<[], [string], "view">;
    getStaked: TypedContractMethod<[
        _addr: AddressLike
    ], [
        BalanceAggregator.StakedBalanceStructOutput
    ], "view">;
    getStakedBalances: TypedContractMethod<[
        addresses: AddressLike[]
    ], [
        BalanceAggregator.StakedBalanceStructOutput[]
    ], "view">;
    isContract: TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
    relayerRegistry: TypedContractMethod<[], [string], "view">;
    torn: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "core"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getStaked"): TypedContractMethod<[
        _addr: AddressLike
    ], [
        BalanceAggregator.StakedBalanceStructOutput
    ], "view">;
    getFunction(nameOrSignature: "getStakedBalances"): TypedContractMethod<[
        addresses: AddressLike[]
    ], [
        BalanceAggregator.StakedBalanceStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "isContract"): TypedContractMethod<[_addr: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "relayerRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "torn"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
