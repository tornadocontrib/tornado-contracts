import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface ParseSignatureInterface extends Interface {
    getFunction(nameOrSignature: "parse"): FunctionFragment;
    encodeFunctionData(functionFragment: "parse", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "parse", data: BytesLike): Result;
}
export interface ParseSignature extends BaseContract {
    connect(runner?: ContractRunner | null): ParseSignature;
    waitForDeployment(): Promise<this>;
    interface: ParseSignatureInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    parse: TypedContractMethod<[
        signature: BytesLike
    ], [
        [bigint, string, string] & {
            v: bigint;
            r: string;
            s: string;
        }
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "parse"): TypedContractMethod<[
        signature: BytesLike
    ], [
        [bigint, string, string] & {
            v: bigint;
            r: string;
            s: string;
        }
    ], "view">;
    filters: {};
}
