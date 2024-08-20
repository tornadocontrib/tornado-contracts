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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Aggregator,
  AggregatorInterface,
} from "../../../../contracts/Governance/Aggregator/Aggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_ensRegistry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_relayerRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ENSRegistry",
    outputs: [
      {
        internalType: "contract IENSRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "RelayerRegistry",
    outputs: [
      {
        internalType: "contract IRelayerRegistry",
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
        internalType: "contract Governance",
        name: "governance",
        type: "address",
      },
    ],
    name: "getAllProposals",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "proposer",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "forVotes",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "againstVotes",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "executed",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "extended",
            type: "bool",
          },
          {
            internalType: "enum Governance.ProposalState",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct GovernanceAggregator.Proposal[]",
        name: "proposals",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Governance",
        name: "governance",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "accs",
        type: "address[]",
      },
    ],
    name: "getGovernanceBalances",
    outputs: [
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Governance",
        name: "governance",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getUserData",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "latestProposalId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "latestProposalIdState",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timelock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_relayers",
        type: "bytes32[]",
      },
      {
        internalType: "string[]",
        name: "_subdomains",
        type: "string[]",
      },
    ],
    name: "relayersData",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isRegistered",
            type: "bool",
          },
          {
            internalType: "string[20]",
            name: "records",
            type: "string[20]",
          },
        ],
        internalType: "struct Relayer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b5060405161155d38038061155d83398101604081905261002f9161004d565b6001600160601b0319606092831b8116608052911b1660a05261009e565b6000806040838503121561005f578182fd5b825161006a81610086565b602084015190925061007b81610086565b809150509250929050565b6001600160a01b038116811461009b57600080fd5b50565b60805160601c60a05160601c6114826100db6000398061024b528061059c528061068a52508061022752806102d352806103b452506114826000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063029fcae7146100675780631cb120d61461009057806339c16356146100a55780634d47d775146100ad5780639853d922146100cd578063f4eeefe9146100ed575b600080fd5b61007a610075366004610fa1565b610111565b60405161008791906112ee565b60405180910390f35b610098610225565b6040516100879190611118565b610098610249565b6100c06100bb366004610e93565b61026d565b6040516100879190611210565b6100e06100db366004610dcc565b61075e565b6040516100879190611146565b6101006100fb366004610f69565b6109dd565b60405161008795949392919061135f565b60608167ffffffffffffffff8111801561012a57600080fd5b50604051908082528060200260200182016040528015610154578160200160208202803683370190505b50905060005b8281101561021d57846001600160a01b0316639ae697bf85858481811061017d57fe5b90506020020160208101906101929190610dcc565b6040518263ffffffff1660e01b81526004016101ae9190611118565b60206040518083038186803b1580156101c657600080fd5b505afa1580156101da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101fe91906110b5565b82828151811061020a57fe5b602090810291909101015260010161015a565b509392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b606080835167ffffffffffffffff8111801561028857600080fd5b506040519080825280602002602001820160405280156102c257816020015b6102af610c79565b8152602001906001900390816102a75790505b50905060005b845181101561021d577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166302571be386838151811061030c57fe5b60200260200101516040518263ffffffff1660e01b81526004016103309190611332565b60206040518083038186803b15801561034857600080fd5b505afa15801561035c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103809190610def565b82828151811061038c57fe5b6020026020010151600001906001600160a01b031690816001600160a01b03168152505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630178b8bf8784815181106103ed57fe5b60200260200101516040518263ffffffff1660e01b81526004016104119190611332565b60206040518083038186803b15801561042957600080fd5b505afa15801561043d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104619190610def565b905060005b855181101561059957600087848151811061047d57fe5b602002602001015187838151811061049157fe5b60200260200101516040516020016104a991906110fc565b604051602081830303815290604052805190602001206040516020016104d09291906110ee565b60408051601f19818403018152908290528051602090910120631674750f60e21b825291506001600160a01b038416906359d1d43c9061051490849060040161133b565b60006040518083038186803b15801561052c57600080fd5b505afa158015610540573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105689190810190611042565b85858151811061057457fe5b602002602001015160600151836014811061058b57fe5b602002015250600101610466565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b69fd4ab8484815181106105d557fe5b6020026020010151600001518585815181106105ed57fe5b6020026020010151600001516040518363ffffffff1660e01b815260040161061692919061112c565b60206040518083038186803b15801561062e57600080fd5b505afa158015610642573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106669190610f4d565b83838151811061067257fe5b602002602001015160400190151590811515815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b971a6bf8484815181106106c357fe5b6020026020010151600001516040518263ffffffff1660e01b81526004016106eb9190611118565b60206040518083038186803b15801561070357600080fd5b505afa158015610717573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073b91906110b5565b83838151811061074757fe5b6020908102919091018101510152506001016102c8565b6060816001600160a01b031663da35c6646040518163ffffffff1660e01b815260040160206040518083038186803b15801561079957600080fd5b505afa1580156107ad573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107d191906110b5565b67ffffffffffffffff811180156107e757600080fd5b5060405190808252806020026020018201604052801561082157816020015b61080e610cb1565b8152602001906001900390816108065790505b50905060005b81518110156109d7576000806000806000806000808a6001600160a01b031663013cf08b8a6001016040518263ffffffff1660e01b815260040161086b9190611332565b6101006040518083038186803b15801561088457600080fd5b505afa158015610898573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bc9190610e0b565b97509750975097509750975097509750604051806101200160405280896001600160a01b03168152602001886001600160a01b03168152602001878152602001868152602001858152602001848152602001831515815260200182151581526020018c6001600160a01b0316633e4f49e68c6001016040518263ffffffff1660e01b815260040161094d9190611332565b60206040518083038186803b15801561096557600080fd5b505afa158015610979573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099d9190611023565b60068111156109a857fe5b8152508a8a815181106109b757fe5b602002602001018190525050505050505050508080600101915050610827565b50919050565b6000806000806000866001600160a01b0316639ae697bf876040518263ffffffff1660e01b8152600401610a119190611118565b60206040518083038186803b158015610a2957600080fd5b505afa158015610a3d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a6191906110b5565b6040516317977c6160e01b81529095506001600160a01b038816906317977c6190610a90908990600401611118565b60206040518083038186803b158015610aa857600080fd5b505afa158015610abc573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ae091906110b5565b93508315610b7257604051631f27a4f360e11b81526001600160a01b03881690633e4f49e690610b14908790600401611332565b60206040518083038186803b158015610b2c57600080fd5b505afa158015610b40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b649190611023565b6006811115610b6f57fe5b92505b60405163a72edda360e01b81526001600160a01b0388169063a72edda390610b9e908990600401611118565b60206040518083038186803b158015610bb657600080fd5b505afa158015610bca573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bee91906110b5565b604051631976849960e21b81529092506001600160a01b038816906365da126490610c1d908990600401611118565b60206040518083038186803b158015610c3557600080fd5b505afa158015610c49573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6d9190610def565b90509295509295909350565b604051806080016040528060006001600160a01b0316815260200160008152602001600015158152602001610cac610cfd565b905290565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905290610100820190610cac565b6040518061028001604052806014905b6060815260200190600190039081610d0d5790505090565b600082601f830112610d35578081fd5b8135610d48610d43826113b2565b61138b565b818152915060208083019084810160005b84811015610dc1578135870188603f820112610d7457600080fd5b83810135610d84610d43826113d2565b81815260408b81848601011115610d9a57600080fd5b82818501888401375060009181018601919091528552509282019290820190600101610d59565b505050505092915050565b600060208284031215610ddd578081fd5b8135610de881611426565b9392505050565b600060208284031215610e00578081fd5b8151610de881611426565b600080600080600080600080610100898b031215610e27578384fd5b8851610e3281611426565b60208a0151909850610e4381611426565b8097505060408901519550606089015194506080890151935060a0890151925060c0890151610e718161143e565b60e08a0151909250610e828161143e565b809150509295985092959890939650565b60008060408385031215610ea5578182fd5b823567ffffffffffffffff80821115610ebc578384fd5b818501915085601f830112610ecf578384fd5b8135610edd610d43826113b2565b80828252602080830192508086018a828387028901011115610efd578889fd5b8896505b84871015610f1f578035845260019690960195928101928101610f01565b509096508701359350505080821115610f36578283fd5b50610f4385828601610d25565b9150509250929050565b600060208284031215610f5e578081fd5b8151610de88161143e565b60008060408385031215610f7b578182fd5b8235610f8681611426565b91506020830135610f9681611426565b809150509250929050565b600080600060408486031215610fb5578283fd5b8335610fc081611426565b9250602084013567ffffffffffffffff80821115610fdc578384fd5b818601915086601f830112610fef578384fd5b813581811115610ffd578485fd5b8760208083028501011115611010578485fd5b6020830194508093505050509250925092565b600060208284031215611034578081fd5b815160078110610de8578182fd5b600060208284031215611053578081fd5b815167ffffffffffffffff811115611069578182fd5b8201601f81018413611079578182fd5b8051611087610d43826113d2565b81815285602083850101111561109b578384fd5b6110ac8260208301602086016113f6565b95945050505050565b6000602082840312156110c6578081fd5b5051919050565b6001600160a01b03169052565b15159052565b600781106110ea57fe5b9052565b918252602082015260400190565b6000825161110e8184602087016113f6565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b602080825282518282018190526000919060409081850190868401855b8281101561120357815180516001600160a01b031685528681015161118a888701826110cd565b508086015185870152606080820151908601526080808201519086015260a0808201519086015260c0808201516111c3828801826110da565b505060e0808201516111d7828801826110da565b505061010090810151906111ed868201836110e0565b5050610120939093019290850190600101611163565b5091979650505050505050565b6000602080830181845280855180835260408601915060408482028701019250838701855b828110156112e157878503603f19018452815180516001600160a01b03168652868101518787015260408082015115159087015260609081015160809187018290529086016103008701895b60148110156112cc57888203607f19018352835180516112a18185611332565b6112ae82828f86016113f6565b958c0195948c0194601f91909101601f191601925050600101611281565b50965050509285019290850190600101611235565b5092979650505050505050565b6020808252825182820181905260009190848201906040850190845b818110156113265783518352928401929184019160010161130a565b50909695505050505050565b90815260200190565b908152604060208201819052600390820152621d5c9b60ea1b606082015260800190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b60405181810167ffffffffffffffff811182821017156113aa57600080fd5b604052919050565b600067ffffffffffffffff8211156113c8578081fd5b5060209081020190565b600067ffffffffffffffff8211156113e8578081fd5b50601f01601f191660200190565b60005b838110156114115781810151838201526020016113f9565b83811115611420576000848401525b50505050565b6001600160a01b038116811461143b57600080fd5b50565b801515811461143b57600080fdfea26469706673582212209edead2cf5d16a9f09d7d75c5aa042cb00130c9febd0bf0e908fbf9c3f34f1a164736f6c634300060c0033";

type AggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Aggregator__factory extends ContractFactory {
  constructor(...args: AggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _ensRegistry: AddressLike,
    _relayerRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _ensRegistry,
      _relayerRegistry,
      overrides || {}
    );
  }
  override deploy(
    _ensRegistry: AddressLike,
    _relayerRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _ensRegistry,
      _relayerRegistry,
      overrides || {}
    ) as Promise<
      Aggregator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Aggregator__factory {
    return super.connect(runner) as Aggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AggregatorInterface {
    return new Interface(_abi) as AggregatorInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Aggregator {
    return new Contract(address, _abi, runner) as unknown as Aggregator;
  }
}