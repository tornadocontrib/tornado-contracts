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
      {
        internalType: "contract IGovernance",
        name: "_governance",
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
    inputs: [],
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
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "contract IGovernance",
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
  "0x60e060405234801561001057600080fd5b5060405161173338038061173383398101604081905261002f91610064565b6001600160a01b0390811660805291821660a0521660c0526100b1565b6001600160a01b038116811461006157600080fd5b50565b60008060006060848603121561007957600080fd5b83516100848161004c565b60208501519093506100958161004c565b60408501519092506100a68161004c565b809150509250925092565b60805160a05160c0516115fa6101396000396000818160cb015281816104fd01526105ff01526000818160870152818161021401526102f401526000818161011201528181610738015281816108240152818161095401528181610a5a01528181610b3b01528181610bf701528181610c8201528181610d280152610db501526115fa6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80635aa6e6751161005b5780635aa6e6751461010d5780636aec766f14610134578063cceb68f514610154578063ffc9896b1461016957600080fd5b80631cb120d61461008257806339c16356146100c65780634d47d775146100ed575b600080fd5b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6101006100fb36600461101a565b6101ad565b6040516100bd91906110fe565b6100a97f000000000000000000000000000000000000000000000000000000000000000081565b6101476101423660046111ea565b6106e5565b6040516100bd919061125f565b61015c610820565b6040516100bd91906112da565b61017c6101773660046113b2565b610b31565b6040805195865260208601949094529284019190915260608301526001600160a01b0316608082015260a0016100bd565b6060600083516001600160401b038111156101ca576101ca610e8d565b60405190808252806020026020018201604052801561020357816020015b6101f0610e2d565b8152602001906001900390816101e85790505b50905060005b84518110156106db577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166302571be3868381518110610253576102536113d6565b60200260200101516040518263ffffffff1660e01b815260040161027991815260200190565b602060405180830381865afa158015610296573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ba91906113fc565b8282815181106102cc576102cc6113d6565b6020026020010151600001906001600160a01b031690816001600160a01b03168152505060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316630178b8bf878481518110610333576103336113d6565b60200260200101516040518263ffffffff1660e01b815260040161035991815260200190565b602060405180830381865afa158015610376573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039a91906113fc565b905060005b85518110156104fa5760008784815181106103bc576103bc6113d6565b60200260200101518783815181106103d6576103d66113d6565b60200260200101516040516020016103ee9190611419565b6040516020818303038152906040528051906020012060405160200161041e929190918252602082015260400190565b60408051808303601f190181528282528051602090910120631674750f60e21b835260048301819052602483019190915260036044830152621d5c9b60ea1b606483015291506001600160a01b038416906359d1d43c90608401600060405180830381865afa158015610495573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104bd9190810190611435565b8585815181106104cf576104cf6113d6565b60200260200101516060015183601481106104ec576104ec6113d6565b60200201525060010161039f565b507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b69fd4ab84848151811061053c5761053c6113d6565b60200260200101516000015185858151811061055a5761055a6113d6565b6020908102919091010151516040516001600160e01b031960e085901b1681526001600160a01b03928316600482015291166024820152604401602060405180830381865afa1580156105b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105d591906114bb565b8383815181106105e7576105e76113d6565b602002602001015160400190151590811515815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b971a6bf84848151811061063e5761063e6113d6565b6020908102919091010151516040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa15801561068e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b291906114d6565b8383815181106106c4576106c46113d6565b602090810291909101810151015250600101610209565b5090505b92915050565b6060816001600160401b038111156106ff576106ff610e8d565b604051908082528060200260200182016040528015610728578160200160208202803683370190505b50905060005b82811015610819577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639ae697bf858584818110610777576107776113d6565b905060200201602081019061078c91906113b2565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa1580156107d0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f491906114d6565b828281518110610806576108066113d6565b602090810291909101015260010161072e565b5092915050565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663da35c6646040518163ffffffff1660e01b8152600401602060405180830381865afa158015610880573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108a491906114d6565b6001600160401b038111156108bb576108bb610e8d565b60405190808252806020026020018201604052801561093957816020015b6109266040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290529061010082015290565b8152602001906001900390816108d95790505b50905060005b8151811015610b2d5760006001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663013cf08b6109848460016114ef565b6040518263ffffffff1660e01b81526004016109a291815260200190565b61010060405180830381865afa1580156109c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109e49190611510565b905060405180610120016040528082600001516001600160a01b0316815260200182602001516001600160a01b031681526020018260400151815260200182606001518152602001826080015181526020018260a0015181526020018260c00151151581526020018260e00151151581526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633e4f49e6856001610a9491906114ef565b6040518263ffffffff1660e01b8152600401610ab291815260200190565b602060405180830381865afa158015610acf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af391906115a3565b6006811115610b0457610b046112a2565b815250838381518110610b1957610b196113d6565b60209081029190910101525060010161093f565b5090565b60008060008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639ae697bf876040518263ffffffff1660e01b8152600401610b9491906001600160a01b0391909116815260200190565b602060405180830381865afa158015610bb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd591906114d6565b6040516317977c6160e01b81526001600160a01b0388811660048301529196507f0000000000000000000000000000000000000000000000000000000000000000909116906317977c6190602401602060405180830381865afa158015610c40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6491906114d6565b93508315610d0957604051631f27a4f360e11b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690633e4f49e690602401602060405180830381865afa158015610cd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cf591906115a3565b6006811115610d0657610d066112a2565b92505b60405163a72edda360e01b81526001600160a01b0387811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063a72edda390602401602060405180830381865afa158015610d6f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9391906114d6565b604051631976849960e21b81526001600160a01b0388811660048301529193507f0000000000000000000000000000000000000000000000000000000000000000909116906365da126490602401602060405180830381865afa158015610dfe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2291906113fc565b905091939590929450565b604051806080016040528060006001600160a01b0316815260200160008152602001600015158152602001610e60610e65565b905290565b6040518061028001604052806014905b6060815260200190600190039081610e755790505090565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b0381118282101715610ec657610ec6610e8d565b60405290565b604051601f8201601f191681016001600160401b0381118282101715610ef457610ef4610e8d565b604052919050565b60006001600160401b03821115610f1557610f15610e8d565b5060051b60200190565b60006001600160401b03821115610f3857610f38610e8d565b50601f01601f191660200190565b600082601f830112610f5757600080fd5b8135610f6a610f6582610efc565b610ecc565b8082825260208201915060208360051b860101925085831115610f8c57600080fd5b602085015b838110156110105780356001600160401b03811115610faf57600080fd5b8601603f81018813610fc057600080fd5b6020810135610fd1610f6582610f1f565b8181526040838301018a1015610fe657600080fd5b81604084016020830137600060208383010152808652505050602083019250602081019050610f91565b5095945050505050565b6000806040838503121561102d57600080fd5b82356001600160401b0381111561104357600080fd5b8301601f8101851361105457600080fd5b8035611062610f6582610efc565b8082825260208201915060208360051b85010192508783111561108457600080fd5b6020840193505b828410156110a657833582526020938401939091019061108b565b945050505060208301356001600160401b038111156110c457600080fd5b6110d085828601610f46565b9150509250929050565b60005b838110156110f55781810151838201526020016110dd565b50506000910152565b6000602082016020835280845180835260408501915060408160051b86010192506020860160005b828110156111de57868503603f19018452815180516001600160a01b0316865260208082015190870152604080820151151590870152606090810151608091870182905290610300870190870160005b60148110156111c557607f19898403018252835180518085526111a08160208701602085016110da565b602095860195601f91909101601f191694909401840193929092019150600101611176565b5090965050506020938401939190910190600101611126565b50929695505050505050565b600080602083850312156111fd57600080fd5b82356001600160401b0381111561121357600080fd5b8301601f8101851361122457600080fd5b80356001600160401b0381111561123a57600080fd5b8560208260051b840101111561124f57600080fd5b6020919091019590945092505050565b602080825282518282018190526000918401906040840190835b81811015611297578351835260209384019390920191600101611279565b509095945050505050565b634e487b7160e01b600052602160045260246000fd5b600781106112d657634e487b7160e01b600052602160045260246000fd5b9052565b602080825282518282018190526000918401906040840190835b8181101561129757835160018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161135760c086018215159052565b5060e081015161136b60e086018215159052565b5061010081015190506113826101008501826112b8565b506020939093019261012092909201916001016112f4565b6001600160a01b03811681146113af57600080fd5b50565b6000602082840312156113c457600080fd5b81356113cf8161139a565b9392505050565b634e487b7160e01b600052603260045260246000fd5b80516113f78161139a565b919050565b60006020828403121561140e57600080fd5b81516113cf8161139a565b6000825161142b8184602087016110da565b9190910192915050565b60006020828403121561144757600080fd5b81516001600160401b0381111561145d57600080fd5b8201601f8101841361146e57600080fd5b805161147c610f6582610f1f565b81815285602083850101111561149157600080fd5b6114a28260208301602086016110da565b95945050505050565b805180151581146113f757600080fd5b6000602082840312156114cd57600080fd5b6113cf826114ab565b6000602082840312156114e857600080fd5b5051919050565b808201808211156106df57634e487b7160e01b600052601160045260246000fd5b600061010082840312801561152457600080fd5b50600061152f610ea3565b835161153a8161139a565b8152611548602085016113ec565b602082015260408481015190820152606080850151908201526080808501519082015260a080850151908201819052915061158560c085016114ab565b60c082015261159660e085016114ab565b60e0820152949350505050565b6000602082840312156115b557600080fd5b8151600781106113cf57600080fdfea26469706673582212209c2d644a04f125b3f758f33be781084cc4076a32510246cc61234f9dd1abc80b64736f6c634300081c0033";

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
    _governance: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _ensRegistry,
      _relayerRegistry,
      _governance,
      overrides || {}
    );
  }
  override deploy(
    _ensRegistry: AddressLike,
    _relayerRegistry: AddressLike,
    _governance: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _ensRegistry,
      _relayerRegistry,
      _governance,
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
