import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
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
    getFunction(nameOrSignature: "COMMITMENT_TYPE" | "COMMITMENT_TYPEHASH" | "WITNESS_TYPE_STRING" | "commitments" | "denomination" | "depositPermit" | "getSignatureType" | "permit2" | "token" | "witness"): FunctionFragment;
    encodeFunctionData(functionFragment: "COMMITMENT_TYPE", values?: undefined): string;
    encodeFunctionData(functionFragment: "COMMITMENT_TYPEHASH", values?: undefined): string;
    encodeFunctionData(functionFragment: "WITNESS_TYPE_STRING", values?: undefined): string;
    encodeFunctionData(functionFragment: "commitments", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "denomination", values?: undefined): string;
    encodeFunctionData(functionFragment: "depositPermit", values: [BytesLike[], BytesLike]): string;
    encodeFunctionData(functionFragment: "getSignatureType", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "permit2", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "witness", values: [Permit2Mock.PermitCommitmentsStruct]): string;
    decodeFunctionResult(functionFragment: "COMMITMENT_TYPE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "COMMITMENT_TYPEHASH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "WITNESS_TYPE_STRING", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "commitments", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "denomination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSignatureType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit2", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "witness", data: BytesLike): Result;
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
    commitments: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    denomination: TypedContractMethod<[], [bigint], "view">;
    depositPermit: TypedContractMethod<[
        _commitments: BytesLike[],
        permitData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getSignatureType: TypedContractMethod<[
        permitData: BytesLike
    ], [
        bigint
    ], "view">;
    permit2: TypedContractMethod<[], [string], "view">;
    token: TypedContractMethod<[], [string], "view">;
    witness: TypedContractMethod<[
        permitData: Permit2Mock.PermitCommitmentsStruct
    ], [
        string
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "COMMITMENT_TYPE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "COMMITMENT_TYPEHASH"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "WITNESS_TYPE_STRING"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "commitments"): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "denomination"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "depositPermit"): TypedContractMethod<[
        _commitments: BytesLike[],
        permitData: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "getSignatureType"): TypedContractMethod<[permitData: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "permit2"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "witness"): TypedContractMethod<[
        permitData: Permit2Mock.PermitCommitmentsStruct
    ], [
        string
    ], "view">;
    filters: {};
}
