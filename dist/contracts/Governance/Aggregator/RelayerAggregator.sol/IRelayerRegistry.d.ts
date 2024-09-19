import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface IRelayerRegistryInterface extends Interface {
    getFunction(nameOrSignature: "getRelayerBalance" | "isRelayerRegistered"): FunctionFragment;
    encodeFunctionData(functionFragment: "getRelayerBalance", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isRelayerRegistered", values: [AddressLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "getRelayerBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRelayerRegistered", data: BytesLike): Result;
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
    getRelayerBalance: TypedContractMethod<[
        relayer: AddressLike
    ], [
        bigint
    ], "view">;
    isRelayerRegistered: TypedContractMethod<[
        relayer: AddressLike,
        toResolve: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getRelayerBalance"): TypedContractMethod<[relayer: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "isRelayerRegistered"): TypedContractMethod<[
        relayer: AddressLike,
        toResolve: AddressLike
    ], [
        boolean
    ], "view">;
    filters: {};
}
