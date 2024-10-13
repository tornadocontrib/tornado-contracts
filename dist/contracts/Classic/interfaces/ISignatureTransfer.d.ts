import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace ISignatureTransfer {
    type TokenPermissionsStruct = {
        token: AddressLike;
        amount: BigNumberish;
    };
    type TokenPermissionsStructOutput = [token: string, amount: bigint] & {
        token: string;
        amount: bigint;
    };
    type PermitTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct;
        nonce: BigNumberish;
        deadline: BigNumberish;
    };
    type PermitTransferFromStructOutput = [
        permitted: ISignatureTransfer.TokenPermissionsStructOutput,
        nonce: bigint,
        deadline: bigint
    ] & {
        permitted: ISignatureTransfer.TokenPermissionsStructOutput;
        nonce: bigint;
        deadline: bigint;
    };
    type SignatureTransferDetailsStruct = {
        to: AddressLike;
        requestedAmount: BigNumberish;
    };
    type SignatureTransferDetailsStructOutput = [
        to: string,
        requestedAmount: bigint
    ] & {
        to: string;
        requestedAmount: bigint;
    };
    type PermitBatchTransferFromStruct = {
        permitted: ISignatureTransfer.TokenPermissionsStruct[];
        nonce: BigNumberish;
        deadline: BigNumberish;
    };
    type PermitBatchTransferFromStructOutput = [
        permitted: ISignatureTransfer.TokenPermissionsStructOutput[],
        nonce: bigint,
        deadline: bigint
    ] & {
        permitted: ISignatureTransfer.TokenPermissionsStructOutput[];
        nonce: bigint;
        deadline: bigint;
    };
}
export interface ISignatureTransferInterface extends Interface {
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR" | "invalidateUnorderedNonces" | "nonceBitmap" | "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)" | "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)" | "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)" | "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "UnorderedNonceInvalidation"): EventFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "invalidateUnorderedNonces", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "nonceBitmap", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)", values: [
        ISignatureTransfer.PermitTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct,
        AddressLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)", values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        AddressLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)", values: [
        ISignatureTransfer.PermitTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct,
        AddressLike,
        BytesLike,
        string,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)", values: [
        ISignatureTransfer.PermitBatchTransferFromStruct,
        ISignatureTransfer.SignatureTransferDetailsStruct[],
        AddressLike,
        BytesLike,
        string,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "invalidateUnorderedNonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonceBitmap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)", data: BytesLike): Result;
}
export declare namespace UnorderedNonceInvalidationEvent {
    type InputTuple = [
        owner: AddressLike,
        word: BigNumberish,
        mask: BigNumberish
    ];
    type OutputTuple = [owner: string, word: bigint, mask: bigint];
    interface OutputObject {
        owner: string;
        word: bigint;
        mask: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface ISignatureTransfer extends BaseContract {
    connect(runner?: ContractRunner | null): ISignatureTransfer;
    waitForDeployment(): Promise<this>;
    interface: ISignatureTransferInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;
    invalidateUnorderedNonces: TypedContractMethod<[
        wordPos: BigNumberish,
        mask: BigNumberish
    ], [
        void
    ], "nonpayable">;
    nonceBitmap: TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)": TypedContractMethod<[
        permit: ISignatureTransfer.PermitTransferFromStruct,
        transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct,
        owner: AddressLike,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)": TypedContractMethod<[
        permit: ISignatureTransfer.PermitBatchTransferFromStruct,
        transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[],
        owner: AddressLike,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)": TypedContractMethod<[
        permit: ISignatureTransfer.PermitTransferFromStruct,
        transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct,
        owner: AddressLike,
        witness: BytesLike,
        witnessTypeString: string,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)": TypedContractMethod<[
        permit: ISignatureTransfer.PermitBatchTransferFromStruct,
        transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[],
        owner: AddressLike,
        witness: BytesLike,
        witnessTypeString: string,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "DOMAIN_SEPARATOR"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "invalidateUnorderedNonces"): TypedContractMethod<[
        wordPos: BigNumberish,
        mask: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "nonceBitmap"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: BigNumberish
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "permitTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes)"): TypedContractMethod<[
        permit: ISignatureTransfer.PermitTransferFromStruct,
        transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct,
        owner: AddressLike,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "permitTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes)"): TypedContractMethod<[
        permit: ISignatureTransfer.PermitBatchTransferFromStruct,
        transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[],
        owner: AddressLike,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "permitWitnessTransferFrom(((address,uint256),uint256,uint256),(address,uint256),address,bytes32,string,bytes)"): TypedContractMethod<[
        permit: ISignatureTransfer.PermitTransferFromStruct,
        transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct,
        owner: AddressLike,
        witness: BytesLike,
        witnessTypeString: string,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "permitWitnessTransferFrom(((address,uint256)[],uint256,uint256),(address,uint256)[],address,bytes32,string,bytes)"): TypedContractMethod<[
        permit: ISignatureTransfer.PermitBatchTransferFromStruct,
        transferDetails: ISignatureTransfer.SignatureTransferDetailsStruct[],
        owner: AddressLike,
        witness: BytesLike,
        witnessTypeString: string,
        signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "UnorderedNonceInvalidation"): TypedContractEvent<UnorderedNonceInvalidationEvent.InputTuple, UnorderedNonceInvalidationEvent.OutputTuple, UnorderedNonceInvalidationEvent.OutputObject>;
    filters: {
        "UnorderedNonceInvalidation(address,uint256,uint256)": TypedContractEvent<UnorderedNonceInvalidationEvent.InputTuple, UnorderedNonceInvalidationEvent.OutputTuple, UnorderedNonceInvalidationEvent.OutputObject>;
        UnorderedNonceInvalidation: TypedContractEvent<UnorderedNonceInvalidationEvent.InputTuple, UnorderedNonceInvalidationEvent.OutputTuple, UnorderedNonceInvalidationEvent.OutputObject>;
    };
}
