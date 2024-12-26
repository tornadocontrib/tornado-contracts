import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface ITovarishRegistryInterface extends Interface {
    getFunction(nameOrSignature: "getNamehashes" | "getNames"): FunctionFragment;
    encodeFunctionData(functionFragment: "getNamehashes", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNames", values?: undefined): string;
    decodeFunctionResult(functionFragment: "getNamehashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNames", data: BytesLike): Result;
}
export interface ITovarishRegistry extends BaseContract {
    connect(runner?: ContractRunner | null): ITovarishRegistry;
    waitForDeployment(): Promise<this>;
    interface: ITovarishRegistryInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getNamehashes: TypedContractMethod<[], [string[]], "view">;
    getNames: TypedContractMethod<[], [string[]], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "getNamehashes"): TypedContractMethod<[], [string[]], "view">;
    getFunction(nameOrSignature: "getNames"): TypedContractMethod<[], [string[]], "view">;
    filters: {};
}
