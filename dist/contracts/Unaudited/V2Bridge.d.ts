import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface V2BridgeInterface extends Interface {
    getFunction(nameOrSignature: "TornadoV2" | "denomination" | "deposit" | "getLastRoot" | "id" | "isSpent" | "nextIndex" | "roots" | "token" | "tornadoProxyLight" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "TornadoV2", values?: undefined): string;
    encodeFunctionData(functionFragment: "denomination", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getLastRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "id", values?: undefined): string;
    encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "tornadoProxyLight", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        BytesLike,
        BytesLike,
        BytesLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "TornadoV2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "denomination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "id", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tornadoProxyLight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export interface V2Bridge extends BaseContract {
    connect(runner?: ContractRunner | null): V2Bridge;
    waitForDeployment(): Promise<this>;
    interface: V2BridgeInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    TornadoV2: TypedContractMethod<[], [string], "view">;
    denomination: TypedContractMethod<[], [bigint], "view">;
    deposit: TypedContractMethod<[_commitment: BytesLike], [void], "payable">;
    getLastRoot: TypedContractMethod<[], [string], "view">;
    id: TypedContractMethod<[], [bigint], "view">;
    isSpent: TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;
    nextIndex: TypedContractMethod<[], [bigint], "view">;
    roots: TypedContractMethod<[index: BigNumberish], [string], "view">;
    token: TypedContractMethod<[], [string], "view">;
    tornadoProxyLight: TypedContractMethod<[], [string], "view">;
    withdraw: TypedContractMethod<[
        _proof: BytesLike,
        _root: BytesLike,
        _nullifierHash: BytesLike,
        _recipient: AddressLike,
        _relayer: AddressLike,
        _fee: BigNumberish,
        _refund: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "TornadoV2"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "denomination"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[_commitment: BytesLike], [void], "payable">;
    getFunction(nameOrSignature: "getLastRoot"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "id"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "isSpent"): TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "nextIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "roots"): TypedContractMethod<[index: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tornadoProxyLight"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        _proof: BytesLike,
        _root: BytesLike,
        _nullifierHash: BytesLike,
        _recipient: AddressLike,
        _relayer: AddressLike,
        _fee: BigNumberish,
        _refund: BigNumberish
    ], [
        void
    ], "payable">;
    filters: {};
}
