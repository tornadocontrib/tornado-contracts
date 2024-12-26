import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../common";
export interface MultiLockInterface extends Interface {
    getFunction(nameOrSignature: "CANCELLER_ROLE" | "DEFAULT_ADMIN_ROLE" | "EXECUTOR_ROLE" | "PROPOSER_ROLE" | "addProposer" | "approve" | "cancel" | "execute" | "executeBatch" | "executed" | "getMinDelay" | "getOperationState" | "getProposers" | "getQuorum" | "getRoleAdmin" | "getTimestamp" | "grantRole" | "hasRole" | "hashOperation" | "hashOperationBatch" | "isApproved" | "isOperation" | "isOperationDone" | "isOperationPending" | "isOperationReady" | "lastExecution" | "lastQueue" | "minQuorum" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "queued" | "removeProposer" | "renounceRole" | "revokeRole" | "schedule" | "scheduleBatch" | "setQuorum" | "supportsInterface" | "updateDelay"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "CallApproved" | "CallDisapproved" | "CallExecuted" | "CallSalt" | "CallScheduled" | "Cancelled" | "MinDelayChange" | "QuorumChange" | "RoleAdminChanged" | "RoleGranted" | "RoleRevoked"): EventFragment;
    encodeFunctionData(functionFragment: "CANCELLER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "EXECUTOR_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "PROPOSER_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "addProposer", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "execute", values: [AddressLike, BigNumberish, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeBatch", values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "executed", values?: undefined): string;
    encodeFunctionData(functionFragment: "getMinDelay", values?: undefined): string;
    encodeFunctionData(functionFragment: "getOperationState", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getProposers", values?: undefined): string;
    encodeFunctionData(functionFragment: "getQuorum", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getTimestamp", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "hashOperation", values: [AddressLike, BigNumberish, BytesLike, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "hashOperationBatch", values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "isApproved", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "isOperation", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isOperationDone", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isOperationPending", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "isOperationReady", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "lastExecution", values?: undefined): string;
    encodeFunctionData(functionFragment: "lastQueue", values?: undefined): string;
    encodeFunctionData(functionFragment: "minQuorum", values?: undefined): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        AddressLike,
        AddressLike,
        BigNumberish[],
        BigNumberish[],
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [AddressLike, AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "queued", values?: undefined): string;
    encodeFunctionData(functionFragment: "removeProposer", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "schedule", values: [
        AddressLike,
        BigNumberish,
        BytesLike,
        BytesLike,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "scheduleBatch", values: [
        AddressLike[],
        BigNumberish[],
        BytesLike[],
        BytesLike,
        BytesLike,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "setQuorum", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updateDelay", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "CANCELLER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "EXECUTOR_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "PROPOSER_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addProposer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMinDelay", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOperationState", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getProposers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hashOperationBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationDone", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationPending", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperationReady", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastExecution", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lastQueue", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "minQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "queued", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeProposer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "scheduleBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setQuorum", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateDelay", data: BytesLike): Result;
}
export declare namespace CallApprovedEvent {
    type InputTuple = [id: BytesLike, proposer: AddressLike];
    type OutputTuple = [id: string, proposer: string];
    interface OutputObject {
        id: string;
        proposer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CallDisapprovedEvent {
    type InputTuple = [id: BytesLike, proposer: AddressLike];
    type OutputTuple = [id: string, proposer: string];
    interface OutputObject {
        id: string;
        proposer: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CallExecutedEvent {
    type InputTuple = [
        id: BytesLike,
        index: BigNumberish,
        target: AddressLike,
        value: BigNumberish,
        data: BytesLike
    ];
    type OutputTuple = [
        id: string,
        index: bigint,
        target: string,
        value: bigint,
        data: string
    ];
    interface OutputObject {
        id: string;
        index: bigint;
        target: string;
        value: bigint;
        data: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CallSaltEvent {
    type InputTuple = [id: BytesLike, salt: BytesLike];
    type OutputTuple = [id: string, salt: string];
    interface OutputObject {
        id: string;
        salt: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CallScheduledEvent {
    type InputTuple = [
        id: BytesLike,
        index: BigNumberish,
        target: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        predecessor: BytesLike,
        delay: BigNumberish
    ];
    type OutputTuple = [
        id: string,
        index: bigint,
        target: string,
        value: bigint,
        data: string,
        predecessor: string,
        delay: bigint
    ];
    interface OutputObject {
        id: string;
        index: bigint;
        target: string;
        value: bigint;
        data: string;
        predecessor: string;
        delay: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CancelledEvent {
    type InputTuple = [id: BytesLike];
    type OutputTuple = [id: string];
    interface OutputObject {
        id: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MinDelayChangeEvent {
    type InputTuple = [
        oldDuration: BigNumberish,
        newDuration: BigNumberish
    ];
    type OutputTuple = [oldDuration: bigint, newDuration: bigint];
    interface OutputObject {
        oldDuration: bigint;
        newDuration: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace QuorumChangeEvent {
    type InputTuple = [oldQuorum: BigNumberish, newQuorum: BigNumberish];
    type OutputTuple = [oldQuorum: bigint, newQuorum: bigint];
    interface OutputObject {
        oldQuorum: bigint;
        newQuorum: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleAdminChangedEvent {
    type InputTuple = [
        role: BytesLike,
        previousAdminRole: BytesLike,
        newAdminRole: BytesLike
    ];
    type OutputTuple = [
        role: string,
        previousAdminRole: string,
        newAdminRole: string
    ];
    interface OutputObject {
        role: string;
        previousAdminRole: string;
        newAdminRole: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleGrantedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace RoleRevokedEvent {
    type InputTuple = [
        role: BytesLike,
        account: AddressLike,
        sender: AddressLike
    ];
    type OutputTuple = [role: string, account: string, sender: string];
    interface OutputObject {
        role: string;
        account: string;
        sender: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface MultiLock extends BaseContract {
    connect(runner?: ContractRunner | null): MultiLock;
    waitForDeployment(): Promise<this>;
    interface: MultiLockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    CANCELLER_ROLE: TypedContractMethod<[], [string], "view">;
    DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;
    EXECUTOR_ROLE: TypedContractMethod<[], [string], "view">;
    PROPOSER_ROLE: TypedContractMethod<[], [string], "view">;
    addProposer: TypedContractMethod<[
        newProposer: AddressLike
    ], [
        void
    ], "nonpayable">;
    approve: TypedContractMethod<[id: BytesLike], [void], "nonpayable">;
    cancel: TypedContractMethod<[id: BytesLike], [void], "nonpayable">;
    execute: TypedContractMethod<[
        target: AddressLike,
        value: BigNumberish,
        payload: BytesLike,
        predecessor: BytesLike,
        salt: BytesLike
    ], [
        void
    ], "payable">;
    executeBatch: TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        payloads: BytesLike[],
        predecessor: BytesLike,
        salt: BytesLike
    ], [
        void
    ], "payable">;
    executed: TypedContractMethod<[], [bigint], "view">;
    getMinDelay: TypedContractMethod<[], [bigint], "view">;
    getOperationState: TypedContractMethod<[id: BytesLike], [bigint], "view">;
    getProposers: TypedContractMethod<[], [string[]], "view">;
    getQuorum: TypedContractMethod<[id: BytesLike], [bigint], "view">;
    getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;
    getTimestamp: TypedContractMethod<[id: BytesLike], [bigint], "view">;
    grantRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    hasRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    hashOperation: TypedContractMethod<[
        target: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        predecessor: BytesLike,
        salt: BytesLike
    ], [
        string
    ], "view">;
    hashOperationBatch: TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        payloads: BytesLike[],
        predecessor: BytesLike,
        salt: BytesLike
    ], [
        string
    ], "view">;
    isApproved: TypedContractMethod<[
        arg0: BytesLike,
        arg1: AddressLike
    ], [
        boolean
    ], "view">;
    isOperation: TypedContractMethod<[id: BytesLike], [boolean], "view">;
    isOperationDone: TypedContractMethod<[id: BytesLike], [boolean], "view">;
    isOperationPending: TypedContractMethod<[id: BytesLike], [boolean], "view">;
    isOperationReady: TypedContractMethod<[id: BytesLike], [boolean], "view">;
    lastExecution: TypedContractMethod<[], [bigint], "view">;
    lastQueue: TypedContractMethod<[], [bigint], "view">;
    minQuorum: TypedContractMethod<[], [bigint], "view">;
    onERC1155BatchReceived: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish[],
        arg3: BigNumberish[],
        arg4: BytesLike
    ], [
        string
    ], "nonpayable">;
    onERC1155Received: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish,
        arg3: BigNumberish,
        arg4: BytesLike
    ], [
        string
    ], "nonpayable">;
    onERC721Received: TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish,
        arg3: BytesLike
    ], [
        string
    ], "nonpayable">;
    queued: TypedContractMethod<[], [bigint], "view">;
    removeProposer: TypedContractMethod<[
        oldProposer: AddressLike
    ], [
        void
    ], "nonpayable">;
    renounceRole: TypedContractMethod<[
        role: BytesLike,
        callerConfirmation: AddressLike
    ], [
        void
    ], "nonpayable">;
    revokeRole: TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    schedule: TypedContractMethod<[
        target: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        predecessor: BytesLike,
        salt: BytesLike,
        delay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    scheduleBatch: TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        payloads: BytesLike[],
        predecessor: BytesLike,
        salt: BytesLike,
        delay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setQuorum: TypedContractMethod<[
        newQuorum: BigNumberish
    ], [
        void
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    updateDelay: TypedContractMethod<[
        newDelay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "CANCELLER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "DEFAULT_ADMIN_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "EXECUTOR_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "PROPOSER_ROLE"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "addProposer"): TypedContractMethod<[newProposer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[id: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "cancel"): TypedContractMethod<[id: BytesLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "execute"): TypedContractMethod<[
        target: AddressLike,
        value: BigNumberish,
        payload: BytesLike,
        predecessor: BytesLike,
        salt: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "executeBatch"): TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        payloads: BytesLike[],
        predecessor: BytesLike,
        salt: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "executed"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getMinDelay"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "getOperationState"): TypedContractMethod<[id: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "getProposers"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getQuorum"): TypedContractMethod<[id: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "getRoleAdmin"): TypedContractMethod<[role: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "getTimestamp"): TypedContractMethod<[id: BytesLike], [bigint], "view">;
    getFunction(nameOrSignature: "grantRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "hasRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "hashOperation"): TypedContractMethod<[
        target: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        predecessor: BytesLike,
        salt: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "hashOperationBatch"): TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        payloads: BytesLike[],
        predecessor: BytesLike,
        salt: BytesLike
    ], [
        string
    ], "view">;
    getFunction(nameOrSignature: "isApproved"): TypedContractMethod<[
        arg0: BytesLike,
        arg1: AddressLike
    ], [
        boolean
    ], "view">;
    getFunction(nameOrSignature: "isOperation"): TypedContractMethod<[id: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "isOperationDone"): TypedContractMethod<[id: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "isOperationPending"): TypedContractMethod<[id: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "isOperationReady"): TypedContractMethod<[id: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "lastExecution"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "lastQueue"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "minQuorum"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "onERC1155BatchReceived"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish[],
        arg3: BigNumberish[],
        arg4: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "onERC1155Received"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish,
        arg3: BigNumberish,
        arg4: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "onERC721Received"): TypedContractMethod<[
        arg0: AddressLike,
        arg1: AddressLike,
        arg2: BigNumberish,
        arg3: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "queued"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "removeProposer"): TypedContractMethod<[oldProposer: AddressLike], [void], "nonpayable">;
    getFunction(nameOrSignature: "renounceRole"): TypedContractMethod<[
        role: BytesLike,
        callerConfirmation: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "revokeRole"): TypedContractMethod<[
        role: BytesLike,
        account: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "schedule"): TypedContractMethod<[
        target: AddressLike,
        value: BigNumberish,
        data: BytesLike,
        predecessor: BytesLike,
        salt: BytesLike,
        delay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "scheduleBatch"): TypedContractMethod<[
        targets: AddressLike[],
        values: BigNumberish[],
        payloads: BytesLike[],
        predecessor: BytesLike,
        salt: BytesLike,
        delay: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setQuorum"): TypedContractMethod<[newQuorum: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    getFunction(nameOrSignature: "updateDelay"): TypedContractMethod<[newDelay: BigNumberish], [void], "nonpayable">;
    getEvent(key: "CallApproved"): TypedContractEvent<CallApprovedEvent.InputTuple, CallApprovedEvent.OutputTuple, CallApprovedEvent.OutputObject>;
    getEvent(key: "CallDisapproved"): TypedContractEvent<CallDisapprovedEvent.InputTuple, CallDisapprovedEvent.OutputTuple, CallDisapprovedEvent.OutputObject>;
    getEvent(key: "CallExecuted"): TypedContractEvent<CallExecutedEvent.InputTuple, CallExecutedEvent.OutputTuple, CallExecutedEvent.OutputObject>;
    getEvent(key: "CallSalt"): TypedContractEvent<CallSaltEvent.InputTuple, CallSaltEvent.OutputTuple, CallSaltEvent.OutputObject>;
    getEvent(key: "CallScheduled"): TypedContractEvent<CallScheduledEvent.InputTuple, CallScheduledEvent.OutputTuple, CallScheduledEvent.OutputObject>;
    getEvent(key: "Cancelled"): TypedContractEvent<CancelledEvent.InputTuple, CancelledEvent.OutputTuple, CancelledEvent.OutputObject>;
    getEvent(key: "MinDelayChange"): TypedContractEvent<MinDelayChangeEvent.InputTuple, MinDelayChangeEvent.OutputTuple, MinDelayChangeEvent.OutputObject>;
    getEvent(key: "QuorumChange"): TypedContractEvent<QuorumChangeEvent.InputTuple, QuorumChangeEvent.OutputTuple, QuorumChangeEvent.OutputObject>;
    getEvent(key: "RoleAdminChanged"): TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
    getEvent(key: "RoleGranted"): TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
    getEvent(key: "RoleRevoked"): TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    filters: {
        "CallApproved(bytes32,address)": TypedContractEvent<CallApprovedEvent.InputTuple, CallApprovedEvent.OutputTuple, CallApprovedEvent.OutputObject>;
        CallApproved: TypedContractEvent<CallApprovedEvent.InputTuple, CallApprovedEvent.OutputTuple, CallApprovedEvent.OutputObject>;
        "CallDisapproved(bytes32,address)": TypedContractEvent<CallDisapprovedEvent.InputTuple, CallDisapprovedEvent.OutputTuple, CallDisapprovedEvent.OutputObject>;
        CallDisapproved: TypedContractEvent<CallDisapprovedEvent.InputTuple, CallDisapprovedEvent.OutputTuple, CallDisapprovedEvent.OutputObject>;
        "CallExecuted(bytes32,uint256,address,uint256,bytes)": TypedContractEvent<CallExecutedEvent.InputTuple, CallExecutedEvent.OutputTuple, CallExecutedEvent.OutputObject>;
        CallExecuted: TypedContractEvent<CallExecutedEvent.InputTuple, CallExecutedEvent.OutputTuple, CallExecutedEvent.OutputObject>;
        "CallSalt(bytes32,bytes32)": TypedContractEvent<CallSaltEvent.InputTuple, CallSaltEvent.OutputTuple, CallSaltEvent.OutputObject>;
        CallSalt: TypedContractEvent<CallSaltEvent.InputTuple, CallSaltEvent.OutputTuple, CallSaltEvent.OutputObject>;
        "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": TypedContractEvent<CallScheduledEvent.InputTuple, CallScheduledEvent.OutputTuple, CallScheduledEvent.OutputObject>;
        CallScheduled: TypedContractEvent<CallScheduledEvent.InputTuple, CallScheduledEvent.OutputTuple, CallScheduledEvent.OutputObject>;
        "Cancelled(bytes32)": TypedContractEvent<CancelledEvent.InputTuple, CancelledEvent.OutputTuple, CancelledEvent.OutputObject>;
        Cancelled: TypedContractEvent<CancelledEvent.InputTuple, CancelledEvent.OutputTuple, CancelledEvent.OutputObject>;
        "MinDelayChange(uint256,uint256)": TypedContractEvent<MinDelayChangeEvent.InputTuple, MinDelayChangeEvent.OutputTuple, MinDelayChangeEvent.OutputObject>;
        MinDelayChange: TypedContractEvent<MinDelayChangeEvent.InputTuple, MinDelayChangeEvent.OutputTuple, MinDelayChangeEvent.OutputObject>;
        "QuorumChange(uint256,uint256)": TypedContractEvent<QuorumChangeEvent.InputTuple, QuorumChangeEvent.OutputTuple, QuorumChangeEvent.OutputObject>;
        QuorumChange: TypedContractEvent<QuorumChangeEvent.InputTuple, QuorumChangeEvent.OutputTuple, QuorumChangeEvent.OutputObject>;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        RoleAdminChanged: TypedContractEvent<RoleAdminChangedEvent.InputTuple, RoleAdminChangedEvent.OutputTuple, RoleAdminChangedEvent.OutputObject>;
        "RoleGranted(bytes32,address,address)": TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        RoleGranted: TypedContractEvent<RoleGrantedEvent.InputTuple, RoleGrantedEvent.OutputTuple, RoleGrantedEvent.OutputObject>;
        "RoleRevoked(bytes32,address,address)": TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
        RoleRevoked: TypedContractEvent<RoleRevokedEvent.InputTuple, RoleRevokedEvent.OutputTuple, RoleRevokedEvent.OutputObject>;
    };
}
