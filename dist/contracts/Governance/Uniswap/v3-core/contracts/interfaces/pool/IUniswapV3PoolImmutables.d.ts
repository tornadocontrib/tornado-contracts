import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../../../../common";
export interface IUniswapV3PoolImmutablesInterface extends Interface {
    getFunction(nameOrSignature: "factory" | "fee" | "maxLiquidityPerTick" | "tickSpacing" | "token0" | "token1"): FunctionFragment;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "fee", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxLiquidityPerTick", values?: undefined): string;
    encodeFunctionData(functionFragment: "tickSpacing", values?: undefined): string;
    encodeFunctionData(functionFragment: "token0", values?: undefined): string;
    encodeFunctionData(functionFragment: "token1", values?: undefined): string;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxLiquidityPerTick", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tickSpacing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token0", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
}
export interface IUniswapV3PoolImmutables extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV3PoolImmutables;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV3PoolImmutablesInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    factory: TypedContractMethod<[], [string], "view">;
    fee: TypedContractMethod<[], [bigint], "view">;
    maxLiquidityPerTick: TypedContractMethod<[], [bigint], "view">;
    tickSpacing: TypedContractMethod<[], [bigint], "view">;
    token0: TypedContractMethod<[], [string], "view">;
    token1: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "factory"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "fee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "maxLiquidityPerTick"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "tickSpacing"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "token0"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "token1"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
