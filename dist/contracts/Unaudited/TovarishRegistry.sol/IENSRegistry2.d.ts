import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IENSRegistry2Interface extends Interface {
    getFunction(nameOrSignature: "owner" | "resolver"): FunctionFragment;
    encodeFunctionData(functionFragment: "owner", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "resolver", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "resolver", data: BytesLike): Result;
}
export interface IENSRegistry2 extends BaseContract {
    connect(runner?: ContractRunner | null): IENSRegistry2;
    waitForDeployment(): Promise<this>;
    interface: IENSRegistry2Interface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    owner: TypedContractMethod<[node: BytesLike], [string], "view">;
    resolver: TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "owner"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "resolver"): TypedContractMethod<[node: BytesLike], [string], "view">;
    filters: {};
}
