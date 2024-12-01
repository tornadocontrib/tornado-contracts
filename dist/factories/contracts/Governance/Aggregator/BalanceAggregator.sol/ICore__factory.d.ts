import { type ContractRunner } from "ethers";
import type { ICore, ICoreInterface } from "../../../../../contracts/Governance/Aggregator/BalanceAggregator.sol/ICore";
export declare class ICore__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "lockedBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ICoreInterface;
    static connect(address: string, runner?: ContractRunner | null): ICore;
}
