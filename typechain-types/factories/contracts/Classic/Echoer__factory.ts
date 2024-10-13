/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Echoer,
  EchoerInterface,
} from "../../../contracts/Classic/Echoer";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "who",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "Echo",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "echo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506101658061001f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063624fbfdc14610030575b600080fd5b61004361003e36600461008c565b610045565b005b336001600160a01b03167f50d6f3fc915efd1695d8a4cb50da185984f50d256834b9cb308295eb3c872c9c8383604051610080929190610100565b60405180910390a25050565b6000806020838503121561009f57600080fd5b823567ffffffffffffffff8111156100b657600080fd5b8301601f810185136100c757600080fd5b803567ffffffffffffffff8111156100de57600080fd5b8560208284010111156100f057600080fd5b6020919091019590945092505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f1916010191905056fea264697066735822122050c4191eadbd3981b9be4954b8abbadae91d7cfb743a47cc6930c8fe566e1c6e64736f6c634300081c0033";

type EchoerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EchoerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Echoer__factory extends ContractFactory {
  constructor(...args: EchoerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Echoer & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Echoer__factory {
    return super.connect(runner) as Echoer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EchoerInterface {
    return new Interface(_abi) as EchoerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Echoer {
    return new Contract(address, _abi, runner) as unknown as Echoer;
  }
}
