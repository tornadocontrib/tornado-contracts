/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRelayerRegistry,
  IRelayerRegistryInterface,
} from "../../../../contracts/Governance/interfaces/IRelayerRegistry";

const _abi = [
  {
    inputs: [],
    name: "ens",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "getRelayerBalance",
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
    inputs: [
      {
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "getRelayerEnsHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "toResolve",
        type: "address",
      },
    ],
    name: "isRelayerRegistered",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "torn",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IRelayerRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IRelayerRegistryInterface {
    return new Interface(_abi) as IRelayerRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IRelayerRegistry {
    return new Contract(address, _abi, runner) as unknown as IRelayerRegistry;
  }
}
