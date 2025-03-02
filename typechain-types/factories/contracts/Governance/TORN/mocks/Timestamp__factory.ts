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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  Timestamp,
  TimestampInterface,
} from "../../../../../contracts/Governance/TORN/mocks/Timestamp";

const _abi = [
  {
    inputs: [],
    name: "blockTimestamp",
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
    name: "fakeTimestamp",
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
        internalType: "uint256",
        name: "_fakeTimestamp",
        type: "uint256",
      },
    ],
    name: "setFakeTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060d28061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c806301ec0fab146041578063adb61832146059578063c565882714605f575b600080fd5b6047607b565b60408051918252519081900360200190f35b60476081565b607960048036036020811015607357600080fd5b50356097565b005b60005481565b60008054156090576000546092565b425b905090565b60005556fea2646970667358221220d1ef75b842f2516aed55739e5544101f02964d9d9a7d527a95f1ab877b7815e864736f6c634300060c0033";

type TimestampConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimestampConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timestamp__factory extends ContractFactory {
  constructor(...args: TimestampConstructorParams) {
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
      Timestamp & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Timestamp__factory {
    return super.connect(runner) as Timestamp__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimestampInterface {
    return new Interface(_abi) as TimestampInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Timestamp {
    return new Contract(address, _abi, runner) as unknown as Timestamp;
  }
}
