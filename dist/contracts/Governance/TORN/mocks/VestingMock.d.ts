import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../../common";
export interface VestingMockInterface extends Interface {
    getFunction(nameOrSignature: "SECONDS_PER_MONTH" | "beneficiary" | "blockTimestamp" | "cliffInMonths" | "durationInMonths" | "fakeTimestamp" | "release" | "released" | "setFakeTimestamp" | "startTimestamp" | "token" | "vestedAmount"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;
    encodeFunctionData(functionFragment: "SECONDS_PER_MONTH", values?: undefined): string;
    encodeFunctionData(functionFragment: "beneficiary", values?: undefined): string;
    encodeFunctionData(functionFragment: "blockTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "cliffInMonths", values?: undefined): string;
    encodeFunctionData(functionFragment: "durationInMonths", values?: undefined): string;
    encodeFunctionData(functionFragment: "fakeTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "release", values?: undefined): string;
    encodeFunctionData(functionFragment: "released", values?: undefined): string;
    encodeFunctionData(functionFragment: "setFakeTimestamp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "startTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "vestedAmount", values?: undefined): string;
    decodeFunctionResult(functionFragment: "SECONDS_PER_MONTH", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "beneficiary", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cliffInMonths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "durationInMonths", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fakeTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "released", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFakeTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "startTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "vestedAmount", data: BytesLike): Result;
}
export declare namespace ReleasedEvent {
    type InputTuple = [amount: BigNumberish];
    type OutputTuple = [amount: bigint];
    interface OutputObject {
        amount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface VestingMock extends BaseContract {
    connect(runner?: ContractRunner | null): VestingMock;
    waitForDeployment(): Promise<this>;
    interface: VestingMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    SECONDS_PER_MONTH: TypedContractMethod<[], [bigint], "view">;
    beneficiary: TypedContractMethod<[], [string], "view">;
    blockTimestamp: TypedContractMethod<[], [bigint], "view">;
    cliffInMonths: TypedContractMethod<[], [bigint], "view">;
    durationInMonths: TypedContractMethod<[], [bigint], "view">;
    fakeTimestamp: TypedContractMethod<[], [bigint], "view">;
    release: TypedContractMethod<[], [void], "nonpayable">;
    released: TypedContractMethod<[], [bigint], "view">;
    setFakeTimestamp: TypedContractMethod<[
        _fakeTimestamp: BigNumberish
    ], [
        void
    ], "nonpayable">;
    startTimestamp: TypedContractMethod<[], [bigint], "view">;
    token: TypedContractMethod<[], [string], "view">;
    vestedAmount: TypedContractMethod<[], [bigint], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "SECONDS_PER_MONTH"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "beneficiary"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "blockTimestamp"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "cliffInMonths"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "durationInMonths"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "fakeTimestamp"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "release"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "released"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "setFakeTimestamp"): TypedContractMethod<[_fakeTimestamp: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "startTimestamp"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "vestedAmount"): TypedContractMethod<[], [bigint], "view">;
    getEvent(key: "Released"): TypedContractEvent<ReleasedEvent.InputTuple, ReleasedEvent.OutputTuple, ReleasedEvent.OutputObject>;
    filters: {
        "Released(uint256)": TypedContractEvent<ReleasedEvent.InputTuple, ReleasedEvent.OutputTuple, ReleasedEvent.OutputObject>;
        Released: TypedContractEvent<ReleasedEvent.InputTuple, ReleasedEvent.OutputTuple, ReleasedEvent.OutputObject>;
    };
}
