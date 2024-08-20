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
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  CTornado,
  CTornadoInterface,
} from "../../../contracts/Classic/CTornado";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_comp",
        type: "address",
      },
      {
        internalType: "contract IVerifier",
        name: "_verifier",
        type: "address",
      },
      {
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_denomination",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_merkleTreeHeight",
        type: "uint32",
      },
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "commitment",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "leafIndex",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "nullifierHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "FIELD_SIZE",
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
    name: "ROOT_HISTORY_SIZE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ZERO_VALUE",
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
    name: "claimComp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "commitments",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "comp",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "currentRootIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "denomination",
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
        internalType: "bytes32",
        name: "_commitment",
        type: "bytes32",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "filledSubtrees",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
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
        internalType: "contract IHasher",
        name: "_hasher",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_left",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_right",
        type: "bytes32",
      },
    ],
    name: "hashLeftRight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "hasher",
    outputs: [
      {
        internalType: "contract IHasher",
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
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
    ],
    name: "isKnownRoot",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
    ],
    name: "isSpent",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "_nullifierHashes",
        type: "bytes32[]",
      },
    ],
    name: "isSpentArray",
    outputs: [
      {
        internalType: "bool[]",
        name: "spent",
        type: "bool[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "levels",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextIndex",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "nullifierHashes",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roots",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "contract IVerifier",
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
        internalType: "bytes",
        name: "_proof",
        type: "bytes",
      },
      {
        internalType: "bytes32",
        name: "_root",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_nullifierHash",
        type: "bytes32",
      },
      {
        internalType: "address payable",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "_relayer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_refund",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "zeros",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610160604052600380546001600160401b031916905534801561002157600080fd5b5060405161205a38038061205a8339810160408190526100409161048f565b848484848484848484808360008263ffffffff16116100b25760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208263ffffffff16106101085760405162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e203332000060448201526064016100a9565b63ffffffff821660a0526001600160a01b0381166080527f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c60005b8363ffffffff168163ffffffff1610156101905763ffffffff811660009081526001602090815260408083208590559082905290208290556101868383806102aa565b9150600101610143565b506000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b55505060016004558161021e5760405162461bcd60e51b815260206004820152602560248201527f64656e6f6d696e6174696f6e2073686f756c6420626520677265617465722074604482015264068616e20360dc1b60648201526084016100a9565b506001600160a01b0392831660c05260e05250908116610100528a16935061028c925050505760405162461bcd60e51b815260206004820152601a60248201527f496e76616c696420434f4d5020746f6b656e206164647265737300000000000060448201526064016100a9565b5050506001600160a01b03938416610120525050166101405261054e565b600060008051602061203a83398151915283106103095760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6460448201526064016100a9565b60008051602061203a83398151915282106103705760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b60648201526084016100a9565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156103bf573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103e3919061052a565b909250905060008051602061203a83398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610448573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061046c919061052a565b509695505050505050565b6001600160a01b038116811461048c57600080fd5b50565b600080600080600080600060e0888a0312156104aa57600080fd5b87516104b581610477565b60208901519097506104c681610477565b60408901519096506104d781610477565b60608901519095506104e881610477565b608089015160a08a0151919550935063ffffffff8116811461050957600080fd5b60c089015190925061051a81610477565b8091505092959891949750929550565b6000806040838503121561053d57600080fd5b505080516020909101519092909150565b60805160a05160c05160e051610100516101205161014051611a3e6105fc6000396000818161017d01526105d40152600081816102e5015261060501526000818161057801528181610ecc01528181610f0601526112600152600081816103690152818161074101528181610e9e015261128401526000818161023801526108aa01526000818161029c01528181610fe7015261108901526000818161051701526111210152611a3e6000f3fe6080604052600436106101665760003560e01c806390eeb02b116100d1578063e5285dcc1161008a578063ed33639f11610064578063ed33639f14610505578063f178e47c14610539578063fc0c546a14610566578063fc7e9c6f1461059a57600080fd5b8063e5285dcc14610474578063e8295588146104a4578063ec732959146104d157600080fd5b806390eeb02b146103ab5780639fa12d0b146103c8578063b214faa5146103f5578063ba70f75714610408578063c2b40ae414610432578063cd87a3b41461045f57600080fd5b80634ecf518b116101235780634ecf518b1461028a5780635aa6e675146102d35780636d9833e314610307578063839df945146103275780638bca6d16146103575780638ea3099e1461038b57600080fd5b8063109d0af81461016b57806317cc915c146101bc5780631bd85bdb146101fc57806321a0adb6146102135780632b7ac3f314610226578063414a37ba1461025a575b600080fd5b34801561017757600080fd5b5061019f7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101c857600080fd5b506101ec6101d73660046114ef565b60056020526000908152604090205460ff1681565b60405190151581526020016101b3565b34801561020857600080fd5b506102116105bf565b005b61021161022136600461152d565b6106e3565b34801561023257600080fd5b5061019f7f000000000000000000000000000000000000000000000000000000000000000081565b34801561026657600080fd5b5061027c6000805160206119e983398151915281565b6040519081526020016101b3565b34801561029657600080fd5b506102be7f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101b3565b3480156102df57600080fd5b5061019f7f000000000000000000000000000000000000000000000000000000000000000081565b34801561031357600080fd5b506101ec6103223660046114ef565b6109ee565b34801561033357600080fd5b506101ec6103423660046114ef565b60066020526000908152604090205460ff1681565b34801561036357600080fd5b5061027c7f000000000000000000000000000000000000000000000000000000000000000081565b34801561039757600080fd5b5061027c6103a63660046115e3565b610a6c565b3480156103b757600080fd5b506003546102be9063ffffffff1681565b3480156103d457600080fd5b506103e86103e3366004611618565b610c39565b6040516101b3919061168d565b6102116104033660046114ef565b610cf5565b34801561041457600080fd5b5060035463ffffffff1660009081526002602052604090205461027c565b34801561043e57600080fd5b5061027c61044d3660046114ef565b60026020526000908152604090205481565b34801561046b57600080fd5b506102be601e81565b34801561048057600080fd5b506101ec61048f3660046114ef565b60009081526005602052604090205460ff1690565b3480156104b057600080fd5b5061027c6104bf3660046114ef565b60016020526000908152604090205481565b3480156104dd57600080fd5b5061027c7f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b34801561051157600080fd5b5061019f7f000000000000000000000000000000000000000000000000000000000000000081565b34801561054557600080fd5b5061027c6105543660046114ef565b60006020819052908152604090205481565b34801561057257600080fd5b5061019f7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105a657600080fd5b506003546102be90640100000000900463ffffffff1681565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb907f00000000000000000000000000000000000000000000000000000000000000009083906370a0823190602401602060405180830381865afa15801561064d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061067191906116d3565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af11580156106bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e091906116ec565b50565b60026004540361073a5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026004557f00000000000000000000000000000000000000000000000000000000000000008211156107af5760405162461bcd60e51b815260206004820152601a60248201527f4665652065786365656473207472616e736665722076616c75650000000000006044820152606401610731565b60008581526005602052604090205460ff161561080e5760405162461bcd60e51b815260206004820152601f60248201527f546865206e6f746520686173206265656e20616c7265616479207370656e74006044820152606401610731565b610817866109ee565b6108635760405162461bcd60e51b815260206004820152601c60248201527f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f74000000006044820152606401610731565b6040805160c081018252878152602081018790526001600160a01b038681168284015285811660608301526080820185905260a08201849052915163695ef6f960e01b81527f00000000000000000000000000000000000000000000000000000000000000009092169163695ef6f9916108e3918c918c91600401611715565b6020604051808303816000875af1158015610902573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092691906116ec565b61096b5760405162461bcd60e51b815260206004820152601660248201527524b73b30b634b2103bb4ba34323930bb90383937b7b360511b6044820152606401610731565b6000858152600560205260409020805460ff1916600117905561099084848484610e2c565b604080516001600160a01b03868116825260208201889052918101849052908416907fe9e508bad6d4c3227e881ca19068f099da81b5164dd6d62b2eaf1e8bc6c349319060600160405180910390a250506001600455505050505050565b60008181036109ff57506000919050565b60035463ffffffff16805b63ffffffff81166000908152600260205260409020548403610a30575060019392505050565b8063ffffffff16600003610a425750601e5b80610a4c81611789565b9150508163ffffffff168163ffffffff1603610a0a575060009392505050565b60006000805160206119e98339815191528310610acb5760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c646044820152606401610731565b6000805160206119e98339815191528210610b325760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b6064820152608401610731565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610b81573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ba591906117a9565b90925090506000805160206119e983398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610c0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c2e91906117a9565b509695505050505050565b60608167ffffffffffffffff811115610c5457610c546117e3565b604051908082528060200260200182016040528015610c7d578160200160208202803683370190505b50905060005b82811015610cee57610cbc848483818110610ca057610ca06117f9565b9050602002013560009081526005602052604090205460ff1690565b15610ce6576001828281518110610cd557610cd56117f9565b911515602092830291909101909101525b600101610c83565b5092915050565b600260045403610d475760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610731565b600260045560008181526006602052604090205460ff1615610db55760405162461bcd60e51b815260206004820152602160248201527f54686520636f6d6d69746d656e7420686173206265656e207375626d697474656044820152601960fa1b6064820152608401610731565b6000610dc082610fce565b6000838152600660205260409020805460ff191660011790559050610de36111ec565b6040805163ffffffff8316815242602082015283917fa945e51eec50ab98c161376f0db4cf2aeba3ec92755fe2fcd388bdbbb80ff196910160405180910390a250506001600455565b803414610e945760405162461bcd60e51b815260206004820152603060248201527f496e636f727265637420726566756e6420616d6f756e7420726563656976656460448201526f08189e481d1a194818dbdb9d1c9858dd60821b6064820152608401610731565b610ef384610ec2847f000000000000000000000000000000000000000000000000000000000000000061180f565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906112aa565b8115610f2d57610f2d6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684846112aa565b8015610fc8576000846001600160a01b03168260405160006040518083038185875af1925050503d8060008114610f80576040519150601f19603f3d011682016040523d82523d6000602084013e610f85565b606091505b5050905080610fc6576040516001600160a01b0385169083156108fc029084906000818181858888f19350505050158015610fc4573d6000803e3d6000fd5b505b505b50505050565b600354600090640100000000900463ffffffff1661100d7f00000000000000000000000000000000000000000000000000000000000000006002611939565b63ffffffff168163ffffffff16036110805760405162461bcd60e51b815260206004820152603060248201527f4d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c656160448201526f1d995cc818d85b88189948185919195960821b6064820152608401610731565b8083600080805b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff16101561115e576110c6600286611956565b63ffffffff166000036111005763ffffffff811660009081526001602090815260408083205491839052909120859055849350915061111c565b63ffffffff811660009081526020819052604090205492508391505b6111477f00000000000000000000000000000000000000000000000000000000000000008484610a6c565b9350611154600286611979565b9450600101611087565b50600354600090601e906111799063ffffffff16600161199c565b6111839190611956565b6003805463ffffffff191663ffffffff8316908117909155600090815260026020526040902085905590506111b986600161199c565b6003805463ffffffff929092166401000000000267ffffffff000000001990921691909117905550939695505050505050565b34156112535760405162461bcd60e51b815260206004820152603060248201527f4554482076616c756520697320737570706f73656420746f206265203020666f60448201526f7220455243323020696e7374616e636560801b6064820152608401610731565b6112a86001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633307f00000000000000000000000000000000000000000000000000000000000000006113c3565b565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161130691906119b9565b6000604051808303816000865af19150503d8060008114611343576040519150601f19603f3d011682016040523d82523d6000602084013e611348565b606091505b50915091508161135a57805181602001fd5b8051158061137757508080602001905181019061137791906116ec565b610fc65760405162461bcd60e51b815260206004820152601e60248201527f5361666545524332303a20736166655472616e73666572206661696c656400006044820152606401610731565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283929088169161142791906119b9565b6000604051808303816000865af19150503d8060008114611464576040519150601f19603f3d011682016040523d82523d6000602084013e611469565b606091505b50915091508161147b57805181602001fd5b8051158061149857508080602001905181019061149891906116ec565b610fc45760405162461bcd60e51b815260206004820152602260248201527f5361666545524332303a20736166655472616e7366657246726f6d206661696c604482015261195960f21b6064820152608401610731565b60006020828403121561150157600080fd5b5035919050565b6001600160a01b03811681146106e057600080fd5b803561152881611508565b919050565b60008060008060008060008060e0898b03121561154957600080fd5b883567ffffffffffffffff8082111561156157600080fd5b818b0191508b601f83011261157557600080fd5b81358181111561158457600080fd5b8c602082850101111561159657600080fd5b60209283019a509850508901359550604089013594506115b860608a0161151d565b93506115c660808a0161151d565b925060a0890135915060c089013590509295985092959890939650565b6000806000606084860312156115f857600080fd5b833561160381611508565b95602085013595506040909401359392505050565b6000806020838503121561162b57600080fd5b823567ffffffffffffffff8082111561164357600080fd5b818501915085601f83011261165757600080fd5b81358181111561166657600080fd5b8660208260051b850101111561167b57600080fd5b60209290920196919550909350505050565b6020808252825182820181905260009190848201906040850190845b818110156116c75783511515835292840192918401916001016116a9565b50909695505050505050565b6000602082840312156116e557600080fd5b5051919050565b6000602082840312156116fe57600080fd5b8151801515811461170e57600080fd5b9392505050565b60e081528260e08201526000610100848682850137600081868501015280601f19601f87011684010191505060208083018460005b60068110156117675781518352918301919083019060010161174a565b50505050949350505050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff82168061179f5761179f611773565b6000190192915050565b600080604083850312156117bc57600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b8181038181111561182257611822611773565b92915050565b600181815b80851115611865578163ffffffff0482111561184b5761184b611773565b8085161561185857918102915b93841c939080029061182d565b509250929050565b60008261187c57506001611822565b8161188957506000611822565b816001811461189f57600281146118a9576118da565b6001915050611822565b60ff8411156118ba576118ba611773565b6001841b915063ffffffff8211156118d4576118d4611773565b50611822565b5060208310610133831016604e8410600b8410161715611911575081810a63ffffffff81111561190c5761190c611773565b611822565b61191b8383611828565b8063ffffffff0482111561193157611931611773565b029392505050565b600063ffffffff61194e81851682851661186d565b949350505050565b600063ffffffff8084168061196d5761196d6117cd565b92169190910692915050565b600063ffffffff80841680611990576119906117cd565b92169190910492915050565b63ffffffff818116838216019080821115610cee57610cee611773565b6000825160005b818110156119da57602081860181015185830152016119c0565b50600092019182525091905056fe30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001a26469706673582212207136b381e40b7e1e84fceaba3022a28e73ab509289c831db484f05c7303d32a464736f6c6343000819003330644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001";

type CTornadoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CTornadoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CTornado__factory extends ContractFactory {
  constructor(...args: CTornadoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _governance: AddressLike,
    _comp: AddressLike,
    _verifier: AddressLike,
    _hasher: AddressLike,
    _denomination: BigNumberish,
    _merkleTreeHeight: BigNumberish,
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _governance,
      _comp,
      _verifier,
      _hasher,
      _denomination,
      _merkleTreeHeight,
      _token,
      overrides || {}
    );
  }
  override deploy(
    _governance: AddressLike,
    _comp: AddressLike,
    _verifier: AddressLike,
    _hasher: AddressLike,
    _denomination: BigNumberish,
    _merkleTreeHeight: BigNumberish,
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _governance,
      _comp,
      _verifier,
      _hasher,
      _denomination,
      _merkleTreeHeight,
      _token,
      overrides || {}
    ) as Promise<
      CTornado & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): CTornado__factory {
    return super.connect(runner) as CTornado__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CTornadoInterface {
    return new Interface(_abi) as CTornadoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): CTornado {
    return new Contract(address, _abi, runner) as unknown as CTornado;
  }
}
