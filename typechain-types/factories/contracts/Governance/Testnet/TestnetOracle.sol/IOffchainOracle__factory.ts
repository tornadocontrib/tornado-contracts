/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IOffchainOracle,
  IOffchainOracleInterface,
} from "../../../../../contracts/Governance/Testnet/TestnetOracle.sol/IOffchainOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
      {
        internalType: "bool",
        name: "useSrcWrappers",
        type: "bool",
      },
    ],
    name: "getRateToEth",
    outputs: [
      {
        internalType: "uint256",
        name: "weightedRate",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IOffchainOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IOffchainOracleInterface {
    return new Interface(_abi) as IOffchainOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IOffchainOracle {
    return new Contract(address, _abi, runner) as unknown as IOffchainOracle;
  }
}