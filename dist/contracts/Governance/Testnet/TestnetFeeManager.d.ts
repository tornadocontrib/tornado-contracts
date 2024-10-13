import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace FeeManager {
    type DeviationStruct = {
        instance: AddressLike;
        deviation: BigNumberish;
    };
    type DeviationStructOutput = [instance: string, deviation: bigint] & {
        instance: string;
        deviation: bigint;
    };
}
export interface TestnetFeeManagerInterface extends Interface {
    getFunction(nameOrSignature: "PROTOCOL_FEE_DIVIDER" | "calculatePoolFee" | "feeDeviations" | "getTokenPriceRatio" | "governance" | "instanceFee" | "instanceFeeUpdated" | "instanceFeeWithUpdate" | "registry" | "setPeriodForTWAPOracle" | "setTokenPrice" | "setUniswapTornPoolSwappingFee" | "setUpdateFeeTimeLimit" | "torn" | "uniswapTimePeriod" | "uniswapTornPoolSwappingFee" | "updateAllFees" | "updateFee" | "updateFeeTimeLimit" | "updateFees"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "FeeUpdated" | "UniswapTornPoolSwappingFeeChanged"): EventFragment;
    encodeFunctionData(functionFragment: "PROTOCOL_FEE_DIVIDER", values?: undefined): string;
    encodeFunctionData(functionFragment: "calculatePoolFee", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "feeDeviations", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokenPriceRatio", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "instanceFee", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "instanceFeeUpdated", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "instanceFeeWithUpdate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "registry", values?: undefined): string;
    encodeFunctionData(functionFragment: "setPeriodForTWAPOracle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTokenPrice", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setUniswapTornPoolSwappingFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setUpdateFeeTimeLimit", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "torn", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniswapTimePeriod", values?: undefined): string;
    encodeFunctionData(functionFragment: "uniswapTornPoolSwappingFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateAllFees", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFee", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "updateFeeTimeLimit", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFees", values: [AddressLike[]]): string;
    decodeFunctionResult(functionFragment: "PROTOCOL_FEE_DIVIDER", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "calculatePoolFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeDeviations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenPriceRatio", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instanceFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instanceFeeUpdated", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instanceFeeWithUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPeriodForTWAPOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTokenPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUniswapTornPoolSwappingFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setUpdateFeeTimeLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "torn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapTimePeriod", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uniswapTornPoolSwappingFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateAllFees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFeeTimeLimit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFees", data: BytesLike): Result;
}
export declare namespace FeeUpdatedEvent {
    type InputTuple = [instance: AddressLike, newFee: BigNumberish];
    type OutputTuple = [instance: string, newFee: bigint];
    interface OutputObject {
        instance: string;
        newFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UniswapTornPoolSwappingFeeChangedEvent {
    type InputTuple = [newFee: BigNumberish];
    type OutputTuple = [newFee: bigint];
    interface OutputObject {
        newFee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface TestnetFeeManager extends BaseContract {
    connect(runner?: ContractRunner | null): TestnetFeeManager;
    waitForDeployment(): Promise<this>;
    interface: TestnetFeeManagerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    PROTOCOL_FEE_DIVIDER: TypedContractMethod<[], [bigint], "view">;
    calculatePoolFee: TypedContractMethod<[
        _instance: AddressLike
    ], [
        bigint
    ], "view">;
    feeDeviations: TypedContractMethod<[
    ], [
        FeeManager.DeviationStructOutput[]
    ], "view">;
    getTokenPriceRatio: TypedContractMethod<[
        _token: AddressLike,
        _uniswapPoolSwappingFee: BigNumberish
    ], [
        bigint
    ], "view">;
    governance: TypedContractMethod<[], [string], "view">;
    instanceFee: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    instanceFeeUpdated: TypedContractMethod<[
        arg0: AddressLike
    ], [
        bigint
    ], "view">;
    instanceFeeWithUpdate: TypedContractMethod<[
        _instance: AddressLike
    ], [
        bigint
    ], "nonpayable">;
    registry: TypedContractMethod<[], [string], "view">;
    setPeriodForTWAPOracle: TypedContractMethod<[
        newPeriod: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setTokenPrice: TypedContractMethod<[
        _token: AddressLike,
        _price: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setUniswapTornPoolSwappingFee: TypedContractMethod<[
        _uniswapTornPoolSwappingFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setUpdateFeeTimeLimit: TypedContractMethod<[
        newLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    torn: TypedContractMethod<[], [string], "view">;
    uniswapTimePeriod: TypedContractMethod<[], [bigint], "view">;
    uniswapTornPoolSwappingFee: TypedContractMethod<[], [bigint], "view">;
    updateAllFees: TypedContractMethod<[], [void], "nonpayable">;
    updateFee: TypedContractMethod<[
        _instance: AddressLike
    ], [
        void
    ], "nonpayable">;
    updateFeeTimeLimit: TypedContractMethod<[], [bigint], "view">;
    updateFees: TypedContractMethod<[
        _instances: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "PROTOCOL_FEE_DIVIDER"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "calculatePoolFee"): TypedContractMethod<[_instance: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "feeDeviations"): TypedContractMethod<[], [FeeManager.DeviationStructOutput[]], "view">;
    getFunction(nameOrSignature: "getTokenPriceRatio"): TypedContractMethod<[
        _token: AddressLike,
        _uniswapPoolSwappingFee: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "governance"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "instanceFee"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "instanceFeeUpdated"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "instanceFeeWithUpdate"): TypedContractMethod<[_instance: AddressLike], [bigint], "nonpayable">;
    getFunction(nameOrSignature: "registry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setPeriodForTWAPOracle"): TypedContractMethod<[newPeriod: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setTokenPrice"): TypedContractMethod<[
        _token: AddressLike,
        _price: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setUniswapTornPoolSwappingFee"): TypedContractMethod<[
        _uniswapTornPoolSwappingFee: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setUpdateFeeTimeLimit"): TypedContractMethod<[newLimit: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "torn"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "uniswapTimePeriod"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "uniswapTornPoolSwappingFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "updateAllFees"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateFee"): TypedContractMethod<[_instance: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateFeeTimeLimit"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "updateFees"): TypedContractMethod<[_instances: AddressLike[]], [void], "nonpayable">;
    getEvent(key: "FeeUpdated"): TypedContractEvent<FeeUpdatedEvent.InputTuple, FeeUpdatedEvent.OutputTuple, FeeUpdatedEvent.OutputObject>;
    getEvent(key: "UniswapTornPoolSwappingFeeChanged"): TypedContractEvent<UniswapTornPoolSwappingFeeChangedEvent.InputTuple, UniswapTornPoolSwappingFeeChangedEvent.OutputTuple, UniswapTornPoolSwappingFeeChangedEvent.OutputObject>;
    filters: {
        "FeeUpdated(address,uint256)": TypedContractEvent<FeeUpdatedEvent.InputTuple, FeeUpdatedEvent.OutputTuple, FeeUpdatedEvent.OutputObject>;
        FeeUpdated: TypedContractEvent<FeeUpdatedEvent.InputTuple, FeeUpdatedEvent.OutputTuple, FeeUpdatedEvent.OutputObject>;
        "UniswapTornPoolSwappingFeeChanged(uint24)": TypedContractEvent<UniswapTornPoolSwappingFeeChangedEvent.InputTuple, UniswapTornPoolSwappingFeeChangedEvent.OutputTuple, UniswapTornPoolSwappingFeeChangedEvent.OutputObject>;
        UniswapTornPoolSwappingFeeChanged: TypedContractEvent<UniswapTornPoolSwappingFeeChangedEvent.InputTuple, UniswapTornPoolSwappingFeeChangedEvent.OutputTuple, UniswapTornPoolSwappingFeeChangedEvent.OutputObject>;
    };
}