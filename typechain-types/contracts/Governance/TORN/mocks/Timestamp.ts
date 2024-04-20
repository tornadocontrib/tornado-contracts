/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../common";

export interface TimestampInterface extends Interface {
  getFunction(
    nameOrSignature: "blockTimestamp" | "fakeTimestamp" | "setFakeTimestamp"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "blockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fakeTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFakeTimestamp",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "blockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fakeTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFakeTimestamp",
    data: BytesLike
  ): Result;
}

export interface Timestamp extends BaseContract {
  connect(runner?: ContractRunner | null): Timestamp;
  waitForDeployment(): Promise<this>;

  interface: TimestampInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  blockTimestamp: TypedContractMethod<[], [bigint], "view">;

  fakeTimestamp: TypedContractMethod<[], [bigint], "view">;

  setFakeTimestamp: TypedContractMethod<
    [_fakeTimestamp: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "blockTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "fakeTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "setFakeTimestamp"
  ): TypedContractMethod<[_fakeTimestamp: BigNumberish], [void], "nonpayable">;

  filters: {};
}
