import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener, TypedContractMethod } from "../../../../common";
export declare namespace TORN {
    type RecipientStruct = {
        to: AddressLike;
        amount: BigNumberish;
    };
    type RecipientStructOutput = [to: string, amount: bigint] & {
        to: string;
        amount: bigint;
    };
}
export interface TORNMockInterface extends Interface {
    getFunction(nameOrSignature: "addToAllowedList" | "allowance" | "allowedTransferee" | "approve" | "balanceOf" | "blockTimestamp" | "burn" | "burnFrom" | "canUnpauseAfter" | "chainID" | "chainId" | "changeTransferability" | "decimals" | "decreaseAllowance" | "fakeTimestamp" | "governance" | "increaseAllowance" | "name" | "nonces" | "paused" | "permit" | "removeFromAllowedList" | "rescueTokens" | "setChainId" | "setFakeTimestamp" | "symbol" | "totalSupply" | "transfer" | "transferFrom"): FunctionFragment;
    getEvent(nameOrSignatureOrTopic: "Allowed" | "Approval" | "Disallowed" | "Paused" | "Transfer" | "Unpaused"): EventFragment;
    encodeFunctionData(functionFragment: "addToAllowedList", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "allowance", values: [AddressLike, AddressLike]): string;
    encodeFunctionData(functionFragment: "allowedTransferee", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "approve", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "blockTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "canUnpauseAfter", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainID", values?: undefined): string;
    encodeFunctionData(functionFragment: "chainId", values?: undefined): string;
    encodeFunctionData(functionFragment: "changeTransferability", values: [boolean]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "fakeTimestamp", values?: undefined): string;
    encodeFunctionData(functionFragment: "governance", values?: undefined): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;
    encodeFunctionData(functionFragment: "paused", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "removeFromAllowedList", values: [AddressLike[]]): string;
    encodeFunctionData(functionFragment: "rescueTokens", values: [AddressLike, AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setChainId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFakeTimestamp", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [AddressLike, AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addToAllowedList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowedTransferee", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "blockTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "canUnpauseAfter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "chainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "changeTransferability", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fakeTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeFromAllowedList", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "rescueTokens", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setChainId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFakeTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
}
export declare namespace AllowedEvent {
    type InputTuple = [target: AddressLike];
    type OutputTuple = [target: string];
    interface OutputObject {
        target: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace ApprovalEvent {
    type InputTuple = [
        owner: AddressLike,
        spender: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [owner: string, spender: string, value: bigint];
    interface OutputObject {
        owner: string;
        spender: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace DisallowedEvent {
    type InputTuple = [target: AddressLike];
    type OutputTuple = [target: string];
    interface OutputObject {
        target: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace PausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace TransferEvent {
    type InputTuple = [
        from: AddressLike,
        to: AddressLike,
        value: BigNumberish
    ];
    type OutputTuple = [from: string, to: string, value: bigint];
    interface OutputObject {
        from: string;
        to: string;
        value: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace UnpausedEvent {
    type InputTuple = [account: AddressLike];
    type OutputTuple = [account: string];
    interface OutputObject {
        account: string;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface TORNMock extends BaseContract {
    connect(runner?: ContractRunner | null): TORNMock;
    waitForDeployment(): Promise<this>;
    interface: TORNMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addToAllowedList: TypedContractMethod<[
        target: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    allowance: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    allowedTransferee: TypedContractMethod<[
        arg0: AddressLike
    ], [
        boolean
    ], "view">;
    approve: TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;
    blockTimestamp: TypedContractMethod<[], [bigint], "view">;
    burn: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    burnFrom: TypedContractMethod<[
        account: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    canUnpauseAfter: TypedContractMethod<[], [bigint], "view">;
    chainID: TypedContractMethod<[], [bigint], "view">;
    chainId: TypedContractMethod<[], [bigint], "view">;
    changeTransferability: TypedContractMethod<[
        decision: boolean
    ], [
        void
    ], "nonpayable">;
    decimals: TypedContractMethod<[], [bigint], "view">;
    decreaseAllowance: TypedContractMethod<[
        spender: AddressLike,
        subtractedValue: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    fakeTimestamp: TypedContractMethod<[], [bigint], "view">;
    governance: TypedContractMethod<[], [string], "view">;
    increaseAllowance: TypedContractMethod<[
        spender: AddressLike,
        addedValue: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    name: TypedContractMethod<[], [string], "view">;
    nonces: TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    paused: TypedContractMethod<[], [boolean], "view">;
    permit: TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike,
        amount: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    removeFromAllowedList: TypedContractMethod<[
        target: AddressLike[]
    ], [
        void
    ], "nonpayable">;
    rescueTokens: TypedContractMethod<[
        _token: AddressLike,
        _to: AddressLike,
        _balance: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setChainId: TypedContractMethod<[
        _chainId: BigNumberish
    ], [
        void
    ], "nonpayable">;
    setFakeTimestamp: TypedContractMethod<[
        _fakeTimestamp: BigNumberish
    ], [
        void
    ], "nonpayable">;
    symbol: TypedContractMethod<[], [string], "view">;
    totalSupply: TypedContractMethod<[], [bigint], "view">;
    transfer: TypedContractMethod<[
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    transferFrom: TypedContractMethod<[
        sender: AddressLike,
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addToAllowedList"): TypedContractMethod<[target: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "allowance"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike
    ], [
        bigint
    ], "view">;
    getFunction(nameOrSignature: "allowedTransferee"): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
    getFunction(nameOrSignature: "approve"): TypedContractMethod<[
        spender: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "balanceOf"): TypedContractMethod<[account: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "blockTimestamp"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "burn"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "burnFrom"): TypedContractMethod<[
        account: AddressLike,
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "canUnpauseAfter"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "chainID"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "chainId"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "changeTransferability"): TypedContractMethod<[decision: boolean], [void], "nonpayable">;
    getFunction(nameOrSignature: "decimals"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "decreaseAllowance"): TypedContractMethod<[
        spender: AddressLike,
        subtractedValue: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "fakeTimestamp"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "governance"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "increaseAllowance"): TypedContractMethod<[
        spender: AddressLike,
        addedValue: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "name"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "nonces"): TypedContractMethod<[owner: AddressLike], [bigint], "view">;
    getFunction(nameOrSignature: "paused"): TypedContractMethod<[], [boolean], "view">;
    getFunction(nameOrSignature: "permit"): TypedContractMethod<[
        owner: AddressLike,
        spender: AddressLike,
        amount: BigNumberish,
        deadline: BigNumberish,
        v: BigNumberish,
        r: BytesLike,
        s: BytesLike
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "removeFromAllowedList"): TypedContractMethod<[target: AddressLike[]], [void], "nonpayable">;
    getFunction(nameOrSignature: "rescueTokens"): TypedContractMethod<[
        _token: AddressLike,
        _to: AddressLike,
        _balance: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "setChainId"): TypedContractMethod<[_chainId: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "setFakeTimestamp"): TypedContractMethod<[_fakeTimestamp: BigNumberish], [void], "nonpayable">;
    getFunction(nameOrSignature: "symbol"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "totalSupply"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "transfer"): TypedContractMethod<[
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getFunction(nameOrSignature: "transferFrom"): TypedContractMethod<[
        sender: AddressLike,
        recipient: AddressLike,
        amount: BigNumberish
    ], [
        boolean
    ], "nonpayable">;
    getEvent(key: "Allowed"): TypedContractEvent<AllowedEvent.InputTuple, AllowedEvent.OutputTuple, AllowedEvent.OutputObject>;
    getEvent(key: "Approval"): TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
    getEvent(key: "Disallowed"): TypedContractEvent<DisallowedEvent.InputTuple, DisallowedEvent.OutputTuple, DisallowedEvent.OutputObject>;
    getEvent(key: "Paused"): TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
    getEvent(key: "Transfer"): TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
    getEvent(key: "Unpaused"): TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    filters: {
        "Allowed(address)": TypedContractEvent<AllowedEvent.InputTuple, AllowedEvent.OutputTuple, AllowedEvent.OutputObject>;
        Allowed: TypedContractEvent<AllowedEvent.InputTuple, AllowedEvent.OutputTuple, AllowedEvent.OutputObject>;
        "Approval(address,address,uint256)": TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        Approval: TypedContractEvent<ApprovalEvent.InputTuple, ApprovalEvent.OutputTuple, ApprovalEvent.OutputObject>;
        "Disallowed(address)": TypedContractEvent<DisallowedEvent.InputTuple, DisallowedEvent.OutputTuple, DisallowedEvent.OutputObject>;
        Disallowed: TypedContractEvent<DisallowedEvent.InputTuple, DisallowedEvent.OutputTuple, DisallowedEvent.OutputObject>;
        "Paused(address)": TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        Paused: TypedContractEvent<PausedEvent.InputTuple, PausedEvent.OutputTuple, PausedEvent.OutputObject>;
        "Transfer(address,address,uint256)": TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        Transfer: TypedContractEvent<TransferEvent.InputTuple, TransferEvent.OutputTuple, TransferEvent.OutputObject>;
        "Unpaused(address)": TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
        Unpaused: TypedContractEvent<UnpausedEvent.InputTuple, UnpausedEvent.OutputTuple, UnpausedEvent.OutputObject>;
    };
}
