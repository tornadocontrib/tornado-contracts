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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export declare namespace InstanceRegistry {
  export type InstanceStruct = {
    isERC20: boolean;
    token: AddressLike;
    state: BigNumberish;
    uniswapPoolSwappingFee: BigNumberish;
    protocolFeePercentage: BigNumberish;
  };

  export type InstanceStructOutput = [
    isERC20: boolean,
    token: string,
    state: bigint,
    uniswapPoolSwappingFee: bigint,
    protocolFeePercentage: bigint
  ] & {
    isERC20: boolean;
    token: string;
    state: bigint;
    uniswapPoolSwappingFee: bigint;
    protocolFeePercentage: bigint;
  };

  export type TornadoStruct = {
    addr: AddressLike;
    instance: InstanceRegistry.InstanceStruct;
  };

  export type TornadoStructOutput = [
    addr: string,
    instance: InstanceRegistry.InstanceStructOutput
  ] & { addr: string; instance: InstanceRegistry.InstanceStructOutput };
}

export interface InstanceRegistryInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getAllInstanceAddresses"
      | "getAllInstances"
      | "getPoolToken"
      | "governance"
      | "initialize"
      | "instanceIds"
      | "instances"
      | "removeInstance"
      | "router"
      | "setProtocolFee"
      | "setTornadoRouter"
      | "updateInstance"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "InstanceStateUpdated" | "RouterRegistered"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "getAllInstanceAddresses",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllInstances",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [InstanceRegistry.TornadoStruct[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "instanceIds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "instances",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeInstance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "router", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setProtocolFee",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTornadoRouter",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateInstance",
    values: [InstanceRegistry.TornadoStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "getAllInstanceAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllInstances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "instanceIds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "instances", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "router", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setProtocolFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTornadoRouter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateInstance",
    data: BytesLike
  ): Result;
}

export namespace InstanceStateUpdatedEvent {
  export type InputTuple = [instance: AddressLike, state: BigNumberish];
  export type OutputTuple = [instance: string, state: bigint];
  export interface OutputObject {
    instance: string;
    state: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RouterRegisteredEvent {
  export type InputTuple = [tornadoRouter: AddressLike];
  export type OutputTuple = [tornadoRouter: string];
  export interface OutputObject {
    tornadoRouter: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface InstanceRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): InstanceRegistry;
  waitForDeployment(): Promise<this>;

  interface: InstanceRegistryInterface;

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

  getAllInstanceAddresses: TypedContractMethod<[], [string[]], "view">;

  getAllInstances: TypedContractMethod<
    [],
    [InstanceRegistry.TornadoStructOutput[]],
    "view"
  >;

  getPoolToken: TypedContractMethod<[instance: AddressLike], [string], "view">;

  governance: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [_instances: InstanceRegistry.TornadoStruct[], _router: AddressLike],
    [void],
    "nonpayable"
  >;

  instanceIds: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  instances: TypedContractMethod<
    [arg0: AddressLike],
    [
      [boolean, string, bigint, bigint, bigint] & {
        isERC20: boolean;
        token: string;
        state: bigint;
        uniswapPoolSwappingFee: bigint;
        protocolFeePercentage: bigint;
      }
    ],
    "view"
  >;

  removeInstance: TypedContractMethod<
    [_instanceId: BigNumberish],
    [void],
    "nonpayable"
  >;

  router: TypedContractMethod<[], [string], "view">;

  setProtocolFee: TypedContractMethod<
    [instance: AddressLike, newFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  setTornadoRouter: TypedContractMethod<
    [routerAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  updateInstance: TypedContractMethod<
    [_tornado: InstanceRegistry.TornadoStruct],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getAllInstanceAddresses"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getAllInstances"
  ): TypedContractMethod<[], [InstanceRegistry.TornadoStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getPoolToken"
  ): TypedContractMethod<[instance: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "governance"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [_instances: InstanceRegistry.TornadoStruct[], _router: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "instanceIds"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "instances"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [boolean, string, bigint, bigint, bigint] & {
        isERC20: boolean;
        token: string;
        state: bigint;
        uniswapPoolSwappingFee: bigint;
        protocolFeePercentage: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "removeInstance"
  ): TypedContractMethod<[_instanceId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "router"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setProtocolFee"
  ): TypedContractMethod<
    [instance: AddressLike, newFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setTornadoRouter"
  ): TypedContractMethod<[routerAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "updateInstance"
  ): TypedContractMethod<
    [_tornado: InstanceRegistry.TornadoStruct],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "InstanceStateUpdated"
  ): TypedContractEvent<
    InstanceStateUpdatedEvent.InputTuple,
    InstanceStateUpdatedEvent.OutputTuple,
    InstanceStateUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "RouterRegistered"
  ): TypedContractEvent<
    RouterRegisteredEvent.InputTuple,
    RouterRegisteredEvent.OutputTuple,
    RouterRegisteredEvent.OutputObject
  >;

  filters: {
    "InstanceStateUpdated(address,uint8)": TypedContractEvent<
      InstanceStateUpdatedEvent.InputTuple,
      InstanceStateUpdatedEvent.OutputTuple,
      InstanceStateUpdatedEvent.OutputObject
    >;
    InstanceStateUpdated: TypedContractEvent<
      InstanceStateUpdatedEvent.InputTuple,
      InstanceStateUpdatedEvent.OutputTuple,
      InstanceStateUpdatedEvent.OutputObject
    >;

    "RouterRegistered(address)": TypedContractEvent<
      RouterRegisteredEvent.InputTuple,
      RouterRegisteredEvent.OutputTuple,
      RouterRegisteredEvent.OutputObject
    >;
    RouterRegistered: TypedContractEvent<
      RouterRegisteredEvent.InputTuple,
      RouterRegisteredEvent.OutputTuple,
      RouterRegisteredEvent.OutputObject
    >;
  };
}
