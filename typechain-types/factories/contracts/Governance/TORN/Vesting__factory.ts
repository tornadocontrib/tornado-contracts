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
import type { NonPayableOverrides } from "../../../../common";
import type {
  Vesting,
  VestingInterface,
} from "../../../../contracts/Governance/TORN/Vesting";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_beneficiary",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cliffInMonths",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_durationInMonths",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    inputs: [],
    name: "SECONDS_PER_MONTH",
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
    name: "beneficiary",
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
    name: "blockTimestamp",
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
    name: "cliffInMonths",
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
    name: "durationInMonths",
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
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "released",
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
    name: "startTimestamp",
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
    name: "vestedAmount",
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
] as const;

const _bytecode =
  "0x61012060405234801561001157600080fd5b50604051610c8c380380610c8c833981810160405260a081101561003457600080fd5b508051602082015160408301516060840151608090940151929391929091906001600160a01b0384166100ae576040805162461bcd60e51b815260206004820152601b60248201527f42656e65666963696172792063616e6e6f7420626520656d7074790000000000604482015290519081900360640190fd5b80821115610103576040805162461bcd60e51b815260206004820152601e60248201527f436c6966662069732067726561746572207468616e206475726174696f6e0000604482015290519081900360640190fd5b6001600160601b0319606086811b821660a05285901b1660805261010081905260c08290528215610134578261013c565b61013c61014a565b60e0525061014e9350505050565b4290565b60805160601c60a05160601c60c05160e05161010051610acc6101c060003980610203528061037b52806103dd525080610152528061018e52806105215250806101d052806104f352508061024852806102c85280610474528061054552508061012c52806104965250610acc6000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063928d89ae11610066578063928d89ae146100fb5780639613252114610103578063adb618321461010b578063e6fd48bc14610113578063fc0c546a1461011b5761009e565b806310786deb146100a357806338af3eed146100bd57806344b1231f146100e157806367097a4b146100e957806386d1a69f146100f1575b600080fd5b6100ab610123565b60408051918252519081900360200190f35b6100c561012a565b604080516001600160a01b039092168252519081900360200190f35b6100ab61014e565b6100ab6103db565b6100f96103ff565b005b6100ab6104f1565b6100ab610515565b6100ab61051b565b6100ab61051f565b6100c5610543565b62278d0081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60007f000000000000000000000000000000000000000000000000000000000000000061017961051b565b1015610187575060006103d8565b60006101bb7f00000000000000000000000000000000000000000000000000000000000000006101b561051b565b90610567565b905060006101cc8262278d006105b2565b90507f0000000000000000000000000000000000000000000000000000000000000000811015610201576000925050506103d8565b7f000000000000000000000000000000000000000000000000000000000000000081106102c457604080516370a0823160e01b815230600482015290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b15801561028e57600080fd5b505afa1580156102a2573d6000803e3d6000fd5b505050506040513d60208110156102b857600080fd5b505192506103d8915050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561033357600080fd5b505afa158015610347573d6000803e3d6000fd5b505050506040513d602081101561035d57600080fd5b505160008054919250906103729083906105f4565b905060006103aa7f00000000000000000000000000000000000000000000000000000000000000006103a4848761064e565b906105b2565b905060006103c36000548361056790919063ffffffff16565b90506103cf84826106a7565b96505050505050505b90565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061040961014e565b905060008111610457576040805162461bcd60e51b81526020600482015260146024820152734e6f20746f6b656e7320746f2072656c6561736560601b604482015290519081900360640190fd5b60005461046490826105f4565b6000556104bb6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000167f0000000000000000000000000000000000000000000000000000000000000000836106bd565b6040805182815290517ffb81f9b30d73d830c3544b34d827c08142579ee75710b490bab0b3995468c5659181900360200190a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005481565b4290565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b60006105a983836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610714565b90505b92915050565b60006105a983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f0000000000008152506107ab565b6000828201838110156105a9576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008261065d575060006105ac565b8282028284828161066a57fe5b04146105a95760405162461bcd60e51b8152600401808060200182810382526021815260200180610a4c6021913960400191505060405180910390fd5b60008183106106b657816105a9565b5090919050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261070f908490610810565b505050565b600081848411156107a35760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610768578181015183820152602001610750565b50505050905090810190601f1680156107955780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600081836107fa5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315610768578181015183820152602001610750565b50600083858161080657fe5b0495945050505050565b6060610865826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166108c19092919063ffffffff16565b80519091501561070f5780806020019051602081101561088457600080fd5b505161070f5760405162461bcd60e51b815260040180806020018281038252602a815260200180610a6d602a913960400191505060405180910390fd5b60606108d084846000856108d8565b949350505050565b60606108e385610a45565b610934576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106109735780518252601f199092019160209182019101610954565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146109d5576040519150601f19603f3d011682016040523d82523d6000602084013e6109da565b606091505b509150915081156109ee5791506108d09050565b8051156109fe5780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315610768578181015183820152602001610750565b3b15159056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212203b80bee4c850816c872b37369b9e0bab4ebd3e1568e297afbf92415a4c2ea14364736f6c634300060c0033";

type VestingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VestingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vesting__factory extends ContractFactory {
  constructor(...args: VestingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token: AddressLike,
    _beneficiary: AddressLike,
    _startTimestamp: BigNumberish,
    _cliffInMonths: BigNumberish,
    _durationInMonths: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _token,
      _beneficiary,
      _startTimestamp,
      _cliffInMonths,
      _durationInMonths,
      overrides || {}
    );
  }
  override deploy(
    _token: AddressLike,
    _beneficiary: AddressLike,
    _startTimestamp: BigNumberish,
    _cliffInMonths: BigNumberish,
    _durationInMonths: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _token,
      _beneficiary,
      _startTimestamp,
      _cliffInMonths,
      _durationInMonths,
      overrides || {}
    ) as Promise<
      Vesting & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Vesting__factory {
    return super.connect(runner) as Vesting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VestingInterface {
    return new Interface(_abi) as VestingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Vesting {
    return new Contract(address, _abi, runner) as unknown as Vesting;
  }
}
