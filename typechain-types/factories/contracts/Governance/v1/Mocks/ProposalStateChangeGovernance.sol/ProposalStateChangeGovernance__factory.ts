/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type {
  ProposalStateChangeGovernance,
  ProposalStateChangeGovernanceInterface,
} from "../../../../../../contracts/Governance/v1/Mocks/ProposalStateChangeGovernance.sol/ProposalStateChangeGovernance";

const _abi = [
  {
    inputs: [],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060c48061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063373058b814602d575b600080fd5b60336035565b005b6040805163e4917d9f60e01b81526203f48060048201529051309163e4917d9f91602480830192600092919082900301818387803b158015607557600080fd5b505af11580156088573d6000803e3d6000fd5b5050505056fea264697066735822122055474093b307523d5f8e2d34dba17aa9a0ae379fccf9690fc990220d4a5e0ae164736f6c634300060c0033";

type ProposalStateChangeGovernanceConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProposalStateChangeGovernanceConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProposalStateChangeGovernance__factory extends ContractFactory {
  constructor(...args: ProposalStateChangeGovernanceConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ProposalStateChangeGovernance & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ProposalStateChangeGovernance__factory {
    return super.connect(runner) as ProposalStateChangeGovernance__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProposalStateChangeGovernanceInterface {
    return new Interface(_abi) as ProposalStateChangeGovernanceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ProposalStateChangeGovernance {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ProposalStateChangeGovernance;
  }
}
