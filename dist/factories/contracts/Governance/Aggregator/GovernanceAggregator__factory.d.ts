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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610ab8806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063029fcae7146100465780639853d9221461006f578063f4eeefe91461008f575b600080fd5b61005961005436600461082b565b6100b3565b60405161006691906109e3565b60405180910390f35b61008261007d36600461072c565b6101c7565b6040516100669190610919565b6100a261009d3660046107f3565b610446565b604051610066959493929190610a30565b60608167ffffffffffffffff811180156100cc57600080fd5b506040519080825280602002602001820160405280156100f6578160200160208202803683370190505b50905060005b828110156101bf57846001600160a01b0316639ae697bf85858481811061011f57fe5b9050602002016020810190610134919061072c565b6040518263ffffffff1660e01b81526004016101509190610905565b60206040518083038186803b15801561016857600080fd5b505afa15801561017c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101a091906108cc565b8282815181106101ac57fe5b60209081029190910101526001016100fc565b509392505050565b6060816001600160a01b031663da35c6646040518163ffffffff1660e01b815260040160206040518083038186803b15801561020257600080fd5b505afa158015610216573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061023a91906108cc565b67ffffffffffffffff8111801561025057600080fd5b5060405190808252806020026020018201604052801561028a57816020015b6102776106e2565b81526020019060019003908161026f5790505b50905060005b8151811015610440576000806000806000806000808a6001600160a01b031663013cf08b8a6001016040518263ffffffff1660e01b81526004016102d49190610a27565b6101006040518083038186803b1580156102ed57600080fd5b505afa158015610301573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610325919061076b565b97509750975097509750975097509750604051806101200160405280896001600160a01b03168152602001886001600160a01b03168152602001878152602001868152602001858152602001848152602001831515815260200182151581526020018c6001600160a01b0316633e4f49e68c6001016040518263ffffffff1660e01b81526004016103b69190610a27565b60206040518083038186803b1580156103ce57600080fd5b505afa1580156103e2573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061040691906108ad565b600681111561041157fe5b8152508a8a8151811061042057fe5b602002602001018190525050505050505050508080600101915050610290565b50919050565b6000806000806000866001600160a01b0316639ae697bf876040518263ffffffff1660e01b815260040161047a9190610905565b60206040518083038186803b15801561049257600080fd5b505afa1580156104a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ca91906108cc565b6040516317977c6160e01b81529095506001600160a01b038816906317977c61906104f9908990600401610905565b60206040518083038186803b15801561051157600080fd5b505afa158015610525573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061054991906108cc565b935083156105db57604051631f27a4f360e11b81526001600160a01b03881690633e4f49e69061057d908790600401610a27565b60206040518083038186803b15801561059557600080fd5b505afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd91906108ad565b60068111156105d857fe5b92505b60405163a72edda360e01b81526001600160a01b0388169063a72edda390610607908990600401610905565b60206040518083038186803b15801561061f57600080fd5b505afa158015610633573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065791906108cc565b604051631976849960e21b81529092506001600160a01b038816906365da126490610686908990600401610905565b60206040518083038186803b15801561069e57600080fd5b505afa1580156106b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d6919061074f565b90509295509295909350565b6040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290529061010082015290565b60006020828403121561073d578081fd5b813561074881610a5c565b9392505050565b600060208284031215610760578081fd5b815161074881610a5c565b600080600080600080600080610100898b031215610787578384fd5b885161079281610a5c565b60208a01519098506107a381610a5c565b8097505060408901519550606089015194506080890151935060a0890151925060c08901516107d181610a74565b60e08a01519092506107e281610a74565b809150509295985092959890939650565b60008060408385031215610805578182fd5b823561081081610a5c565b9150602083013561082081610a5c565b809150509250929050565b60008060006040848603121561083f578283fd5b833561084a81610a5c565b9250602084013567ffffffffffffffff80821115610866578384fd5b818601915086601f830112610879578384fd5b813581811115610887578485fd5b876020808302850101111561089a578485fd5b6020830194508093505050509250925092565b6000602082840312156108be578081fd5b815160078110610748578182fd5b6000602082840312156108dd578081fd5b5051919050565b6001600160a01b03169052565b15159052565b6007811061090157fe5b9052565b6001600160a01b0391909116815260200190565b602080825282518282018190526000919060409081850190868401855b828110156109d657815180516001600160a01b031685528681015161095d888701826108e4565b508086015185870152606080820151908601526080808201519086015260a0808201519086015260c080820151610996828801826108f1565b505060e0808201516109aa828801826108f1565b505061010090810151906109c0868201836108f7565b5050610120939093019290850190600101610936565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b81811015610a1b578351835292840192918401916001016109ff565b50909695505050505050565b90815260200190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b6001600160a01b0381168114610a7157600080fd5b50565b8015158114610a7157600080fdfea2646970667358221220c68e065ff95a2c91c1e5904ff4ba8c709291d5227b10049b437e89d35c33af4d64736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract Governance";
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
                readonly internalType: "enum Governance.ProposalState";
                readonly name: "state";
                readonly type: "uint8";
            }];
            readonly internalType: "struct GovernanceAggregator.Proposal[]";
            readonly name: "proposals";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract Governance";
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
            readonly internalType: "contract Governance";
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