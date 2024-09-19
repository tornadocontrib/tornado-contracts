import { type ContractRunner } from "ethers";
import type { ITornadoStakingRewards, ITornadoStakingRewardsInterface } from "../../../../../contracts/Governance/v3-relayer-registry/interfaces/ITornadoStakingRewards";
export declare class ITornadoStakingRewards__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountLockedBeforehand";
            readonly type: "uint256";
        }];
        readonly name: "updateRewardsOnLockedBalanceChange";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ITornadoStakingRewardsInterface;
    static connect(address: string, runner?: ContractRunner | null): ITornadoStakingRewards;
}
