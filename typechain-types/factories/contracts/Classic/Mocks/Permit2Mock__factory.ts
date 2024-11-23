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
  Permit2Mock,
  Permit2MockInterface,
} from "../../../../contracts/Classic/Mocks/Permit2Mock";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_denomination",
        type: "uint256",
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
    inputs: [],
    name: "InvalidSignatureType",
    type: "error",
  },
  {
    inputs: [],
    name: "COMMITMENT_TYPE",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "COMMITMENT_TYPEHASH",
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
    name: "WITNESS_TYPE_STRING",
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
        internalType: "bytes32[]",
        name: "_commitments",
        type: "bytes32[]",
      },
      {
        internalType: "bytes",
        name: "permitData",
        type: "bytes",
      },
    ],
    name: "depositPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "permitData",
        type: "bytes",
      },
    ],
    name: "getSignatureType",
    outputs: [
      {
        internalType: "enum Permit2Mock.SignatureType",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "permit2",
    outputs: [
      {
        internalType: "contract ISignatureTransfer",
        name: "",
        type: "address",
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
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "instance",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "commitmentsHash",
            type: "bytes32",
          },
        ],
        internalType: "struct Permit2Mock.PermitCommitments",
        name: "permitData",
        type: "tuple",
      },
    ],
    name: "witness",
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
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50604051610dbe380380610dbe833981016040819052602c916055565b600091909155600180546001600160a01b0319166001600160a01b039092169190911790556090565b60008060408385031215606757600080fd5b825160208401519092506001600160a01b0381168114608557600080fd5b809150509250929050565b610d1f8061009f6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063839df94511610066578063839df9451461011e5780638bca6d16146101515780639b64f12c1461015a578063c58b4c491461017a578063fc0c546a1461018d57600080fd5b806304f03273146100a357806312261ee7146100be578063156e2152146100ec57806367ed0bff146101015780637e89f31f14610116575b600080fd5b6100ab6101a0565b6040519081526020015b60405180910390f35b6100d46e22d473030f116ddee9f6b43ac78ba381565b6040516001600160a01b0390911681526020016100b5565b6100f46101c3565b6040516100b591906106b5565b61011461010f366004610794565b6101fe565b005b6100f4610582565b61014161012c366004610872565b60026020526000908152604090205460ff1681565b60405190151581526020016100b5565b6100ab60005481565b61016d61016836600461088b565b61059e565b6040516100b591906108de565b6100ab61018836600461091e565b6105f8565b6001546100d4906001600160a01b031681565b6040518060600160405280603b8152602001610caf603b91398051906020012081565b6040518060600160405280603b8152602001610caf603b91396040516020016101ec9190610978565b60405160208183030381529060405281565b60006102098261059e565b9050600081600181111561021f5761021f6108c8565b03610414576000808380602001905181019061023b9190610a5d565b9250925050600080600073__$a2fc1e6847d6f3167d595b4362f77d7a35$__63fab4087a856040518263ffffffff1660e01b815260040161027c91906106b5565b606060405180830381865af4158015610299573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102bd9190610abe565b925092509250600088516000546102d49190610afb565b90506000896040516020016102e99190610b26565b60408051808303601f1901815290829052805160209091012060015463d505accf60e01b83526001600160a01b038a81166004850152306024850152604484018690526064840183905260ff8916608485015260a4840188905260c48401879052919350169063d505accf9060e401600060405180830381600087803b15801561037257600080fd5b505af1158015610386573d6000803e3d6000fd5b50506001546040516323b872dd60e01b81526001600160a01b038b811660048301523060248301526044820187905290911692506323b872dd91506064016020604051808303816000875af11580156103e3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104079190610b5c565b5050505050505050505050565b6000806000808580602001905181019061042e9190610b7e565b945094509450945050600087516000546104489190610afb565b905060008860405160200161045d9190610b26565b60408051601f19818403018152828252805160209182012060a0840183526001546001600160a01b03166060850190815260808501879052845283820189905283830188905282518084018452308082528184018890528451808601909552845291830181905293506e22d473030f116ddee9f6b43ac78ba39263137c29fe929091908a906104eb906105f8565b6040518060600160405280603b8152602001610caf603b91396040516020016105149190610978565b604051602081830303815290604052896040518763ffffffff1660e01b815260040161054596959493929190610bf4565b600060405180830381600087803b15801561055f57600080fd5b505af1158015610573573d6000803e3d6000fd5b50505050505050505050505050565b6040518060600160405280603b8152602001610caf603b913981565b600080828060200190518101906105b59190610c93565b905060f881901c6105c95750600092915050565b60001960f882901c016105df5750600192915050565b6040516360cd402d60e01b815260040160405180910390fd5b60006040518060600160405280603b8152602001610caf603b9139805160209182012083518483015160405161064894019283526001600160a01b03919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b60005b83811015610680578181015183820152602001610668565b50506000910152565b600081518084526106a1816020860160208601610665565b601f01601f19169290920160200192915050565b6020815260006106c86020830184610689565b9392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561070e5761070e6106cf565b604052919050565b600067ffffffffffffffff821115610730576107306106cf565b50601f01601f191660200190565b600082601f83011261074f57600080fd5b813561076261075d82610716565b6106e5565b81815284602083860101111561077757600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156107a757600080fd5b823567ffffffffffffffff8111156107be57600080fd5b8301601f810185136107cf57600080fd5b803567ffffffffffffffff8111156107e9576107e96106cf565b8060051b6107f9602082016106e5565b9182526020818401810192908101908884111561081557600080fd5b6020850194505b8385101561083b5784358083526020958601959093509091019061081c565b95505050506020840135905067ffffffffffffffff81111561085c57600080fd5b6108688582860161073e565b9150509250929050565b60006020828403121561088457600080fd5b5035919050565b60006020828403121561089d57600080fd5b813567ffffffffffffffff8111156108b457600080fd5b6108c08482850161073e565b949350505050565b634e487b7160e01b600052602160045260246000fd5b602081016002831061090057634e487b7160e01b600052602160045260246000fd5b91905290565b6001600160a01b038116811461091b57600080fd5b50565b6000604082840312801561093157600080fd5b506040805190810167ffffffffffffffff81118282101715610955576109556106cf565b604052823561096381610906565b81526020928301359281019290925250919050565b7f5065726d6974436f6d6d69746d656e7473207769746e657373290000000000008152600082516109b081601a850160208701610665565b7f546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75601a9390910192830152506d696e7432353620616d6f756e742960901b603a820152604801919050565b80516001600160f81b031981168114610a1357600080fd5b919050565b600082601f830112610a2957600080fd5b8151610a3761075d82610716565b818152846020838601011115610a4c57600080fd5b6108c0826020830160208701610665565b600080600060608486031215610a7257600080fd5b610a7b846109fb565b92506020840151610a8b81610906565b604085015190925067ffffffffffffffff811115610aa857600080fd5b610ab486828701610a18565b9150509250925092565b600080600060608486031215610ad357600080fd5b835160ff81168114610ae457600080fd5b602085015160409095015190969495509392505050565b8082028115828204841417610b2057634e487b7160e01b600052601160045260246000fd5b92915050565b8151600090829060208501835b82811015610b51578151845260209384019390910190600101610b33565b509195945050505050565b600060208284031215610b6e57600080fd5b815180151581146106c857600080fd5b600080600080600060a08688031215610b9657600080fd5b610b9f866109fb565b94506020860151610baf81610906565b604087015160608801516080890151929650909450925067ffffffffffffffff811115610bdb57600080fd5b610be788828901610a18565b9150509295509295909350565b610c1281885180516001600160a01b03168252602090810151910152565b6020870151604082015260408701516060820152610c46608082018780516001600160a01b03168252602090810151910152565b60018060a01b03851660c08201528360e08201526101406101008201526000610c73610140830185610689565b828103610120840152610c868185610689565b9998505050505050505050565b600060208284031215610ca557600080fd5b6106c8826109fb56fe5065726d6974436f6d6d69746d656e7473286164647265737320696e7374616e63652c6279746573333220636f6d6d69746d656e74734861736829a2646970667358221220c077a82f88e702f4406dc9c9ac21b090fef12bcd4abba397656c8a8e31ac403264736f6c634300081c0033";

type Permit2MockConstructorParams =
  | [linkLibraryAddresses: Permit2MockLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Permit2MockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Permit2Mock__factory extends ContractFactory {
  constructor(...args: Permit2MockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        Permit2Mock__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: Permit2MockLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$a2fc1e6847d6f3167d595b4362f77d7a35\\$__", "g"),
      linkLibraryAddresses[
        "contracts/Classic/libraries/ParseSignature.sol:ParseSignature"
      ]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override getDeployTransaction(
    _denomination: BigNumberish,
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_denomination, _token, overrides || {});
  }
  override deploy(
    _denomination: BigNumberish,
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_denomination, _token, overrides || {}) as Promise<
      Permit2Mock & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Permit2Mock__factory {
    return super.connect(runner) as Permit2Mock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Permit2MockInterface {
    return new Interface(_abi) as Permit2MockInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Permit2Mock {
    return new Contract(address, _abi, runner) as unknown as Permit2Mock;
  }
}

export interface Permit2MockLibraryAddresses {
  ["contracts/Classic/libraries/ParseSignature.sol:ParseSignature"]: string;
}
