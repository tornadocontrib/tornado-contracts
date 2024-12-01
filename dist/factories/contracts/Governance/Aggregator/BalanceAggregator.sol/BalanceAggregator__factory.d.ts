import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { BalanceAggregator, BalanceAggregatorInterface } from "../../../../../contracts/Governance/Aggregator/BalanceAggregator.sol/BalanceAggregator";
type BalanceAggregatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BalanceAggregator__factory extends ContractFactory {
    constructor(...args: BalanceAggregatorConstructorParams);
    getDeployTransaction(_torn: AddressLike, _core: AddressLike, _relayerRegistry: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_torn: AddressLike, _core: AddressLike, _relayerRegistry: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BalanceAggregator & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BalanceAggregator__factory;
    static readonly bytecode = "0x60e060405234801561001057600080fd5b5060405161072138038061072183398101604081905261002f91610056565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c0526100ba565b60008060006060848603121561006a578283fd5b8351610075816100a2565b6020850151909350610086816100a2565b6040850151909250610097816100a2565b809150509250925092565b6001600160a01b03811681146100b757600080fd5b50565b60805160601c60a05160601c60c05160601c6106236100fe6000398061012a52806103005250806101c352806103ee52508061025f528061032452506106236000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631627905514610067578063399080ec1461009057806347ff589d146100b0578063adf898a4146100c5578063e94eab5b146100cd578063f2f4eb26146100ed575b600080fd5b61007a610075366004610444565b6100f5565b604051610087919061058d565b60405180910390f35b6100a361009e366004610444565b610101565b6040516100879190610598565b6100b86102fe565b604051610087919061052c565b6100b8610322565b6100e06100db366004610466565b610346565b6040516100879190610540565b6100b86103ec565b3b63ffffffff16151590565b610109610410565b604080518082019182905263b971a6bf60e01b909152806001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001663b971a6bf61015c866044850161052c565b60206040518083038186803b15801561017457600080fd5b505afa158015610188573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101ac9190610503565b604051639ae697bf60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690639ae697bf906101f890889060040161052c565b60206040518083038186803b15801561021057600080fd5b505afa158015610224573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102489190610503565b6040516370a0823160e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906370a082319061029490899060040161052c565b60206040518083038186803b1580156102ac57600080fd5b505afa1580156102c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102e49190610503565b010181526020016102f4846100f5565b1515905292915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b606080825167ffffffffffffffff8111801561036157600080fd5b5060405190808252806020026020018201604052801561039b57816020015b610388610410565b8152602001906001900390816103805790505b50905060005b83518110156103e5576103c68482815181106103b957fe5b6020026020010151610101565b8282815181106103d257fe5b60209081029190910101526001016103a1565b5092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b604080518082019091526000808252602082015290565b80356001600160a01b038116811461043e57600080fd5b92915050565b600060208284031215610455578081fd5b61045f8383610427565b9392505050565b60006020808385031215610478578182fd5b823567ffffffffffffffff81111561048e578283fd5b8301601f8101851361049e578283fd5b80356104b16104ac826105cd565b6105a6565b81815283810190838501858402850186018910156104cd578687fd5b8694505b838510156104f7576104e38982610427565b8352600194909401939185019185016104d1565b50979650505050505050565b600060208284031215610514578081fd5b5051919050565b805182526020908101511515910152565b6001600160a01b0391909116815260200190565b602080825282518282018190526000919060409081850190868401855b828110156105805761057084835161051b565b928401929085019060010161055d565b5091979650505050505050565b901515815260200190565b6040810161043e828461051b565b60405181810167ffffffffffffffff811182821017156105c557600080fd5b604052919050565b600067ffffffffffffffff8211156105e3578081fd5b506020908102019056fea2646970667358221220e5142547c57c81cd9fccefae8aceef832e51b855cd260d11ba2de7a0942fcf7064736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_torn";
            readonly type: "address";
        }, {
            readonly internalType: "contract ICore";
            readonly name: "_core";
            readonly type: "address";
        }, {
            readonly internalType: "contract IRelayerRegistry";
            readonly name: "_relayerRegistry";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "core";
        readonly outputs: readonly [{
            readonly internalType: "contract ICore";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "getStaked";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isContract";
                readonly type: "bool";
            }];
            readonly internalType: "struct BalanceAggregator.StakedBalance";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "addresses";
            readonly type: "address[]";
        }];
        readonly name: "getStakedBalances";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isContract";
                readonly type: "bool";
            }];
            readonly internalType: "struct BalanceAggregator.StakedBalance[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "isContract";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "relayerRegistry";
        readonly outputs: readonly [{
            readonly internalType: "contract IRelayerRegistry";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "torn";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): BalanceAggregatorInterface;
    static connect(address: string, runner?: ContractRunner | null): BalanceAggregator;
}
export {};
