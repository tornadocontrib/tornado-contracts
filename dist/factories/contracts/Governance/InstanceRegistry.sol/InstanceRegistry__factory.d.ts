import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { InstanceRegistry, InstanceRegistryInterface } from "../../../../contracts/Governance/InstanceRegistry.sol/InstanceRegistry";
type InstanceRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class InstanceRegistry__factory extends ContractFactory {
    constructor(...args: InstanceRegistryConstructorParams);
    getDeployTransaction(_governance: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_governance: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<InstanceRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): InstanceRegistry__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161146f38038061146f83398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c6113cc6100a3600039806103e552806105c052806105ed528061073a52806107e652506113cc6000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636c9be937116100715780636c9be9371461014d578063908e3b371461016057806392b65a4114610173578063b5b899b714610186578063cf552c8914610199578063f887ea40146101ac576100b4565b8063032bb443146100b957806310c13ac3146100e65780631ad058a9146100fb5780634ba16d9d1461011057806352c228e3146101235780635aa6e67514610138575b600080fd5b6100cc6100c7366004610e89565b6101b4565b6040516100dd95949392919061119c565b60405180910390f35b6100ee6101fe565b6040516100dd919061109f565b61010e610109366004610ec8565b6102af565b005b61010e61011e366004610e89565b6103da565b61012b61047f565b6040516100dd91906110ec565b6101406105be565b6040516100dd9190611071565b61010e61015b366004610fdb565b6105e2565b61014061016e366004610e89565b610709565b61010e610181366004610f80565b61072f565b61014061019436600461100d565b6107b4565b61010e6101a736600461100d565b6107db565b610140610a77565b60016020526000908152604090205460ff8082169161010081046001600160a01b031691600160a81b82041690600160b01b810462ffffff1690600160c81b900463ffffffff1685565b60025460609067ffffffffffffffff8111801561021a57600080fd5b50604051908082528060200260200182016040528015610244578160200160208202803683370190505b50905060005b6002548110156102ab576002818154811061026157fe5b9060005260206000200160009054906101000a90046001600160a01b031682828151811061028b57fe5b6001600160a01b039092166020928302919091019091015260010161024a565b5090565b600054610100900460ff16806102c857506102c8610a8c565b806102d6575060005460ff16155b6102fb5760405162461bcd60e51b81526004016102f29061121c565b60405180910390fd5b600054610100900460ff16158015610326576000805460ff1961ff0019909116610100171660011790555b6000805462010000600160b01b031916620100006001600160a01b038516021781555b83518110156103c25761036e84828151811061036157fe5b6020026020010151610a92565b600284828151811061037c57fe5b6020908102919091018101515182546001808201855560009485529290932090920180546001600160a01b0319166001600160a01b039093169290921790915501610349565b5080156103d5576000805461ff00191690555b505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104225760405162461bcd60e51b81526004016102f2906112ca565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f94df8c3a8087dce110e5fbc5acf380c83c94bbd31b2c8ed4c08e1396a696e1a890610474908390611071565b60405180910390a150565b60025460609067ffffffffffffffff8111801561049b57600080fd5b506040519080825280602002602001820160405280156104d557816020015b6104c2610d64565b8152602001906001900390816104ba5790505b50905060005b6002548110156102ab576000600282815481106104f457fe5b60009182526020808320909101546040805180820182526001600160a01b03928316808252808652600180865295839020835160a081018552815460ff8082161515835261010082049097168289015292985092969587019592949093850192600160a81b909204169081111561056757fe5b600181111561057257fe5b81529054600160b01b810462ffffff166020830152600160c81b900463ffffffff16604090910152905283518490849081106105aa57fe5b6020908102919091010152506001016104db565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461062a5760405162461bcd60e51b81526004016102f2906112ca565b600061063c6080830160608401610fc0565b600181111561064757fe5b14156106655760405162461bcd60e51b81526004016102f290611293565b6000600160006106786020850185610e89565b6001600160a01b03168152602081019190915260400160002054600160a81b900460ff1660018111156106a757fe5b14156106ef5760026106bc6020830183610e89565b81546001810183556000928352602090922090910180546001600160a01b0319166001600160a01b039092169190911790555b61070661070136839003830183610ff2565b610a92565b50565b6001600160a01b038082166000908152600160205260409020546101009004165b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107775760405162461bcd60e51b81526004016102f2906112ca565b6001600160a01b039091166000908152600160205260409020805463ffffffff909216600160c81b0263ffffffff60c81b19909216919091179055565b600281815481106107c157fe5b6000918252602090912001546001600160a01b0316905081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108235760405162461bcd60e51b81526004016102f2906112ca565b60006002828154811061083257fe5b60009182526020808320909101546001600160a01b03908116808452600190925260409092205490925060ff8116916101009091041681156109705760008054604051636eb1769f60e11b81526001600160a01b038085169263dd62ed3e926108aa9262010000909204909116908890600401611085565b60206040518083038186803b1580156108c257600080fd5b505afa1580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa9190611025565b9050801561096e5760008054604051633ef1078360e01b8152620100009091046001600160a01b031691633ef107839161093b9186918991906004016111e3565b600060405180830381600087803b15801561095557600080fd5b505af1158015610969573d6000803e3d6000fd5b505050505b505b6001600160a01b038316600090815260016020526040902080546001600160e81b03191690556002805460001981019081106109a857fe5b600091825260209091200154600280546001600160a01b0390921691869081106109ce57fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506002805480610a0757fe5b6001900381819060005260206000200160006101000a8154906001600160a01b0302191690559055826001600160a01b03167f02826f62d88a4d9f1978eb9c06f8663f642d032908e65a915d5898f3585421c06000604051610a699190611207565b60405180910390a250505050565b6000546201000090046001600160a01b031681565b303b1590565b60208181015182516001600160a01b0390811660009081526001808552604091829020845181549686015160ff1990971690151517610100600160a81b0319166101009690941695909502929092178085559083015192939291839160ff60a81b191690600160a81b908490811115610b0757fe5b02179055506060820151815460809093015163ffffffff16600160c81b0263ffffffff60c81b1962ffffff909216600160b01b0262ffffff60b01b19909416939093171691909117905560208101515115610d1457600081600001516001600160a01b031663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b9b57600080fd5b505afa158015610baf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd39190610eac565b90508160200151602001516001600160a01b0316816001600160a01b031614610c0e5760405162461bcd60e51b81526004016102f29061126a565b600080548351604051636eb1769f60e11b81526001600160a01b038086169363dd62ed3e93610c4b93620100009092049092169190600401611085565b60206040518083038186803b158015610c6357600080fd5b505afa158015610c77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9b9190611025565b905080610d11576000548351604051633ef1078360e01b8152620100009092046001600160a01b031691633ef1078391610cde91869190600019906004016111e3565b600060405180830381600087803b158015610cf857600080fd5b505af1158015610d0c573d6000803e3d6000fd5b505050505b50505b80600001516001600160a01b03167f02826f62d88a4d9f1978eb9c06f8663f642d032908e65a915d5898f3585421c0826020015160400151604051610d599190611207565b60405180910390a250565b604051806040016040528060006001600160a01b03168152602001610d87610d8c565b905290565b6040805160a0810182526000808252602082018190529091820190815260006020820181905260409091015290565b8035610dc681611350565b92915050565b803560028110610dc657600080fd5b600081830360c0811215610ded578182fd5b610df760406112f2565b91508235610e0481611350565b825260a0601f1982011215610e1857600080fd5b50610e2360a06112f2565b6020830135610e3181611365565b81526040830135610e4181611350565b6020820152610e538460608501610dcc565b60408201526080830135610e6681611373565b606082015260a0830135610e7981611384565b6080820152602082015292915050565b600060208284031215610e9a578081fd5b8135610ea581611350565b9392505050565b600060208284031215610ebd578081fd5b8151610ea581611350565b60008060408385031215610eda578081fd5b823567ffffffffffffffff811115610ef0578182fd5b8301601f81018513610f00578182fd5b8035610f13610f0e82611319565b6112f2565b808282526020808301925080850160c08a838288028901011115610f35578788fd5b8796505b85871015610f6157610f4b8b83610ddb565b8552600196909601959382019390810190610f39565b5050819650610f7289828a01610dbb565b955050505050509250929050565b60008060408385031215610f92578182fd5b8235610f9d81611350565b9150602083013563ffffffff81168114610fb5578182fd5b809150509250929050565b600060208284031215610fd1578081fd5b610ea58383610dcc565b600060c08284031215610fec578081fd5b50919050565b600060c08284031215611003578081fd5b610ea58383610ddb565b60006020828403121561101e578081fd5b5035919050565b600060208284031215611036578081fd5b5051919050565b15159052565b6001600160a01b03169052565b6002811061105a57fe5b9052565b62ffffff169052565b63ffffffff169052565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156110e05783516001600160a01b0316835292840192918401916001016110bb565b50909695505050505050565b602080825282518282018190526000919060409081850190868401855b8281101561118f57815161111d8151611339565b85528601518051611131908887019061103d565b8681015161114187870182611043565b5085810151606061115481880183611050565b820151905060806111678782018361105e565b9190910151905061117b60a0860182611067565b5060c0939093019290850190600101611109565b5091979650505050505050565b85151581526001600160a01b038516602082015260a081016111bd85611345565b604083015262ffffff8416606083015263ffffffff831660808301529695505050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6020810161121483611345565b825292915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252600f908201526e24b731b7b93932b1ba103a37b5b2b760891b604082015260600190565b6020808252601f908201527f5573652072656d6f7665496e7374616e6365282920666f722072656d6f766500604082015260600190565b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b60405181810167ffffffffffffffff8111828210171561131157600080fd5b604052919050565b600067ffffffffffffffff82111561132f578081fd5b5060209081020190565b6001600160a01b031690565b806002811061072a57fe5b6001600160a01b038116811461070657600080fd5b801515811461070657600080fd5b62ffffff8116811461070657600080fd5b63ffffffff8116811461070657600080fdfea26469706673582212207c46c875176b62100d16a46c273e615cd9eb5336dbcd238b33b227f39ff9106564736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governance";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "contract ITornadoInstance";
            readonly name: "instance";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "enum InstanceRegistry.InstanceState";
            readonly name: "state";
            readonly type: "uint8";
        }];
        readonly name: "InstanceStateUpdated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tornadoRouter";
            readonly type: "address";
        }];
        readonly name: "RouterRegistered";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllInstanceAddresses";
        readonly outputs: readonly [{
            readonly internalType: "contract ITornadoInstance[]";
            readonly name: "result";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getAllInstances";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract ITornadoInstance";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bool";
                    readonly name: "isERC20";
                    readonly type: "bool";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum InstanceRegistry.InstanceState";
                    readonly name: "state";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "uniswapPoolSwappingFee";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "protocolFeePercentage";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct InstanceRegistry.Instance";
                readonly name: "instance";
                readonly type: "tuple";
            }];
            readonly internalType: "struct InstanceRegistry.Tornado[]";
            readonly name: "result";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITornadoInstance";
            readonly name: "instance";
            readonly type: "address";
        }];
        readonly name: "getPoolToken";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governance";
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
                readonly internalType: "contract ITornadoInstance";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bool";
                    readonly name: "isERC20";
                    readonly type: "bool";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum InstanceRegistry.InstanceState";
                    readonly name: "state";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "uniswapPoolSwappingFee";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "protocolFeePercentage";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct InstanceRegistry.Instance";
                readonly name: "instance";
                readonly type: "tuple";
            }];
            readonly internalType: "struct InstanceRegistry.Tornado[]";
            readonly name: "_instances";
            readonly type: "tuple[]";
        }, {
            readonly internalType: "address";
            readonly name: "_router";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "instanceIds";
        readonly outputs: readonly [{
            readonly internalType: "contract ITornadoInstance";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITornadoInstance";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "instances";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "isERC20";
            readonly type: "bool";
        }, {
            readonly internalType: "contract IERC20";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "enum InstanceRegistry.InstanceState";
            readonly name: "state";
            readonly type: "uint8";
        }, {
            readonly internalType: "uint24";
            readonly name: "uniswapPoolSwappingFee";
            readonly type: "uint24";
        }, {
            readonly internalType: "uint32";
            readonly name: "protocolFeePercentage";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_instanceId";
            readonly type: "uint256";
        }];
        readonly name: "removeInstance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "router";
        readonly outputs: readonly [{
            readonly internalType: "contract ITornadoRouter";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITornadoInstance";
            readonly name: "instance";
            readonly type: "address";
        }, {
            readonly internalType: "uint32";
            readonly name: "newFee";
            readonly type: "uint32";
        }];
        readonly name: "setProtocolFee";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "routerAddress";
            readonly type: "address";
        }];
        readonly name: "setTornadoRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "contract ITornadoInstance";
                readonly name: "addr";
                readonly type: "address";
            }, {
                readonly components: readonly [{
                    readonly internalType: "bool";
                    readonly name: "isERC20";
                    readonly type: "bool";
                }, {
                    readonly internalType: "contract IERC20";
                    readonly name: "token";
                    readonly type: "address";
                }, {
                    readonly internalType: "enum InstanceRegistry.InstanceState";
                    readonly name: "state";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint24";
                    readonly name: "uniswapPoolSwappingFee";
                    readonly type: "uint24";
                }, {
                    readonly internalType: "uint32";
                    readonly name: "protocolFeePercentage";
                    readonly type: "uint32";
                }];
                readonly internalType: "struct InstanceRegistry.Instance";
                readonly name: "instance";
                readonly type: "tuple";
            }];
            readonly internalType: "struct InstanceRegistry.Tornado";
            readonly name: "_tornado";
            readonly type: "tuple";
        }];
        readonly name: "updateInstance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): InstanceRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): InstanceRegistry;
}
export {};
