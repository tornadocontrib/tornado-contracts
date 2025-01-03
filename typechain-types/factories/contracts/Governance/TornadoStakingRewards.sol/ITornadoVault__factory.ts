/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITornadoVault,
  ITornadoVaultInterface,
} from "../../../../contracts/Governance/TornadoStakingRewards.sol/ITornadoVault";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTorn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ITornadoVault__factory {
  static readonly abi = _abi;
  static createInterface(): ITornadoVaultInterface {
    return new Interface(_abi) as ITornadoVaultInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ITornadoVault {
    return new Contract(address, _abi, runner) as unknown as ITornadoVault;
  }
}
