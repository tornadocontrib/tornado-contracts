import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface IENSResolverInterface extends Interface {
    getFunction(nameOrSignature: "addr" | "text"): FunctionFragment;
    encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "text", values: [BytesLike, string]): string;
    decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "text", data: BytesLike): Result;
}
export interface IENSResolver extends BaseContract {
    connect(runner?: ContractRunner | null): IENSResolver;
    waitForDeployment(): Promise<this>;
    interface: IENSResolverInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    addr: TypedContractMethod<[node: BytesLike], [string], "view">;
    text: TypedContractMethod<[node: BytesLike, key: string], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "addr"): TypedContractMethod<[node: BytesLike], [string], "view">;
    getFunction(nameOrSignature: "text"): TypedContractMethod<[node: BytesLike, key: string], [string], "view">;
    filters: {};
}
