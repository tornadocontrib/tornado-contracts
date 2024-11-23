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
    name: "tornadoProxyLight",
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
  "0x610180604052600380546001600160401b031916905534801561002157600080fd5b5060405161216338038061216383398101604081905261004091610497565b8484848484600085858585808360008263ffffffff16116100b45760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208263ffffffff161061010a5760405162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e203332000060448201526064016100ab565b63ffffffff821660a0526001600160a01b0381166080527f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c60005b8363ffffffff168163ffffffff1610156101925763ffffffff811660009081526001602090815260408083208590559082905290208290556101888383806102b2565b9150600101610145565b506000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b5550506001600455816102205760405162461bcd60e51b815260206004820152602560248201527f64656e6f6d696e6174696f6e2073686f756c6420626520677265617465722074604482015264068616e20360dc1b60648201526084016100ab565b506001600160a01b0392831660c05260e05250918216610100528116610120528a169350610294925050505760405162461bcd60e51b815260206004820152601a60248201527f496e76616c696420434f4d5020746f6b656e206164647265737300000000000060448201526064016100ab565b5050506001600160a01b039384166101405250501661016052610556565b600060008051602061214383398151915283106103115760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6460448201526064016100ab565b60008051602061214383398151915282106103785760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b60648201526084016100ab565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156103c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103eb9190610532565b909250905060008051602061214383398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610450573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104749190610532565b509695505050505050565b6001600160a01b038116811461049457600080fd5b50565b600080600080600080600060e0888a0312156104b257600080fd5b87516104bd8161047f565b60208901519097506104ce8161047f565b60408901519096506104df8161047f565b60608901519095506104f08161047f565b608089015160a08a0151919550935063ffffffff8116811461051157600080fd5b60c08901519092506105228161047f565b8091505092959891949750929550565b6000806040838503121561054557600080fd5b505080516020909101519092909150565b60805160a05160c05160e05161010051610120516101405161016051611b1f610624600039600081816101980152610623015260008181610300015261065401526000818161035401526112ac0152600081816105c701528181610f1b01528181610f55015281816112df01526113360152600081816103b80152818161079001528181610eed01528181611303015261135a01526000818161025301526108f90152600081816102b70152818161103601526110d801526000818161056601526111700152611b1f6000f3fe6080604052600436106101815760003560e01c806390eeb02b116100d1578063e5285dcc1161008a578063ed33639f11610064578063ed33639f14610554578063f178e47c14610588578063fc0c546a146105b5578063fc7e9c6f146105e957600080fd5b8063e5285dcc146104c3578063e8295588146104f3578063ec7329591461052057600080fd5b806390eeb02b146103fa5780639fa12d0b14610417578063b214faa514610444578063ba70f75714610457578063c2b40ae414610481578063cd87a3b4146104ae57600080fd5b80634ecf518b1161013e578063761f894e11610118578063761f894e14610342578063839df945146103765780638bca6d16146103a65780638ea3099e146103da57600080fd5b80634ecf518b146102a55780635aa6e675146102ee5780636d9833e31461032257600080fd5b8063109d0af81461018657806317cc915c146101d75780631bd85bdb1461021757806321a0adb61461022e5780632b7ac3f314610241578063414a37ba14610275575b600080fd5b34801561019257600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156101e357600080fd5b506102076101f23660046115c3565b60056020526000908152604090205460ff1681565b60405190151581526020016101ce565b34801561022357600080fd5b5061022c61060e565b005b61022c61023c366004611601565b610732565b34801561024d57600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b34801561028157600080fd5b50610297600080516020611aca83398151915281565b6040519081526020016101ce565b3480156102b157600080fd5b506102d97f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016101ce565b3480156102fa57600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b34801561032e57600080fd5b5061020761033d3660046115c3565b610a3d565b34801561034e57600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b34801561038257600080fd5b506102076103913660046115c3565b60066020526000908152604090205460ff1681565b3480156103b257600080fd5b506102977f000000000000000000000000000000000000000000000000000000000000000081565b3480156103e657600080fd5b506102976103f53660046116ba565b610abb565b34801561040657600080fd5b506003546102d99063ffffffff1681565b34801561042357600080fd5b506104376104323660046116ef565b610c88565b6040516101ce9190611766565b61022c6104523660046115c3565b610d44565b34801561046357600080fd5b5060035463ffffffff16600090815260026020526040902054610297565b34801561048d57600080fd5b5061029761049c3660046115c3565b60026020526000908152604090205481565b3480156104ba57600080fd5b506102d9601e81565b3480156104cf57600080fd5b506102076104de3660046115c3565b60009081526005602052604090205460ff1690565b3480156104ff57600080fd5b5061029761050e3660046115c3565b60016020526000908152604090205481565b34801561052c57600080fd5b506102977f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b34801561056057600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b34801561059457600080fd5b506102976105a33660046115c3565b60006020819052908152604090205481565b3480156105c157600080fd5b506101ba7f000000000000000000000000000000000000000000000000000000000000000081565b3480156105f557600080fd5b506003546102d990640100000000900463ffffffff1681565b6040516370a0823160e01b81523060048201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063a9059cbb907f00000000000000000000000000000000000000000000000000000000000000009083906370a0823190602401602060405180830381865afa15801561069c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c091906117ab565b6040516001600160e01b031960e085901b1681526001600160a01b03909216600483015260248201526044016020604051808303816000875af115801561070b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072f91906117c4565b50565b6002600454036107895760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026004557f00000000000000000000000000000000000000000000000000000000000000008211156107fe5760405162461bcd60e51b815260206004820152601a60248201527f4665652065786365656473207472616e736665722076616c75650000000000006044820152606401610780565b60008581526005602052604090205460ff161561085d5760405162461bcd60e51b815260206004820152601f60248201527f546865206e6f746520686173206265656e20616c7265616479207370656e74006044820152606401610780565b61086686610a3d565b6108b25760405162461bcd60e51b815260206004820152601c60248201527f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f74000000006044820152606401610780565b6040805160c081018252878152602081018790526001600160a01b038681168284015285811660608301526080820185905260a08201849052915163695ef6f960e01b81527f00000000000000000000000000000000000000000000000000000000000000009092169163695ef6f991610932918c918c916004016117ed565b6020604051808303816000875af1158015610951573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097591906117c4565b6109ba5760405162461bcd60e51b815260206004820152601660248201527524b73b30b634b2103bb4ba34323930bb90383937b7b360511b6044820152606401610780565b6000858152600560205260409020805460ff191660011790556109df84848484610e7b565b604080516001600160a01b03868116825260208201889052918101849052908416907fe9e508bad6d4c3227e881ca19068f099da81b5164dd6d62b2eaf1e8bc6c349319060600160405180910390a250506001600455505050505050565b6000818103610a4e57506000919050565b60035463ffffffff16805b63ffffffff81166000908152600260205260409020548403610a7f575060019392505050565b8063ffffffff16600003610a915750601e5b80610a9b81611863565b9150508163ffffffff168163ffffffff1603610a59575060009392505050565b6000600080516020611aca8339815191528310610b1a5760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c646044820152606401610780565b600080516020611aca8339815191528210610b815760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b6064820152608401610780565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610bd0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf49190611883565b9092509050600080516020611aca83398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610c59573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c7d9190611883565b509695505050505050565b60608167ffffffffffffffff811115610ca357610ca36118bd565b604051908082528060200260200182016040528015610ccc578160200160208202803683370190505b50905060005b82811015610d3d57610d0b848483818110610cef57610cef6118d3565b9050602002013560009081526005602052604090205460ff1690565b15610d35576001828281518110610d2457610d246118d3565b911515602092830291909101909101525b600101610cd2565b5092915050565b600260045403610d965760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610780565b600260045560008181526006602052604090205460ff1615610e045760405162461bcd60e51b815260206004820152602160248201527f54686520636f6d6d69746d656e7420686173206265656e207375626d697474656044820152601960fa1b6064820152608401610780565b6000610e0f8261101d565b6000838152600660205260409020805460ff191660011790559050610e3261123b565b6040805163ffffffff8316815242602082015283917fa945e51eec50ab98c161376f0db4cf2aeba3ec92755fe2fcd388bdbbb80ff196910160405180910390a250506001600455565b803414610ee35760405162461bcd60e51b815260206004820152603060248201527f496e636f727265637420726566756e6420616d6f756e7420726563656976656460448201526f08189e481d1a194818dbdb9d1c9858dd60821b6064820152608401610780565b610f4284610f11847f00000000000000000000000000000000000000000000000000000000000000006118e9565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016919061137e565b8115610f7c57610f7c6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016848461137e565b8015611017576000846001600160a01b03168260405160006040518083038185875af1925050503d8060008114610fcf576040519150601f19603f3d011682016040523d82523d6000602084013e610fd4565b606091505b5050905080611015576040516001600160a01b0385169083156108fc029084906000818181858888f19350505050158015611013573d6000803e3d6000fd5b505b505b50505050565b600354600090640100000000900463ffffffff1661105c7f00000000000000000000000000000000000000000000000000000000000000006002611a16565b63ffffffff168163ffffffff16036110cf5760405162461bcd60e51b815260206004820152603060248201527f4d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c656160448201526f1d995cc818d85b88189948185919195960821b6064820152608401610780565b8083600080805b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff1610156111ad57611115600286611a2e565b63ffffffff1660000361114f5763ffffffff811660009081526001602090815260408083205491839052909120859055849350915061116b565b63ffffffff811660009081526020819052604090205492508391505b6111967f00000000000000000000000000000000000000000000000000000000000000008484610abb565b93506111a3600286611a56565b94506001016110d6565b50600354600090601e906111c89063ffffffff166001611a7e565b6111d29190611a2e565b6003805463ffffffff191663ffffffff831690811790915560009081526002602052604090208590559050611208866001611a7e565b6003805463ffffffff929092166401000000000267ffffffff000000001990921691909117905550939695505050505050565b34156112a25760405162461bcd60e51b815260206004820152603060248201527f4554482076616c756520697320737570706f73656420746f206265203020666f60448201526f7220455243323020696e7374616e636560801b6064820152608401610780565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163303611329576113276001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001632307f0000000000000000000000000000000000000000000000000000000000000000611497565b565b6113276001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633307f0000000000000000000000000000000000000000000000000000000000000000611497565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b17905291516000928392908716916113da9190611a9a565b6000604051808303816000865af19150503d8060008114611417576040519150601f19603f3d011682016040523d82523d6000602084013e61141c565b606091505b50915091508161142e57805181602001fd5b8051158061144b57508080602001905181019061144b91906117c4565b6110155760405162461bcd60e51b815260206004820152601e60248201527f5361666545524332303a20736166655472616e73666572206661696c656400006044820152606401610780565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392908816916114fb9190611a9a565b6000604051808303816000865af19150503d8060008114611538576040519150601f19603f3d011682016040523d82523d6000602084013e61153d565b606091505b50915091508161154f57805181602001fd5b8051158061156c57508080602001905181019061156c91906117c4565b6110135760405162461bcd60e51b815260206004820152602260248201527f5361666545524332303a20736166655472616e7366657246726f6d206661696c604482015261195960f21b6064820152608401610780565b6000602082840312156115d557600080fd5b5035919050565b6001600160a01b038116811461072f57600080fd5b80356115fc816115dc565b919050565b60008060008060008060008060e0898b03121561161d57600080fd5b883567ffffffffffffffff81111561163457600080fd5b8901601f81018b1361164557600080fd5b803567ffffffffffffffff81111561165c57600080fd5b8b602082840101111561166e57600080fd5b60209182019950975089013595506040890135945061168f60608a016115f1565b935061169d60808a016115f1565b979a969950949793969295929450505060a08201359160c0013590565b6000806000606084860312156116cf57600080fd5b83356116da816115dc565b95602085013595506040909401359392505050565b6000806020838503121561170257600080fd5b823567ffffffffffffffff81111561171957600080fd5b8301601f8101851361172a57600080fd5b803567ffffffffffffffff81111561174157600080fd5b8560208260051b840101111561175657600080fd5b6020919091019590945092505050565b602080825282518282018190526000918401906040840190835b818110156117a05783511515835260209384019390920191600101611780565b509095945050505050565b6000602082840312156117bd57600080fd5b5051919050565b6000602082840312156117d657600080fd5b815180151581146117e657600080fd5b9392505050565b60e081528260e08201528284610100830137600061010084830101526000610100601f19601f8601168301019050602082018360005b6006811015611842578151835260209283019290910190600101611823565b505050949350505050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff8216806118795761187961184d565b6000190192915050565b6000806040838503121561189657600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b818103818111156118fc576118fc61184d565b92915050565b6001815b600184111561193d578085048111156119215761192161184d565b600184161561192f57908102905b60019390931c928002611906565b935093915050565b600082611954575060016118fc565b81611961575060006118fc565b81600181146119775760028114611981576119b2565b60019150506118fc565b60ff8411156119925761199261184d565b6001841b915063ffffffff8211156119ac576119ac61184d565b506118fc565b5060208310610133831016604e8410600b84101617156119e9575081810a63ffffffff8111156119e4576119e461184d565b6118fc565b6119f863ffffffff8484611902565b8063ffffffff04821115611a0e57611a0e61184d565b029392505050565b60006117e663ffffffff841663ffffffff8416611945565b600063ffffffff831680611a4457611a446118a7565b8063ffffffff84160691505092915050565b600063ffffffff831680611a6c57611a6c6118a7565b8063ffffffff84160491505092915050565b63ffffffff81811683821601908111156118fc576118fc61184d565b6000825160005b81811015611abb5760208186018101518583015201611aa1565b50600092019182525091905056fe30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001a2646970667358221220df3212ca991aafe3094da5eb40d815a971fba320d242e1cb58aed1c7ed03b2c464736f6c634300081c003330644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001";

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
