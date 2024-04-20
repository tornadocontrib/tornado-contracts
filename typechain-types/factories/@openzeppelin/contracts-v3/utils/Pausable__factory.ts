/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Pausable,
  PausableInterface,
} from "../../../../@openzeppelin/contracts-v3/utils/Pausable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "paused",
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

export class Pausable__factory {
  static readonly abi = _abi;
  static createInterface(): PausableInterface {
    return new Interface(_abi) as PausableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Pausable {
    return new Contract(address, _abi, runner) as unknown as Pausable;
  }
}
