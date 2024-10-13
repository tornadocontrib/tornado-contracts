import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface DelegationInterface extends Interface {
    getFunction(nameOrSignature: "castDelegatedVote" | "delegate" | "delegatedTo" | "lockedBalance" | "proposeByDelegate" | "undelegate"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Delegated" | "Undelegated"): EventFragment;
    encodeFunctionData(functionFragment: "castDelegatedVote", values: [AddressLike[], BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "delegate", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "delegatedTo", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "lockedBalance", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "proposeByDelegate", values: [AddressLike, AddressLike, string]): string;
    encodeFunctionData(functionFragment: "undelegate", values?: undefined): string;
    decodeFunctionResult(functionFragment: "castDelegatedVote", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegatedTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lockedBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proposeByDelegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "undelegate", data: BytesLike): Result;
}
export declare namespace DelegatedEvent {
    type InputTuple = [account: AddressLike, to: AddressLike];
    type OutputTuple = [account: string, to: string];
    interface OutputObject {
        account: string;
        to: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UndelegatedEvent {
    type InputTuple = [account: AddressLike, from: AddressLike];
    type OutputTuple = [account: string, from: string];
    interface OutputObject {
        account: string;
        from: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Delegation extends BaseContract {
    connect(runner?: ContractRunner | null): Delegation;
    waitForDeployment(): Promise<this>;
    interface: DelegationInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    castDelegatedVote: TypedContractMethod<[
        from: AddressLike[],
        proposalId: BigNumberish,
        support: boolean
    ], [
        void
    ], "nonpayable">;
    delegate: TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
    delegatedTo: TypedContractMethod<[arg0: AddressLike], [string], "view">;
    lockedBalance: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    proposeByDelegate: TypedContractMethod<[
        from: AddressLike,
        target: AddressLike,
        description: string
    ], [
        bigint
    ], "nonpayable">;
    undelegate: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "castDelegatedVote"): TypedContractMethod<[
        from: AddressLike[],
        proposalId: BigNumberish,
        support: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "delegate"): TypedContractMethod<[to: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "delegatedTo"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "lockedBalance"): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "proposeByDelegate"): TypedContractMethod<[
        from: AddressLike,
        target: AddressLike,
        description: string
    ], [
        bigint
    ], "nonpayable">;
    getFunction(nameOrSignature: "undelegate"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "Delegated"): TypedContractEvent<DelegatedEvent.InputTuple, DelegatedEvent.OutputTuple, DelegatedEvent.OutputObject>;
    getEvent(key: "Undelegated"): TypedContractEvent<UndelegatedEvent.InputTuple, UndelegatedEvent.OutputTuple, UndelegatedEvent.OutputObject>;
    filters: {
        "Delegated(address,address)": TypedContractEvent<DelegatedEvent.InputTuple, DelegatedEvent.OutputTuple, DelegatedEvent.OutputObject>;
        Delegated: TypedContractEvent<DelegatedEvent.InputTuple, DelegatedEvent.OutputTuple, DelegatedEvent.OutputObject>;
        "Undelegated(address,address)": TypedContractEvent<UndelegatedEvent.InputTuple, UndelegatedEvent.OutputTuple, UndelegatedEvent.OutputObject>;
        Undelegated: TypedContractEvent<UndelegatedEvent.InputTuple, UndelegatedEvent.OutputTuple, UndelegatedEvent.OutputObject>;
    };
}