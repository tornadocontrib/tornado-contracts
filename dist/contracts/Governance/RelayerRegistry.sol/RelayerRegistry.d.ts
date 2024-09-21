import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../common";
export interface RelayerRegistryInterface extends Interface {
    getFunction(nameOrSignature: "burn" | "ens" | "feeManager" | "getRelayerBalance" | "getRelayerEnsHash" | "governance" | "initialize" | "isRelayer" | "isRelayerRegistered" | "minStakeAmount" | "nullifyBalance" | "register" | "registerPermit" | "registerWorker" | "relayers" | "setMinStakeAmount" | "setTornadoRouter" | "stakeToRelayer" | "stakeToRelayerPermit" | "staking" | "torn" | "tornadoRouter" | "unregisterRelayer" | "unregisterWorker" | "workers"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "MinimumStakeAmount" | "RelayerBalanceNullified" | "RelayerRegistered" | "RelayerUnregistered" | "RouterRegistered" | "StakeAddedToRelayer" | "StakeBurned" | "WorkerRegistered" | "WorkerUnregistered"): EventFragment;
    encodeFunctionData(functionFragment: "burn", values: [AddressLike, AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "ens", values?: undefined): string;
    encodeFunctionData(functionFragment: "feeManager", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRelayerBalance", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "getRelayerEnsHash", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isRelayer", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "isRelayerRegistered", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "minStakeAmount", values?: undefined): string;
    encodeFunctionData(functionFragment: "nullifyBalance", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "register", values: [string, BigNumberish, AddressLike[]]): string;
    encodeFunctionData(functionFragment: "registerPermit", values: [
        string,
        BigNumberish,
        AddressLike[],
        AddressLike,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "registerWorker", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "relayers", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "setMinStakeAmount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setTornadoRouter", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "stakeToRelayer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "stakeToRelayerPermit", values: [
        AddressLike,
        BigNumberish,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "staking", values?: undefined): string;
    encodeFunctionData(functionFragment: "torn", values?: undefined): string;
    encodeFunctionData(functionFragment: "tornadoRouter", values?: undefined): string;
    encodeFunctionData(functionFragment: "unregisterRelayer", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "unregisterWorker", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "workers", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "feeManager", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRelayerBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRelayerEnsHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRelayerRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minStakeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nullifyBalance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerWorker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMinStakeAmount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setTornadoRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeToRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "stakeToRelayerPermit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "staking", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "torn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tornadoRouter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterRelayer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregisterWorker", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "workers", data: BytesLike): Result;
}
export declare namespace MinimumStakeAmountEvent {
    type InputTuple = [minStakeAmount: BigNumberish];
    type OutputTuple = [minStakeAmount: bigint];
    interface OutputObject {
        minStakeAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RelayerBalanceNullifiedEvent {
    type InputTuple = [relayer: AddressLike];
    type OutputTuple = [relayer: string];
    interface OutputObject {
        relayer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RelayerRegisteredEvent {
    type InputTuple = [
        relayer: BytesLike,
        ensName: string,
        relayerAddress: AddressLike,
        stakedAmount: BigNumberish
    ];
    type OutputTuple = [
        relayer: string,
        ensName: string,
        relayerAddress: string,
        stakedAmount: bigint
    ];
    interface OutputObject {
        relayer: string;
        ensName: string;
        relayerAddress: string;
        stakedAmount: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RelayerUnregisteredEvent {
    type InputTuple = [relayer: AddressLike];
    type OutputTuple = [relayer: string];
    interface OutputObject {
        relayer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RouterRegisteredEvent {
    type InputTuple = [tornadoRouter: AddressLike];
    type OutputTuple = [tornadoRouter: string];
    interface OutputObject {
        tornadoRouter: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace StakeAddedToRelayerEvent {
    type InputTuple = [
        relayer: AddressLike,
        amountStakeAdded: BigNumberish
    ];
    type OutputTuple = [relayer: string, amountStakeAdded: bigint];
    interface OutputObject {
        relayer: string;
        amountStakeAdded: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace StakeBurnedEvent {
    type InputTuple = [relayer: AddressLike, amountBurned: BigNumberish];
    type OutputTuple = [relayer: string, amountBurned: bigint];
    interface OutputObject {
        relayer: string;
        amountBurned: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WorkerRegisteredEvent {
    type InputTuple = [relayer: AddressLike, worker: AddressLike];
    type OutputTuple = [relayer: string, worker: string];
    interface OutputObject {
        relayer: string;
        worker: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace WorkerUnregisteredEvent {
    type InputTuple = [relayer: AddressLike, worker: AddressLike];
    type OutputTuple = [relayer: string, worker: string];
    interface OutputObject {
        relayer: string;
        worker: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface RelayerRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): RelayerRegistry;
    waitForDeployment(): Promise<this>;
    interface: RelayerRegistryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    burn: TypedContractMethod<[
        sender: AddressLike,
        relayer: AddressLike,
        pool: AddressLike
    ], [
        void
    ], "nonpayable">;
    ens: TypedContractMethod<[], [string], "view">;
    feeManager: TypedContractMethod<[], [string], "view">;
    getRelayerBalance: TypedContractMethod<[
        relayer: AddressLike
    ], [
        bigint
    ], "view">;
    getRelayerEnsHash: TypedContractMethod<[
        relayer: AddressLike
    ], [
        string
    ], "view">;
    governance: TypedContractMethod<[], [string], "view">;
    initialize: TypedContractMethod<[
        _tornadoRouter: AddressLike
    ], [
        void
    ], "nonpayable">;
    isRelayer: TypedContractMethod<[toResolve: AddressLike], [boolean], "view">;
    isRelayerRegistered: TypedContractMethod<[
        relayer: AddressLike,
        toResolve: AddressLike
    ], [
        boolean
    ], "view">;
    minStakeAmount: TypedContractMethod<[], [bigint], "view">;
    nullifyBalance: TypedContractMethod<[
        relayer: AddressLike
    ], [
        void
    ], "nonpayable">;
    register: TypedContractMethod<[
        ensName: string,
        stake: BigNumberish,
        workersToRegister: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    registerPermit: TypedContractMethod<[
        ensName: string,
        stake: BigNumberish,
        workersToRegister: AddressLike[],
        relayer: AddressLike,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    registerWorker: TypedContractMethod<[
        relayer: AddressLike,
        worker: AddressLike
    ], [
        void
    ], "nonpayable">;
    relayers: TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, string] & {
            balance: bigint;
            ensHash: string;
        }
    ], "view">;
    setMinStakeAmount: TypedContractMethod<[
        minAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setTornadoRouter: TypedContractMethod<[
        tornadoRouterAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    stakeToRelayer: TypedContractMethod<[
        relayer: AddressLike,
        stake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    stakeToRelayerPermit: TypedContractMethod<[
        relayer: AddressLike,
        stake: BigNumberish,
        staker: AddressLike,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    staking: TypedContractMethod<[], [string], "view">;
    torn: TypedContractMethod<[], [string], "view">;
    tornadoRouter: TypedContractMethod<[], [string], "view">;
    unregisterRelayer: TypedContractMethod<[
        relayer: AddressLike
    ], [
        void
    ], "nonpayable">;
    unregisterWorker: TypedContractMethod<[
        worker: AddressLike
    ], [
        void
    ], "nonpayable">;
    workers: TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[
        sender: AddressLike,
        relayer: AddressLike,
        pool: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "ens"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "feeManager"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "getRelayerBalance"): TypedContractMethod<[relayer: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRelayerEnsHash"): TypedContractMethod<[relayer: AddressLike], [string], "view">;
    getFunction(nameOrSignature: "governance"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "initialize"): TypedContractMethod<[_tornadoRouter: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "isRelayer"): TypedContractMethod<[toResolve: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "isRelayerRegistered"): TypedContractMethod<[
        relayer: AddressLike,
        toResolve: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "minStakeAmount"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "nullifyBalance"): TypedContractMethod<[relayer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "register"): TypedContractMethod<[
        ensName: string,
        stake: BigNumberish,
        workersToRegister: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "registerPermit"): TypedContractMethod<[
        ensName: string,
        stake: BigNumberish,
        workersToRegister: AddressLike[],
        relayer: AddressLike,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "registerWorker"): TypedContractMethod<[
        relayer: AddressLike,
        worker: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "relayers"): TypedContractMethod<[
        arg0: AddressLike
    ], [
        [bigint, string] & {
            balance: bigint;
            ensHash: string;
        }
    ], "view">;
    getFunction(nameOrSignature: "setMinStakeAmount"): TypedContractMethod<[minAmount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setTornadoRouter"): TypedContractMethod<[
        tornadoRouterAddress: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stakeToRelayer"): TypedContractMethod<[
        relayer: AddressLike,
        stake: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "stakeToRelayerPermit"): TypedContractMethod<[
        relayer: AddressLike,
        stake: BigNumberish,
        staker: AddressLike,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "staking"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "torn"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "tornadoRouter"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "unregisterRelayer"): TypedContractMethod<[relayer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "unregisterWorker"): TypedContractMethod<[worker: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "workers"): TypedContractMethod<[arg0: AddressLike], [string], "view">;
    getEvent(key: "MinimumStakeAmount"): TypedContractEvent<MinimumStakeAmountEvent.InputTuple, MinimumStakeAmountEvent.OutputTuple, MinimumStakeAmountEvent.OutputObject>;
    getEvent(key: "RelayerBalanceNullified"): TypedContractEvent<RelayerBalanceNullifiedEvent.InputTuple, RelayerBalanceNullifiedEvent.OutputTuple, RelayerBalanceNullifiedEvent.OutputObject>;
    getEvent(key: "RelayerRegistered"): TypedContractEvent<RelayerRegisteredEvent.InputTuple, RelayerRegisteredEvent.OutputTuple, RelayerRegisteredEvent.OutputObject>;
    getEvent(key: "RelayerUnregistered"): TypedContractEvent<RelayerUnregisteredEvent.InputTuple, RelayerUnregisteredEvent.OutputTuple, RelayerUnregisteredEvent.OutputObject>;
    getEvent(key: "RouterRegistered"): TypedContractEvent<RouterRegisteredEvent.InputTuple, RouterRegisteredEvent.OutputTuple, RouterRegisteredEvent.OutputObject>;
    getEvent(key: "StakeAddedToRelayer"): TypedContractEvent<StakeAddedToRelayerEvent.InputTuple, StakeAddedToRelayerEvent.OutputTuple, StakeAddedToRelayerEvent.OutputObject>;
    getEvent(key: "StakeBurned"): TypedContractEvent<StakeBurnedEvent.InputTuple, StakeBurnedEvent.OutputTuple, StakeBurnedEvent.OutputObject>;
    getEvent(key: "WorkerRegistered"): TypedContractEvent<WorkerRegisteredEvent.InputTuple, WorkerRegisteredEvent.OutputTuple, WorkerRegisteredEvent.OutputObject>;
    getEvent(key: "WorkerUnregistered"): TypedContractEvent<WorkerUnregisteredEvent.InputTuple, WorkerUnregisteredEvent.OutputTuple, WorkerUnregisteredEvent.OutputObject>;
    filters: {
        "MinimumStakeAmount(uint256)": TypedContractEvent<MinimumStakeAmountEvent.InputTuple, MinimumStakeAmountEvent.OutputTuple, MinimumStakeAmountEvent.OutputObject>;
        MinimumStakeAmount: TypedContractEvent<MinimumStakeAmountEvent.InputTuple, MinimumStakeAmountEvent.OutputTuple, MinimumStakeAmountEvent.OutputObject>;
        "RelayerBalanceNullified(address)": TypedContractEvent<RelayerBalanceNullifiedEvent.InputTuple, RelayerBalanceNullifiedEvent.OutputTuple, RelayerBalanceNullifiedEvent.OutputObject>;
        RelayerBalanceNullified: TypedContractEvent<RelayerBalanceNullifiedEvent.InputTuple, RelayerBalanceNullifiedEvent.OutputTuple, RelayerBalanceNullifiedEvent.OutputObject>;
        "RelayerRegistered(bytes32,string,address,uint256)": TypedContractEvent<RelayerRegisteredEvent.InputTuple, RelayerRegisteredEvent.OutputTuple, RelayerRegisteredEvent.OutputObject>;
        RelayerRegistered: TypedContractEvent<RelayerRegisteredEvent.InputTuple, RelayerRegisteredEvent.OutputTuple, RelayerRegisteredEvent.OutputObject>;
        "RelayerUnregistered(address)": TypedContractEvent<RelayerUnregisteredEvent.InputTuple, RelayerUnregisteredEvent.OutputTuple, RelayerUnregisteredEvent.OutputObject>;
        RelayerUnregistered: TypedContractEvent<RelayerUnregisteredEvent.InputTuple, RelayerUnregisteredEvent.OutputTuple, RelayerUnregisteredEvent.OutputObject>;
        "RouterRegistered(address)": TypedContractEvent<RouterRegisteredEvent.InputTuple, RouterRegisteredEvent.OutputTuple, RouterRegisteredEvent.OutputObject>;
        RouterRegistered: TypedContractEvent<RouterRegisteredEvent.InputTuple, RouterRegisteredEvent.OutputTuple, RouterRegisteredEvent.OutputObject>;
        "StakeAddedToRelayer(address,uint256)": TypedContractEvent<StakeAddedToRelayerEvent.InputTuple, StakeAddedToRelayerEvent.OutputTuple, StakeAddedToRelayerEvent.OutputObject>;
        StakeAddedToRelayer: TypedContractEvent<StakeAddedToRelayerEvent.InputTuple, StakeAddedToRelayerEvent.OutputTuple, StakeAddedToRelayerEvent.OutputObject>;
        "StakeBurned(address,uint256)": TypedContractEvent<StakeBurnedEvent.InputTuple, StakeBurnedEvent.OutputTuple, StakeBurnedEvent.OutputObject>;
        StakeBurned: TypedContractEvent<StakeBurnedEvent.InputTuple, StakeBurnedEvent.OutputTuple, StakeBurnedEvent.OutputObject>;
        "WorkerRegistered(address,address)": TypedContractEvent<WorkerRegisteredEvent.InputTuple, WorkerRegisteredEvent.OutputTuple, WorkerRegisteredEvent.OutputObject>;
        WorkerRegistered: TypedContractEvent<WorkerRegisteredEvent.InputTuple, WorkerRegisteredEvent.OutputTuple, WorkerRegisteredEvent.OutputObject>;
        "WorkerUnregistered(address,address)": TypedContractEvent<WorkerUnregisteredEvent.InputTuple, WorkerUnregisteredEvent.OutputTuple, WorkerUnregisteredEvent.OutputObject>;
        WorkerUnregistered: TypedContractEvent<WorkerUnregisteredEvent.InputTuple, WorkerUnregisteredEvent.OutputTuple, WorkerUnregisteredEvent.OutputObject>;
    };
}
