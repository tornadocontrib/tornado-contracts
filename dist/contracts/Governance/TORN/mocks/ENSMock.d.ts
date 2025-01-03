import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface ENSMockInterface extends Interface {
    getFunction(nameOrSignature: "addr" | "multicall" | "registry" | "resolver" | "setAddr"): FunctionFragment;
    encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "registry", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "resolver", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "setAddr", values: [BytesLike, AddressLike]): string;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAddr", data: BytesLike): Result;
}
export interface ENSMock extends BaseContract {
    connect(runner?: ContractRunner | null): ENSMock;
    waitForDeployment(): Promise<this>;
    interface: ENSMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addr: TypedContractMethod<[_node: BytesLike], [string], "view">;
    multicall: TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
    registry: TypedContractMethod<[arg0: BytesLike], [string], "view">;
    resolver: TypedContractMethod<[arg0: BytesLike], [string], "view">;
    setAddr: TypedContractMethod<[
        _node: BytesLike,
        _addr: AddressLike
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addr"): TypedContractMethod<[_node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "multicall"): TypedContractMethod<[data: BytesLike[]], [string[]], "nonpayable">;
    getFunction(nameOrSignature: "registry"): TypedContractMethod<[arg0: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "resolver"): TypedContractMethod<[arg0: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "setAddr"): TypedContractMethod<[
        _node: BytesLike,
        _addr: AddressLike
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
