import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface DeployerInterface extends Interface {
    getFunction(nameOrSignature: "deploy" | "deployer"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Deployed"): EventFragment;
    encodeFunctionData(functionFragment: "deploy", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
    decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
}
export declare namespace DeployedEvent {
    type InputTuple = [sender: AddressLike, addr: AddressLike];
    type OutputTuple = [sender: string, addr: string];
    interface OutputObject {
        sender: string;
        addr: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface Deployer extends BaseContract {
    connect(runner?: ContractRunner | null): Deployer;
    waitForDeployment(): Promise<this>;
    interface: DeployerInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    deploy: TypedContractMethod<[
        _initCode: BytesLike,
        _salt: BytesLike
    ], [
        void
    ], "nonpayable">;
    deployer: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "deploy"): TypedContractMethod<[
        _initCode: BytesLike,
        _salt: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "deployer"): TypedContractMethod<[], [string], "view">;
    getEvent(key: "Deployed"): TypedContractEvent<DeployedEvent.InputTuple, DeployedEvent.OutputTuple, DeployedEvent.OutputObject>;
    filters: {
        "Deployed(address,address)": TypedContractEvent<DeployedEvent.InputTuple, DeployedEvent.OutputTuple, DeployedEvent.OutputObject>;
        Deployed: TypedContractEvent<DeployedEvent.InputTuple, DeployedEvent.OutputTuple, DeployedEvent.OutputObject>;
    };
}
