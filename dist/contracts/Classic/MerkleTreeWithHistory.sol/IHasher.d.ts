import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface IHasherInterface extends Interface {
    getFunction(nameOrSignature: "MiMCSponge"): FunctionFragment;
    encodeFunctionData(functionFragment: "MiMCSponge", values: [BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "MiMCSponge", data: BytesLike): Result;
}
export interface IHasher extends BaseContract {
    connect(runner?: ContractRunner | null): IHasher;
    waitForDeployment(): Promise<this>;
    interface: IHasherInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    MiMCSponge: TypedContractMethod<[
        in_xL: BigNumberish,
        in_xR: BigNumberish
    ], [
        [bigint, bigint] & {
            xL: bigint;
            xR: bigint;
        }
    ], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "MiMCSponge"): TypedContractMethod<[
        in_xL: BigNumberish,
        in_xR: BigNumberish
    ], [
        [bigint, bigint] & {
            xL: bigint;
            xR: bigint;
        }
    ], "view">;
    filters: {};
}
