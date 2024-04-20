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
import type { NonPayableOverrides } from "../../../common";
import type {
  Verifier,
  VerifierInterface,
} from "../../../contracts/Classic/Verifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
      {
        internalType: "uint256[6]",
        name: "input",
        type: "uint256[6]",
      },
    ],
    name: "verifyProof",
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
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b506110d08061001f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063695ef6f914610030575b600080fd5b61004361003e366004610eca565b610057565b604051901515815260200160405180910390f35b6000808380602001905181019061006e9190610f71565b905060005b60088160ff161015610129577f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47828260ff16600881106100b5576100b5610ff0565b6020020151106101175760405162461bcd60e51b815260206004820152602260248201527f76657269666965722d70726f6f662d656c656d656e742d6774652d7072696d656044820152612d7160f01b60648201526084015b60405180910390fd5b806101218161101c565b915050610073565b50610132610ca2565b6040805180820182528351815260208085015181830152908352815160808082018452858401518285019081526060808801519084015282528351808501855290860151815260a08601518184015281830152838201528151808301835260c0850151815260e0850151918101919091529082015260006101b1610321565b90506000604051806040016040528060008152602001600081525090506101f38183608001516000600781106101e9576101e9610ff0565b60200201516107ec565b905060005b60068110156102df577f30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f000000187826006811061023457610234610ff0565b6020020151106102865760405162461bcd60e51b815260206004820152601f60248201527f76657269666965722d6774652d736e61726b2d7363616c61722d6669656c6400604482015260640161010e565b6102d5826102d0856080015184600161029f919061103b565b600781106102af576102af610ff0565b60200201518a85600681106102c6576102c6610ff0565b602002015161088d565b6107ec565b91506001016101f8565b506103146102f0846000015161091b565b846020015184600001518560200151858760400151896040015189606001516109d5565b9450505050505b92915050565b610329610cf3565b6040805180820182527f2dbfc3ec62a3eee5a3b4b464bcf1f8527bbca12adea0f1f12033cd4f61b0e09181527f19e55bd0b72c126da18665039556776642ff82e2f347f24fcea2475f4db087df6020808301919091529083528151608080820184527f1ae724ab134e5a7c6bd8a116fa5505b259522c0f164a5e8126e3ec7d34465f6e8285019081527e9f1bcdc853f8e3531756bb625b0d1dc014f4ab57c3f79f4f4e2e7ef7e0ead6606080850191909152908352845180860186527f23a8ca5760457e726365b92fd0ceb486665797cd68c35dcffd8e4ae8066691e981527f13ec7182c9fd68331a10f8be0fe885d730de5c7f89aa7d0b7bafaa009bbc9e3e818601528385015285840192909252835180820185527f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c28186019081527f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed828501528152845180860186527f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81527f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa818601528185015285850152835180820185527f2f0c63d0c53b3dfbca27b6b43ae7fbf55a38d78a21470996485b03128accc2088186019081527e556502356e37ed150db2e36531b0f275fd6835c0fc1945922e270b48c48a86828501528152845180860186527f02644c27b5dbd793592a70b735e22c798a5e309fa17a992a7dc2a050e01b298f81527f194776b6a53439d7336f389d2a8f6651e40885f5ca2538b0dc9cb534fb23f7fa818601528185015282860152835180850185527f23df1bc9165e9c1c9b2bc036d8ebdd10e7aeae7e5e8019fde68aec7c818bb23e81527f0b6c92080d37c5fb2ddf30892a33665e5478432ef3f71ac8768ecbbe62c7789281850152818601805191909152845180860186527f1c7b2adf45e046caea000956b2ecb2d8617e710d2a7bb201a95ea276f92307b481527f2b15f07536f45948cf4abe6596637d902ffabb18c8c2f5c151544c294ce4a672818601528151850152845180860186527f1cecfe92882a8c835a47bf01bfa655cf628cbba7f81cf4042179fd13edcd6a3981527f0154bfbb2cb786ca247d4b69183d1751f267bbc7656be8d0f0e7a5a47e2c1101818601528151860152845180860186527f1584616a7423efcc72f69ea84fa0b2bc01433677297f4e8351bebfc15bcd0cda81527f0623755b1488526daa9fecf0e11b110dd6df12c461579d792e1db65af523c8be81860152815190930192909252835180850185527f12fbb5bfca9d61357ba2d641604cf4852e21ef54faa180fe539c18994dc1da5a81527f2f09dd9972a1af5f7bcfccf3d7ab600c9d898ea6d6933150ba0ae228ece17e5f81850152825190910152825180840184527f0adb513796fdf2103022c64151ce05f7c7a6d9200e8d819fa59e654fc4bfe83c81527f2d64f72ef4eddf9ca032058ed2bf691758387e913a77cf99d6a3cfb37c8ba7ee81840152815160a0015282518084019093527f21e7c9bffda74bfd2c4393b6803d775545de6fa89145f4a23476241d9881b66183527f0bbe41e52237ac13eb7b01f3cb999b7394d08734e71b1c3ada62713e17eb560c918301919091525160c0015290565b6040805180820190915260008082526020820152610808610d44565b8351815260208085015181830152835160408301528301516060808301919091526000908360c08460066107d05a03fa9050808061084257fe5b50806108855760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5859190b59985a5b195960721b604482015260640161010e565b505092915050565b60408051808201909152600080825260208201526108a9610d62565b835181526020808501519082015260408101839052600060608360808460076107d05a03fa905080806108d857fe5b50806108855760405162461bcd60e51b81526020600482015260126024820152711c185a5c9a5b99cb5b5d5b0b59985a5b195960721b604482015260640161010e565b6040805180820190915260008082526020820152815115801561094057506020820151155b1561095e575050604080518082019091526000808252602082015290565b6040518060400160405280836000015181526020017f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4784602001516109a3919061104e565b6109cd907f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47611070565b905292915050565b60408051608080820183528a825260208083018a90528284018890526060808401879052845192830185528b83528282018a9052828501889052820185905283516018808252610320820190955260009491859190839082016103008036833701905050905060005b6004811015610c1f576000610a54826006611083565b9050858260048110610a6857610a68610ff0565b60200201515183610a7a83600061103b565b81518110610a8a57610a8a610ff0565b602002602001018181525050858260048110610aa857610aa8610ff0565b60200201516020015183826001610abf919061103b565b81518110610acf57610acf610ff0565b602002602001018181525050848260048110610aed57610aed610ff0565b6020020151515183610b0083600261103b565b81518110610b1057610b10610ff0565b602002602001018181525050848260048110610b2e57610b2e610ff0565b6020020151516001602002015183610b4783600361103b565b81518110610b5757610b57610ff0565b602002602001018181525050848260048110610b7557610b75610ff0565b602002015160200151600060028110610b9057610b90610ff0565b602002015183610ba183600461103b565b81518110610bb157610bb1610ff0565b602002602001018181525050848260048110610bcf57610bcf610ff0565b602002015160200151600160028110610bea57610bea610ff0565b602002015183610bfb83600561103b565b81518110610c0b57610c0b610ff0565b602090810291909101015250600101610a3e565b50610c28610d80565b6000602082602086026020860160086107d05a03fa90508080610c4757fe5b5080610c8d5760405162461bcd60e51b81526020600482015260156024820152741c185a5c9a5b99cb5bdc18dbd9194b59985a5b1959605a1b604482015260640161010e565b505115159d9c50505050505050505050505050565b6040805160a081019091526000606082018181526080830191909152815260208101610ccc610d9e565b8152602001610cee604051806040016040528060008152602001600081525090565b905290565b6040805160e08101909152600060a0820181815260c0830191909152815260208101610d1d610d9e565b8152602001610d2a610d9e565b8152602001610d37610d9e565b8152602001610cee610dbe565b60405180608001604052806004906020820280368337509192915050565b60405180606001604052806003906020820280368337509192915050565b60405180602001604052806001906020820280368337509192915050565b6040518060400160405280610db1610df7565b8152602001610cee610df7565b6040518060e001604052806007905b6040805180820190915260008082526020820152815260200190600190039081610dcd5790505090565b60405180604001604052806002906020820280368337509192915050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610e5457610e54610e15565b604052919050565b600082601f830112610e6d57600080fd5b60405160c0810181811067ffffffffffffffff82111715610e9057610e90610e15565b6040528060c0840185811115610ea557600080fd5b845b81811015610ebf578035835260209283019201610ea7565b509195945050505050565b60008060e08385031215610edd57600080fd5b823567ffffffffffffffff80821115610ef557600080fd5b818501915085601f830112610f0957600080fd5b8135602082821115610f1d57610f1d610e15565b610f2f601f8301601f19168201610e2b565b92508183528781838601011115610f4557600080fd5b81818501828501376000818385010152829550610f6488828901610e5c565b9450505050509250929050565b6000610100808385031215610f8557600080fd5b83601f840112610f9457600080fd5b60405181810181811067ffffffffffffffff82111715610fb657610fb6610e15565b604052908301908085831115610fcb57600080fd5b845b83811015610fe5578051825260209182019101610fcd565b509095945050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060ff821660ff810361103257611032611006565b60010192915050565b8082018082111561031b5761031b611006565b60008261106b57634e487b7160e01b600052601260045260246000fd5b500690565b8181038181111561031b5761031b611006565b808202811582820484141761031b5761031b61100656fea2646970667358221220563d0fbee4e0552a525beba0066d9fa4a4a5e087a3b9c480756c9e2adf284bce64736f6c63430008190033";

type VerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Verifier__factory extends ContractFactory {
  constructor(...args: VerifierConstructorParams) {
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
      Verifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Verifier__factory {
    return super.connect(runner) as Verifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifierInterface {
    return new Interface(_abi) as VerifierInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Verifier {
    return new Contract(address, _abi, runner) as unknown as Verifier;
  }
}
