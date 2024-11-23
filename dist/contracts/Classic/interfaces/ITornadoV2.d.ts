import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface ITornadoV2Interface extends Interface {
    getFunction(nameOrSignature: "denomination" | "deposit" | "filledSubtrees" | "getLastRoot" | "isSpent" | "nextIndex" | "roots" | "token" | "weth" | "withdraw" | "zeros"): FunctionFragment;
    encodeFunctionData(functionFragment: "denomination", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish[], BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "filledSubtrees", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLastRoot", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "nextIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "roots", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "token", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "weth", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        BigNumberish,
        BytesLike,
        BytesLike,
        BytesLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "zeros", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "denomination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filledSubtrees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
}
export interface ITornadoV2 extends BaseContract {
    connect(runner?: ContractRunner | null): ITornadoV2;
    waitForDeployment(): Promise<this>;
    interface: ITornadoV2Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    denomination: TypedContractMethod<[id: BigNumberish], [bigint], "view">;
    deposit: TypedContractMethod<[
        _ids: BigNumberish[],
        _commitments: BytesLike[],
        permitData: BytesLike
    ], [
        void
    ], "payable">;
    filledSubtrees: TypedContractMethod<[
        id: BigNumberish,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getLastRoot: TypedContractMethod<[id: BigNumberish], [string], "view">;
    isSpent: TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;
    nextIndex: TypedContractMethod<[id: BigNumberish], [bigint], "view">;
    roots: TypedContractMethod<[
        id: BigNumberish,
        index: BigNumberish
    ], [
        string
    ], "view">;
    token: TypedContractMethod<[id: BigNumberish], [string], "view">;
    weth: TypedContractMethod<[], [string], "view">;
    withdraw: TypedContractMethod<[
        id: BigNumberish,
        _proof: BytesLike,
        _root: BytesLike,
        _nullifierHash: BytesLike,
        _recipient: AddressLike,
        _relayer: AddressLike,
        _relayerFee: BigNumberish,
        _refund: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "payable">;
    zeros: TypedContractMethod<[
        id: BigNumberish,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "denomination"): TypedContractMethod<[id: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
        _ids: BigNumberish[],
        _commitments: BytesLike[],
        permitData: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "filledSubtrees"): TypedContractMethod<[
        id: BigNumberish,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "getLastRoot"): TypedContractMethod<[id: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "isSpent"): TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "nextIndex"): TypedContractMethod<[id: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "roots"): TypedContractMethod<[
        id: BigNumberish,
        index: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[id: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "weth"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        id: BigNumberish,
        _proof: BytesLike,
        _root: BytesLike,
        _nullifierHash: BytesLike,
        _recipient: AddressLike,
        _relayer: AddressLike,
        _relayerFee: BigNumberish,
        _refund: BigNumberish,
        _data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "zeros"): TypedContractMethod<[
        id: BigNumberish,
        index: BigNumberish
    ], [
        string
    ], "view">;
    filters: {};
}
