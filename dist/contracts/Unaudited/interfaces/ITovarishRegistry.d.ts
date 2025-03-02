import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
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
export interface ITovarishRegistryInterface extends Interface {
    getFunction(nameOrSignature: "getChainIds" | "lastUpdate" | "relayerRegistry" | "relayersData"): FunctionFragment;
    encodeFunctionData(functionFragment: "getChainIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastUpdate", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayerRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayersData", values: [string[]]): string;
    decodeFunctionResult(functionFragment: "getChainIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayersData", data: BytesLike): Result;
}
export interface ITovarishRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): ITovarishRegistry;
    waitForDeployment(): Promise<this>;
    interface: ITovarishRegistryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getChainIds: TypedContractMethod<[], [bigint[]], "view">;
    lastUpdate: TypedContractMethod<[], [bigint], "view">;
    relayerRegistry: TypedContractMethod<[], [string], "view">;
    relayersData: TypedContractMethod<[
        additionalRelayers: string[]
    ], [
        ITovarishRegistry.RelayerStructOutput[]
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getChainIds"): TypedContractMethod<[], [bigint[]], "view">;
    getFunction(nameOrSignature: "lastUpdate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "relayerRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "relayersData"): TypedContractMethod<[
        additionalRelayers: string[]
    ], [
        ITovarishRegistry.RelayerStructOutput[]
    ], "view">;
    filters: {};
}
