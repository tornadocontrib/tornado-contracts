import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface ETHTornadoInterface extends Interface {
    getFunction(nameOrSignature: "FIELD_SIZE" | "ROOT_HISTORY_SIZE" | "ZERO_VALUE" | "commitments" | "currentRootIndex" | "denomination" | "deposit" | "filledSubtrees" | "getLastRoot" | "hashLeftRight" | "hasher" | "isKnownRoot" | "isSpent" | "isSpentArray" | "levels" | "nextIndex" | "nullifierHashes" | "roots" | "verifier" | "withdraw" | "zeros"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Deposit" | "Withdrawal"): EventFragment;
    encodeFunctionData(functionFragment: "FIELD_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ROOT_HISTORY_SIZE", values?: undefined): string;
    encodeFunctionData(functionFragment: "ZERO_VALUE", values?: undefined): string;
    encodeFunctionData(functionFragment: "commitments", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "currentRootIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "denomination", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "filledSubtrees", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getLastRoot", values?: undefined): string;
    encodeFunctionData(functionFragment: "hashLeftRight", values: [AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
    encodeFunctionData(functionFragment: "isKnownRoot", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isSpentArray", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "levels", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
    encodeFunctionData(functionFragment: "nullifierHashes", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        BytesLike,
        BytesLike,
        BytesLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ROOT_HISTORY_SIZE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "currentRootIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "denomination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filledSubtrees", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getLastRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashLeftRight", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isKnownRoot", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isSpentArray", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nullifierHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
}
export declare namespace DepositEvent {
    type InputTuple = [
        commitment: BytesLike,
        leafIndex: BigNumberish,
        timestamp: BigNumberish
    ];
    type OutputTuple = [
        commitment: string,
        leafIndex: bigint,
        timestamp: bigint
    ];
    interface OutputObject {
        commitment: string;
        leafIndex: bigint;
        timestamp: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WithdrawalEvent {
    type InputTuple = [
        to: AddressLike,
        nullifierHash: BytesLike,
        relayer: AddressLike,
        fee: BigNumberish
    ];
    type OutputTuple = [
        to: string,
        nullifierHash: string,
        relayer: string,
        fee: bigint
    ];
    interface OutputObject {
        to: string;
        nullifierHash: string;
        relayer: string;
        fee: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ETHTornado extends BaseContract {
    connect(runner?: ContractRunner | null): ETHTornado;
    waitForDeployment(): Promise<this>;
    interface: ETHTornadoInterface;
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
    commitments: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    currentRootIndex: TypedContractMethod<[], [bigint], "view">;
    denomination: TypedContractMethod<[], [bigint], "view">;
    deposit: TypedContractMethod<[_commitment: BytesLike], [void], "payable">;
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
    isKnownRoot: TypedContractMethod<[_root: BytesLike], [boolean], "view">;
    isSpent: TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;
    isSpentArray: TypedContractMethod<[
        _nullifierHashes: BytesLike[]
    ], [
        boolean[]
    ], "view">;
    levels: TypedContractMethod<[], [bigint], "view">;
    nextIndex: TypedContractMethod<[], [bigint], "view">;
    nullifierHashes: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    roots: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    verifier: TypedContractMethod<[], [string], "view">;
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
    zeros: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "FIELD_SIZE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "ROOT_HISTORY_SIZE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "ZERO_VALUE"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "commitments"): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "currentRootIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "denomination"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[_commitment: BytesLike], [void], "payable">;
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
    getFunction(nameOrSignature: "isKnownRoot"): TypedContractMethod<[_root: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "isSpent"): TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "isSpentArray"): TypedContractMethod<[_nullifierHashes: BytesLike[]], [boolean[]], "view">;
    getFunction(nameOrSignature: "levels"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nextIndex"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nullifierHashes"): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "roots"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "verifier"): TypedContractMethod<[], [string], "view">;
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
    getFunction(nameOrSignature: "zeros"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getEvent(key: "Deposit"): TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
    getEvent(key: "Withdrawal"): TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
    filters: {
        "Deposit(bytes32,uint32,uint256)": TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
        Deposit: TypedContractEvent<DepositEvent.InputTuple, DepositEvent.OutputTuple, DepositEvent.OutputObject>;
        "Withdrawal(address,bytes32,address,uint256)": TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
        Withdrawal: TypedContractEvent<WithdrawalEvent.InputTuple, WithdrawalEvent.OutputTuple, WithdrawalEvent.OutputObject>;
    };
}
