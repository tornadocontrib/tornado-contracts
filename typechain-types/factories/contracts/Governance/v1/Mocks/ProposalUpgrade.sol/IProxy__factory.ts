/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IProxy,
  IProxyInterface,
} from "../../../../../../contracts/Governance/v1/Mocks/ProposalUpgrade.sol/IProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IProxy__factory {
  static readonly abi = _abi;
  static createInterface(): IProxyInterface {
    return new Interface(_abi) as IProxyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IProxy {
    return new Contract(address, _abi, runner) as unknown as IProxy;
  }
}
