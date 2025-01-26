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
import type { NonPayableOverrides } from "../../../../common";
import type {
  RelayerRegistryBurnableProposal,
  RelayerRegistryBurnableProposalInterface,
} from "../../../../contracts/Unaudited/RelayerRegistryBurnableProposal.sol/RelayerRegistryBurnableProposal";

const _abi = [
  {
    inputs: [],
    name: "executeProposal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "newRelayerRegistry",
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
    inputs: [],
    name: "relayerRegistryProxyAddr",
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
  "0x608060405234801561001057600080fd5b50610172806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806326ec0a3614610046578063373058b814610064578063629793cb1461006e575b600080fd5b61004e610076565b60405161005b9190610128565b60405180910390f35b61006c61008e565b005b61004e610110565b7358e8dcc13be9780fc42e8723d8ead4cf46943df281565b604051631b2ce7f360e11b81527358e8dcc13be9780fc42e8723d8ead4cf46943df2908190633659cfe6906100db9073c82a0737372cb0953e7645eb6b5bd13da566a29f90600401610128565b600060405180830381600087803b1580156100f557600080fd5b505af1158015610109573d6000803e3d6000fd5b5050505050565b73c82a0737372cb0953e7645eb6b5bd13da566a29f81565b6001600160a01b039190911681526020019056fea26469706673582212202f45d2ad8634b8f7b4095ac67ae5ce5669e2020b9cda08f0e6c3629c6cb1ed6564736f6c634300060c0033";

type RelayerRegistryBurnableProposalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerRegistryBurnableProposalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerRegistryBurnableProposal__factory extends ContractFactory {
  constructor(...args: RelayerRegistryBurnableProposalConstructorParams) {
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
      RelayerRegistryBurnableProposal & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): RelayerRegistryBurnableProposal__factory {
    return super.connect(runner) as RelayerRegistryBurnableProposal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerRegistryBurnableProposalInterface {
    return new Interface(_abi) as RelayerRegistryBurnableProposalInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RelayerRegistryBurnableProposal {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as RelayerRegistryBurnableProposal;
  }
}
