import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface TestnetGovernanceProxyInterface extends Interface {
    getFunction(nameOrSignature: "admin" | "callToOwner" | "changeAdmin" | "changeOwner" | "delegateToOwner" | "getCurrentOwner" | "implementation" | "upgradeTo" | "upgradeToAndCall" | "upgradeToOwner"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AdminChanged" | "Upgraded"): EventFragment;
    encodeFunctionData(functionFragment: "admin", values?: undefined): string;
    encodeFunctionData(functionFragment: "callToOwner", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "changeAdmin", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "changeOwner", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "delegateToOwner", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "getCurrentOwner", values?: undefined): string;
    encodeFunctionData(functionFragment: "implementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [AddressLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeToOwner", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "callToOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateToOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCurrentOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "implementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToOwner", data: BytesLike): Result;
}
export declare namespace AdminChangedEvent {
    type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
    type OutputTuple = [previousAdmin: string, newAdmin: string];
    interface OutputObject {
        previousAdmin: string;
        newAdmin: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpgradedEvent {
    type InputTuple = [implementation: AddressLike];
    type OutputTuple = [implementation: string];
    interface OutputObject {
        implementation: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface TestnetGovernanceProxy extends BaseContract {
    connect(runner?: ContractRunner | null): TestnetGovernanceProxy;
    waitForDeployment(): Promise<this>;
    interface: TestnetGovernanceProxyInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    admin: TypedContractMethod<[], [string], "nonpayable">;
    callToOwner: TypedContractMethod<[
        target: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    changeAdmin: TypedContractMethod<[
        newAdmin: AddressLike
    ], [
        void
    ], "nonpayable">;
    changeOwner: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    delegateToOwner: TypedContractMethod<[
        target: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getCurrentOwner: TypedContractMethod<[], [string], "view">;
    implementation: TypedContractMethod<[], [string], "nonpayable">;
    upgradeTo: TypedContractMethod<[
        newImplementation: AddressLike
    ], [
        void
    ], "nonpayable">;
    upgradeToAndCall: TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    upgradeToOwner: TypedContractMethod<[
        newImplementation: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "admin"): TypedContractMethod<[], [string], "nonpayable">;
    getFunction(nameOrSignature: "callToOwner"): TypedContractMethod<[
        target: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "changeAdmin"): TypedContractMethod<[newAdmin: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "changeOwner"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "delegateToOwner"): TypedContractMethod<[
        target: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "getCurrentOwner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "implementation"): TypedContractMethod<[], [string], "nonpayable">;
    getFunction(nameOrSignature: "upgradeTo"): TypedContractMethod<[
        newImplementation: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "upgradeToAndCall"): TypedContractMethod<[
        newImplementation: AddressLike,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "upgradeToOwner"): TypedContractMethod<[
        newImplementation: AddressLike
    ], [
        void
    ], "nonpayable">;
    getEvent(key: "AdminChanged"): TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
    getEvent(key: "Upgraded"): TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    filters: {
        "AdminChanged(address,address)": TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
        AdminChanged: TypedContractEvent<AdminChangedEvent.InputTuple, AdminChangedEvent.OutputTuple, AdminChangedEvent.OutputObject>;
        "Upgraded(address)": TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
        Upgraded: TypedContractEvent<UpgradedEvent.InputTuple, UpgradedEvent.OutputTuple, UpgradedEvent.OutputObject>;
    };
}
