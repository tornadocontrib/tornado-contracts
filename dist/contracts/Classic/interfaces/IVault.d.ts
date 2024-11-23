import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IVaultInterface extends Interface {
    getFunction(nameOrSignature: "deposit" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "deposit", values: [BigNumberish[], AddressLike, AddressLike, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        BigNumberish,
        AddressLike,
        AddressLike,
        BigNumberish,
        AddressLike,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export interface IVault extends BaseContract {
    connect(runner?: ContractRunner | null): IVault;
    waitForDeployment(): Promise<this>;
    interface: IVaultInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    deposit: TypedContractMethod<[
        id: BigNumberish[],
        token: AddressLike,
        from: AddressLike,
        value: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "payable">;
    withdraw: TypedContractMethod<[
        id: BigNumberish,
        token: AddressLike,
        recipient: AddressLike,
        value: BigNumberish,
        relayer: AddressLike,
        fee: BigNumberish,
        refund: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[
        id: BigNumberish[],
        token: AddressLike,
        from: AddressLike,
        value: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "payable">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        id: BigNumberish,
        token: AddressLike,
        recipient: AddressLike,
        value: BigNumberish,
        relayer: AddressLike,
        fee: BigNumberish,
        refund: BigNumberish,
        data: BytesLike
    ], [
        void
    ], "payable">;
    filters: {};
}