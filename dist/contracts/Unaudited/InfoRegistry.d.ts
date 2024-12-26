import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export declare namespace InfoRegistry {
    type NetInfoStruct = {
        chainId: BigNumberish;
        netInfo: BytesLike;
    };
    type NetInfoStructOutput = [chainId: bigint, netInfo: string] & {
        chainId: bigint;
        netInfo: string;
    };
    type RpcInfoStruct = {
        chainId: BigNumberish;
        url: string;
        isPrior: boolean;
    };
    type RpcInfoStructOutput = [
        chainId: bigint,
        url: string,
        isPrior: boolean
    ] & {
        chainId: bigint;
        url: string;
        isPrior: boolean;
    };
    type TokenInfoStruct = {
        chainId: BigNumberish;
        addr: AddressLike;
        name: string;
        symbol: string;
        decimals: BigNumberish;
        transferGas: BigNumberish;
    };
    type TokenInfoStructOutput = [
        chainId: bigint,
        addr: string,
        name: string,
        symbol: string,
        decimals: bigint,
        transferGas: bigint
    ] & {
        chainId: bigint;
        addr: string;
        name: string;
        symbol: string;
        decimals: bigint;
        transferGas: bigint;
    };
    type InstanceInfoStruct = {
        chainId: BigNumberish;
        addr: AddressLike;
        denomination: BigNumberish;
        tokenAddress: AddressLike;
        instanceApproval: boolean;
        isOptional: boolean;
        isDisabled: boolean;
    };
    type InstanceInfoStructOutput = [
        chainId: bigint,
        addr: string,
        denomination: bigint,
        tokenAddress: string,
        instanceApproval: boolean,
        isOptional: boolean,
        isDisabled: boolean
    ] & {
        chainId: bigint;
        addr: string;
        denomination: bigint;
        tokenAddress: string;
        instanceApproval: boolean;
        isOptional: boolean;
        isDisabled: boolean;
    };
}
export interface InfoRegistryInterface extends Interface {
    getFunction(nameOrSignature: "addChain" | "addInfos" | "addRpc" | "addToken" | "bumpRevision" | "chainIds" | "getChainIds" | "getInstances" | "getNetInfos" | "getRpchashes" | "getRpcs" | "getTokens" | "hasChainId" | "instanceNonce" | "instances" | "netInfos" | "owner" | "revision" | "rpcInfos" | "tokenNonce" | "tokens" | "updateInstance" | "updateOwner"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "AddedChain" | "AddedRpc" | "AddedToken" | "BumpedRevision" | "RemovedRpc" | "UpdatedInstance" | "UpdatedOwner"): EventFragment;
    encodeFunctionData(functionFragment: "addChain", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "addInfos", values: [
        InfoRegistry.NetInfoStruct[],
        InfoRegistry.RpcInfoStruct[],
        InfoRegistry.TokenInfoStruct[],
        InfoRegistry.InstanceInfoStruct[]
    ]): string;
    encodeFunctionData(functionFragment: "addRpc", values: [BigNumberish, string, boolean]): string;
    encodeFunctionData(functionFragment: "addToken", values: [InfoRegistry.TokenInfoStruct]): string;
    encodeFunctionData(functionFragment: "bumpRevision", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainIds", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getChainIds", values?: undefined): string;
    encodeFunctionData(functionFragment: "getInstances", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNetInfos", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRpchashes", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRpcs", values?: undefined): string;
    encodeFunctionData(functionFragment: "getTokens", values?: undefined): string;
    encodeFunctionData(functionFragment: "hasChainId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "instanceNonce", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "instances", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "netInfos", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "revision", values?: undefined): string;
    encodeFunctionData(functionFragment: "rpcInfos", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokenNonce", values: [BigNumberish, AddressLike]): string;
    encodeFunctionData(functionFragment: "tokens", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "updateInstance", values: [InfoRegistry.InstanceInfoStruct]): string;
    encodeFunctionData(functionFragment: "updateOwner", values: [AddressLike]): string;
    decodeFunctionResult(functionFragment: "addChain", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addRpc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bumpRevision", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getChainIds", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getInstances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNetInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRpchashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRpcs", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instanceNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "instances", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "netInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revision", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rpcInfos", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateInstance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOwner", data: BytesLike): Result;
}
export declare namespace AddedChainEvent {
    type InputTuple = [
        revision: BigNumberish,
        chainId: BigNumberish,
        netInfo: BytesLike
    ];
    type OutputTuple = [
        revision: bigint,
        chainId: bigint,
        netInfo: string
    ];
    interface OutputObject {
        revision: bigint;
        chainId: bigint;
        netInfo: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddedRpcEvent {
    type InputTuple = [
        chainId: BigNumberish,
        url: string,
        isPrior: boolean
    ];
    type OutputTuple = [chainId: bigint, url: string, isPrior: boolean];
    interface OutputObject {
        chainId: bigint;
        url: string;
        isPrior: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace AddedTokenEvent {
    type InputTuple = [
        chainId: BigNumberish,
        addr: AddressLike,
        name: string,
        symbol: string,
        decimals: BigNumberish,
        transferGas: BigNumberish,
        nonce: BigNumberish
    ];
    type OutputTuple = [
        chainId: bigint,
        addr: string,
        name: string,
        symbol: string,
        decimals: bigint,
        transferGas: bigint,
        nonce: bigint
    ];
    interface OutputObject {
        chainId: bigint;
        addr: string;
        name: string;
        symbol: string;
        decimals: bigint;
        transferGas: bigint;
        nonce: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace BumpedRevisionEvent {
    type InputTuple = [newRevision: BigNumberish];
    type OutputTuple = [newRevision: bigint];
    interface OutputObject {
        newRevision: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RemovedRpcEvent {
    type InputTuple = [
        chainId: BigNumberish,
        url: string,
        isPrior: boolean
    ];
    type OutputTuple = [chainId: bigint, url: string, isPrior: boolean];
    interface OutputObject {
        chainId: bigint;
        url: string;
        isPrior: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedInstanceEvent {
    type InputTuple = [
        chainId: BigNumberish,
        addr: AddressLike,
        denomination: BigNumberish,
        tokenAddress: AddressLike,
        instanceApproval: boolean,
        isOptional: boolean,
        isDisabled: boolean,
        nonce: BigNumberish,
        pushed: boolean
    ];
    type OutputTuple = [
        chainId: bigint,
        addr: string,
        denomination: bigint,
        tokenAddress: string,
        instanceApproval: boolean,
        isOptional: boolean,
        isDisabled: boolean,
        nonce: bigint,
        pushed: boolean
    ];
    interface OutputObject {
        chainId: bigint;
        addr: string;
        denomination: bigint;
        tokenAddress: string;
        instanceApproval: boolean;
        isOptional: boolean;
        isDisabled: boolean;
        nonce: bigint;
        pushed: boolean;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UpdatedOwnerEvent {
    type InputTuple = [newOwner: AddressLike];
    type OutputTuple = [newOwner: string];
    interface OutputObject {
        newOwner: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface InfoRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): InfoRegistry;
    waitForDeployment(): Promise<this>;
    interface: InfoRegistryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addChain: TypedContractMethod<[
        chainId: BigNumberish,
        netInfo: BytesLike
    ], [
        void
    ], "nonpayable">;
    addInfos: TypedContractMethod<[
        _chains: InfoRegistry.NetInfoStruct[],
        _rpcs: InfoRegistry.RpcInfoStruct[],
        _tokens: InfoRegistry.TokenInfoStruct[],
        _instances: InfoRegistry.InstanceInfoStruct[]
    ], [
        void
    ], "nonpayable">;
    addRpc: TypedContractMethod<[
        chainId: BigNumberish,
        url: string,
        isPrior: boolean
    ], [
        void
    ], "nonpayable">;
    addToken: TypedContractMethod<[
        token: InfoRegistry.TokenInfoStruct
    ], [
        void
    ], "nonpayable">;
    bumpRevision: TypedContractMethod<[], [void], "nonpayable">;
    chainIds: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getChainIds: TypedContractMethod<[], [bigint[]], "view">;
    getInstances: TypedContractMethod<[
    ], [
        InfoRegistry.InstanceInfoStructOutput[]
    ], "view">;
    getNetInfos: TypedContractMethod<[
        _revision: BigNumberish
    ], [
        string[]
    ], "view">;
    getRpchashes: TypedContractMethod<[], [string[]], "view">;
    getRpcs: TypedContractMethod<[
    ], [
        InfoRegistry.RpcInfoStructOutput[]
    ], "view">;
    getTokens: TypedContractMethod<[
    ], [
        InfoRegistry.TokenInfoStructOutput[]
    ], "view">;
    hasChainId: TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
    instanceNonce: TypedContractMethod<[
        arg0: BigNumberish,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    instances: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            string,
            boolean,
            boolean,
            boolean
        ] & {
            chainId: bigint;
            addr: string;
            denomination: bigint;
            tokenAddress: string;
            instanceApproval: boolean;
            isOptional: boolean;
            isDisabled: boolean;
        }
    ], "view">;
    netInfos: TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        string
    ], "view">;
    owner: TypedContractMethod<[], [string], "view">;
    revision: TypedContractMethod<[], [bigint], "view">;
    rpcInfos: TypedContractMethod<[
        arg0: BytesLike
    ], [
        [
            bigint,
            string,
            boolean
        ] & {
            chainId: bigint;
            url: string;
            isPrior: boolean;
        }
    ], "view">;
    tokenNonce: TypedContractMethod<[
        arg0: BigNumberish,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    tokens: TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            string,
            string,
            bigint,
            bigint
        ] & {
            chainId: bigint;
            addr: string;
            name: string;
            symbol: string;
            decimals: bigint;
            transferGas: bigint;
        }
    ], "view">;
    updateInstance: TypedContractMethod<[
        instance: InfoRegistry.InstanceInfoStruct
    ], [
        void
    ], "nonpayable">;
    updateOwner: TypedContractMethod<[
        newOwner: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addChain"): TypedContractMethod<[
        chainId: BigNumberish,
        netInfo: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addInfos"): TypedContractMethod<[
        _chains: InfoRegistry.NetInfoStruct[],
        _rpcs: InfoRegistry.RpcInfoStruct[],
        _tokens: InfoRegistry.TokenInfoStruct[],
        _instances: InfoRegistry.InstanceInfoStruct[]
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addRpc"): TypedContractMethod<[
        chainId: BigNumberish,
        url: string,
        isPrior: boolean
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "addToken"): TypedContractMethod<[
        token: InfoRegistry.TokenInfoStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "bumpRevision"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "chainIds"): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
    getFunction(nameOrSignature: "getChainIds"): TypedContractMethod<[], [bigint[]], "view">;
    getFunction(nameOrSignature: "getInstances"): TypedContractMethod<[], [InfoRegistry.InstanceInfoStructOutput[]], "view">;
    getFunction(nameOrSignature: "getNetInfos"): TypedContractMethod<[_revision: BigNumberish], [string[]], "view">;
    getFunction(nameOrSignature: "getRpchashes"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getRpcs"): TypedContractMethod<[], [InfoRegistry.RpcInfoStructOutput[]], "view">;
    getFunction(nameOrSignature: "getTokens"): TypedContractMethod<[], [InfoRegistry.TokenInfoStructOutput[]], "view">;
    getFunction(nameOrSignature: "hasChainId"): TypedContractMethod<[arg0: BigNumberish], [boolean], "view">;
    getFunction(nameOrSignature: "instanceNonce"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "instances"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            bigint,
            string,
            boolean,
            boolean,
            boolean
        ] & {
            chainId: bigint;
            addr: string;
            denomination: bigint;
            tokenAddress: string;
            instanceApproval: boolean;
            isOptional: boolean;
            isDisabled: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "netInfos"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: BigNumberish
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "revision"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "rpcInfos"): TypedContractMethod<[
        arg0: BytesLike
    ], [
        [
            bigint,
            string,
            boolean
        ] & {
            chainId: bigint;
            url: string;
            isPrior: boolean;
        }
    ], "view">;
    getFunction(nameOrSignature: "tokenNonce"): TypedContractMethod<[
        arg0: BigNumberish,
        arg1: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "tokens"): TypedContractMethod<[
        arg0: BigNumberish
    ], [
        [
            bigint,
            string,
            string,
            string,
            bigint,
            bigint
        ] & {
            chainId: bigint;
            addr: string;
            name: string;
            symbol: string;
            decimals: bigint;
            transferGas: bigint;
        }
    ], "view">;
    getFunction(nameOrSignature: "updateInstance"): TypedContractMethod<[
        instance: InfoRegistry.InstanceInfoStruct
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "updateOwner"): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
    getEvent(key: "AddedChain"): TypedContractEvent<AddedChainEvent.InputTuple, AddedChainEvent.OutputTuple, AddedChainEvent.OutputObject>;
    getEvent(key: "AddedRpc"): TypedContractEvent<AddedRpcEvent.InputTuple, AddedRpcEvent.OutputTuple, AddedRpcEvent.OutputObject>;
    getEvent(key: "AddedToken"): TypedContractEvent<AddedTokenEvent.InputTuple, AddedTokenEvent.OutputTuple, AddedTokenEvent.OutputObject>;
    getEvent(key: "BumpedRevision"): TypedContractEvent<BumpedRevisionEvent.InputTuple, BumpedRevisionEvent.OutputTuple, BumpedRevisionEvent.OutputObject>;
    getEvent(key: "RemovedRpc"): TypedContractEvent<RemovedRpcEvent.InputTuple, RemovedRpcEvent.OutputTuple, RemovedRpcEvent.OutputObject>;
    getEvent(key: "UpdatedInstance"): TypedContractEvent<UpdatedInstanceEvent.InputTuple, UpdatedInstanceEvent.OutputTuple, UpdatedInstanceEvent.OutputObject>;
    getEvent(key: "UpdatedOwner"): TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
    filters: {
        "AddedChain(uint16,uint64,bytes)": TypedContractEvent<AddedChainEvent.InputTuple, AddedChainEvent.OutputTuple, AddedChainEvent.OutputObject>;
        AddedChain: TypedContractEvent<AddedChainEvent.InputTuple, AddedChainEvent.OutputTuple, AddedChainEvent.OutputObject>;
        "AddedRpc(uint64,string,bool)": TypedContractEvent<AddedRpcEvent.InputTuple, AddedRpcEvent.OutputTuple, AddedRpcEvent.OutputObject>;
        AddedRpc: TypedContractEvent<AddedRpcEvent.InputTuple, AddedRpcEvent.OutputTuple, AddedRpcEvent.OutputObject>;
        "AddedToken(uint64,address,string,string,uint8,uint32,uint16)": TypedContractEvent<AddedTokenEvent.InputTuple, AddedTokenEvent.OutputTuple, AddedTokenEvent.OutputObject>;
        AddedToken: TypedContractEvent<AddedTokenEvent.InputTuple, AddedTokenEvent.OutputTuple, AddedTokenEvent.OutputObject>;
        "BumpedRevision(uint16)": TypedContractEvent<BumpedRevisionEvent.InputTuple, BumpedRevisionEvent.OutputTuple, BumpedRevisionEvent.OutputObject>;
        BumpedRevision: TypedContractEvent<BumpedRevisionEvent.InputTuple, BumpedRevisionEvent.OutputTuple, BumpedRevisionEvent.OutputObject>;
        "RemovedRpc(uint64,string,bool)": TypedContractEvent<RemovedRpcEvent.InputTuple, RemovedRpcEvent.OutputTuple, RemovedRpcEvent.OutputObject>;
        RemovedRpc: TypedContractEvent<RemovedRpcEvent.InputTuple, RemovedRpcEvent.OutputTuple, RemovedRpcEvent.OutputObject>;
        "UpdatedInstance(uint64,address,uint256,address,bool,bool,bool,uint16,bool)": TypedContractEvent<UpdatedInstanceEvent.InputTuple, UpdatedInstanceEvent.OutputTuple, UpdatedInstanceEvent.OutputObject>;
        UpdatedInstance: TypedContractEvent<UpdatedInstanceEvent.InputTuple, UpdatedInstanceEvent.OutputTuple, UpdatedInstanceEvent.OutputObject>;
        "UpdatedOwner(address)": TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
        UpdatedOwner: TypedContractEvent<UpdatedOwnerEvent.InputTuple, UpdatedOwnerEvent.OutputTuple, UpdatedOwnerEvent.OutputObject>;
    };
}
