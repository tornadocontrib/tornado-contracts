import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export declare namespace Airdrop {
    type RecipientStruct = {
        to: AddressLike;
        amount: BigNumberish;
    };
    type RecipientStructOutput = [to: string, amount: bigint] & {
        to: string;
        amount: bigint;
    };
}
export interface AirdropMockInterface extends Interface {
    getFunction(nameOrSignature: "bulkResolve" | "resolve"): FunctionFragment;
    encodeFunctionData(functionFragment: "bulkResolve", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "resolve", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "bulkResolve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolve", data: BytesLike): Result;
}
export interface AirdropMock extends BaseContract {
    connect(runner?: ContractRunner | null): AirdropMock;
    waitForDeployment(): Promise<this>;
    interface: AirdropMockInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    bulkResolve: TypedContractMethod<[domains: BytesLike[]], [string[]], "view">;
    resolve: TypedContractMethod<[addr: BytesLike], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "bulkResolve"): TypedContractMethod<[domains: BytesLike[]], [string[]], "view">;
    getFunction(nameOrSignature: "resolve"): TypedContractMethod<[addr: BytesLike], [string], "view">;
    filters: {};
}
