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
  ETHTornado,
  ETHTornadoInterface,
} from "../../../contracts/Classic/ETHTornado";

const _abi = [
  {
    inputs: [
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
  "0x610100604052600380546001600160401b031916905534801561002157600080fd5b50604051611b75380380611b758339810160408190526100409161041b565b83838383808360008263ffffffff16116100ad5760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208263ffffffff16106101035760405162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e203332000060448201526064016100a4565b63ffffffff821660a0526001600160a01b0381166080527f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c60005b8363ffffffff168163ffffffff16101561018b5763ffffffff81166000908152600160209081526040808320859055908290529020829055610181838380610236565b915060010161013e565b506000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b5550506001600455816102195760405162461bcd60e51b815260206004820152602560248201527f64656e6f6d696e6174696f6e2073686f756c6420626520677265617465722074604482015264068616e20360dc1b60648201526084016100a4565b506001600160a01b0390921660c0525060e0525061049d92505050565b6000600080516020611b5583398151915283106102955760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6460448201526064016100a4565b600080516020611b5583398151915282106102fc5760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b60648201526084016100a4565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa15801561034b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036f9190610479565b9092509050600080516020611b5583398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156103d4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103f89190610479565b509695505050505050565b6001600160a01b038116811461041857600080fd5b50565b6000806000806080858703121561043157600080fd5b845161043c81610403565b602086015190945061044d81610403565b60408601516060870151919450925063ffffffff8116811461046e57600080fd5b939692955090935050565b6000806040838503121561048c57600080fd5b505080516020909101519092909150565b60805160a05160c05160e05161164e610507600039600081816102b00152818161053001528181610d0401526110a201526000818161019b015261069901526000818161021701528181610e9b0152610f3d01526000818161045e0152610fd5015261164e6000f3fe60806040526004361061012a5760003560e01c80639fa12d0b116100ab578063e5285dcc1161006f578063e5285dcc146103bb578063e8295588146103eb578063ec73295914610418578063ed33639f1461044c578063f178e47c14610480578063fc7e9c6f146104ad57600080fd5b80639fa12d0b1461030f578063b214faa51461033c578063ba70f7571461034f578063c2b40ae414610379578063cd87a3b4146103a657600080fd5b80636d9833e3116100f25780636d9833e31461024e578063839df9451461026e5780638bca6d161461029e5780638ea3099e146102d257806390eeb02b146102f257600080fd5b806317cc915c1461012f57806321a0adb6146101745780632b7ac3f314610189578063414a37ba146101d55780634ecf518b14610205575b600080fd5b34801561013b57600080fd5b5061015f61014a366004611137565b60056020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b610187610182366004611178565b6104d2565b005b34801561019557600080fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161016b565b3480156101e157600080fd5b506101f76000805160206115f983398151915281565b60405190815260200161016b565b34801561021157600080fd5b506102397f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff909116815260200161016b565b34801561025a57600080fd5b5061015f610269366004611137565b6107dd565b34801561027a57600080fd5b5061015f610289366004611137565b60066020526000908152604090205460ff1681565b3480156102aa57600080fd5b506101f77f000000000000000000000000000000000000000000000000000000000000000081565b3480156102de57600080fd5b506101f76102ed366004611231565b61085b565b3480156102fe57600080fd5b506003546102399063ffffffff1681565b34801561031b57600080fd5b5061032f61032a366004611266565b610a28565b60405161016b91906112dd565b61018761034a366004611137565b610ae4565b34801561035b57600080fd5b5060035463ffffffff166000908152600260205260409020546101f7565b34801561038557600080fd5b506101f7610394366004611137565b60026020526000908152604090205481565b3480156103b257600080fd5b50610239601e81565b3480156103c757600080fd5b5061015f6103d6366004611137565b60009081526005602052604090205460ff1690565b3480156103f757600080fd5b506101f7610406366004611137565b60016020526000908152604090205481565b34801561042457600080fd5b506101f77f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b34801561045857600080fd5b506101bd7f000000000000000000000000000000000000000000000000000000000000000081565b34801561048c57600080fd5b506101f761049b366004611137565b60006020819052908152604090205481565b3480156104b957600080fd5b5060035461023990640100000000900463ffffffff1681565b6002600454036105295760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026004557f000000000000000000000000000000000000000000000000000000000000000082111561059e5760405162461bcd60e51b815260206004820152601a60248201527f4665652065786365656473207472616e736665722076616c75650000000000006044820152606401610520565b60008581526005602052604090205460ff16156105fd5760405162461bcd60e51b815260206004820152601f60248201527f546865206e6f746520686173206265656e20616c7265616479207370656e74006044820152606401610520565b610606866107dd565b6106525760405162461bcd60e51b815260206004820152601c60248201527f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f74000000006044820152606401610520565b6040805160c081018252878152602081018790526001600160a01b038681168284015285811660608301526080820185905260a08201849052915163695ef6f960e01b81527f00000000000000000000000000000000000000000000000000000000000000009092169163695ef6f9916106d2918c918c91600401611322565b6020604051808303816000875af11580156106f1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107159190611382565b61075a5760405162461bcd60e51b815260206004820152601660248201527524b73b30b634b2103bb4ba34323930bb90383937b7b360511b6044820152606401610520565b6000858152600560205260409020805460ff1916600117905561077f84848484610c1b565b604080516001600160a01b03868116825260208201889052918101849052908416907fe9e508bad6d4c3227e881ca19068f099da81b5164dd6d62b2eaf1e8bc6c349319060600160405180910390a250506001600455505050505050565b60008181036107ee57506000919050565b60035463ffffffff16805b63ffffffff8116600090815260026020526040902054840361081f575060019392505050565b8063ffffffff166000036108315750601e5b8061083b816113c1565b9150508163ffffffff168163ffffffff16036107f9575060009392505050565b60006000805160206115f983398151915283106108ba5760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c646044820152606401610520565b6000805160206115f983398151915282106109215760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b6064820152608401610520565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610970573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099491906113e1565b90925090506000805160206115f983398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156109f9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1d91906113e1565b509695505050505050565b60608167ffffffffffffffff811115610a4357610a4361141b565b604051908082528060200260200182016040528015610a6c578160200160208202803683370190505b50905060005b82811015610add57610aab848483818110610a8f57610a8f611431565b9050602002013560009081526005602052604090205460ff1690565b15610ad5576001828281518110610ac457610ac4611431565b911515602092830291909101909101525b600101610a72565b5092915050565b600260045403610b365760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610520565b600260045560008181526006602052604090205460ff1615610ba45760405162461bcd60e51b815260206004820152602160248201527f54686520636f6d6d69746d656e7420686173206265656e207375626d697474656044820152601960fa1b6064820152608401610520565b6000610baf82610e82565b6000838152600660205260409020805460ff191660011790559050610bd26110a0565b6040805163ffffffff8316815242602082015283917fa945e51eec50ab98c161376f0db4cf2aeba3ec92755fe2fcd388bdbbb80ff196910160405180910390a250506001600455565b3415610c875760405162461bcd60e51b815260206004820152603560248201527f4d6573736167652076616c756520697320737570706f73656420746f206265206044820152747a65726f20666f722045544820696e7374616e636560581b6064820152608401610520565b8015610cf25760405162461bcd60e51b815260206004820152603460248201527f526566756e642076616c756520697320737570706f73656420746f206265207a60448201527365726f20666f722045544820696e7374616e636560601b6064820152608401610520565b60006001600160a01b038516610d28847f0000000000000000000000000000000000000000000000000000000000000000611447565b604051600081818185875af1925050503d8060008114610d64576040519150601f19603f3d011682016040523d82523d6000602084013e610d69565b606091505b5050905080610dc85760405162461bcd60e51b815260206004820152602560248201527f7061796d656e7420746f205f726563697069656e7420646964206e6f7420676f604482015264207468727560d81b6064820152608401610520565b8215610e7b576040516001600160a01b038516908490600081818185875af1925050503d8060008114610e17576040519150601f19603f3d011682016040523d82523d6000602084013e610e1c565b606091505b50508091505080610e7b5760405162461bcd60e51b815260206004820152602360248201527f7061796d656e7420746f205f72656c6179657220646964206e6f7420676f207460448201526268727560e81b6064820152608401610520565b5050505050565b600354600090640100000000900463ffffffff16610ec17f00000000000000000000000000000000000000000000000000000000000000006002611574565b63ffffffff168163ffffffff1603610f345760405162461bcd60e51b815260206004820152603060248201527f4d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c656160448201526f1d995cc818d85b88189948185919195960821b6064820152608401610520565b8083600080805b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff16101561101257610f7a60028661158c565b63ffffffff16600003610fb45763ffffffff8116600090815260016020908152604080832054918390529091208590558493509150610fd0565b63ffffffff811660009081526020819052604090205492508391505b610ffb7f0000000000000000000000000000000000000000000000000000000000000000848461085b565b93506110086002866115b4565b9450600101610f3b565b50600354600090601e9061102d9063ffffffff1660016115dc565b611037919061158c565b6003805463ffffffff191663ffffffff83169081179091556000908152600260205260409020859055905061106d8660016115dc565b6003805463ffffffff929092166401000000000267ffffffff000000001990921691909117905550939695505050505050565b7f000000000000000000000000000000000000000000000000000000000000000034146111355760405162461bcd60e51b815260206004820152603860248201527f506c656173652073656e6420606d697844656e6f6d696e6174696f6e6020455460448201527f4820616c6f6e672077697468207472616e73616374696f6e00000000000000006064820152608401610520565b565b60006020828403121561114957600080fd5b5035919050565b6001600160a01b038116811461116557600080fd5b50565b803561117381611150565b919050565b60008060008060008060008060e0898b03121561119457600080fd5b883567ffffffffffffffff8111156111ab57600080fd5b8901601f81018b136111bc57600080fd5b803567ffffffffffffffff8111156111d357600080fd5b8b60208284010111156111e557600080fd5b60209182019950975089013595506040890135945061120660608a01611168565b935061121460808a01611168565b979a969950949793969295929450505060a08201359160c0013590565b60008060006060848603121561124657600080fd5b833561125181611150565b95602085013595506040909401359392505050565b6000806020838503121561127957600080fd5b823567ffffffffffffffff81111561129057600080fd5b8301601f810185136112a157600080fd5b803567ffffffffffffffff8111156112b857600080fd5b8560208260051b84010111156112cd57600080fd5b6020919091019590945092505050565b602080825282518282018190526000918401906040840190835b8181101561131757835115158352602093840193909201916001016112f7565b509095945050505050565b60e081528260e08201528284610100830137600061010084830101526000610100601f19601f8601168301019050602082018360005b6006811015611377578151835260209283019290910190600101611358565b505050949350505050565b60006020828403121561139457600080fd5b815180151581146113a457600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff8216806113d7576113d76113ab565b6000190192915050565b600080604083850312156113f457600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b8181038181111561145a5761145a6113ab565b92915050565b6001815b600184111561149b5780850481111561147f5761147f6113ab565b600184161561148d57908102905b60019390931c928002611464565b935093915050565b6000826114b25750600161145a565b816114bf5750600061145a565b81600181146114d557600281146114df57611510565b600191505061145a565b60ff8411156114f0576114f06113ab565b6001841b915063ffffffff82111561150a5761150a6113ab565b5061145a565b5060208310610133831016604e8410600b8410161715611547575081810a63ffffffff811115611542576115426113ab565b61145a565b61155663ffffffff8484611460565b8063ffffffff0482111561156c5761156c6113ab565b029392505050565b60006113a463ffffffff841663ffffffff84166114a3565b600063ffffffff8316806115a2576115a2611405565b8063ffffffff84160691505092915050565b600063ffffffff8316806115ca576115ca611405565b8063ffffffff84160491505092915050565b63ffffffff818116838216019081111561145a5761145a6113ab56fe30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001a264697066735822122030cdb3d931ce1408ab144147edd7c76e28173ecad063b971dad09ea221811b3c64736f6c634300081c003330644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001";

type ETHTornadoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ETHTornadoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ETHTornado__factory extends ContractFactory {
  constructor(...args: ETHTornadoConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _verifier: AddressLike,
    _hasher: AddressLike,
    _denomination: BigNumberish,
    _merkleTreeHeight: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _verifier,
      _hasher,
      _denomination,
      _merkleTreeHeight,
      overrides || {}
    );
  }
  override deploy(
    _verifier: AddressLike,
    _hasher: AddressLike,
    _denomination: BigNumberish,
    _merkleTreeHeight: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _verifier,
      _hasher,
      _denomination,
      _merkleTreeHeight,
      overrides || {}
    ) as Promise<
      ETHTornado & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ETHTornado__factory {
    return super.connect(runner) as ETHTornado__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ETHTornadoInterface {
    return new Interface(_abi) as ETHTornadoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ETHTornado {
    return new Contract(address, _abi, runner) as unknown as ETHTornado;
  }
}
