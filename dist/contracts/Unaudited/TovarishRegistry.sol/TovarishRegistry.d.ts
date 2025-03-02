import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export declare namespace TovarishRegistry {
    type ChainStruct = {
        chainId: BigNumberish;
        subdomain: string;
    };
    type ChainStructOutput = [chainId: bigint, subdomain: string] & {
        chainId: bigint;
        subdomain: string;
    };
    type RelayerStruct = {
        ensName: string;
        owner: AddressLike;
        balance: BigNumberish;
        isRegistered: boolean;
        isPrior: boolean;
        tovarishHost: string;
        tovarishChains: string;
        records: string[];
    };
    type RelayerStructOutput = [
        ensName: string,
        owner: string,
        balance: bigint,
        isRegistered: boolean,
        isPrior: boolean,
        tovarishHost: string,
        tovarishChains: string,
        records: string[]
    ] & {
        ensName: string;
        owner: string;
        balance: bigint;
        isRegistered: boolean;
        isPrior: boolean;
        tovarishHost: string;
        tovarishChains: string;
        records: string[];
    };
}
export interface TovarishRegistryInterface extends Interface {
    getFunction(nameOrSignature: "addChain" | "addChains" | "bytesStore" | "chainIds" | "dnsEncodeName" | "ensRegistry" | "getAddress" | "getChainIds" | "getChains" | "getNameOwner" | "getNamehashes" | "getNames" | "hasChainId" | "hashToName" | "isPrior" | "lastUpdate" | "migrate" | "nameWrapper" | "owner" | "prioritizeRelayer" | "pushRelayer" | "pushRelayers" | "registerFee" | "registerRelayer" | "relayerRegistry" | "relayersData" | "removeRelayer" | "storeBytes" | "subdomains" | "tovarishSubname" | "updateFee" | "updateOwner"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Migrated" | "PrioritizedRelayer" | "PushedBytes" | "PushedChain" | "PushedRelayer" | "RemovedRelayer" | "UpdatedFee" | "UpdatedOwner"): EventFragment;
    encodeFunctionData(functionFragment: "addChain", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "addChains", values: [TovarishRegistry.ChainStruct[]]): string;
    encodeFunctionData(functionFragment: "bytesStore", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "chainIds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "dnsEncodeName", values: [string]): string;
    encodeFunctionData(functionFragment: "ensRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAddress", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getChainIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "getChains", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNameOwner", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getNamehashes", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNames", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasChainId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "hashToName", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isPrior", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "lastUpdate", values?: undefined): string;
    encodeFunctionData(functionFragment: "migrate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "nameWrapper", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "prioritizeRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "pushRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "pushRelayers", values: [string[]]): string;
    encodeFunctionData(functionFragment: "registerFee", values?: undefined): string;
    encodeFunctionData(functionFragment: "registerRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "relayerRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayersData", values: [string[]]): string;
    encodeFunctionData(functionFragment: "removeRelayer", values: [string]): string;
    encodeFunctionData(functionFragment: "storeBytes", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "subdomains", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "tovarishSubname", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateFee", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateOwner", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "addChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addChains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bytesStore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "dnsEncodeName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ensRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNameOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNamehashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNames", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashToName", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isPrior", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastUpdate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "migrate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nameWrapper", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "prioritizeRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pushRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pushRelayers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerFee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayersData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "storeBytes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subdomains", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tovarishSubname", data: BytesLike): Result;
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
export declare namespace PrioritizedRelayerEvent {
    type InputTuple = [
        ensName: string,
        ensHash: BytesLike,
        isPrior: boolean
    ];
    type OutputTuple = [
        ensName: string,
        ensHash: string,
        isPrior: boolean
    ];
    interface OutputObject {
        ensName: string;
        ensHash: string;
        isPrior: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PushedBytesEvent {
    type InputTuple = [index: BytesLike, toStore: BytesLike];
    type OutputTuple = [index: string, toStore: string];
    interface OutputObject {
        index: string;
        toStore: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PushedChainEvent {
    type InputTuple = [chainId: BigNumberish, subdomain: string];
    type OutputTuple = [chainId: bigint, subdomain: string];
    interface OutputObject {
        chainId: bigint;
        subdomain: string;
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
    addChain: TypedContractMethod<[
        chainId: BigNumberish,
        subdomain: string
    ], [
        void
    ], "nonpayable">;
    addChains: TypedContractMethod<[
        chains: TovarishRegistry.ChainStruct[]
    ], [
        void
    ], "nonpayable">;
    bytesStore: TypedContractMethod<[arg0: BytesLike], [string], "view">;
    chainIds: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    dnsEncodeName: TypedContractMethod<[
        name: string
    ], [
        [string, string] & {
            dnsName: string;
            ensHash: string;
        }
    ], "view">;
    ensRegistry: TypedContractMethod<[], [string], "view">;
    getAddress: TypedContractMethod<[node: BytesLike], [string], "view">;
    getChainIds: TypedContractMethod<[], [bigint[]], "view">;
    getChains: TypedContractMethod<[
    ], [
        TovarishRegistry.ChainStructOutput[]
    ], "view">;
    getNameOwner: TypedContractMethod<[node: BytesLike], [string], "view">;
    getNamehashes: TypedContractMethod<[], [string[]], "view">;
    getNames: TypedContractMethod<[], [string[]], "view">;
    hasChainId: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
    hashToName: TypedContractMethod<[arg0: BytesLike], [string], "view">;
    isPrior: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    lastUpdate: TypedContractMethod<[], [bigint], "view">;
    migrate: TypedContractMethod<[
        oldRegistry: AddressLike
    ], [
        void
    ], "nonpayable">;
    nameWrapper: TypedContractMethod<[], [string], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    prioritizeRelayer: TypedContractMethod<[
        ensName: string
    ], [
        void
    ], "nonpayable">;
    pushRelayer: TypedContractMethod<[ensName: string], [void], "nonpayable">;
    pushRelayers: TypedContractMethod<[names: string[]], [void], "nonpayable">;
    registerFee: TypedContractMethod<[], [bigint], "view">;
    registerRelayer: TypedContractMethod<[ensName: string], [void], "payable">;
    relayerRegistry: TypedContractMethod<[], [string], "view">;
    relayersData: TypedContractMethod<[
        additionalRelayers: string[]
    ], [
        TovarishRegistry.RelayerStructOutput[]
    ], "view">;
    removeRelayer: TypedContractMethod<[ensName: string], [void], "nonpayable">;
    storeBytes: TypedContractMethod<[
        index: BytesLike,
        toStore: BytesLike
    ], [
        void
    ], "nonpayable">;
    subdomains: TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    tovarishSubname: TypedContractMethod<[], [string], "view">;
    updateFee: TypedContractMethod<[fee: BigNumberish], [void], "nonpayable">;
    updateOwner: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addChain"): TypedContractMethod<[
        chainId: BigNumberish,
        subdomain: string
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addChains"): TypedContractMethod<[
        chains: TovarishRegistry.ChainStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "bytesStore"): TypedContractMethod<[arg0: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "chainIds"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "dnsEncodeName"): TypedContractMethod<[
        name: string
    ], [
        [string, string] & {
            dnsName: string;
            ensHash: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "ensRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getAddress"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getChainIds"): TypedContractMethod<[], [bigint[]], "view">;
    getFunction(nameOrSignature: "getChains"): TypedContractMethod<[], [TovarishRegistry.ChainStructOutput[]], "view">;
    getFunction(nameOrSignature: "getNameOwner"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getNamehashes"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getNames"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "hasChainId"): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "hashToName"): TypedContractMethod<[arg0: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "isPrior"): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "lastUpdate"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "migrate"): TypedContractMethod<[oldRegistry: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "nameWrapper"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "prioritizeRelayer"): TypedContractMethod<[ensName: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "pushRelayer"): TypedContractMethod<[ensName: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "pushRelayers"): TypedContractMethod<[names: string[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "registerFee"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "registerRelayer"): TypedContractMethod<[ensName: string], [void], "payable">;
    getFunction(nameOrSignature: "relayerRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "relayersData"): TypedContractMethod<[
        additionalRelayers: string[]
    ], [
        TovarishRegistry.RelayerStructOutput[]
    ], "view">;
    getFunction(nameOrSignature: "removeRelayer"): TypedContractMethod<[ensName: string], [void], "nonpayable">;
    getFunction(nameOrSignature: "storeBytes"): TypedContractMethod<[
        index: BytesLike,
        toStore: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "subdomains"): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
    getFunction(nameOrSignature: "tovarishSubname"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "updateFee"): TypedContractMethod<[fee: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "updateOwner"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getEvent(key: "Migrated"): TypedContractEvent<MigratedEvent.InputTuple, MigratedEvent.OutputTuple, MigratedEvent.OutputObject>;
    getEvent(key: "PrioritizedRelayer"): TypedContractEvent<PrioritizedRelayerEvent.InputTuple, PrioritizedRelayerEvent.OutputTuple, PrioritizedRelayerEvent.OutputObject>;
    getEvent(key: "PushedBytes"): TypedContractEvent<PushedBytesEvent.InputTuple, PushedBytesEvent.OutputTuple, PushedBytesEvent.OutputObject>;
    getEvent(key: "PushedChain"): TypedContractEvent<PushedChainEvent.InputTuple, PushedChainEvent.OutputTuple, PushedChainEvent.OutputObject>;
    getEvent(key: "PushedRelayer"): TypedContractEvent<PushedRelayerEvent.InputTuple, PushedRelayerEvent.OutputTuple, PushedRelayerEvent.OutputObject>;
    getEvent(key: "RemovedRelayer"): TypedContractEvent<RemovedRelayerEvent.InputTuple, RemovedRelayerEvent.OutputTuple, RemovedRelayerEvent.OutputObject>;
    getEvent(key: "UpdatedFee"): TypedContractEvent<UpdatedFeeEvent.InputTuple, UpdatedFeeEvent.OutputTuple, UpdatedFeeEvent.OutputObject>;
    getEvent(key: "UpdatedOwner"): TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
    filters: {
        "Migrated(address)": TypedContractEvent<MigratedEvent.InputTuple, MigratedEvent.OutputTuple, MigratedEvent.OutputObject>;
        Migrated: TypedContractEvent<MigratedEvent.InputTuple, MigratedEvent.OutputTuple, MigratedEvent.OutputObject>;
        "PrioritizedRelayer(string,bytes32,bool)": TypedContractEvent<PrioritizedRelayerEvent.InputTuple, PrioritizedRelayerEvent.OutputTuple, PrioritizedRelayerEvent.OutputObject>;
        PrioritizedRelayer: TypedContractEvent<PrioritizedRelayerEvent.InputTuple, PrioritizedRelayerEvent.OutputTuple, PrioritizedRelayerEvent.OutputObject>;
        "PushedBytes(bytes32,bytes)": TypedContractEvent<PushedBytesEvent.InputTuple, PushedBytesEvent.OutputTuple, PushedBytesEvent.OutputObject>;
        PushedBytes: TypedContractEvent<PushedBytesEvent.InputTuple, PushedBytesEvent.OutputTuple, PushedBytesEvent.OutputObject>;
        "PushedChain(uint64,string)": TypedContractEvent<PushedChainEvent.InputTuple, PushedChainEvent.OutputTuple, PushedChainEvent.OutputObject>;
        PushedChain: TypedContractEvent<PushedChainEvent.InputTuple, PushedChainEvent.OutputTuple, PushedChainEvent.OutputObject>;
        "PushedRelayer(string,bytes32,address,bool)": TypedContractEvent<PushedRelayerEvent.InputTuple, PushedRelayerEvent.OutputTuple, PushedRelayerEvent.OutputObject>;
        PushedRelayer: TypedContractEvent<PushedRelayerEvent.InputTuple, PushedRelayerEvent.OutputTuple, PushedRelayerEvent.OutputObject>;
        "RemovedRelayer(string,bytes32,address)": TypedContractEvent<RemovedRelayerEvent.InputTuple, RemovedRelayerEvent.OutputTuple, RemovedRelayerEvent.OutputObject>;
        RemovedRelayer: TypedContractEvent<RemovedRelayerEvent.InputTuple, RemovedRelayerEvent.OutputTuple, RemovedRelayerEvent.OutputObject>;
        "UpdatedFee(uint256)": TypedContractEvent<UpdatedFeeEvent.InputTuple, UpdatedFeeEvent.OutputTuple, UpdatedFeeEvent.OutputObject>;
        UpdatedFee: TypedContractEvent<UpdatedFeeEvent.InputTuple, UpdatedFeeEvent.OutputTuple, UpdatedFeeEvent.OutputObject>;
        "UpdatedOwner(address)": TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
        UpdatedOwner: TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
    };
}
