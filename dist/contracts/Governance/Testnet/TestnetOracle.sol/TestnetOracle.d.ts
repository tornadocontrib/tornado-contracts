import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface TestnetOracleInterface extends Interface {
    getFunction(nameOrSignature: "arbitraryPrice" | "chainlinkOracles" | "changeArbitraryPrice" | "changeOwner" | "getOracleUSD" | "getRateToEth" | "isStablecoin" | "owner" | "setOracle" | "stablecoin"): FunctionFragment;
    encodeFunctionData(functionFragment: "arbitraryPrice", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "chainlinkOracles", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeArbitraryPrice", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "changeOwner", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getOracleUSD", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRateToEth", values: [AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "isStablecoin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "setOracle", values: [AddressLike, AddressLike, boolean]): string;
    encodeFunctionData(functionFragment: "stablecoin", values?: undefined): string;
    decodeFunctionResult(functionFragment: "arbitraryPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainlinkOracles", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeArbitraryPrice", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOracleUSD", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRateToEth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isStablecoin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOracle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stablecoin", data: BytesLike): Result;
}
export interface TestnetOracle extends BaseContract {
    connect(runner?: ContractRunner | null): TestnetOracle;
    waitForDeployment(): Promise<this>;
    interface: TestnetOracleInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    arbitraryPrice: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    chainlinkOracles: TypedContractMethod<[arg0: AddressLike], [string], "view">;
    changeArbitraryPrice: TypedContractMethod<[
        token: AddressLike,
        price: BigNumberish
    ], [
        void
    ], "nonpayable">;
    changeOwner: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getOracleUSD: TypedContractMethod<[token: AddressLike], [bigint], "view">;
    getRateToEth: TypedContractMethod<[
        srcToken: AddressLike,
        useSrcWrappers: boolean
    ], [
        bigint
    ], "view">;
    isStablecoin: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    setOracle: TypedContractMethod<[
        token: AddressLike,
        oracle: AddressLike,
        _isStablecoin: boolean
    ], [
        void
    ], "nonpayable">;
    stablecoin: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "arbitraryPrice"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "chainlinkOracles"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "changeArbitraryPrice"): TypedContractMethod<[
        token: AddressLike,
        price: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "changeOwner"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "getOracleUSD"): TypedContractMethod<[token: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRateToEth"): TypedContractMethod<[
        srcToken: AddressLike,
        useSrcWrappers: boolean
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "isStablecoin"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setOracle"): TypedContractMethod<[
        token: AddressLike,
        oracle: AddressLike,
        _isStablecoin: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stablecoin"): TypedContractMethod<[], [string], "view">;
    filters: {};
}