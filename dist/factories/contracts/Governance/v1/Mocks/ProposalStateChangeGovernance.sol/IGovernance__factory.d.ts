import { type ContractRunner } from "ethers";
import type { IGovernance, IGovernanceInterface } from "../../../../../../contracts/Governance/v1/Mocks/ProposalStateChangeGovernance.sol/IGovernance";
export declare class IGovernance__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "delay";
            readonly type: "uint256";
        }];
        readonly name: "setExecutionDelay";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IGovernanceInterface;
    static connect(address: string, runner?: ContractRunner | null): IGovernance;
}
