import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface ITornadoInstanceInterface extends Interface {
    getFunction(nameOrSignature: "denomination" | "deposit" | "token" | "withdraw"): FunctionFragment;
    encodeFunctionData(functionFragment: "denomination", values?: undefined): string;
    encodeFunctionData(functionFragment: "deposit", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "token", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdraw", values: [
        BytesLike,
        BytesLike,
        BytesLike,
        AddressLike,
        AddressLike,
        BigNumberish,
        BigNumberish
    ]): string;
    decodeFunctionResult(functionFragment: "denomination", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}
export interface ITornadoInstance extends BaseContract {
    connect(runner?: ContractRunner | null): ITornadoInstance;
    waitForDeployment(): Promise<this>;
    interface: ITornadoInstanceInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    denomination: TypedContractMethod<[], [bigint], "view">;
    deposit: TypedContractMethod<[commitment: BytesLike], [void], "payable">;
    token: TypedContractMethod<[], [string], "view">;
    withdraw: TypedContractMethod<[
        proof: BytesLike,
        root: BytesLike,
        nullifierHash: BytesLike,
        recipient: AddressLike,
        relayer: AddressLike,
        fee: BigNumberish,
        refund: BigNumberish
    ], [
        void
    ], "payable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "denomination"): TypedContractMethod<[], [bigint], "view">;
    getFunction(nameOrSignature: "deposit"): TypedContractMethod<[commitment: BytesLike], [void], "payable">;
    getFunction(nameOrSignature: "token"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "withdraw"): TypedContractMethod<[
        proof: BytesLike,
        root: BytesLike,
        nullifierHash: BytesLike,
        recipient: AddressLike,
        relayer: AddressLike,
        fee: BigNumberish,
        refund: BigNumberish
    ], [
        void
    ], "payable">;
    filters: {};
}
