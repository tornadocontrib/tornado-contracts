import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { BalanceAggregator, BalanceAggregatorInterface } from "../../../../contracts/Governance/Aggregator/BalanceAggregator";
type BalanceAggregatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BalanceAggregator__factory extends ContractFactory {
    constructor(...args: BalanceAggregatorConstructorParams);
    getDeployTransaction(_torn: AddressLike, _governance: AddressLike, _relayerRegistry: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_torn: AddressLike, _governance: AddressLike, _relayerRegistry: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BalanceAggregator & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BalanceAggregator__factory;
    static readonly bytecode = "0x60e060405234801561001057600080fd5b5060405161071e38038061071e83398101604081905261002f91610064565b6001600160a01b0392831660805290821660a0521660c0526100b1565b6001600160a01b038116811461006157600080fd5b50565b60008060006060848603121561007957600080fd5b83516100848161004c565b60208501519093506100958161004c565b60408501519092506100a68161004c565b809150509250925092565b60805160a05160c05161062b6100f36000396000818160bb01526101a101526000818160fa015261022a01526000818161012101526102b4015261062b6000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631627905514610067578063399080ec1461009657806347ff589d146100b65780635aa6e675146100f5578063adf898a41461011c578063e94eab5b14610143575b600080fd5b610081610075366004610428565b3b63ffffffff16151590565b60405190151581526020015b60405180910390f35b6100a96100a4366004610428565b610163565b60405161008d919061044a565b6100dd7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200161008d565b6100dd7f000000000000000000000000000000000000000000000000000000000000000081565b6100dd7f000000000000000000000000000000000000000000000000000000000000000081565b61015661015136600461047b565b61034c565b60405161008d919061054b565b6040805180820190915260008082526020820152604080518082019182905263b971a6bf60e01b9091526001600160a01b03838116604483015281907f00000000000000000000000000000000000000000000000000000000000000001663b971a6bf60648301602060405180830381865afa1580156101e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061020b91906105a5565b604051639ae697bf60e01b81526001600160a01b0386811660048301527f00000000000000000000000000000000000000000000000000000000000000001690639ae697bf90602401602060405180830381865afa158015610271573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061029591906105a5565b6040516370a0823160e01b81526001600160a01b0387811660048301527f000000000000000000000000000000000000000000000000000000000000000016906370a0823190602401602060405180830381865afa1580156102fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031f91906105a5565b61032991906105be565b61033391906105be565b8152602001833b63ffffffff1615151515905292915050565b60606000825167ffffffffffffffff81111561036a5761036a610465565b6040519080825280602002602001820160405280156103af57816020015b60408051808201909152600080825260208201528152602001906001900390816103885790505b50905060005b8351811015610405576103e08482815181106103d3576103d36105df565b6020026020010151610163565b8282815181106103f2576103f26105df565b60209081029190910101526001016103b5565b5092915050565b80356001600160a01b038116811461042357600080fd5b919050565b60006020828403121561043a57600080fd5b6104438261040c565b9392505050565b81518152602080830151151590820152604081015b92915050565b634e487b7160e01b600052604160045260246000fd5b60006020828403121561048d57600080fd5b813567ffffffffffffffff8111156104a457600080fd5b8201601f810184136104b557600080fd5b803567ffffffffffffffff8111156104cf576104cf610465565b8060051b604051601f19603f830116810181811067ffffffffffffffff821117156104fc576104fc610465565b60405291825260208184018101929081018784111561051a57600080fd5b6020850194505b83851015610540576105328561040c565b815260209485019401610521565b509695505050505050565b602080825282518282018190526000918401906040840190835b8181101561059a57610584838551805182526020908101511515910152565b6020939093019260409290920191600101610565565b509095945050505050565b6000602082840312156105b757600080fd5b5051919050565b8082018082111561045f57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea2646970667358221220813bc896825ca85fc48918dc0477506950c8212777d3742525aba6c2d57efe0964736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_torn";
            readonly type: "address";
        }, {
            readonly internalType: "contract IGovernance";
            readonly name: "_governance";
            readonly type: "address";
        }, {
            readonly internalType: "contract IRelayerRegistry";
            readonly name: "_relayerRegistry";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
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
        readonly inputs: readonly [];
        readonly name: "governance";
        readonly outputs: readonly [{
            readonly internalType: "contract IGovernance";
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
