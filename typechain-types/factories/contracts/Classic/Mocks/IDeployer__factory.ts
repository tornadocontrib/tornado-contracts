/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDeployer,
  IDeployerInterface,
} from "../../../../contracts/Classic/Mocks/IDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_initCode",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "deploy",
    outputs: [
      {
        internalType: "address payable",
        name: "createdContract",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): IDeployerInterface {
    return new Interface(_abi) as IDeployerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IDeployer {
    return new Contract(address, _abi, runner) as unknown as IDeployer;
  }
}