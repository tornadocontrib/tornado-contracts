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
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161140638038061140683398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c6113636100a3600039806103e552806105c052806105ed528061073a52806107e652506113636000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80636c9be937116100715780636c9be9371461014d578063908e3b371461016057806392b65a4114610173578063b5b899b714610186578063cf552c8914610199578063f887ea40146101ac576100b4565b8063032bb443146100b957806310c13ac3146100e65780631ad058a9146100fb5780634ba16d9d1461011057806352c228e3146101235780635aa6e67514610138575b600080fd5b6100cc6100c7366004610e7b565b6101b4565b6040516100dd959493929190611152565b60405180910390f35b6100ee6101fe565b6040516100dd9190611065565b61010e610109366004610eba565b6102af565b005b61010e61011e366004610e7b565b6103da565b61012b61047f565b6040516100dd91906110b2565b6101406105be565b6040516100dd9190611037565b61010e61015b366004610fd5565b6105e2565b61014061016e366004610e7b565b610709565b61010e610181366004610f7e565b61072f565b610140610194366004611007565b6107b4565b61010e6101a7366004611007565b6107db565b610140610a77565b60016020526000908152604090205460ff8082169161010081046001600160a01b031691600160a81b82041690600160b01b810462ffffff1690600160c81b900463ffffffff1685565b60025460609067ffffffffffffffff8111801561021a57600080fd5b50604051908082528060200260200182016040528015610244578160200160208202803683370190505b50905060005b6002548110156102ab576002818154811061026157fe5b9060005260206000200160009054906101000a90046001600160a01b031682828151811061028b57fe5b6001600160a01b039092166020928302919091019091015260010161024a565b5090565b600054610100900460ff16806102c857506102c8610a8c565b806102d6575060005460ff16155b6102fb5760405162461bcd60e51b81526004016102f2906111d2565b60405180910390fd5b600054610100900460ff16158015610326576000805460ff1961ff0019909116610100171660011790555b6000805462010000600160b01b031916620100006001600160a01b038516021781555b83518110156103c25761036e84828151811061036157fe5b6020026020010151610a92565b600284828151811061037c57fe5b6020908102919091018101515182546001808201855560009485529290932090920180546001600160a01b0319166001600160a01b039093169290921790915501610349565b5080156103d5576000805461ff00191690555b505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104225760405162461bcd60e51b81526004016102f290611280565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f94df8c3a8087dce110e5fbc5acf380c83c94bbd31b2c8ed4c08e1396a696e1a890610474908390611037565b60405180910390a150565b60025460609067ffffffffffffffff8111801561049b57600080fd5b506040519080825280602002602001820160405280156104d557816020015b6104c2610d64565b8152602001906001900390816104ba5790505b50905060005b6002548110156102ab576000600282815481106104f457fe5b60009182526020808320909101546040805180820182526001600160a01b03928316808252808652600180865295839020835160a081018552815460ff8082161515835261010082049097168289015292985092969587019592949093850192600160a81b909204169081111561056757fe5b600181111561057257fe5b81529054600160b01b810462ffffff166020830152600160c81b900463ffffffff16604090910152905283518490849081106105aa57fe5b6020908102919091010152506001016104db565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461062a5760405162461bcd60e51b81526004016102f290611280565b600061063c6080830160608401610fb6565b600181111561064757fe5b14156106655760405162461bcd60e51b81526004016102f290611249565b6000600160006106786020850185610e7b565b6001600160a01b03168152602081019190915260400160002054600160a81b900460ff1660018111156106a757fe5b14156106ef5760026106bc6020830183610e7b565b81546001810183556000928352602090922090910180546001600160a01b0319166001600160a01b039092169190911790555b61070661070136839003830183610fec565b610a92565b50565b6001600160a01b038082166000908152600160205260409020546101009004165b919050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107775760405162461bcd60e51b81526004016102f290611280565b6001600160a01b039091166000908152600160205260409020805463ffffffff909216600160c81b0263ffffffff60c81b19909216919091179055565b600281815481106107c157fe5b6000918252602090912001546001600160a01b0316905081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108235760405162461bcd60e51b81526004016102f290611280565b60006002828154811061083257fe5b60009182526020808320909101546001600160a01b03908116808452600190925260409092205490925060ff8116916101009091041681156109705760008054604051636eb1769f60e11b81526001600160a01b038085169263dd62ed3e926108aa926201000090920490911690889060040161104b565b60206040518083038186803b1580156108c257600080fd5b505afa1580156108d6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108fa919061101f565b9050801561096e5760008054604051633ef1078360e01b8152620100009091046001600160a01b031691633ef107839161093b918691899190600401611199565b600060405180830381600087803b15801561095557600080fd5b505af1158015610969573d6000803e3d6000fd5b505050505b505b6001600160a01b038316600090815260016020526040902080546001600160e81b03191690556002805460001981019081106109a857fe5b600091825260209091200154600280546001600160a01b0390921691869081106109ce57fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506002805480610a0757fe5b6001900381819060005260206000200160006101000a8154906001600160a01b0302191690559055826001600160a01b03167f02826f62d88a4d9f1978eb9c06f8663f642d032908e65a915d5898f3585421c06000604051610a6991906111bd565b60405180910390a250505050565b6000546201000090046001600160a01b031681565b303b1590565b60208181015182516001600160a01b0390811660009081526001808552604091829020845181549686015160ff1990971690151517610100600160a81b0319166101009690941695909502929092178085559083015192939291839160ff60a81b191690600160a81b908490811115610b0757fe5b02179055506060820151815460809093015163ffffffff16600160c81b0263ffffffff60c81b1962ffffff909216600160b01b0262ffffff60b01b19909416939093171691909117905560208101515115610d1457600081600001516001600160a01b031663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610b9b57600080fd5b505afa158015610baf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bd39190610e9e565b90508160200151602001516001600160a01b0316816001600160a01b031614610c0e5760405162461bcd60e51b81526004016102f290611220565b600080548351604051636eb1769f60e11b81526001600160a01b038086169363dd62ed3e93610c4b9362010000909204909216919060040161104b565b60206040518083038186803b158015610c6357600080fd5b505afa158015610c77573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c9b919061101f565b905080610d11576000548351604051633ef1078360e01b8152620100009092046001600160a01b031691633ef1078391610cde9186919060001990600401611199565b600060405180830381600087803b158015610cf857600080fd5b505af1158015610d0c573d6000803e3d6000fd5b505050505b50505b80600001516001600160a01b03167f02826f62d88a4d9f1978eb9c06f8663f642d032908e65a915d5898f3585421c0826020015160400151604051610d5991906111bd565b60405180910390a250565b604051806040016040528060006001600160a01b03168152602001610d87610d8c565b905290565b6040805160a0810182526000808252602082018190529091820190815260006020820181905260409091015290565b8035610dc6816112da565b92915050565b600081830360c0811215610dde578182fd5b610de860406112a8565b91508235610df5816112da565b825260a0601f1982011215610e0957600080fd5b50610e1460a06112a8565b6020830135610e22816112ef565b81526040830135610e32816112da565b60208201526060830135610e45816112fd565b60408201526080830135610e588161130a565b606082015260a0830135610e6b8161131b565b6080820152602082015292915050565b600060208284031215610e8c578081fd5b8135610e97816112da565b9392505050565b600060208284031215610eaf578081fd5b8151610e97816112da565b60008060408385031215610ecc578081fd5b823567ffffffffffffffff80821115610ee3578283fd5b818501915085601f830112610ef6578283fd5b813581811115610f04578384fd5b60209150610f1582838302016112a8565b8181528281019084840160c0808502870186018b1015610f33578788fd5b8796505b84871015610f5f57610f498b83610dcc565b8452600196909601959285019290810190610f37565b5050809650505050610f7386828701610dbb565b925050509250929050565b60008060408385031215610f90578182fd5b8235610f9b816112da565b91506020830135610fab8161131b565b809150509250929050565b600060208284031215610fc7578081fd5b813560028110610e97578182fd5b600060c08284031215610fe6578081fd5b50919050565b600060c08284031215610ffd578081fd5b610e978383610dcc565b600060208284031215611018578081fd5b5035919050565b600060208284031215611030578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156110a65783516001600160a01b031683529284019291840191600101611081565b50909695505050505050565b602080825282518282018190526000919060409081850190868401855b8281101561114557815180516001600160a01b039081168652908701518051151588870152808801519091168686015285810151606061110e826112cf565b8782015282015162ffffff166080808801919091529091015163ffffffff1660a08601525060c090930192908501906001016110cf565b5091979650505050505050565b85151581526001600160a01b038516602082015260a08101611173856112cf565b604083015262ffffff8416606083015263ffffffff831660808301529695505050505050565b6001600160a01b039384168152919092166020820152604081019190915260600190565b602081016111ca836112cf565b825292915050565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252600f908201526e24b731b7b93932b1ba103a37b5b2b760891b604082015260600190565b6020808252601f908201527f5573652072656d6f7665496e7374616e6365282920666f722072656d6f766500604082015260600190565b6020808252600e908201526d139bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b60405181810167ffffffffffffffff811182821017156112c757600080fd5b604052919050565b806002811061072a57fe5b6001600160a01b038116811461070657600080fd5b801515811461070657600080fd5b6002811061070657600080fd5b62ffffff8116811461070657600080fd5b63ffffffff8116811461070657600080fdfea26469706673582212207c46c875176b62100d16a46c273e615cd9eb5336dbcd238b33b227f39ff9106564736f6c634300060c0033";
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
