import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { GovernanceAggregator, GovernanceAggregatorInterface } from "../../../../contracts/Governance/Aggregator/GovernanceAggregator";
type GovernanceAggregatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GovernanceAggregator__factory extends ContractFactory {
    constructor(...args: GovernanceAggregatorConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<GovernanceAggregator & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): GovernanceAggregator__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50610ae88061001f6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063029fcae7146100465780639853d9221461006f578063f4eeefe91461008f575b600080fd5b610059610054366004610709565b6100d3565b6040516100669190610793565b60405180910390f35b61008261007d3660046107d6565b6101f0565b6040516100669190610832565b6100a261009d3660046108f2565b6104a4565b6040805195865260208601949094529284019190915260608301526001600160a01b0316608082015260a001610066565b60608167ffffffffffffffff8111156100ee576100ee61092b565b604051908082528060200260200182016040528015610117578160200160208202803683370190505b50905060005b828110156101e857846001600160a01b0316639ae697bf85858481811061014657610146610941565b905060200201602081019061015b91906107d6565b6040516001600160e01b031960e084901b1681526001600160a01b039091166004820152602401602060405180830381865afa15801561019f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101c39190610957565b8282815181106101d5576101d5610941565b602090810291909101015260010161011d565b509392505050565b6060816001600160a01b031663da35c6646040518163ffffffff1660e01b8152600401602060405180830381865afa158015610230573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102549190610957565b67ffffffffffffffff81111561026c5761026c61092b565b6040519080825280602002602001820160405280156102ea57816020015b6102d76040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290529061010082015290565b81526020019060019003908161028a5790505b50905060005b815181101561049e5760006001600160a01b03841663013cf08b610315846001610970565b6040518263ffffffff1660e01b815260040161033391815260200190565b61010060405180830381865afa158015610351573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037591906109b7565b905060405180610120016040528082600001516001600160a01b0316815260200182602001516001600160a01b031681526020018260400151815260200182606001518152602001826080015181526020018260a0015181526020018260c00151151581526020018260e0015115158152602001856001600160a01b0316633e4f49e68560016104059190610970565b6040518263ffffffff1660e01b815260040161042391815260200190565b602060405180830381865afa158015610440573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104649190610a74565b6006811115610475576104756107fa565b81525083838151811061048a5761048a610941565b6020908102919091010152506001016102f0565b50919050565b604051639ae697bf60e01b81526001600160a01b038281166004830152600091829182918291829190881690639ae697bf90602401602060405180830381865afa1580156104f6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051a9190610957565b6040516317977c6160e01b81526001600160a01b038881166004830152919650908816906317977c6190602401602060405180830381865afa158015610564573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105889190610957565b9350831561060d57604051631f27a4f360e11b8152600481018590526001600160a01b03881690633e4f49e690602401602060405180830381865afa1580156105d5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f99190610a74565b600681111561060a5761060a6107fa565b92505b60405163a72edda360e01b81526001600160a01b03878116600483015288169063a72edda390602401602060405180830381865afa158015610653573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106779190610957565b604051631976849960e21b81526001600160a01b038881166004830152919350908816906365da126490602401602060405180830381865afa1580156106c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e59190610a95565b90509295509295909350565b6001600160a01b038116811461070657600080fd5b50565b60008060006040848603121561071e57600080fd5b8335610729816106f1565b9250602084013567ffffffffffffffff81111561074557600080fd5b8401601f8101861361075657600080fd5b803567ffffffffffffffff81111561076d57600080fd5b8660208260051b840101111561078257600080fd5b939660209190910195509293505050565b602080825282518282018190526000918401906040840190835b818110156107cb5783518352602093840193909201916001016107ad565b509095945050505050565b6000602082840312156107e857600080fd5b81356107f3816106f1565b9392505050565b634e487b7160e01b600052602160045260246000fd5b6007811061082e57634e487b7160e01b600052602160045260246000fd5b9052565b602080825282518282018190526000918401906040840190835b818110156107cb57835160018060a01b03815116845260018060a01b03602082015116602085015260408101516040850152606081015160608501526080810151608085015260a081015160a085015260c08101516108af60c086018215159052565b5060e08101516108c360e086018215159052565b5061010081015190506108da610100850182610810565b5060209390930192610120929092019160010161084c565b6000806040838503121561090557600080fd5b8235610910816106f1565b91506020830135610920816106f1565b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b60006020828403121561096957600080fd5b5051919050565b8082018082111561099157634e487b7160e01b600052601160045260246000fd5b92915050565b80516109a2816106f1565b919050565b805180151581146109a257600080fd5b60006101008284031280156109cb57600080fd5b60009050604051610100810181811067ffffffffffffffff821117156109ff57634e487b7160e01b83526041600452602483fd5b604052610a0b84610997565b8152610a1960208501610997565b602082015260408481015190820152606080850151908201526080808501519082015260a0808501519082018190529150610a5660c085016109a7565b60c0820152610a6760e085016109a7565b60e0820152949350505050565b600060208284031215610a8657600080fd5b8151600781106107f357600080fd5b600060208284031215610aa757600080fd5b81516107f3816106f156fea2646970667358221220c56a0d968981c0ee8c1363c9d0f406e248adedc91f96561b60b16d3f0825f40764736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IGovernance";
            readonly name: "governance";
            readonly type: "address";
        }];
        readonly name: "getAllProposals";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "proposer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "target";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "startTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "endTime";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "forVotes";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "againstVotes";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "executed";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "extended";
                readonly type: "bool";
            }, {
                readonly internalType: "enum IGovernance.ProposalState";
                readonly name: "state";
                readonly type: "uint8";
            }];
            readonly internalType: "struct GovernanceAggregator.ProposalWithState[]";
            readonly name: "proposals";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IGovernance";
            readonly name: "governance";
            readonly type: "address";
        }, {
            readonly internalType: "address[]";
            readonly name: "accs";
            readonly type: "address[]";
        }];
        readonly name: "getGovernanceBalances";
        readonly outputs: readonly [{
            readonly internalType: "uint256[]";
            readonly name: "amounts";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IGovernance";
            readonly name: "governance";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "getUserData";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "latestProposalId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "latestProposalIdState";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "timelock";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "delegatee";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): GovernanceAggregatorInterface;
    static connect(address: string, runner?: ContractRunner | null): GovernanceAggregator;
}
export {};
