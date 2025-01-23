import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IRelayerRegistryInterface extends Interface {
    getFunction(nameOrSignature: "ens" | "getRelayerBalance" | "getRelayerEnsHash" | "governance" | "isRelayerRegistered" | "torn"): FunctionFragment;
    encodeFunctionData(functionFragment: "ens", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRelayerBalance", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRelayerEnsHash", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "isRelayerRegistered", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "torn", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRelayerBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRelayerEnsHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRelayerRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "torn", data: BytesLike): Result;
}
export interface IRelayerRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): IRelayerRegistry;
    waitForDeployment(): Promise<this>;
    interface: IRelayerRegistryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ens: TypedContractMethod<[], [string], "view">;
    getRelayerBalance: TypedContractMethod<[
        relayer: AddressLike
    ], [
        bigint
    ], "view">;
    getRelayerEnsHash: TypedContractMethod<[
        relayer: AddressLike
    ], [
        string
    ], "view">;
    governance: TypedContractMethod<[], [string], "view">;
    isRelayerRegistered: TypedContractMethod<[
        relayer: AddressLike,
        toResolve: AddressLike
    ], [
        boolean
    ], "view">;
    torn: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ens"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getRelayerBalance"): TypedContractMethod<[relayer: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRelayerEnsHash"): TypedContractMethod<[relayer: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "governance"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "isRelayerRegistered"): TypedContractMethod<[
        relayer: AddressLike,
        toResolve: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "torn"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
