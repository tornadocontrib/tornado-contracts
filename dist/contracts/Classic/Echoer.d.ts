import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface EchoerInterface extends Interface {
    getFunction(nameOrSignature: "echo"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Echo"): EventFragment;
    encodeFunctionData(functionFragment: "echo", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "echo", data: BytesLike): Result;
}
export declare namespace EchoEvent {
    type InputTuple = [who: AddressLike, data: BytesLike];
    type OutputTuple = [who: string, data: string];
    interface OutputObject {
        who: string;
        data: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Echoer extends BaseContract {
    connect(runner?: ContractRunner | null): Echoer;
    waitForDeployment(): Promise<this>;
    interface: EchoerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    echo: TypedContractMethod<[_data: BytesLike], [void], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "echo"): TypedContractMethod<[_data: BytesLike], [void], "nonpayable">;
    getEvent(key: "Echo"): TypedContractEvent<EchoEvent.InputTuple, EchoEvent.OutputTuple, EchoEvent.OutputObject>;
    filters: {
        "Echo(address,bytes)": TypedContractEvent<EchoEvent.InputTuple, EchoEvent.OutputTuple, EchoEvent.OutputObject>;
        Echo: TypedContractEvent<EchoEvent.InputTuple, EchoEvent.OutputTuple, EchoEvent.OutputObject>;
    };
}
