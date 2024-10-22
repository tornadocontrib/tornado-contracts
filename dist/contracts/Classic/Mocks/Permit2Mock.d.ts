import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace Permit2Mock {
    type PermitCommitmentsStruct = {
        instance: AddressLike;
        commitmentsHash: BytesLike;
    };
    type PermitCommitmentsStructOutput = [
        instance: string,
        commitmentsHash: string
    ] & {
        instance: string;
        commitmentsHash: string;
    };
}
export interface Permit2MockInterface extends Interface {
    getFunction(nameOrSignature: "COMMITMENT_TYPE" | "COMMITMENT_TYPEHASH" | "WITNESS_TYPE_STRING" | "denomination" | "permit2" | "permit2Commitments" | "permit2Test" | "token" | "verifiedCommitments" | "witness"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "VerifiedCommitment"): EventFragment;
    encodeFunctionData(functionFragment: "COMMITMENT_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "COMMITMENT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITNESS_TYPE_STRING", values?: undefined): string;
    encodeFunctionData(functionFragment: "denomination", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit2", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit2Commitments", values: [AddressLike, BytesLike[], BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "permit2Test", values: [AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "verifiedCommitments", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "witness", values: [Permit2Mock.PermitCommitmentsStruct]): string;
    decodeFunctionResult(functionFragment: "COMMITMENT_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COMMITMENT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPE_STRING", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "denomination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit2Commitments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit2Test", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifiedCommitments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witness", data: BytesLike): Result;
}
export declare namespace VerifiedCommitmentEvent {
    type InputTuple = [commitment: BytesLike, owner: AddressLike];
    type OutputTuple = [commitment: string, owner: string];
    interface OutputObject {
        commitment: string;
        owner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Permit2Mock extends BaseContract {
    connect(runner?: ContractRunner | null): Permit2Mock;
    waitForDeployment(): Promise<this>;
    interface: Permit2MockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    COMMITMENT_TYPE: TypedContractMethod<[], [string], "view">;
    COMMITMENT_TYPEHASH: TypedContractMethod<[], [string], "view">;
    WITNESS_TYPE_STRING: TypedContractMethod<[], [string], "view">;
    denomination: TypedContractMethod<[], [bigint], "view">;
    permit2: TypedContractMethod<[], [string], "view">;
    permit2Commitments: TypedContractMethod<[
        owner: AddressLike,
        _commitments: BytesLike[],
        nonce: BigNumberish,
        deadline: BigNumberish,
        _signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    permit2Test: TypedContractMethod<[
        owner: AddressLike,
        nonce: BigNumberish,
        deadline: BigNumberish,
        _signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    token: TypedContractMethod<[], [string], "view">;
    verifiedCommitments: TypedContractMethod<[arg0: BytesLike], [string], "view">;
    witness: TypedContractMethod<[
        permitData: Permit2Mock.PermitCommitmentsStruct
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "COMMITMENT_TYPE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "COMMITMENT_TYPEHASH"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "WITNESS_TYPE_STRING"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "denomination"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "permit2"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "permit2Commitments"): TypedContractMethod<[
        owner: AddressLike,
        _commitments: BytesLike[],
        nonce: BigNumberish,
        deadline: BigNumberish,
        _signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "permit2Test"): TypedContractMethod<[
        owner: AddressLike,
        nonce: BigNumberish,
        deadline: BigNumberish,
        _signature: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "verifiedCommitments"): TypedContractMethod<[arg0: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "witness"): TypedContractMethod<[
        permitData: Permit2Mock.PermitCommitmentsStruct
    ], [
        string
    ], "view">;
    getEvent(key: "VerifiedCommitment"): TypedContractEvent<VerifiedCommitmentEvent.InputTuple, VerifiedCommitmentEvent.OutputTuple, VerifiedCommitmentEvent.OutputObject>;
    filters: {
        "VerifiedCommitment(bytes32,address)": TypedContractEvent<VerifiedCommitmentEvent.InputTuple, VerifiedCommitmentEvent.OutputTuple, VerifiedCommitmentEvent.OutputObject>;
        VerifiedCommitment: TypedContractEvent<VerifiedCommitmentEvent.InputTuple, VerifiedCommitmentEvent.OutputTuple, VerifiedCommitmentEvent.OutputObject>;
    };
}
