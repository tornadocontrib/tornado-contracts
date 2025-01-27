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
  TovarishAggregator,
  TovarishAggregatorInterface,
} from "../../../contracts/Unaudited/TovarishAggregator";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITovarishRegistry",
        name: "_tovarishRegistry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [],
    name: "getChainIds",
    outputs: [
      {
        internalType: "uint64[]",
        name: "",
        type: "uint64[]",
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
        name: "_addr",
        type: "address",
      },
    ],
    name: "getStaked",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tornBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockedBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "relayerBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isContract",
            type: "bool",
          },
        ],
        internalType: "struct TovarishAggregator.StakedBalance",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
    ],
    name: "getStakedBalances",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "tornBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockedBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "relayerBalance",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balance",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isContract",
            type: "bool",
          },
        ],
        internalType: "struct TovarishAggregator.StakedBalance[]",
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
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "isContract",
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
    inputs: [],
    name: "relayerRegistry",
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
        internalType: "string[]",
        name: "additionalRelayers",
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
            internalType: "bool",
            name: "isPrior",
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
        internalType: "struct ITovarishRegistry.Relayer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "torn",
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
    name: "tovarishRegistry",
    outputs: [
      {
        internalType: "contract ITovarishRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61010060405234801561001157600080fd5b50604051611cda380380611cda833981016040819052610030916101b7565b60006080526001600160a01b03811660e0819052604080516347ff589d60e01b815290516347ff589d916004808201926020929091908290030181865afa15801561007f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100a391906101b7565b6001600160a01b031660c081905260408051632b7e262960e21b8152905163adf898a4916004808201926020929091908290030181865afa1580156100ec573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061011091906101b7565b6001600160a01b031660a0816001600160a01b03168152505060c0516001600160a01b0316635aa6e6756040518163ffffffff1660e01b8152600401602060405180830381865afa158015610169573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061018d91906101b7565b6001600160a01b0316608052506101db565b6001600160a01b03811681146101b457600080fd5b50565b6000602082840312156101c957600080fd5b81516101d48161019f565b9392505050565b60805160a05160c05160e051611a5d61027d60003960008181610108015281816102bf015281816106dd015261076101526000818161017c01526104c00152600081816101ea015261039e0152600081816101a301528181610430015281816105db015281816107e50152818161091501528181610a1b01528181610bd401528181610c9001528181610d1b01528181610dc10152610e4e0152611a5d6000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636aec766f1161008c578063c046371111610066578063c04637111461022c578063cceb68f514610242578063e94eab5b14610257578063ffc9896b1461027757600080fd5b80636aec766f146101c5578063adf898a4146101e5578063b1dbe7171461020c57600080fd5b806316279055146100d4578063182ca352146101035780631d77632314610142578063399080ec1461015757806347ff589d146101775780635aa6e6751461019e575b600080fd5b6100ee6100e2366004610ede565b3b63ffffffff16151590565b60405190151581526020015b60405180910390f35b61012a7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100fa565b61014a6102bb565b6040516100fa9190610f02565b61016a610165366004610ede565b610348565b6040516100fa9190610f4e565b61012a7f000000000000000000000000000000000000000000000000000000000000000081565b61012a7f000000000000000000000000000000000000000000000000000000000000000081565b6101d86101d3366004610f89565b610588565b6040516100fa9190610ffe565b61012a7f000000000000000000000000000000000000000000000000000000000000000081565b61021f61021a3660046110ef565b6106c3565b6040516100fa9190611298565b61023461075d565b6040519081526020016100fa565b61024a6107e1565b6040516100fa91906113df565b61026a61026536600461149f565b610af2565b6040516100fa919061153d565b61028a610285366004610ede565b610bca565b6040805195865260208601949094529284019190915260608301526001600160a01b0316608082015260a0016100fa565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631d7763236040518163ffffffff1660e01b8152600401600060405180830381865afa15801561031b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261034391908101906115ad565b905090565b61037c6040518060a00160405280600081526020016000815260200160008152602001600081526020016000151581525090565b6040516370a0823160e01b81526001600160a01b0383811660048301526000917f0000000000000000000000000000000000000000000000000000000000000000909116906370a0823190602401602060405180830381865afa1580156103e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040b919061164d565b604051639ae697bf60e01b81526001600160a01b0385811660048301529192506000917f00000000000000000000000000000000000000000000000000000000000000001690639ae697bf90602401602060405180830381865afa158015610477573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061049b919061164d565b60405163b971a6bf60e01b81526001600160a01b0386811660048301529192506000917f0000000000000000000000000000000000000000000000000000000000000000169063b971a6bf90602401602060405180830381865afa158015610507573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052b919061164d565b905060008161053a8486611666565b6105449190611666565b90506040518060a0016040528085815260200184815260200183815260200182815260200161057a8863ffffffff903b16151590565b151590529695505050505050565b6060816001600160401b038111156105a2576105a2611036565b6040519080825280602002602001820160405280156105cb578160200160208202803683370190505b50905060005b828110156106bc577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639ae697bf85858481811061061a5761061a611687565b905060200201602081019061062f9190610ede565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa158015610673573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610697919061164d565b8282815181106106a9576106a9611687565b60209081029190910101526001016105d1565b5092915050565b60405163b1dbe71760e01b81526060906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b1dbe7179061071290859060040161169d565b600060405180830381865afa15801561072f573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261075791908101906117a9565b92915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663c04637116040518163ffffffff1660e01b8152600401602060405180830381865afa1580156107bd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610343919061164d565b60607f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663da35c6646040518163ffffffff1660e01b8152600401602060405180830381865afa158015610841573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610865919061164d565b6001600160401b0381111561087c5761087c611036565b6040519080825280602002602001820160405280156108fa57816020015b6108e76040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290529061010082015290565b81526020019060019003908161089a5790505b50905060005b8151811015610aee5760006001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663013cf08b610945846001611666565b6040518263ffffffff1660e01b815260040161096391815260200190565b61010060405180830381865afa158015610981573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a59190611956565b905060405180610120016040528082600001516001600160a01b0316815260200182602001516001600160a01b031681526020018260400151815260200182606001518152602001826080015181526020018260a0015181526020018260c00151151581526020018260e00151151581526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633e4f49e6856001610a559190611666565b6040518263ffffffff1660e01b8152600401610a7391815260200190565b602060405180830381865afa158015610a90573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab491906119e9565b6006811115610ac557610ac56113a7565b815250838381518110610ada57610ada611687565b602090810291909101015250600101610900565b5090565b6060600082516001600160401b03811115610b0f57610b0f611036565b604051908082528060200260200182016040528015610b7457816020015b610b616040518060a00160405280600081526020016000815260200160008152602001600081526020016000151581525090565b815260200190600190039081610b2d5790505b50905060005b83518110156106bc57610ba5848281518110610b9857610b98611687565b6020026020010151610348565b828281518110610bb757610bb7611687565b6020908102919091010152600101610b7a565b60008060008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316639ae697bf876040518263ffffffff1660e01b8152600401610c2d91906001600160a01b0391909116815260200190565b602060405180830381865afa158015610c4a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6e919061164d565b6040516317977c6160e01b81526001600160a01b0388811660048301529196507f0000000000000000000000000000000000000000000000000000000000000000909116906317977c6190602401602060405180830381865afa158015610cd9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cfd919061164d565b93508315610da257604051631f27a4f360e11b8152600481018590527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690633e4f49e690602401602060405180830381865afa158015610d6a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d8e91906119e9565b6006811115610d9f57610d9f6113a7565b92505b60405163a72edda360e01b81526001600160a01b0387811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063a72edda390602401602060405180830381865afa158015610e08573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e2c919061164d565b604051631976849960e21b81526001600160a01b0388811660048301529193507f0000000000000000000000000000000000000000000000000000000000000000909116906365da126490602401602060405180830381865afa158015610e97573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ebb9190611a0a565b905091939590929450565b6001600160a01b0381168114610edb57600080fd5b50565b600060208284031215610ef057600080fd5b8135610efb81610ec6565b9392505050565b602080825282518282018190526000918401906040840190835b81811015610f435783516001600160401b0316835260209384019390920191600101610f1c565b509095945050505050565b60a081016107578284805182526020810151602083015260408101516040830152606081015160608301526080810151151560808301525050565b60008060208385031215610f9c57600080fd5b82356001600160401b03811115610fb257600080fd5b8301601f81018513610fc357600080fd5b80356001600160401b03811115610fd957600080fd5b8560208260051b8401011115610fee57600080fd5b6020919091019590945092505050565b602080825282518282018190526000918401906040840190835b81811015610f43578351835260209384019390920191600101611018565b634e487b7160e01b600052604160045260246000fd5b60405161010081016001600160401b038111828210171561106f5761106f611036565b60405290565b604051601f8201601f191681016001600160401b038111828210171561109d5761109d611036565b604052919050565b60006001600160401b038211156110be576110be611036565b5060051b60200190565b60006001600160401b038211156110e1576110e1611036565b50601f01601f191660200190565b60006020828403121561110157600080fd5b81356001600160401b0381111561111757600080fd5b8201601f8101841361112857600080fd5b803561113b611136826110a5565b611075565b8082825260208201915060208360051b85010192508683111561115d57600080fd5b602084015b838110156111e15780356001600160401b0381111561118057600080fd5b8501603f8101891361119157600080fd5b60208101356111a2611136826110c8565b8181526040838301018b10156111b757600080fd5b81604084016020830137600060208383010152808652505050602083019250602081019050611162565b509695505050505050565b60005b838110156112075781810151838201526020016111ef565b50506000910152565b600081518084526112288160208601602086016111ec565b601f01601f19169290920160200192915050565b600082825180855260208501945060208160051b8301016020850160005b8381101561128c57601f19858403018852611276838351611210565b602098890198909350919091019060010161125a565b50909695505050505050565b6000602082016020835280845180835260408501915060408160051b86010192506020860160005b8281101561139b57603f198786030184528151805161010087526112e8610100880182611210565b9050602082015161130460208901826001600160a01b03169052565b50604082015160408801526060820151611322606089018215159052565b506080820151611336608089018215159052565b5060a082015187820360a089015261134e8282611210565b91505060c082015187820360c08901526113688282611210565b91505060e0820151915086810360e0880152611384818361123c565b9650505060209384019391909101906001016112c0565b50929695505050505050565b634e487b7160e01b600052602160045260246000fd5b600781106113db57634e487b7160e01b600052602160045260246000fd5b9052565b602080825282518282018190526000918401906040840190835b81811015610f4357835160018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c081015161145c60c086018215159052565b5060e081015161147060e086018215159052565b5061010081015190506114876101008501826113bd565b506020939093019261012092909201916001016113f9565b6000602082840312156114b157600080fd5b81356001600160401b038111156114c757600080fd5b8201601f810184136114d857600080fd5b80356114e6611136826110a5565b8082825260208201915060208360051b85010192508683111561150857600080fd5b6020840193505b8284101561153357833561152281610ec6565b82526020938401939091019061150f565b9695505050505050565b602080825282518282018190526000918401906040840190835b81811015610f4357611597838551805182526020810151602083015260408101516040830152606081015160608301526080810151151560808301525050565b6020939093019260a09290920191600101611557565b6000602082840312156115bf57600080fd5b81516001600160401b038111156115d557600080fd5b8201601f810184136115e657600080fd5b80516115f4611136826110a5565b8082825260208201915060208360051b85010192508683111561161657600080fd5b6020840193505b828410156115335783516001600160401b038116811461163c57600080fd5b82526020938401939091019061161d565b60006020828403121561165f57600080fd5b5051919050565b8082018082111561075757634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b602081526000610efb602083018461123c565b600082601f8301126116c157600080fd5b81516116cf611136826110c8565b8181528460208386010111156116e457600080fd5b6116f58260208301602087016111ec565b949350505050565b805161170881610ec6565b919050565b8051801515811461170857600080fd5b600082601f83011261172e57600080fd5b815161173c611136826110a5565b8082825260208201915060208360051b86010192508583111561175e57600080fd5b602085015b8381101561179f5780516001600160401b0381111561178157600080fd5b611790886020838a01016116b0565b84525060209283019201611763565b5095945050505050565b6000602082840312156117bb57600080fd5b81516001600160401b038111156117d157600080fd5b8201601f810184136117e257600080fd5b80516117f0611136826110a5565b8082825260208201915060208360051b85010192508683111561181257600080fd5b602084015b838110156111e15780516001600160401b0381111561183557600080fd5b8501610100818a03601f1901121561184c57600080fd5b61185461104c565b60208201516001600160401b0381111561186d57600080fd5b61187c8b6020838601016116b0565b82525061188b604083016116fd565b6020820152606082015160408201526118a66080830161170d565b60608201526118b760a0830161170d565b608082015260c08201516001600160401b038111156118d557600080fd5b6118e48b6020838601016116b0565b60a08301525060e08201516001600160401b0381111561190357600080fd5b6119128b6020838601016116b0565b60c0830152506101008201516001600160401b0381111561193257600080fd5b6119418b60208386010161171d565b60e08301525084525060209283019201611817565b600061010082840312801561196a57600080fd5b50600061197561104c565b835161198081610ec6565b815261198e602085016116fd565b602082015260408481015190820152606080850151908201526080808501519082015260a08085015190820181905291506119cb60c0850161170d565b60c08201526119dc60e0850161170d565b60e0820152949350505050565b6000602082840312156119fb57600080fd5b815160078110610efb57600080fd5b600060208284031215611a1c57600080fd5b8151610efb81610ec656fea264697066735822122096e6dcfe2dc84ba6129aae94ab853cf6d25cb7975bc92fc146a03db751be7d1264736f6c634300081c0033";

type TovarishAggregatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TovarishAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TovarishAggregator__factory extends ContractFactory {
  constructor(...args: TovarishAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _tovarishRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_tovarishRegistry, overrides || {});
  }
  override deploy(
    _tovarishRegistry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_tovarishRegistry, overrides || {}) as Promise<
      TovarishAggregator & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TovarishAggregator__factory {
    return super.connect(runner) as TovarishAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TovarishAggregatorInterface {
    return new Interface(_abi) as TovarishAggregatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TovarishAggregator {
    return new Contract(address, _abi, runner) as unknown as TovarishAggregator;
  }
}
