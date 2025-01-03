/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRelayerRegistry2,
  IRelayerRegistry2Interface,
} from "../../../../contracts/Unaudited/TovarishRegistry.sol/IRelayerRegistry2";

const _abi = [
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
] as const;

export class IRelayerRegistry2__factory {
  static readonly abi = _abi;
  static createInterface(): IRelayerRegistry2Interface {
    return new Interface(_abi) as IRelayerRegistry2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IRelayerRegistry2 {
    return new Contract(address, _abi, runner) as unknown as IRelayerRegistry2;
  }
}
