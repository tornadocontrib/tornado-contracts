import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface IERC1155ReceiverInterface extends Interface {
    getFunction(nameOrSignature: "onERC1155BatchReceived" | "onERC1155Received" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [
        AddressLike,
        AddressLike,
        BigNumberish[],
        BigNumberish[],
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
}
export interface IERC1155Receiver extends BaseContract {
    connect(runner?: ContractRunner | null): IERC1155Receiver;
    waitForDeployment(): Promise<this>;
    interface: IERC1155ReceiverInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    onERC1155BatchReceived: TypedContractMethod<[
        operator: AddressLike,
        from: AddressLike,
        ids: BigNumberish[],
        values: BigNumberish[],
        data: BytesLike
    ], [
        string
    ], "nonpayable">;
    onERC1155Received: TypedContractMethod<[
        operator: AddressLike,
        from: AddressLike,
        id: BigNumberish,
        value: BigNumberish,
        data: BytesLike
    ], [
        string
    ], "nonpayable">;
    supportsInterface: TypedContractMethod<[
        interfaceId: BytesLike
    ], [
        boolean
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "onERC1155BatchReceived"): TypedContractMethod<[
        operator: AddressLike,
        from: AddressLike,
        ids: BigNumberish[],
        values: BigNumberish[],
        data: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "onERC1155Received"): TypedContractMethod<[
        operator: AddressLike,
        from: AddressLike,
        id: BigNumberish,
        value: BigNumberish,
        data: BytesLike
    ], [
        string
    ], "nonpayable">;
    getFunction(nameOrSignature: "supportsInterface"): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
    filters: {};
}
