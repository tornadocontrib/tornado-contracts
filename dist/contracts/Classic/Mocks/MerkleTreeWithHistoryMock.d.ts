import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface MerkleTreeWithHistoryMockInterface extends Interface {
    getFunction(nameOrSignature: "FIELD_SIZE" | "ROOT_HISTORY_SIZE" | "ZERO_VALUE" | "currentRootIndex" | "filledSubtrees" | "getLastRoot" | "hashLeftRight" | "hasher" | "insert" | "isKnownRoot" | "levels" | "nextIndex" | "roots" | "zeros"): FunctionFragment;
    encodeFunctionData(functionFragment: "FIELD_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROOT_HISTORY_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ZERO_VALUE", values?: undefined): string;
    encodeFunctionData(functionFragment: "currentRootIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "filledSubtrees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLastRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "hashLeftRight", values: [AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
    encodeFunctionData(functionFragment: "insert", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isKnownRoot", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "levels", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROOT_HISTORY_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRootIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filledSubtrees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashLeftRight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "insert", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isKnownRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
}
export interface MerkleTreeWithHistoryMock extends BaseContract {
    connect(runner?: ContractRunner | null): MerkleTreeWithHistoryMock;
    waitForDeployment(): Promise<this>;
    interface: MerkleTreeWithHistoryMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    FIELD_SIZE: TypedContractMethod<[], [bigint], "view">;
    ROOT_HISTORY_SIZE: TypedContractMethod<[], [bigint], "view">;
    ZERO_VALUE: TypedContractMethod<[], [bigint], "view">;
    currentRootIndex: TypedContractMethod<[], [bigint], "view">;
    filledSubtrees: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getLastRoot: TypedContractMethod<[], [string], "view">;
    hashLeftRight: TypedContractMethod<[
        _hasher: AddressLike,
        _left: BytesLike,
        _right: BytesLike
    ], [
        string
    ], "view">;
    hasher: TypedContractMethod<[], [string], "view">;
    insert: TypedContractMethod<[_leaf: BytesLike], [void], "nonpayable">;
    isKnownRoot: TypedContractMethod<[_root: BytesLike], [boolean], "view">;
    levels: TypedContractMethod<[], [bigint], "view">;
    nextIndex: TypedContractMethod<[], [bigint], "view">;
    roots: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    zeros: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "FIELD_SIZE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "ROOT_HISTORY_SIZE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "ZERO_VALUE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "currentRootIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "filledSubtrees"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "getLastRoot"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "hashLeftRight"): TypedContractMethod<[
        _hasher: AddressLike,
        _left: BytesLike,
        _right: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "hasher"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "insert"): TypedContractMethod<[_leaf: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "isKnownRoot"): TypedContractMethod<[_root: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "levels"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nextIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "roots"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "zeros"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    filters: {};
}
