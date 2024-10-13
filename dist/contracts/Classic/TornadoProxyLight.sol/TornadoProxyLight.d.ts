import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface TornadoProxyLightInterface extends Interface {
    getFunction(nameOrSignature: "backupNotes" | "deposit" | "withdraw"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "EncryptedNote"): EventFragment;
    encodeFunctionData(functionFragment: "backupNotes", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "deposit", values: [AddressLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        AddressLike,
        BytesLike,
        BytesLike,
        BytesLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "backupNotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export declare namespace EncryptedNoteEvent {
    type InputTuple = [sender: AddressLike, encryptedNote: BytesLike];
    type OutputTuple = [sender: string, encryptedNote: string];
    interface OutputObject {
        sender: string;
        encryptedNote: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface TornadoProxyLight extends BaseContract {
    connect(runner?: ContractRunner | null): TornadoProxyLight;
    waitForDeployment(): Promise<this>;
    interface: TornadoProxyLightInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    backupNotes: TypedContractMethod<[
        _encryptedNotes: BytesLike[]
    ], [
        void
    ], "nonpayable">;
    deposit: TypedContractMethod<[
        _tornado: AddressLike,
        _commitment: BytesLike,
        _encryptedNote: BytesLike
    ], [
        void
    ], "payable">;
    withdraw: TypedContractMethod<[
        _tornado: AddressLike,
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
    getFunction(nameOrSignature: "backupNotes"): TypedContractMethod<[_encryptedNotes: BytesLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
        _tornado: AddressLike,
        _commitment: BytesLike,
        _encryptedNote: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        _tornado: AddressLike,
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
    getEvent(key: "EncryptedNote"): TypedContractEvent<EncryptedNoteEvent.InputTuple, EncryptedNoteEvent.OutputTuple, EncryptedNoteEvent.OutputObject>;
    filters: {
        "EncryptedNote(address,bytes)": TypedContractEvent<EncryptedNoteEvent.InputTuple, EncryptedNoteEvent.OutputTuple, EncryptedNoteEvent.OutputObject>;
        EncryptedNote: TypedContractEvent<EncryptedNoteEvent.InputTuple, EncryptedNoteEvent.OutputTuple, EncryptedNoteEvent.OutputObject>;
    };
}