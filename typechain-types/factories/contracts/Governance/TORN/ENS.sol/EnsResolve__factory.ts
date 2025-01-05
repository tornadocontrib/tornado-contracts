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
  EnsResolve,
  EnsResolveInterface,
} from "../../../../../contracts/Governance/TORN/ENS.sol/EnsResolve";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "domains",
        type: "bytes32[]",
      },
    ],
    name: "bulkResolve",
    outputs: [
      {
        internalType: "address[]",
        name: "result",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "resolve",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061036d806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80635c23bdf51461003b578063f9e5423414610074575b600080fd5b6100586004803603602081101561005157600080fd5b5035610167565b604080516001600160a01b039092168252519081900360200190f35b6101176004803603602081101561008a57600080fd5b8101906020810181356401000000008111156100a557600080fd5b8201836020820111156100b757600080fd5b803590602001918460208302840111640100000000831117156100d957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550610292945050505050565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561015357818101518382015260200161013b565b505050509050019250505060405180910390f35b600080610172610333565b60011461019357738595bfb0d940dfedc98943fa8a907091203f25ee6101a4565b6e0c2e074ec69a0dfb2997ba6c7d2e1e5b9050806001600160a01b0316630178b8bf846040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156101ea57600080fd5b505afa1580156101fe573d6000803e3d6000fd5b505050506040513d602081101561021457600080fd5b505160408051631d9dabef60e11b81526004810186905290516001600160a01b0390921691633b3b57de91602480820192602092909190829003018186803b15801561025f57600080fd5b505afa158015610273573d6000803e3d6000fd5b505050506040513d602081101561028957600080fd5b50519392505050565b6060815167ffffffffffffffff811180156102ac57600080fd5b506040519080825280602002602001820160405280156102d6578160200160208202803683370190505b50905060005b825181101561032d576103018382815181106102f457fe5b6020026020010151610167565b82828151811061030d57fe5b6001600160a01b03909216602092830291909101909101526001016102dc565b50919050565b469056fea264697066735822122080a03a8d1c76e0bb69d97a1b378d266a33314d8e08aaabf20dbe042932d36f1264736f6c634300060c0033";

type EnsResolveConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: EnsResolveConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class EnsResolve__factory extends ContractFactory {
  constructor(...args: EnsResolveConstructorParams) {
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
      EnsResolve & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): EnsResolve__factory {
    return super.connect(runner) as EnsResolve__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EnsResolveInterface {
    return new Interface(_abi) as EnsResolveInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): EnsResolve {
    return new Contract(address, _abi, runner) as unknown as EnsResolve;
  }
}
