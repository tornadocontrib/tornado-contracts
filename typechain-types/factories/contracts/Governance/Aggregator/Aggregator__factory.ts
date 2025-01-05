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
        internalType: "contract ENS",
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
        internalType: "contract IGovernance",
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
            internalType: "enum IGovernance.ProposalState",
            name: "state",
            type: "uint8",
          },
        ],
        internalType: "struct GovernanceAggregator.ProposalWithState[]",
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
        internalType: "contract IGovernance",
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
        internalType: "contract IGovernance",
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
  "0x60c060405234801561001057600080fd5b506040516115bb3803806115bb83398101604081905261002f91610062565b6001600160a01b039182166080521660a052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a0516114e76100d46000396000818160d4015281816105e601526106e80152600081816095015281816102fd01526103dd01526114e76000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c8063029fcae7146100675780631cb120d61461009057806339c16356146100cf5780634d47d775146100f65780639853d92214610116578063f4eeefe914610136575b600080fd5b61007a610075366004610d46565b61017a565b6040516100879190610dce565b60405180910390f35b6100b77f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610087565b6100b77f000000000000000000000000000000000000000000000000000000000000000081565b610109610104366004610f9e565b610296565b6040516100879190611082565b61012961012436600461116e565b6107ce565b60405161008791906111ca565b61014961014436600461128a565b610a81565b6040805195865260208601949094529284019190915260608301526001600160a01b0316608082015260a001610087565b6060816001600160401b0381111561019457610194610e11565b6040519080825280602002602001820160405280156101bd578160200160208202803683370190505b50905060005b8281101561028e57846001600160a01b0316639ae697bf8585848181106101ec576101ec6112c3565b9050602002016020810190610201919061116e565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610245573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061026991906112d9565b82828151811061027b5761027b6112c3565b60209081029190910101526001016101c3565b509392505050565b6060600083516001600160401b038111156102b3576102b3610e11565b6040519080825280602002602001820160405280156102ec57816020015b6102d9610cce565b8152602001906001900390816102d15790505b50905060005b84518110156107c4577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166302571be386838151811061033c5761033c6112c3565b60200260200101516040518263ffffffff1660e01b815260040161036291815260200190565b602060405180830381865afa15801561037f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a39190611302565b8282815181106103b5576103b56112c3565b6020026020010151600001906001600160a01b031690816001600160a01b03168152505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630178b8bf87848151811061041c5761041c6112c3565b60200260200101516040518263ffffffff1660e01b815260040161044291815260200190565b602060405180830381865afa15801561045f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104839190611302565b905060005b85518110156105e35760008784815181106104a5576104a56112c3565b60200260200101518783815181106104bf576104bf6112c3565b60200260200101516040516020016104d7919061131f565b60405160208183030381529060405280519060200120604051602001610507929190918252602082015260400190565b60408051808303601f190181528282528051602090910120631674750f60e21b835260048301819052602483019190915260036044830152621d5c9b60ea1b606483015291506001600160a01b038416906359d1d43c90608401600060405180830381865afa15801561057e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105a6919081019061133b565b8585815181106105b8576105b86112c3565b60200260200101516060015183601481106105d5576105d56112c3565b602002015250600101610488565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b69fd4ab848481518110610625576106256112c3565b602002602001015160000151858581518110610643576106436112c3565b6020908102919091010151516040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381865afa15801561069a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106be91906113c1565b8383815181106106d0576106d06112c3565b602002602001015160400190151590811515815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b971a6bf848481518110610727576107276112c3565b6020908102919091010151516040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079b91906112d9565b8383815181106107ad576107ad6112c3565b6020908102919091018101510152506001016102f2565b5090505b92915050565b6060816001600160a01b031663da35c6646040518163ffffffff1660e01b8152600401602060405180830381865afa15801561080e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083291906112d9565b6001600160401b0381111561084957610849610e11565b6040519080825280602002602001820160405280156108c757816020015b6108b46040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290529061010082015290565b8152602001906001900390816108675790505b50905060005b8151811015610a7b5760006001600160a01b03841663013cf08b6108f28460016113dc565b6040518263ffffffff1660e01b815260040161091091815260200190565b61010060405180830381865afa15801561092e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095291906113fd565b905060405180610120016040528082600001516001600160a01b0316815260200182602001516001600160a01b031681526020018260400151815260200182606001518152602001826080015181526020018260a0015181526020018260c00151151581526020018260e0015115158152602001856001600160a01b0316633e4f49e68560016109e291906113dc565b6040518263ffffffff1660e01b8152600401610a0091815260200190565b602060405180830381865afa158015610a1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a419190611490565b6006811115610a5257610a52611192565b815250838381518110610a6757610a676112c3565b6020908102919091010152506001016108cd565b50919050565b604051639ae697bf60e01b81526001600160a01b038281166004830152600091829182918291829190881690639ae697bf90602401602060405180830381865afa158015610ad3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af791906112d9565b6040516317977c6160e01b81526001600160a01b038881166004830152919650908816906317977c6190602401602060405180830381865afa158015610b41573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b6591906112d9565b93508315610bea57604051631f27a4f360e11b8152600481018590526001600160a01b03881690633e4f49e690602401602060405180830381865afa158015610bb2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd69190611490565b6006811115610be757610be7611192565b92505b60405163a72edda360e01b81526001600160a01b03878116600483015288169063a72edda390602401602060405180830381865afa158015610c30573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c5491906112d9565b604051631976849960e21b81526001600160a01b038881166004830152919350908816906365da126490602401602060405180830381865afa158015610c9e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cc29190611302565b90509295509295909350565b604051806080016040528060006001600160a01b0316815260200160008152602001600015158152602001610d01610d06565b905290565b6040518061028001604052806014905b6060815260200190600190039081610d165790505090565b6001600160a01b0381168114610d4357600080fd5b50565b600080600060408486031215610d5b57600080fd5b8335610d6681610d2e565b925060208401356001600160401b03811115610d8157600080fd5b8401601f81018613610d9257600080fd5b80356001600160401b03811115610da857600080fd5b8660208260051b8401011115610dbd57600080fd5b939660209190910195509293505050565b602080825282518282018190526000918401906040840190835b81811015610e06578351835260209384019390920191600101610de8565b509095945050505050565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b0381118282101715610e4a57610e4a610e11565b60405290565b604051601f8201601f191681016001600160401b0381118282101715610e7857610e78610e11565b604052919050565b60006001600160401b03821115610e9957610e99610e11565b5060051b60200190565b60006001600160401b03821115610ebc57610ebc610e11565b50601f01601f191660200190565b600082601f830112610edb57600080fd5b8135610eee610ee982610e80565b610e50565b8082825260208201915060208360051b860101925085831115610f1057600080fd5b602085015b83811015610f945780356001600160401b03811115610f3357600080fd5b8601603f81018813610f4457600080fd5b6020810135610f55610ee982610ea3565b8181526040838301018a1015610f6a57600080fd5b81604084016020830137600060208383010152808652505050602083019250602081019050610f15565b5095945050505050565b60008060408385031215610fb157600080fd5b82356001600160401b03811115610fc757600080fd5b8301601f81018513610fd857600080fd5b8035610fe6610ee982610e80565b8082825260208201915060208360051b85010192508783111561100857600080fd5b6020840193505b8284101561102a57833582526020938401939091019061100f565b945050505060208301356001600160401b0381111561104857600080fd5b61105485828601610eca565b9150509250929050565b60005b83811015611079578181015183820152602001611061565b50506000910152565b6000602082016020835280845180835260408501915060408160051b86010192506020860160005b8281101561116257868503603f19018452815180516001600160a01b0316865260208082015190870152604080820151151590870152606090810151608091870182905290610300870190870160005b601481101561114957607f198984030182528351805180855261112481602087016020850161105e565b602095860195601f91909101601f1916949094018401939290920191506001016110fa565b50909650505060209384019391909101906001016110aa565b50929695505050505050565b60006020828403121561118057600080fd5b813561118b81610d2e565b9392505050565b634e487b7160e01b600052602160045260246000fd5b600781106111c657634e487b7160e01b600052602160045260246000fd5b9052565b602080825282518282018190526000918401906040840190835b81811015610e0657835160018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161124760c086018215159052565b5060e081015161125b60e086018215159052565b5061010081015190506112726101008501826111a8565b506020939093019261012092909201916001016111e4565b6000806040838503121561129d57600080fd5b82356112a881610d2e565b915060208301356112b881610d2e565b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156112eb57600080fd5b5051919050565b80516112fd81610d2e565b919050565b60006020828403121561131457600080fd5b815161118b81610d2e565b6000825161133181846020870161105e565b9190910192915050565b60006020828403121561134d57600080fd5b81516001600160401b0381111561136357600080fd5b8201601f8101841361137457600080fd5b8051611382610ee982610ea3565b81815285602083850101111561139757600080fd5b6113a882602083016020860161105e565b95945050505050565b805180151581146112fd57600080fd5b6000602082840312156113d357600080fd5b61118b826113b1565b808201808211156107c857634e487b7160e01b600052601160045260246000fd5b600061010082840312801561141157600080fd5b50600061141c610e27565b835161142781610d2e565b8152611435602085016112f2565b602082015260408481015190820152606080850151908201526080808501519082015260a080850151908201819052915061147260c085016113b1565b60c082015261148360e085016113b1565b60e0820152949350505050565b6000602082840312156114a257600080fd5b81516007811061118b57600080fdfea2646970667358221220620bf16bbb21ad88a389d2bd10576452713f0661a94547e005771465e33ca28264736f6c634300081c0033";

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
