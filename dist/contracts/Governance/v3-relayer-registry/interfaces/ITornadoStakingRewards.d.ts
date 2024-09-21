import type { BaseContract, BigNumberish, BytesLike, FunctionFragment, Result, Interface, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../../common";
export interface ITornadoStakingRewardsInterface extends Interface {
    getFunction(nameOrSignature: "updateRewardsOnLockedBalanceChange"): FunctionFragment;
    encodeFunctionData(functionFragment: "updateRewardsOnLockedBalanceChange", values: [AddressLike, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "updateRewardsOnLockedBalanceChange", data: BytesLike): Result;
}
export interface ITornadoStakingRewards extends BaseContract {
    connect(runner?: ContractRunner | null): ITornadoStakingRewards;
    waitForDeployment(): Promise<this>;
    interface: ITornadoStakingRewardsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    updateRewardsOnLockedBalanceChange: TypedContractMethod<[
        account: AddressLike,
        amountLockedBeforehand: BigNumberish
    ], [
        void
    ], "nonpayable">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "updateRewardsOnLockedBalanceChange"): TypedContractMethod<[
        account: AddressLike,
        amountLockedBeforehand: BigNumberish
    ], [
        void
    ], "nonpayable">;
    filters: {};
}
