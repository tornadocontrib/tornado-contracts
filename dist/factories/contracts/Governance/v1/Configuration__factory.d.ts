import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Configuration, ConfigurationInterface } from "../../../../contracts/Governance/v1/Configuration";
type ConfigurationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Configuration__factory extends ContractFactory {
    constructor(...args: ConfigurationConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Configuration & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Configuration__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610563806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063a6c2660311610097578063d6159fe511610066578063d6159fe5146101e2578063e4917d9f146101ea578063ea0217cf14610207578063ece40cc11461022457610100565b8063a6c26603146101ad578063b1610d7e146101b5578063c0c0e820146101bd578063ce25d71c146101da57610100565b80636a661755116100d35780636a6617551461014e5780636dc2dc6c1461015657806370b0f660146101735780639a9e3b6e1461019057610100565b806302ec8f9e1461010557806337f135d714610124578063587a6ecb1461013e578063671dd27514610146575b600080fd5b6101226004803603602081101561011b57600080fd5b5035610241565b005b61012c610288565b60408051918252519081900360200190f35b61012c61028e565b61012c610294565b61012c61029a565b6101226004803603602081101561016c57600080fd5b50356102a0565b6101226004803603602081101561018957600080fd5b5035610327565b610122600480360360208110156101a657600080fd5b503561036e565b61012c6103b5565b61012c6103bb565b610122600480360360208110156101d357600080fd5b50356103c1565b61012c610408565b61012c61040e565b6101226004803603602081101561020057600080fd5b5035610414565b6101226004803603602081101561021d57600080fd5b503561045b565b6101226004803603602081101561023a57600080fd5b50356104a2565b333014610283576040805162461bcd60e51b8152602060048201526018602482015260008051602061050e833981519152604482015290519081900360640190fd5b600255565b60005481565b60075481565b60025481565b60015481565b3330146102e2576040805162461bcd60e51b8152602060048201526018602482015260008051602061050e833981519152604482015290519081900360640190fd5b60005481106103225760405162461bcd60e51b81526004018080602001828103825260248152602001806104ea6024913960400191505060405180910390fd5b600755565b333014610369576040805162461bcd60e51b8152602060048201526018602482015260008051602061050e833981519152604482015290519081900360640190fd5b600455565b3330146103b0576040805162461bcd60e51b8152602060048201526018602482015260008051602061050e833981519152604482015290519081900360640190fd5b600155565b60035481565b60055481565b333014610403576040805162461bcd60e51b8152602060048201526018602482015260008051602061050e833981519152604482015290519081900360640190fd5b600655565b60065481565b60045481565b333014610456576040805162461bcd60e51b8152602060048201526018602482015260008051602061050e833981519152604482015290519081900360640190fd5b600055565b33301461049d576040805162461bcd60e51b8152602060048201526018602482015260008051602061050e833981519152604482015290519081900360640190fd5b600555565b3330146104e4576040805162461bcd60e51b8152602060048201526018602482015260008051602061050e833981519152604482015290519081900360640190fd5b60035556fe476f7665726e616e63653a20696e636f727265637420766f7465457874656e6454696d65476f7665726e616e63653a20756e617574686f72697a65640000000000000000a26469706673582212209f747210822bf458106422cfc04672e084bdceea0802ccad1188038eb120e52c64736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "CLOSING_PERIOD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EXECUTION_DELAY";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EXECUTION_EXPIRATION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PROPOSAL_THRESHOLD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUORUM_VOTES";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTE_EXTEND_TIME";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTING_DELAY";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTING_PERIOD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "closingPeriod";
            readonly type: "uint256";
        }];
        readonly name: "setClosingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "executionDelay";
            readonly type: "uint256";
        }];
        readonly name: "setExecutionDelay";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "executionExpiration";
            readonly type: "uint256";
        }];
        readonly name: "setExecutionExpiration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalThreshold";
            readonly type: "uint256";
        }];
        readonly name: "setProposalThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "quorumVotes";
            readonly type: "uint256";
        }];
        readonly name: "setQuorumVotes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "voteExtendTime";
            readonly type: "uint256";
        }];
        readonly name: "setVoteExtendTime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "votingDelay";
            readonly type: "uint256";
        }];
        readonly name: "setVotingDelay";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "votingPeriod";
            readonly type: "uint256";
        }];
        readonly name: "setVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ConfigurationInterface;
    static connect(address: string, runner?: ContractRunner | null): Configuration;
}
export {};
