import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface GasCompensatorInterface extends Interface {
    getFunction(nameOrSignature: "gasCompensationVault" | "setGasCompensations" | "withdrawFromHelper"): FunctionFragment;
    encodeFunctionData(functionFragment: "gasCompensationVault", values?: undefined): string;
    encodeFunctionData(functionFragment: "setGasCompensations", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawFromHelper", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "gasCompensationVault", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setGasCompensations", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawFromHelper", data: BytesLike): Result;
}
export interface GasCompensator extends BaseContract {
    connect(runner?: ContractRunner | null): GasCompensator;
    waitForDeployment(): Promise<this>;
    interface: GasCompensatorInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    gasCompensationVault: TypedContractMethod<[], [string], "view">;
    setGasCompensations: TypedContractMethod<[
        _gasCompensationsLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    withdrawFromHelper: TypedContractMethod<[
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "gasCompensationVault"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "setGasCompensations"): TypedContractMethod<[
        _gasCompensationsLimit: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "withdrawFromHelper"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    filters: {};
}
