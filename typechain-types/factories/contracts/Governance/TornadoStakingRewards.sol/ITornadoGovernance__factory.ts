/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITornadoGovernance,
  ITornadoGovernanceInterface,
} from "../../../../contracts/Governance/TornadoStakingRewards.sol/ITornadoGovernance";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "lockedBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "userVault",
    outputs: [
      {
        internalType: "contract ITornadoVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ITornadoGovernance__factory {
  static readonly abi = _abi;
  static createInterface(): ITornadoGovernanceInterface {
    return new Interface(_abi) as ITornadoGovernanceInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ITornadoGovernance {
    return new Contract(address, _abi, runner) as unknown as ITornadoGovernance;
  }
}