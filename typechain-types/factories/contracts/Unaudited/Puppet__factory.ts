/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  Puppet,
  PuppetInterface,
} from "../../../contracts/Unaudited/Puppet";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "admin",
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
        internalType: "address payable",
        name: "_to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "callTo",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0604052348015600f57600080fd5b5060405161033a38038061033a833981016040819052602c91603c565b6001600160a01b0316608052606a565b600060208284031215604d57600080fd5b81516001600160a01b0381168114606357600080fd5b9392505050565b6080516102b061008a600039600081816069015260b001526102b06000f3fe6080604052600436106100295760003560e01c806393d3a7b61461002e578063f851a44014610057575b600080fd5b61004161003c366004610189565b6100a3565b60405161004e919061021c565b60405180910390f35b34801561006357600080fd5b5061008b7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161004e565b6060336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461010d5760405162461bcd60e51b81526020600482015260096024820152682727aa2fa0a226a4a760b91b604482015260640160405180910390fd5b600080856001600160a01b031634868660405161012b92919061026a565b60006040518083038185875af1925050503d8060008114610168576040519150601f19603f3d011682016040523d82523d6000602084013e61016d565b606091505b5091509150816101805780518082602001fd5b95945050505050565b60008060006040848603121561019e57600080fd5b83356001600160a01b03811681146101b557600080fd5b9250602084013567ffffffffffffffff8111156101d157600080fd5b8401601f810186136101e257600080fd5b803567ffffffffffffffff8111156101f957600080fd5b86602082840101111561020b57600080fd5b939660209190910195509293505050565b602081526000825180602084015260005b8181101561024a576020818601810151604086840101520161022d565b506000604082850101526040601f19601f83011684010191505092915050565b818382376000910190815291905056fea26469706673582212205d6d7334c6f4f4b162211b60a75693c77997ddc48d41f02769344acaecf1302f64736f6c634300081c0033";

type PuppetConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PuppetConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Puppet__factory extends ContractFactory {
  constructor(...args: PuppetConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _admin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_admin, overrides || {});
  }
  override deploy(
    _admin: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_admin, overrides || {}) as Promise<
      Puppet & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Puppet__factory {
    return super.connect(runner) as Puppet__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PuppetInterface {
    return new Interface(_abi) as PuppetInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Puppet {
    return new Contract(address, _abi, runner) as unknown as Puppet;
  }
}
