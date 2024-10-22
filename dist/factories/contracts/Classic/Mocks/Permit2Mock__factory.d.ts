import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Permit2Mock, Permit2MockInterface } from "../../../../contracts/Classic/Mocks/Permit2Mock";
type Permit2MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Permit2Mock__factory extends ContractFactory {
    constructor(...args: Permit2MockConstructorParams);
    getDeployTransaction(_denomination: BigNumberish, _token: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_denomination: BigNumberish, _token: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Permit2Mock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Permit2Mock__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50604051610bb1380380610bb1833981016040819052602c916055565b600091909155600180546001600160a01b0319166001600160a01b039092169190911790556090565b60008060408385031215606757600080fd5b825160208401519092506001600160a01b0381168114608557600080fd5b809150509250929050565b610b128061009f6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c80638bca6d16116100665780638bca6d161461011e5780639e67ab1e14610127578063c58b4c4914610150578063f15ea35914610163578063fc0c546a1461017657600080fd5b806303ac0673146100a357806304f03273146100b857806312261ee7146100d3578063156e2152146101015780637e89f31f14610116575b600080fd5b6100b66100b13660046105ec565b610189565b005b6100c0610243565b6040519081526020015b60405180910390f35b6100e96e22d473030f116ddee9f6b43ac78ba381565b6040516001600160a01b0390911681526020016100ca565b610109610266565b6040516100ca91906106a4565b6101096102a1565b6100c060005481565b6100e96101353660046106be565b6002602052600090815260409020546001600160a01b031681565b6100c061015e36600461071e565b6102bd565b6100b6610171366004610776565b61032a565b6001546100e9906001600160a01b031681565b6040805160a0810182526001546001600160a01b0316606082019081526000546080830181905290825260208083018890528284018790528351808501855230815290810191909152915163187945bd60e11b81526e22d473030f116ddee9f6b43ac78ba3926330f28b7a9261020a929091908a90889088906004016108dc565b600060405180830381600087803b15801561022457600080fd5b505af1158015610238573d6000803e3d6000fd5b505050505050505050565b6040518060600160405280603b8152602001610aa2603b91398051906020012081565b6040518060600160405280603b8152602001610aa2603b913960405160200161028f9190610934565b60405160208183030381529060405281565b6040518060600160405280603b8152602001610aa2603b913981565b60006040518060600160405280603b8152602001610aa2603b9139805160209182012083518483015160405161030d94019283526001600160a01b03919091166020830152604082015260600190565b604051602081830303815290604052805190602001209050919050565b6000855160005461033b91906109b7565b905060008660405160200161035091906109e2565b60408051601f19818403018152828252805160209182012060a0840183526001546001600160a01b0316606085019081526080850187905284528382018a905283830189905282518084018452308082528184018890528451808601909552845291830181905293506e22d473030f116ddee9f6b43ac78ba39263137c29fe929091908c906103de906102bd565b6040518060600160405280603b8152602001610aa2603b91396040516020016104079190610934565b6040516020818303038152906040528a8a6040518863ffffffff1660e01b815260040161043a9796959493929190610a18565b600060405180830381600087803b15801561045457600080fd5b505af1158015610468573d6000803e3d6000fd5b505050506104768789610480565b5050505050505050565b60005b82518110156105825760008382815181106104a0576104a0610a8b565b602090810291909101810151600081815260029092526040909120549091506001600160a01b0316156105195760405162461bcd60e51b815260206004820181905260248201527f54686520636f6d6d69746d656e7420686173206265656e207665726966696564604482015260640160405180910390fd5b60008181526002602090815260409182902080546001600160a01b0319166001600160a01b038716908117909155915191825282917fa9b0993cd360203065cdbc30dd334b2a3eb63115cbb64d73246109d8af75a5f9910160405180910390a250600101610483565b505050565b80356001600160a01b038116811461059e57600080fd5b919050565b60008083601f8401126105b557600080fd5b50813567ffffffffffffffff8111156105cd57600080fd5b6020830191508360208285010111156105e557600080fd5b9250929050565b60008060008060006080868803121561060457600080fd5b61060d86610587565b94506020860135935060408601359250606086013567ffffffffffffffff81111561063757600080fd5b610643888289016105a3565b969995985093965092949392505050565b60005b8381101561066f578181015183820152602001610657565b50506000910152565b60008151808452610690816020860160208601610654565b601f01601f19169290920160200192915050565b6020815260006106b76020830184610678565b9392505050565b6000602082840312156106d057600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715610716576107166106d7565b604052919050565b6000604082840312801561073157600080fd5b506040805190810167ffffffffffffffff81118282101715610755576107556106d7565b60405261076183610587565b81526020928301359281019290925250919050565b60008060008060008060a0878903121561078f57600080fd5b61079887610587565b9550602087013567ffffffffffffffff8111156107b457600080fd5b8701601f810189136107c557600080fd5b803567ffffffffffffffff8111156107df576107df6106d7565b8060051b6107ef602082016106ed565b9182526020818401810192908101908c84111561080b57600080fd5b6020850194505b8385101561083157843580835260209586019590935090910190610812565b9850505050604088013594505060608701359250608087013567ffffffffffffffff81111561085f57600080fd5b61086b89828a016105a3565b979a9699509497509295939492505050565b61089b82825180516001600160a01b03168252602090810151910152565b60208101516040830152604081015160608301525050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6108e6818761087d565b84516001600160a01b03166080820152602085015160a08201526001600160a01b03841660c082015261010060e0820181905260009061092990830184866108b3565b979650505050505050565b7f5065726d6974436f6d6d69746d656e7473207769746e6573732900000000000081526000825161096c81601a850160208701610654565b7f546f6b656e5065726d697373696f6e73286164647265737320746f6b656e2c75601a9390910192830152506d696e7432353620616d6f756e742960901b603a820152604801919050565b80820281158282048414176109dc57634e487b7160e01b600052601160045260246000fd5b92915050565b8151600090829060208501835b82811015610a0d5781518452602093840193909101906001016109ef565b509195945050505050565b610a22818961087d565b86516001600160a01b03166080820152602087015160a082015260018060a01b03861660c08201528460e08201526101406101008201526000610a69610140830186610678565b828103610120840152610a7d8185876108b3565b9a9950505050505050505050565b634e487b7160e01b600052603260045260246000fdfe5065726d6974436f6d6d69746d656e7473286164647265737320696e7374616e63652c6279746573333220636f6d6d69746d656e74734861736829a26469706673582212206a6ecdc893f53628220fd48e8b32741c8e8a1c0862bc81e1d55feb14bef95f1764736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_denomination";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "_token";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "commitment";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "VerifiedCommitment";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "COMMITMENT_TYPE";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "COMMITMENT_TYPEHASH";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "WITNESS_TYPE_STRING";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "denomination";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "permit2";
        readonly outputs: readonly [{
            readonly internalType: "contract ISignatureTransfer";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32[]";
            readonly name: "_commitments";
            readonly type: "bytes32[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }];
        readonly name: "permit2Commitments";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "_signature";
            readonly type: "bytes";
        }];
        readonly name: "permit2Test";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "verifiedCommitments";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "instance";
                readonly type: "address";
            }, {
                readonly internalType: "bytes32";
                readonly name: "commitmentsHash";
                readonly type: "bytes32";
            }];
            readonly internalType: "struct Permit2Mock.PermitCommitments";
            readonly name: "permitData";
            readonly type: "tuple";
        }];
        readonly name: "witness";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): Permit2MockInterface;
    static connect(address: string, runner?: ContractRunner | null): Permit2Mock;
}
export {};