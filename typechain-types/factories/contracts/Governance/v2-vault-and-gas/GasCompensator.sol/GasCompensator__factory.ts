/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  GasCompensator,
  GasCompensatorInterface,
} from "../../../../../contracts/Governance/v2-vault-and-gas/GasCompensator.sol/GasCompensator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gasCompensationVault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "gasCompensationVault",
    outputs: [
      {
        internalType: "contract IGasCompensationVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gasCompensationsLimit",
        type: "uint256",
      },
    ],
    name: "setGasCompensations",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFromHelper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class GasCompensator__factory {
  static readonly abi = _abi;
  static createInterface(): GasCompensatorInterface {
    return new Interface(_abi) as GasCompensatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): GasCompensator {
    return new Contract(address, _abi, runner) as unknown as GasCompensator;
  }
}