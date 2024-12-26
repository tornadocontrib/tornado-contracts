import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace TovarishRegistry {
    type RelayerStruct = {
        ensName: string;
        owner: AddressLike;
        balance: BigNumberish;
        isRegistered: boolean;
        tovarishHost: string;
        tovarishChains: string;
        records: string[];
    };
    type RelayerStructOutput = [
        ensName: string,
        owner: string,
        balance: bigint,
        isRegistered: boolean,
        tovarishHost: string,
        tovarishChains: string,
        records: string[]
    ] & {
        ensName: string;
        owner: string;
        balance: bigint;
        isRegistered: boolean;
        tovarishHost: string;
        tovarishChains: string;
        records: string[];
    };
}
export interface TovarishRegistryInterface extends Interface {
    getFunction(nameOrSignature: "ensRegistry" | "getDigests" | "getNameOwner" | "getNamehashes" | "getNames" | "hashToName" | "lastUpdate" | "migrate" | "nameWrapper" | "owner" | "pushRelayer" | "pushRelayers" | "registerFee" | "registerRelayer" | "relayerRegistry" | "relayersData" | "removeRelayer" | "tovarishSubname" | "updateDigest" | "updateFee" | "updateOwner"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Migrated" | "PushedDigest" | "PushedRelayer" | "RemovedDigest" | "RemovedRelayer" | "UpdatedFee" | "UpdatedOwner"): EventFragment;
    encodeFunctionData(functionFragment: "ensRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDigests", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNameOwner", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getNamehashes", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNames", values?: undefined): string;
    encodeFunctionData(functionFragment: "hashToName", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "lastUpdate", values?: undefined): string;
    encodeFunctionData(functionFragment: "migrate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "nameWrapper", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "pushRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "pushRelayers", values: [string[]]): string;
    encodeFunctionData(functionFragment: "registerFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "relayerRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayersData", values: [string[]]): string;
    encodeFunctionData(functionFragment: "removeRelayer", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tovarishSubname", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateDigest", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateOwner", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "ensRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDigests", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNameOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNamehashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNames", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashToName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nameWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pushRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pushRelayers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayersData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tovarishSubname", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDigest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOwner", data: BytesLike): Result;
}
export declare namespace MigratedEvent {
    type InputTuple = [oldRegistry: AddressLike];
    type OutputTuple = [oldRegistry: string];
    interface OutputObject {
        oldRegistry: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PushedDigestEvent {
    type InputTuple = [digest: BytesLike];
    type OutputTuple = [digest: string];
    interface OutputObject {
        digest: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PushedRelayerEvent {
    type InputTuple = [
        ensName: string,
        ensHash: BytesLike,
        domainOwner: AddressLike,
        alreadRegistered: boolean
    ];
    type OutputTuple = [
        ensName: string,
        ensHash: string,
        domainOwner: string,
        alreadRegistered: boolean
    ];
    interface OutputObject {
        ensName: string;
        ensHash: string;
        domainOwner: string;
        alreadRegistered: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RemovedDigestEvent {
    type InputTuple = [digest: BytesLike];
    type OutputTuple = [digest: string];
    interface OutputObject {
        digest: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RemovedRelayerEvent {
    type InputTuple = [
        ensName: string,
        ensHash: BytesLike,
        domainOwner: AddressLike
    ];
    type OutputTuple = [
        ensName: string,
        ensHash: string,
        domainOwner: string
    ];
    interface OutputObject {
        ensName: string;
        ensHash: string;
        domainOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedFeeEvent {
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
export declare namespace UpdatedOwnerEvent {
    type InputTuple = [newOwner: AddressLike];
    type OutputTuple = [newOwner: string];
    interface OutputObject {
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface TovarishRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): TovarishRegistry;
    waitForDeployment(): Promise<this>;
    interface: TovarishRegistryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    ensRegistry: TypedContractMethod<[], [string], "view">;
    getDigests: TypedContractMethod<[], [string[]], "view">;
    getNameOwner: TypedContractMethod<[node: BytesLike], [string], "view">;
    getNamehashes: TypedContractMethod<[], [string[]], "view">;
    getNames: TypedContractMethod<[], [string[]], "view">;
    hashToName: TypedContractMethod<[arg0: BytesLike], [string], "view">;
    lastUpdate: TypedContractMethod<[], [bigint], "view">;
    migrate: TypedContractMethod<[
        oldRegistry: AddressLike
    ], [
        void
    ], "nonpayable">;
    nameWrapper: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    pushRelayer: TypedContractMethod<[ensName: string], [void], "nonpayable">;
    pushRelayers: TypedContractMethod<[names: string[]], [void], "nonpayable">;
    registerFee: TypedContractMethod<[], [bigint], "view">;
    registerRelayer: TypedContractMethod<[ensName: string], [void], "payable">;
    relayerRegistry: TypedContractMethod<[], [string], "view">;
    relayersData: TypedContractMethod<[
        _subdomains: string[]
    ], [
        TovarishRegistry.RelayerStructOutput[]
    ], "view">;
    removeRelayer: TypedContractMethod<[
        ensHash: BytesLike
    ], [
        void
    ], "nonpayable">;
    tovarishSubname: TypedContractMethod<[], [string], "view">;
    updateDigest: TypedContractMethod<[digest: BytesLike], [void], "nonpayable">;
    updateFee: TypedContractMethod<[fee: BigNumberish], [void], "nonpayable">;
    updateOwner: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "ensRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getDigests"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getNameOwner"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getNamehashes"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getNames"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "hashToName"): TypedContractMethod<[arg0: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "lastUpdate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "migrate"): TypedContractMethod<[oldRegistry: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "nameWrapper"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "pushRelayer"): TypedContractMethod<[ensName: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "pushRelayers"): TypedContractMethod<[names: string[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "registerFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "registerRelayer"): TypedContractMethod<[ensName: string], [void], "payable">;
    getFunction(nameOrSignature: "relayerRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "relayersData"): TypedContractMethod<[
        _subdomains: string[]
    ], [
        TovarishRegistry.RelayerStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "removeRelayer"): TypedContractMethod<[ensHash: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "tovarishSubname"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "updateDigest"): TypedContractMethod<[digest: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateFee"): TypedContractMethod<[fee: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateOwner"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getEvent(key: "Migrated"): TypedContractEvent<MigratedEvent.InputTuple, MigratedEvent.OutputTuple, MigratedEvent.OutputObject>;
    getEvent(key: "PushedDigest"): TypedContractEvent<PushedDigestEvent.InputTuple, PushedDigestEvent.OutputTuple, PushedDigestEvent.OutputObject>;
    getEvent(key: "PushedRelayer"): TypedContractEvent<PushedRelayerEvent.InputTuple, PushedRelayerEvent.OutputTuple, PushedRelayerEvent.OutputObject>;
    getEvent(key: "RemovedDigest"): TypedContractEvent<RemovedDigestEvent.InputTuple, RemovedDigestEvent.OutputTuple, RemovedDigestEvent.OutputObject>;
    getEvent(key: "RemovedRelayer"): TypedContractEvent<RemovedRelayerEvent.InputTuple, RemovedRelayerEvent.OutputTuple, RemovedRelayerEvent.OutputObject>;
    getEvent(key: "UpdatedFee"): TypedContractEvent<UpdatedFeeEvent.InputTuple, UpdatedFeeEvent.OutputTuple, UpdatedFeeEvent.OutputObject>;
    getEvent(key: "UpdatedOwner"): TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
    filters: {
        "Migrated(address)": TypedContractEvent<MigratedEvent.InputTuple, MigratedEvent.OutputTuple, MigratedEvent.OutputObject>;
        Migrated: TypedContractEvent<MigratedEvent.InputTuple, MigratedEvent.OutputTuple, MigratedEvent.OutputObject>;
        "PushedDigest(bytes32)": TypedContractEvent<PushedDigestEvent.InputTuple, PushedDigestEvent.OutputTuple, PushedDigestEvent.OutputObject>;
        PushedDigest: TypedContractEvent<PushedDigestEvent.InputTuple, PushedDigestEvent.OutputTuple, PushedDigestEvent.OutputObject>;
        "PushedRelayer(string,bytes32,address,bool)": TypedContractEvent<PushedRelayerEvent.InputTuple, PushedRelayerEvent.OutputTuple, PushedRelayerEvent.OutputObject>;
        PushedRelayer: TypedContractEvent<PushedRelayerEvent.InputTuple, PushedRelayerEvent.OutputTuple, PushedRelayerEvent.OutputObject>;
        "RemovedDigest(bytes32)": TypedContractEvent<RemovedDigestEvent.InputTuple, RemovedDigestEvent.OutputTuple, RemovedDigestEvent.OutputObject>;
        RemovedDigest: TypedContractEvent<RemovedDigestEvent.InputTuple, RemovedDigestEvent.OutputTuple, RemovedDigestEvent.OutputObject>;
        "RemovedRelayer(string,bytes32,address)": TypedContractEvent<RemovedRelayerEvent.InputTuple, RemovedRelayerEvent.OutputTuple, RemovedRelayerEvent.OutputObject>;
        RemovedRelayer: TypedContractEvent<RemovedRelayerEvent.InputTuple, RemovedRelayerEvent.OutputTuple, RemovedRelayerEvent.OutputObject>;
        "UpdatedFee(uint256)": TypedContractEvent<UpdatedFeeEvent.InputTuple, UpdatedFeeEvent.OutputTuple, UpdatedFeeEvent.OutputObject>;
        UpdatedFee: TypedContractEvent<UpdatedFeeEvent.InputTuple, UpdatedFeeEvent.OutputTuple, UpdatedFeeEvent.OutputObject>;
        "UpdatedOwner(address)": TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
        UpdatedOwner: TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
    };
}
