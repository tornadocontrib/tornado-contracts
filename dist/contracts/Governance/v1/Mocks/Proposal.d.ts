import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../../common";
export interface ProposalInterface extends Interface {
    getFunction(nameOrSignature: "executeProposal"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Debug"): EventFragment;
    encodeFunctionData(functionFragment: "executeProposal", values?: undefined): string;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
}
export declare namespace DebugEvent {
    type InputTuple = [output: AddressLike];
    type OutputTuple = [output: string];
    interface OutputObject {
        output: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Proposal extends BaseContract {
    connect(runner?: ContractRunner | null): Proposal;
    waitForDeployment(): Promise<this>;
    interface: ProposalInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    executeProposal: TypedContractMethod<[], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "executeProposal"): TypedContractMethod<[], [void], "nonpayable">;
    getEvent(key: "Debug"): TypedContractEvent<DebugEvent.InputTuple, DebugEvent.OutputTuple, DebugEvent.OutputObject>;
    filters: {
        "Debug(address)": TypedContractEvent<DebugEvent.InputTuple, DebugEvent.OutputTuple, DebugEvent.OutputObject>;
        Debug: TypedContractEvent<DebugEvent.InputTuple, DebugEvent.OutputTuple, DebugEvent.OutputObject>;
    };
}
