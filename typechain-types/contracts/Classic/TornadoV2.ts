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
} from "../../common";

export declare namespace TornadoV2 {
  export type CreateInstanceStruct = {
    token: AddressLike;
    denomination: BigNumberish;
    vault: AddressLike;
  };

  export type CreateInstanceStructOutput = [
    token: string,
    denomination: bigint,
    vault: string
  ] & { token: string; denomination: bigint; vault: string };

  export type InstanceViewStruct = {
    currentRootIndex: BigNumberish;
    nextIndex: BigNumberish;
    token: AddressLike;
    native: boolean;
    denomination: BigNumberish;
    delta: BigNumberish;
    rewards: BigNumberish;
    vault: AddressLike;
  };

  export type InstanceViewStructOutput = [
    currentRootIndex: bigint,
    nextIndex: bigint,
    token: string,
    native: boolean,
    denomination: bigint,
    delta: bigint,
    rewards: bigint,
    vault: string
  ] & {
    currentRootIndex: bigint;
    nextIndex: bigint;
    token: string;
    native: boolean;
    denomination: bigint;
    delta: bigint;
    rewards: bigint;
    vault: string;
  };

  export type PermitCommitmentsStruct = {
    instancesHash: BytesLike;
    commitmentsHash: BytesLike;
  };

  export type PermitCommitmentsStructOutput = [
    instancesHash: string,
    commitmentsHash: string
  ] & { instancesHash: string; commitmentsHash: string };
}

export interface TornadoV2Interface extends Interface {
  getFunction(
    nameOrSignature:
      | "COMMITMENT_TYPE"
      | "COMMITMENT_TYPEHASH"
      | "FIELD_SIZE"
      | "REVISION"
      | "ROOT_HISTORY_SIZE"
      | "WITNESS_TYPE_STRING"
      | "ZERO_VALUE"
      | "commitments"
      | "createInstance"
      | "denomination"
      | "deposit"
      | "feeRate"
      | "feeTo"
      | "filledSubtrees"
      | "getLastRoot"
      | "getSignatureType"
      | "hasInstance"
      | "hashLeftRight"
      | "hasher"
      | "initialize"
      | "instance"
      | "instanceIndex"
      | "isKnownRoot"
      | "isSpent"
      | "isSpentArray"
      | "levels"
      | "nextIndex"
      | "nullifierHashes"
      | "permit2"
      | "roots"
      | "token"
      | "verifier"
      | "weth"
      | "withdraw"
      | "witness"
      | "zeros"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "Deposit" | "Withdrawal"): EventFragment;

