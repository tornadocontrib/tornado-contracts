/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IFeeManager,
  IFeeManagerInterface,
} from "../../../../contracts/Governance/RelayerRegistry.sol/IFeeManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "_instance",
        type: "address",
      },
    ],
    name: "instanceFeeWithUpdate",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IFeeManager__factory {
  static readonly abi = _abi;
  static createInterface(): IFeeManagerInterface {
    return new Interface(_abi) as IFeeManagerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IFeeManager {
    return new Contract(address, _abi, runner) as unknown as IFeeManager;
  }
}