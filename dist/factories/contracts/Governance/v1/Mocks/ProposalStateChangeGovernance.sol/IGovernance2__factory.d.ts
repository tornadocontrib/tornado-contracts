import { type ContractRunner } from "ethers";
import type { IGovernance2, IGovernance2Interface } from "../../../../../../contracts/Governance/v1/Mocks/ProposalStateChangeGovernance.sol/IGovernance2";
export declare class IGovernance2__factory {
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
    static createInterface(): IGovernance2Interface;
    static connect(address: string, runner?: ContractRunner | null): IGovernance2;
}