  encodeFunctionData(
    functionFragment: "COMMITMENT_TYPE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "COMMITMENT_TYPEHASH",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "REVISION", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "WITNESS_TYPE_STRING",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "commitments",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "createInstance",
    values: [AddressLike, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "denomination",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish[], BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "feeRate", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSignatureType",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasInstance",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      AddressLike,
      TornadoV2.CreateInstanceStruct[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "instance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "instanceIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "isSpentArray",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextIndex",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "permit2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "roots",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "verifier", values?: undefined): string;
  encodeFunctionData(functionFragment: "weth", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "witness",
    values: [TornadoV2.PermitCommitmentsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "zeros",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "COMMITMENT_TYPE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "COMMITMENT_TYPEHASH",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "REVISION", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WITNESS_TYPE_STRING",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "commitments",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "denomination",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSignatureType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasInstance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "instance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "instanceIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isSpentArray",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "permit2", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "witness", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;
}

export namespace DepositEvent {
  export type InputTuple = [
    id: BigNumberish,
    from: AddressLike,
    commitment: BytesLike,
    leafIndex: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    from: string,
    commitment: string,
    leafIndex: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    id: bigint;
    from: string;
    commitment: string;
    leafIndex: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalEvent {
  export type InputTuple = [
    id: BigNumberish,
    to: AddressLike,
    nullifierHash: BytesLike,
    relayer: AddressLike,
    fee: BigNumberish,
    timestamp: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    to: string,
    nullifierHash: string,
    relayer: string,
    fee: bigint,
    timestamp: bigint
  ];
  export interface OutputObject {
    id: bigint;
    to: string;
    nullifierHash: string;
    relayer: string;
    fee: bigint;
    timestamp: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TornadoV2 extends BaseContract {
  connect(runner?: ContractRunner | null): TornadoV2;
  waitForDeployment(): Promise<this>;

  interface: TornadoV2Interface;

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

  COMMITMENT_TYPE: TypedContractMethod<[], [string], "view">;

  COMMITMENT_TYPEHASH: TypedContractMethod<[], [string], "view">;

  FIELD_SIZE: TypedContractMethod<[], [bigint], "view">;

  REVISION: TypedContractMethod<[], [bigint], "view">;

  ROOT_HISTORY_SIZE: TypedContractMethod<[], [bigint], "view">;

  WITNESS_TYPE_STRING: TypedContractMethod<[], [string], "view">;

  ZERO_VALUE: TypedContractMethod<[], [bigint], "view">;

  commitments: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  createInstance: TypedContractMethod<
    [_token: AddressLike, _denomination: BigNumberish, _vault: AddressLike],
    [bigint],
    "nonpayable"
  >;

  denomination: TypedContractMethod<[id: BigNumberish], [bigint], "view">;

  deposit: TypedContractMethod<
    [_ids: BigNumberish[], _commitments: BytesLike[], permitData: BytesLike],
    [void],
    "payable"
  >;

  feeRate: TypedContractMethod<[], [bigint], "view">;

  feeTo: TypedContractMethod<[], [string], "view">;

  filledSubtrees: TypedContractMethod<
    [id: BigNumberish, index: BigNumberish],
    [string],
    "view"
  >;

  getLastRoot: TypedContractMethod<[id: BigNumberish], [string], "view">;

  getSignatureType: TypedContractMethod<
    [permitData: BytesLike],
    [bigint],
    "view"
  >;

  hasInstance: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  hashLeftRight: TypedContractMethod<
    [_left: BytesLike, _right: BytesLike],
    [string],
    "view"
  >;

  hasher: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [
      _weth: AddressLike,
      _verifier: AddressLike,
      _hasher: AddressLike,
      _levels: BigNumberish,
      _feeTo: AddressLike,
      _instances: TornadoV2.CreateInstanceStruct[]
    ],
    [void],
    "nonpayable"
  >;

  instance: TypedContractMethod<
    [id: BigNumberish],
    [TornadoV2.InstanceViewStructOutput],
    "view"
  >;

  instanceIndex: TypedContractMethod<[], [bigint], "view">;

  isKnownRoot: TypedContractMethod<
    [id: BigNumberish, _root: BytesLike],
    [boolean],
    "view"
  >;

  isSpent: TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;

  isSpentArray: TypedContractMethod<
    [_nullifierHashes: BytesLike[]],
    [boolean[]],
    "view"
  >;

  levels: TypedContractMethod<[], [bigint], "view">;

  nextIndex: TypedContractMethod<[id: BigNumberish], [bigint], "view">;

  nullifierHashes: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  permit2: TypedContractMethod<[], [string], "view">;

  roots: TypedContractMethod<
    [id: BigNumberish, index: BigNumberish],
    [string],
    "view"
  >;

  token: TypedContractMethod<[id: BigNumberish], [string], "view">;

  verifier: TypedContractMethod<[], [string], "view">;

  weth: TypedContractMethod<[], [string], "view">;

  withdraw: TypedContractMethod<
    [
      id: BigNumberish,
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: AddressLike,
      _relayer: AddressLike,
      _relayerFee: BigNumberish,
      _refund: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "payable"
  >;

  witness: TypedContractMethod<
    [permitData: TornadoV2.PermitCommitmentsStruct],
    [string],
    "view"
  >;

  zeros: TypedContractMethod<
    [id: BigNumberish, index: BigNumberish],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "COMMITMENT_TYPE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "COMMITMENT_TYPEHASH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "FIELD_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "REVISION"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "ROOT_HISTORY_SIZE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "WITNESS_TYPE_STRING"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ZERO_VALUE"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "commitments"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "createInstance"
  ): TypedContractMethod<
    [_token: AddressLike, _denomination: BigNumberish, _vault: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "denomination"
  ): TypedContractMethod<[id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_ids: BigNumberish[], _commitments: BytesLike[], permitData: BytesLike],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "feeRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "feeTo"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "filledSubtrees"
  ): TypedContractMethod<
    [id: BigNumberish, index: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "getLastRoot"
  ): TypedContractMethod<[id: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getSignatureType"
  ): TypedContractMethod<[permitData: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "hasInstance"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "hashLeftRight"
  ): TypedContractMethod<
    [_left: BytesLike, _right: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "hasher"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<
    [
      _weth: AddressLike,
      _verifier: AddressLike,
      _hasher: AddressLike,
      _levels: BigNumberish,
      _feeTo: AddressLike,
      _instances: TornadoV2.CreateInstanceStruct[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "instance"
  ): TypedContractMethod<
    [id: BigNumberish],
    [TornadoV2.InstanceViewStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "instanceIndex"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "isKnownRoot"
  ): TypedContractMethod<
    [id: BigNumberish, _root: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "isSpent"
  ): TypedContractMethod<[_nullifierHash: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isSpentArray"
  ): TypedContractMethod<[_nullifierHashes: BytesLike[]], [boolean[]], "view">;
  getFunction(
    nameOrSignature: "levels"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "nextIndex"
  ): TypedContractMethod<[id: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "nullifierHashes"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "permit2"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "roots"
  ): TypedContractMethod<
    [id: BigNumberish, index: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "token"
  ): TypedContractMethod<[id: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "verifier"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "weth"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [
      id: BigNumberish,
      _proof: BytesLike,
      _root: BytesLike,
      _nullifierHash: BytesLike,
      _recipient: AddressLike,
      _relayer: AddressLike,
      _relayerFee: BigNumberish,
      _refund: BigNumberish,
      _data: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "witness"
  ): TypedContractMethod<
    [permitData: TornadoV2.PermitCommitmentsStruct],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "zeros"
  ): TypedContractMethod<
    [id: BigNumberish, index: BigNumberish],
    [string],
    "view"
  >;

  getEvent(
    key: "Deposit"
  ): TypedContractEvent<
    DepositEvent.InputTuple,
    DepositEvent.OutputTuple,
    DepositEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawal"
  ): TypedContractEvent<
    WithdrawalEvent.InputTuple,
    WithdrawalEvent.OutputTuple,
    WithdrawalEvent.OutputObject
  >;

  filters: {
    "Deposit(uint256,address,bytes32,uint32,uint256)": TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;
    Deposit: TypedContractEvent<
      DepositEvent.InputTuple,
      DepositEvent.OutputTuple,
      DepositEvent.OutputObject
    >;

    "Withdrawal(uint256,address,bytes32,address,uint256,uint256)": TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
    Withdrawal: TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
  };
}