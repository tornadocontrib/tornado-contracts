import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type { ProposalStateChangeGovernance, ProposalStateChangeGovernanceInterface } from "../../../../../../contracts/Governance/v1/Mocks/ProposalStateChangeGovernance.sol/ProposalStateChangeGovernance";
type ProposalStateChangeGovernanceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProposalStateChangeGovernance__factory extends ContractFactory {
    constructor(...args: ProposalStateChangeGovernanceConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ProposalStateChangeGovernance & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ProposalStateChangeGovernance__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060c48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063373058b814602d575b600080fd5b60336035565b005b6040805163e4917d9f60e01b81526203f48060048201529051309163e4917d9f91602480830192600092919082900301818387803b158015607557600080fd5b505af11580156088573d6000803e3d6000fd5b5050505056fea264697066735822122080cc4a797d58ff69ba6d6a0d2a3849574ef67da2d75c41e66a86d3f6e162209d64736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "executeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProposalStateChangeGovernanceInterface;
    static connect(address: string, runner?: ContractRunner | null): ProposalStateChangeGovernance;
}
export {};
