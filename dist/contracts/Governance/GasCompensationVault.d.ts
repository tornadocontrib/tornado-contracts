import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../common";
export interface GasCompensationVaultInterface extends Interface {
    getFunction(nameOrSignature: "GovernanceAddress" | "compensateGas" | "withdrawToGovernance"): FunctionFragment;
    encodeFunctionData(functionFragment: "GovernanceAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "compensateGas", values: [AddressLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawToGovernance", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "GovernanceAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "compensateGas", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawToGovernance", data: BytesLike): Result;
}
export interface GasCompensationVault extends BaseContract {
    connect(runner?: ContractRunner | null): GasCompensationVault;
    waitForDeployment(): Promise<this>;
    interface: GasCompensationVaultInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    GovernanceAddress: TypedContractMethod<[], [string], "view">;
    compensateGas: TypedContractMethod<[
        recipient: AddressLike,
        gasAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    withdrawToGovernance: TypedContractMethod<[
        amount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "GovernanceAddress"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "compensateGas"): TypedContractMethod<[
        recipient: AddressLike,
        gasAmount: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction(nameOrSignature: "withdrawToGovernance"): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;
    filters: {};
}
