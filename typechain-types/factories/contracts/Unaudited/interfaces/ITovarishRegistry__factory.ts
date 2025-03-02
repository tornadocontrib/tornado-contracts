/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ITovarishRegistry,
  ITovarishRegistryInterface,
} from "../../../../contracts/Unaudited/interfaces/ITovarishRegistry";

const _abi = [
  {
    inputs: [],
    name: "getChainIds",
    outputs: [
      {
        internalType: "uint64[]",
        name: "",
        type: "uint64[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdate",
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
    name: "relayerRegistry",
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
        internalType: "string[]",
        name: "additionalRelayers",
        type: "string[]",
      },
    ],
    name: "relayersData",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "ensName",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isRegistered",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isPrior",
            type: "bool",
          },
          {
            internalType: "string",
            name: "tovarishHost",
            type: "string",
          },
          {
            internalType: "string",
            name: "tovarishChains",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "records",
            type: "string[]",
          },
        ],
        internalType: "struct ITovarishRegistry.Relayer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ITovarishRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): ITovarishRegistryInterface {
    return new Interface(_abi) as ITovarishRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ITovarishRegistry {
    return new Contract(address, _abi, runner) as unknown as ITovarishRegistry;
  }
}
