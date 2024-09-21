import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../../../../common";
export interface IUniswapV3PoolOwnerActionsInterface extends Interface {
    getFunction(nameOrSignature: "collectProtocol" | "setFeeProtocol"): FunctionFragment;
    encodeFunctionData(functionFragment: "collectProtocol", values: [AddressLike, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFeeProtocol", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "collectProtocol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFeeProtocol", data: BytesLike): Result;
}
export interface IUniswapV3PoolOwnerActions extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV3PoolOwnerActions;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV3PoolOwnerActionsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    collectProtocol: TypedContractMethod<[
        recipient: AddressLike,
        amount0Requested: BigNumberish,
        amount1Requested: BigNumberish
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    setFeeProtocol: TypedContractMethod<[
        feeProtocol0: BigNumberish,
        feeProtocol1: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "collectProtocol"): TypedContractMethod<[
        recipient: AddressLike,
        amount0Requested: BigNumberish,
        amount1Requested: BigNumberish
    ], [
        [bigint, bigint] & {
            amount0: bigint;
            amount1: bigint;
        }
    ], "nonpayable">;
    getFunction(nameOrSignature: "setFeeProtocol"): TypedContractMethod<[
        feeProtocol0: BigNumberish,
        feeProtocol1: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
