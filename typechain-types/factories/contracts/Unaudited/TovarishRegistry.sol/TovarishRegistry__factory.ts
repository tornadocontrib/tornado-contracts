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
  TovarishRegistry,
  TovarishRegistryInterface,
} from "../../../../contracts/Unaudited/TovarishRegistry.sol/TovarishRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IENSRegistry2",
        name: "_ensRegistry",
        type: "address",
      },
      {
        internalType: "contract INameWrapper",
        name: "_nameWrapper",
        type: "address",
      },
      {
        internalType: "contract IRelayerRegistry2",
        name: "_relayerRegistry",
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
        internalType: "address",
        name: "oldRegistry",
        type: "address",
      },
    ],
    name: "Migrated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
    ],
    name: "PushedDigest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "ensName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "ensHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "domainOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "alreadRegistered",
        type: "bool",
      },
    ],
    name: "PushedRelayer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
    ],
    name: "RemovedDigest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "ensName",
        type: "string",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "ensHash",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "domainOwner",
        type: "address",
      },
    ],
    name: "RemovedRelayer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "UpdatedFee",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "UpdatedOwner",
    type: "event",
  },
  {
    inputs: [],
    name: "ensRegistry",
    outputs: [
      {
        internalType: "contract IENSRegistry2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDigests",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
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
    name: "getNameOwner",
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
    name: "getNamehashes",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNames",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
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
    name: "hashToName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastUpdate",
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
        internalType: "contract ITovarishRegistry",
        name: "oldRegistry",
        type: "address",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nameWrapper",
    outputs: [
      {
        internalType: "contract INameWrapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "string",
        name: "ensName",
        type: "string",
      },
    ],
    name: "pushRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "names",
        type: "string[]",
      },
    ],
    name: "pushRelayers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registerFee",
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
        internalType: "string",
        name: "ensName",
        type: "string",
      },
    ],
    name: "registerRelayer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "relayerRegistry",
    outputs: [
      {
        internalType: "contract IRelayerRegistry2",
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
            internalType: "string",
            name: "ensName",
            type: "string",
          },
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
            internalType: "string",
            name: "tovarishHost",
            type: "string",
          },
          {
            internalType: "string",
            name: "tovarishChains",
            type: "string",
          },
          {
            internalType: "string[]",
            name: "records",
            type: "string[]",
          },
        ],
        internalType: "struct TovarishRegistry.Relayer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ensHash",
        type: "bytes32",
      },
    ],
    name: "removeRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tovarishSubname",
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
        internalType: "bytes32",
        name: "digest",
        type: "bytes32",
      },
    ],
    name: "updateDigest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
    ],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "updateOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e060405234801561001057600080fd5b506040516126e73803806126e783398101604081905261002f916100f8565b6001600160a01b0380841660805282811660a052811660c052670de0b6b3a76400006001819055600080546001600160a01b031916331790556040517f545f541f608330014315921189568bf5b2266925f757d74e5ad89ae1d2d6438c9161009a9190815260200190565b60405180910390a1600080546040516001600160a01b03909116917f957090e72c0a1b3ebf83c682eb8c1f88c2a18cd0578b91a819efb28859f0f3a391a2505050610145565b6001600160a01b03811681146100f557600080fd5b50565b60008060006060848603121561010d57600080fd5b8351610118816100e0565b6020850151909350610129816100e0565b604085015190925061013a816100e0565b809150509250925092565b60805160a05160c05161252d6101ba600039600081816101f4015281816104c90152818161056201528181610add01528181610b7601528181610f1e0152610ff901526000818161035e01528181610705015261075201526000818161027301528181610696015261118a015261252d6000f3fe60806040526004361061012a5760003560e01c8063880cdc31116100ab578063b1dbe7171161006f578063b1dbe71714610380578063c0463711146103ad578063c3014eb7146103c3578063cd838f0f146103e3578063ce5494bb14610405578063df9754181461042557600080fd5b8063880cdc31146102d75780638da5cb5b146102f75780639012c4a814610317578063a1bb189914610337578063a8e5fbc01461034c57600080fd5b80635e6ef7b6116100f25780635e6ef7b61461022e5780636f5a4e381461024e5780637d73b231146102615780637eca68071461029557806382d2c3b3146102b757600080fd5b806303f187ea1461012f5780630ea6074a1461015857806330da904b1461017a5780634204212a1461019a57806347ff589d146101e2575b600080fd5b34801561013b57600080fd5b5061014560015481565b6040519081526020015b60405180910390f35b34801561016457600080fd5b50610178610173366004611da5565b610452565b005b34801561018657600080fd5b50610178610195366004611e5a565b61048c565b3480156101a657600080fd5b506101456040516f3a37bb30b934b9b416b932b630bcb2b960811b60208201526030016040516020818303038152906040528051906020012081565b3480156101ee57600080fd5b506102167f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161014f565b34801561023a57600080fd5b50610216610249366004611e96565b610673565b61017861025c366004611e5a565b6107d2565b34801561026d57600080fd5b506102167f000000000000000000000000000000000000000000000000000000000000000081565b3480156102a157600080fd5b506102aa61098f565b60405161014f9190611eaf565b3480156102c357600080fd5b506101786102d2366004611e96565b6109a0565b3480156102e357600080fd5b506101786102f2366004611f07565b610c84565b34801561030357600080fd5b50600054610216906001600160a01b031681565b34801561032357600080fd5b50610178610332366004611e96565b610cf6565b34801561034357600080fd5b506102aa610d5b565b34801561035857600080fd5b506102167f000000000000000000000000000000000000000000000000000000000000000081565b34801561038c57600080fd5b506103a061039b366004611da5565b610d67565b60405161014f9190611fd0565b3480156103b957600080fd5b5061014560055481565b3480156103cf57600080fd5b506101786103de366004611e96565b61152c565b3480156103ef57600080fd5b506103f86115de565b60405161014f91906120c0565b34801561041157600080fd5b50610178610420366004611f07565b611716565b34801561043157600080fd5b50610445610440366004611e96565b611914565b60405161014f91906120d3565b60005b815181101561048857610480828281518110610473576104736120e6565b602002602001015161048c565b600101610455565b5050565b6000610497826119ae565b905060006104a482610673565b604051632b94e50760e21b81526001600160a01b0380831660048301529192506000917f0000000000000000000000000000000000000000000000000000000000000000169063ae53941c90602401602060405180830381865afa158015610510573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053491906120fc565b60405163b69fd4ab60e01b81526001600160a01b0384811660048301819052602483015291851492506000917f0000000000000000000000000000000000000000000000000000000000000000169063b69fd4ab90604401602060405180830381865afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd9190612115565b60008581526004602052604090205490915015801590816105eb5750825b80156105f45750815b1561066b57600085815260026020526040902061061187826121ba565b5061061d6003866119bb565b50436005556040516001906001600160a01b0386169087907fa48fca4c4ead430054661c44e1f5ffdaa5a34ee9efaaf17e4ca64af3ff55adec90610662908b906120d3565b60405180910390a45b505050505050565b6040516302571be360e01b81526004810182905260009081906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390602401602060405180830381865afa1580156106dd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107019190612278565b90507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316816001600160a01b0316036107cc576040516331a9108f60e11b8152600481018490527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa1580156107a1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c59190612278565b9392505050565b92915050565b6000546001600160a01b03163314806107ec575060015434145b61082b5760405162461bcd60e51b815260206004820152600b60248201526a496e76616c69642066656560a81b60448201526064015b60405180910390fd5b600080546040516001600160a01b039091169034908381818185875af1925050503d8060008114610878576040519150601f19603f3d011682016040523d82523d6000602084013e61087d565b606091505b50509050806108bf5760405162461bcd60e51b815260206004820152600e60248201526d14185e5b595b9d0819985a5b195960921b6044820152606401610822565b5060006108cb826119ae565b905060006108d882610673565b90506001600160a01b03811661091f5760405162461bcd60e51b815260206004820152600c60248201526b496e76616c6964206e616d6560a01b6044820152606401610822565b600082815260026020526040902061093784826121ba565b506109436003836119bb565b5060001515816001600160a01b0316837fa48fca4c4ead430054661c44e1f5ffdaa5a34ee9efaaf17e4ca64af3ff55adec8660405161098291906120d3565b60405180910390a4505050565b606061099b60036119c7565b905090565b6000546001600160a01b031633146109ca5760405162461bcd60e51b815260040161082290612295565b600081815260046020526040902054610a145760405162461bcd60e51b815260206004820152600c60248201526b092dcecc2d8d2c840d0c2e6d60a31b6044820152606401610822565b60008181526002602052604081208054610a2d90612137565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5990612137565b8015610aa65780601f10610a7b57610100808354040283529160200191610aa6565b820191906000526020600020905b815481529060010190602001808311610a8957829003601f168201915b505050505090506000610ab883610673565b604051632b94e50760e21b81526001600160a01b0380831660048301529192506000917f0000000000000000000000000000000000000000000000000000000000000000169063ae53941c90602401602060405180830381865afa158015610b24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b4891906120fc565b60405163b69fd4ab60e01b81526001600160a01b0384811660048301819052602483015291861492506000917f0000000000000000000000000000000000000000000000000000000000000000169063b69fd4ab90604401602060405180830381865afa158015610bbd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610be19190612115565b9050818015610bed5750805b15610c2f5760405162461bcd60e51b81526020600482015260126024820152712932b3b4b9ba32b932b2103932b630bcb2b960711b6044820152606401610822565b610c3a6003866119d4565b50826001600160a01b0316857fef35b137de7c64f3d66f69ed27365a3917e13e1401e6650ee1936dfd0333896786604051610c7591906120d3565b60405180910390a35050505050565b6000546001600160a01b03163314610cae5760405162461bcd60e51b815260040161082290612295565b600080546001600160a01b0319166001600160a01b038316908117825560405190917f957090e72c0a1b3ebf83c682eb8c1f88c2a18cd0578b91a819efb28859f0f3a391a250565b6000546001600160a01b03163314610d205760405162461bcd60e51b815260040161082290612295565b60018190556040518181527f545f541f608330014315921189568bf5b2266925f757d74e5ad89ae1d2d6438c9060200160405180910390a150565b606061099b60066119c7565b60606000610d7560036119e0565b6001600160401b03811115610d8c57610d8c611cbf565b604051908082528060200260200182016040528015610e0857816020015b610df56040518060e001604052806060815260200160006001600160a01b03168152602001600081526020016000151581526020016060815260200160608152602001606081525090565b815260200190600190039081610daa5790505b50905060005b8151811015611525576000610e246003836119ea565b6000818152600260205260409020805491925090610e4190612137565b80601f0160208091040260200160405190810160405280929190818152602001828054610e6d90612137565b8015610eba5780601f10610e8f57610100808354040283529160200191610eba565b820191906000526020600020905b815481529060010190602001808311610e9d57829003601f168201915b5050505050838381518110610ed157610ed16120e6565b602090810291909101015152610ee681610673565b838381518110610ef857610ef86120e6565b6020026020010151602001906001600160a01b031690816001600160a01b0316815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b971a6bf848481518110610f5d57610f5d6120e6565b6020026020010151602001516040518263ffffffff1660e01b8152600401610f9491906001600160a01b0391909116815260200190565b602060405180830381865afa158015610fb1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fd591906120fc565b838381518110610fe757610fe76120e6565b602002602001015160400181815250507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663b69fd4ab848481518110611038576110386120e6565b602002602001015160200151858581518110611056576110566120e6565b6020026020010151602001516040518363ffffffff1660e01b81526004016110949291906001600160a01b0392831681529116602082015260400190565b602060405180830381865afa1580156110b1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d59190612115565b8383815181106110e7576110e76120e6565b602090810291909101015190151560609091015284516001600160401b0381111561111457611114611cbf565b60405190808252806020026020018201604052801561114757816020015b60608152602001906001900390816111325790505b5083838151811061115a5761115a6120e6565b602090810291909101015160c00152604051630178b8bf60e01b8152600481018290526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690630178b8bf90602401602060405180830381865afa1580156111d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111f59190612278565b90506001600160a01b03811661120c57505061151d565b600082604051602001611235906f3a37bb30b934b9b416b932b630bcb2b960811b815260100190565b60405160208183030381529060405280519060200120604051602001611265929190918252602082015260400190565b60408051808303601f190181528282528051602090910120631674750f60e21b835260048301819052602483019190915260036044830152621d5c9b60ea1b606483015291506001600160a01b038316906359d1d43c90608401600060405180830381865afa1580156112dc573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261130491908101906122fd565b858581518110611316576113166120e6565b60209081029190910101516080015260408051631674750f60e21b81526004810183905260248101919091526006604482015265636861696e7360d01b60648201526001600160a01b038316906359d1d43c90608401600060405180830381865afa158015611389573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526113b191908101906122fd565b8585815181106113c3576113c36120e6565b602002602001015160a0018190525060005b875181101561151857826001600160a01b03166359d1d43c858a8481518110611400576114006120e6565b60200260200101516040516020016114189190612331565b60405160208183030381529060405280519060200120604051602001611448929190918252602082015260400190565b60408051601f1981840301815282825280516020909101206001600160e01b031960e085901b1683526004830152602482015260036044820152621d5c9b60ea1b6064820152608401600060405180830381865afa1580156114ae573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114d691908101906122fd565b8686815181106114e8576114e86120e6565b602002602001015160c001518281518110611505576115056120e6565b60209081029190910101526001016113d5565b505050505b600101610e0e565b5092915050565b6000546001600160a01b031633146115565760405162461bcd60e51b815260040161082290612295565b6000818152600760205260409020546115a3576115746006826119bb565b5060405181907fbbc86c893c02d8503cd8ec8369d61b8be59419dbc8d5cae9ed32753d0aa9fbec90600090a250565b6115ae6006826119d4565b5060405181907fa306cca0f6ce390557f5ed36bb4119b0103f1d41e50f279f53caae337031f7de90600090a25b50565b606060006115ec60036119e0565b6001600160401b0381111561160357611603611cbf565b60405190808252806020026020018201604052801561163657816020015b60608152602001906001900390816116215790505b50905060005b815181101561171057600260006116546003846119ea565b8152602001908152602001600020805461166d90612137565b80601f016020809104026020016040519081016040528092919081815260200182805461169990612137565b80156116e65780601f106116bb576101008083540402835291602001916116e6565b820191906000526020600020905b8154815290600101906020018083116116c957829003601f168201915b50505050508282815181106116fd576116fd6120e6565b602090810291909101015260010161163c565b50919050565b6000546001600160a01b031633146117405760405162461bcd60e51b815260040161082290612295565b61174a60036119e0565b156117895760405162461bcd60e51b815260206004820152600f60248201526e43616e206e6f74206d69677261746560881b6044820152606401610822565b6000816001600160a01b031663cd838f0f6040518163ffffffff1660e01b8152600401600060405180830381865afa1580156117c9573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526117f1919081019061234d565b90506000826001600160a01b0316637eca68076040518163ffffffff1660e01b8152600401600060405180830381865afa158015611833573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261185b91908101906123f7565b905060005b82518110156118d657600082828151811061187d5761187d6120e6565b60200260200101519050838281518110611899576118996120e6565b60200260200101516002600083815260200190815260200160002090816118c091906121ba565b506118cc6003826119bb565b5050600101611860565b50436005556040516001600160a01b038416907fa2e7361c23d7820040603b83c0cd3f494d377bac69736377d75bb56c651a509890600090a2505050565b6002602052600090815260409020805461192d90612137565b80601f016020809104026020016040519081016040528092919081815260200182805461195990612137565b80156119a65780601f1061197b576101008083540402835291602001916119a6565b820191906000526020600020905b81548152906001019060200180831161198957829003601f168201915b505050505081565b60006107cc8260006119f6565b60006107c58383611a70565b606060006107c583611abf565b60006107c58383611b1b565b60006107cc825490565b60006107c58383611c0e565b600081835111611a08575060006107cc565b6000611a148484611c38565b9050611a3484611a2483866124a2565b611a2f9060016124a2565b6119f6565b611a3f858584611c9b565b6040805160208101939093528201526060016040516020818303038152906040528051906020012091505092915050565b6000818152600183016020526040812054611ab7575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556107cc565b5060006107cc565b606081600001805480602002602001604051908101604052809291908181526020018280548015611b0f57602002820191906000526020600020905b815481526020019060010190808311611afb575b50505050509050919050565b60008181526001830160205260408120548015611c04576000611b3f6001836124b5565b8554909150600090611b53906001906124b5565b9050808214611bb8576000866000018281548110611b7357611b736120e6565b9060005260206000200154905080876000018481548110611b9657611b966120e6565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611bc957611bc96124c8565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506107cc565b60009150506107cc565b6000826000018281548110611c2557611c256120e6565b9060005260206000200154905092915050565b6000805b8351611c4882856124a2565b14158015611c84575083611c5c82856124a2565b81518110611c6c57611c6c6120e6565b6020910101516001600160f81b031916601760f91b14155b156107c55780611c93816124de565b915050611c3c565b8251600090611caa83856124a2565b1115611cb557600080fd5b5091016020012090565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b0381118282101715611cfd57611cfd611cbf565b604052919050565b60006001600160401b03821115611d1e57611d1e611cbf565b5060051b60200190565b60006001600160401b03821115611d4157611d41611cbf565b50601f01601f191660200190565b600082601f830112611d6057600080fd5b8135611d73611d6e82611d28565b611cd5565b818152846020838601011115611d8857600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611db757600080fd5b81356001600160401b03811115611dcd57600080fd5b8201601f81018413611dde57600080fd5b8035611dec611d6e82611d05565b8082825260208201915060208360051b850101925086831115611e0e57600080fd5b602084015b83811015611e4f5780356001600160401b03811115611e3157600080fd5b611e4089602083890101611d4f565b84525060209283019201611e13565b509695505050505050565b600060208284031215611e6c57600080fd5b81356001600160401b03811115611e8257600080fd5b611e8e84828501611d4f565b949350505050565b600060208284031215611ea857600080fd5b5035919050565b602080825282518282018190526000918401906040840190835b81811015611ee7578351835260209384019390920191600101611ec9565b509095945050505050565b6001600160a01b03811681146115db57600080fd5b600060208284031215611f1957600080fd5b81356107c581611ef2565b60005b83811015611f3f578181015183820152602001611f27565b50506000910152565b60008151808452611f60816020860160208601611f24565b601f01601f19169290920160200192915050565b600082825180855260208501945060208160051b8301016020850160005b83811015611fc457601f19858403018852611fae838351611f48565b6020988901989093509190910190600101611f92565b50909695505050505050565b6000602082016020835280845180835260408501915060408160051b86010192506020860160005b828110156120b457603f198786030184528151805160e0875261201e60e0880182611f48565b905060018060a01b03602083015116602088015260408201516040880152606082015161204f606089018215159052565b50608082015187820360808901526120678282611f48565b91505060a082015187820360a08901526120818282611f48565b91505060c0820151915086810360c088015261209d8183611f74565b965050506020938401939190910190600101611ff8565b50929695505050505050565b6020815260006107c56020830184611f74565b6020815260006107c56020830184611f48565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561210e57600080fd5b5051919050565b60006020828403121561212757600080fd5b815180151581146107c557600080fd5b600181811c9082168061214b57607f821691505b60208210810361171057634e487b7160e01b600052602260045260246000fd5b601f8211156121b557806000526020600020601f840160051c810160208510156121925750805b601f840160051c820191505b818110156121b2576000815560010161219e565b50505b505050565b81516001600160401b038111156121d3576121d3611cbf565b6121e7816121e18454612137565b8461216b565b6020601f82116001811461221b57600083156122035750848201515b600019600385901b1c1916600184901b1784556121b2565b600084815260208120601f198516915b8281101561224b578785015182556020948501946001909201910161222b565b50848210156122695786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60006020828403121561228a57600080fd5b81516107c581611ef2565b6020808252600990820152682737ba1037bbb732b960b91b604082015260600190565b600082601f8301126122c957600080fd5b81516122d7611d6e82611d28565b8181528460208386010111156122ec57600080fd5b611e8e826020830160208701611f24565b60006020828403121561230f57600080fd5b81516001600160401b0381111561232557600080fd5b611e8e848285016122b8565b60008251612343818460208701611f24565b9190910192915050565b60006020828403121561235f57600080fd5b81516001600160401b0381111561237557600080fd5b8201601f8101841361238657600080fd5b8051612394611d6e82611d05565b8082825260208201915060208360051b8501019250868311156123b657600080fd5b602084015b83811015611e4f5780516001600160401b038111156123d957600080fd5b6123e8896020838901016122b8565b845250602092830192016123bb565b60006020828403121561240957600080fd5b81516001600160401b0381111561241f57600080fd5b8201601f8101841361243057600080fd5b805161243e611d6e82611d05565b8082825260208201915060208360051b85010192508683111561246057600080fd5b6020840193505b82841015612482578351825260209384019390910190612467565b9695505050505050565b634e487b7160e01b600052601160045260246000fd5b808201808211156107cc576107cc61248c565b818103818111156107cc576107cc61248c565b634e487b7160e01b600052603160045260246000fd5b6000600182016124f0576124f061248c565b506001019056fea2646970667358221220ddaebebdaa7152d7df6a64860ad53ca240b70542a5c31eea90e7e04b79cc6e6364736f6c634300081c0033";

type TovarishRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TovarishRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TovarishRegistry__factory extends ContractFactory {
  constructor(...args: TovarishRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _ensRegistry: AddressLike,
    _nameWrapper: AddressLike,
    _relayerRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _ensRegistry,
      _nameWrapper,
      _relayerRegistry,
      overrides || {}
    );
  }
  override deploy(
    _ensRegistry: AddressLike,
    _nameWrapper: AddressLike,
    _relayerRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _ensRegistry,
      _nameWrapper,
      _relayerRegistry,
      overrides || {}
    ) as Promise<
      TovarishRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TovarishRegistry__factory {
    return super.connect(runner) as TovarishRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TovarishRegistryInterface {
    return new Interface(_abi) as TovarishRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TovarishRegistry {
    return new Contract(address, _abi, runner) as unknown as TovarishRegistry;
  }
}
