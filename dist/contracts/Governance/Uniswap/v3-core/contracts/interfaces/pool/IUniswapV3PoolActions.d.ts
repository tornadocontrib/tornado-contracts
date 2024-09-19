import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../../../../common";
export interface IUniswapV3PoolActionsInterface extends Interface {
    getFunction(nameOrSignature: "burn" | "collect" | "flash" | "increaseObservationCardinalityNext" | "initialize" | "mint" | "swap"): FunctionFragment;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "collect", values: [
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "flash", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "increaseObservationCardinalityNext", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mint", values: [AddressLike, BigNumberish, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "swap", values: [AddressLike, boolean, BigNumberish, BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "collect", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "flash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseObservationCardinalityNext", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
}
export interface IUniswapV3PoolActions extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV3PoolActions;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV3PoolActionsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    burn: TypedContractMethod<[
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount: BigNumberish
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    collect: TypedContractMethod<[
        recipient: AddressLike,
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount0Requested: BigNumberish,
        amount1Requested: BigNumberish
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    flash: TypedContractMethod<[
        recipient: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    increaseObservationCardinalityNext: TypedContractMethod<[
        observationCardinalityNext: BigNumberish
    ], [
        void
    ], "nonpayable">;
    initialize: TypedContractMethod<[
        sqrtPriceX96: BigNumberish
    ], [
        void
    ], "nonpayable">;
    mint: TypedContractMethod<[
        recipient: AddressLike,
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount: BigNumberish,
        data: BytesLike
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    swap: TypedContractMethod<[
        recipient: AddressLike,
        zeroForOne: boolean,
        amountSpecified: BigNumberish,
        sqrtPriceLimitX96: BigNumberish,
        data: BytesLike
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount: BigNumberish
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "collect"): TypedContractMethod<[
        recipient: AddressLike,
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount0Requested: BigNumberish,
        amount1Requested: BigNumberish
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "flash"): TypedContractMethod<[
        recipient: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "increaseObservationCardinalityNext"): TypedContractMethod<[
        observationCardinalityNext: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[sqrtPriceX96: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "mint"): TypedContractMethod<[
        recipient: AddressLike,
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount: BigNumberish,
        data: BytesLike
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "swap"): TypedContractMethod<[
        recipient: AddressLike,
        zeroForOne: boolean,
        amountSpecified: BigNumberish,
        sqrtPriceLimitX96: BigNumberish,
        data: BytesLike
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    filters: {};
}
