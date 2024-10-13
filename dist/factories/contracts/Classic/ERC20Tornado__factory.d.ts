import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { ERC20Tornado, ERC20TornadoInterface } from "../../../contracts/Classic/ERC20Tornado";
type ERC20TornadoConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20Tornado__factory extends ContractFactory {
    constructor(...args: ERC20TornadoConstructorParams);
    getDeployTransaction(_verifier: AddressLike, _hasher: AddressLike, _denomination: BigNumberish, _merkleTreeHeight: BigNumberish, _token: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_verifier: AddressLike, _hasher: AddressLike, _denomination: BigNumberish, _merkleTreeHeight: BigNumberish, _token: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ERC20Tornado & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC20Tornado__factory;
    static readonly bytecode = "0x610120604052600380546001600160401b031916905534801561002157600080fd5b50604051611dc5380380611dc583398101604081905261004091610420565b84848484808360008263ffffffff16116100ad5760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208263ffffffff16106101035760405162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e203332000060448201526064016100a4565b63ffffffff821660a0526001600160a01b0381166080527f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c60005b8363ffffffff168163ffffffff16101561018b5763ffffffff8116600090815260016020908152604080832085905590829052902082905561018183838061023b565b915060010161013e565b506000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b5550506001600455816102195760405162461bcd60e51b815260206004820152602560248201527f64656e6f6d696e6174696f6e2073686f756c6420626520677265617465722074604482015264068616e20360dc1b60648201526084016100a4565b506001600160a01b0392831660c05260e052501661010052506104b892505050565b6000600080516020611da5833981519152831061029a5760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6460448201526064016100a4565b600080516020611da583398151915282106103015760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b60648201526084016100a4565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610350573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103749190610494565b9092509050600080516020611da583398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156103d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fd9190610494565b509695505050505050565b6001600160a01b038116811461041d57600080fd5b50565b600080600080600060a0868803121561043857600080fd5b855161044381610408565b602087015190955061045481610408565b60408701516060880151919550935063ffffffff8116811461047557600080fd5b608087015190925061048681610408565b809150509295509295909350565b600080604083850312156104a757600080fd5b505080516020909101519092909150565b60805160a05160c05160e05161010051611863610542600039600081816104ca01528181610cfa01528181610d34015261108e0152600081816102bb0152818161056f01528181610ccc01526110b20152600081816101a601526106d801526000818161022201528181610e150152610eb70152600081816104690152610f4f01526118636000f3fe6080604052600436106101355760003560e01c8063b214faa5116100ab578063e82955881161006f578063e8295588146103f6578063ec73295914610423578063ed33639f14610457578063f178e47c1461048b578063fc0c546a146104b8578063fc7e9c6f146104ec57600080fd5b8063b214faa514610347578063ba70f7571461035a578063c2b40ae414610384578063cd87a3b4146103b1578063e5285dcc146103c657600080fd5b80636d9833e3116100fd5780636d9833e314610259578063839df945146102795780638bca6d16146102a95780638ea3099e146102dd57806390eeb02b146102fd5780639fa12d0b1461031a57600080fd5b806317cc915c1461013a57806321a0adb61461017f5780632b7ac3f314610194578063414a37ba146101e05780634ecf518b14610210575b600080fd5b34801561014657600080fd5b5061016a61015536600461131d565b60056020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b61019261018d36600461135e565b610511565b005b3480156101a057600080fd5b506101c87f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610176565b3480156101ec57600080fd5b5061020260008051602061180e83398151915281565b604051908152602001610176565b34801561021c57600080fd5b506102447f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff9091168152602001610176565b34801561026557600080fd5b5061016a61027436600461131d565b61081c565b34801561028557600080fd5b5061016a61029436600461131d565b60066020526000908152604090205460ff1681565b3480156102b557600080fd5b506102027f000000000000000000000000000000000000000000000000000000000000000081565b3480156102e957600080fd5b506102026102f8366004611417565b61089a565b34801561030957600080fd5b506003546102449063ffffffff1681565b34801561032657600080fd5b5061033a61033536600461144c565b610a67565b60405161017691906114c3565b61019261035536600461131d565b610b23565b34801561036657600080fd5b5060035463ffffffff16600090815260026020526040902054610202565b34801561039057600080fd5b5061020261039f36600461131d565b60026020526000908152604090205481565b3480156103bd57600080fd5b50610244601e81565b3480156103d257600080fd5b5061016a6103e136600461131d565b60009081526005602052604090205460ff1690565b34801561040257600080fd5b5061020261041136600461131d565b60016020526000908152604090205481565b34801561042f57600080fd5b506102027f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b34801561046357600080fd5b506101c87f000000000000000000000000000000000000000000000000000000000000000081565b34801561049757600080fd5b506102026104a636600461131d565b60006020819052908152604090205481565b3480156104c457600080fd5b506101c87f000000000000000000000000000000000000000000000000000000000000000081565b3480156104f857600080fd5b5060035461024490640100000000900463ffffffff1681565b6002600454036105685760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b60026004557f00000000000000000000000000000000000000000000000000000000000000008211156105dd5760405162461bcd60e51b815260206004820152601a60248201527f4665652065786365656473207472616e736665722076616c7565000000000000604482015260640161055f565b60008581526005602052604090205460ff161561063c5760405162461bcd60e51b815260206004820152601f60248201527f546865206e6f746520686173206265656e20616c7265616479207370656e7400604482015260640161055f565b6106458661081c565b6106915760405162461bcd60e51b815260206004820152601c60248201527f43616e6e6f742066696e6420796f7572206d65726b6c6520726f6f7400000000604482015260640161055f565b6040805160c081018252878152602081018790526001600160a01b038681168284015285811660608301526080820185905260a08201849052915163695ef6f960e01b81527f00000000000000000000000000000000000000000000000000000000000000009092169163695ef6f991610711918c918c91600401611508565b6020604051808303816000875af1158015610730573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107549190611568565b6107995760405162461bcd60e51b815260206004820152601660248201527524b73b30b634b2103bb4ba34323930bb90383937b7b360511b604482015260640161055f565b6000858152600560205260409020805460ff191660011790556107be84848484610c5a565b604080516001600160a01b03868116825260208201889052918101849052908416907fe9e508bad6d4c3227e881ca19068f099da81b5164dd6d62b2eaf1e8bc6c349319060600160405180910390a250506001600455505050505050565b600081810361082d57506000919050565b60035463ffffffff16805b63ffffffff8116600090815260026020526040902054840361085e575060019392505050565b8063ffffffff166000036108705750601e5b8061087a816115a7565b9150508163ffffffff168163ffffffff1603610838575060009392505050565b600060008051602061180e83398151915283106108f95760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c64604482015260640161055f565b60008051602061180e83398151915282106109605760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b606482015260840161055f565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156109af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d391906115c7565b909250905060008051602061180e83398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610a38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5c91906115c7565b509695505050505050565b60608167ffffffffffffffff811115610a8257610a82611601565b604051908082528060200260200182016040528015610aab578160200160208202803683370190505b50905060005b82811015610b1c57610aea848483818110610ace57610ace611617565b9050602002013560009081526005602052604090205460ff1690565b15610b14576001828281518110610b0357610b03611617565b911515602092830291909101909101525b600101610ab1565b5092915050565b600260045403610b755760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015260640161055f565b600260045560008181526006602052604090205460ff1615610be35760405162461bcd60e51b815260206004820152602160248201527f54686520636f6d6d69746d656e7420686173206265656e207375626d697474656044820152601960fa1b606482015260840161055f565b6000610bee82610dfc565b6000838152600660205260409020805460ff191660011790559050610c1161101a565b6040805163ffffffff8316815242602082015283917fa945e51eec50ab98c161376f0db4cf2aeba3ec92755fe2fcd388bdbbb80ff196910160405180910390a250506001600455565b803414610cc25760405162461bcd60e51b815260206004820152603060248201527f496e636f727265637420726566756e6420616d6f756e7420726563656976656460448201526f08189e481d1a194818dbdb9d1c9858dd60821b606482015260840161055f565b610d2184610cf0847f000000000000000000000000000000000000000000000000000000000000000061162d565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691906110d8565b8115610d5b57610d5b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684846110d8565b8015610df6576000846001600160a01b03168260405160006040518083038185875af1925050503d8060008114610dae576040519150601f19603f3d011682016040523d82523d6000602084013e610db3565b606091505b5050905080610df4576040516001600160a01b0385169083156108fc029084906000818181858888f19350505050158015610df2573d6000803e3d6000fd5b505b505b50505050565b600354600090640100000000900463ffffffff16610e3b7f0000000000000000000000000000000000000000000000000000000000000000600261175a565b63ffffffff168163ffffffff1603610eae5760405162461bcd60e51b815260206004820152603060248201527f4d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c656160448201526f1d995cc818d85b88189948185919195960821b606482015260840161055f565b8083600080805b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff161015610f8c57610ef4600286611772565b63ffffffff16600003610f2e5763ffffffff8116600090815260016020908152604080832054918390529091208590558493509150610f4a565b63ffffffff811660009081526020819052604090205492508391505b610f757f0000000000000000000000000000000000000000000000000000000000000000848461089a565b9350610f8260028661179a565b9450600101610eb5565b50600354600090601e90610fa79063ffffffff1660016117c2565b610fb19190611772565b6003805463ffffffff191663ffffffff831690811790915560009081526002602052604090208590559050610fe78660016117c2565b6003805463ffffffff929092166401000000000267ffffffff000000001990921691909117905550939695505050505050565b34156110815760405162461bcd60e51b815260206004820152603060248201527f4554482076616c756520697320737570706f73656420746f206265203020666f60448201526f7220455243323020696e7374616e636560801b606482015260840161055f565b6110d66001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001633307f00000000000000000000000000000000000000000000000000000000000000006111f1565b565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283929087169161113491906117de565b6000604051808303816000865af19150503d8060008114611171576040519150601f19603f3d011682016040523d82523d6000602084013e611176565b606091505b50915091508161118857805181602001fd5b805115806111a55750808060200190518101906111a59190611568565b610df45760405162461bcd60e51b815260206004820152601e60248201527f5361666545524332303a20736166655472616e73666572206661696c65640000604482015260640161055f565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283929088169161125591906117de565b6000604051808303816000865af19150503d8060008114611292576040519150601f19603f3d011682016040523d82523d6000602084013e611297565b606091505b5091509150816112a957805181602001fd5b805115806112c65750808060200190518101906112c69190611568565b610df25760405162461bcd60e51b815260206004820152602260248201527f5361666545524332303a20736166655472616e7366657246726f6d206661696c604482015261195960f21b606482015260840161055f565b60006020828403121561132f57600080fd5b5035919050565b6001600160a01b038116811461134b57600080fd5b50565b803561135981611336565b919050565b60008060008060008060008060e0898b03121561137a57600080fd5b883567ffffffffffffffff81111561139157600080fd5b8901601f81018b136113a257600080fd5b803567ffffffffffffffff8111156113b957600080fd5b8b60208284010111156113cb57600080fd5b6020918201995097508901359550604089013594506113ec60608a0161134e565b93506113fa60808a0161134e565b979a969950949793969295929450505060a08201359160c0013590565b60008060006060848603121561142c57600080fd5b833561143781611336565b95602085013595506040909401359392505050565b6000806020838503121561145f57600080fd5b823567ffffffffffffffff81111561147657600080fd5b8301601f8101851361148757600080fd5b803567ffffffffffffffff81111561149e57600080fd5b8560208260051b84010111156114b357600080fd5b6020919091019590945092505050565b602080825282518282018190526000918401906040840190835b818110156114fd57835115158352602093840193909201916001016114dd565b509095945050505050565b60e081528260e08201528284610100830137600061010084830101526000610100601f19601f8601168301019050602082018360005b600681101561155d57815183526020928301929091019060010161153e565b505050949350505050565b60006020828403121561157a57600080fd5b8151801515811461158a57600080fd5b9392505050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff8216806115bd576115bd611591565b6000190192915050565b600080604083850312156115da57600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b8181038181111561164057611640611591565b92915050565b6001815b60018411156116815780850481111561166557611665611591565b600184161561167357908102905b60019390931c92800261164a565b935093915050565b60008261169857506001611640565b816116a557506000611640565b81600181146116bb57600281146116c5576116f6565b6001915050611640565b60ff8411156116d6576116d6611591565b6001841b915063ffffffff8211156116f0576116f0611591565b50611640565b5060208310610133831016604e8410600b841016171561172d575081810a63ffffffff81111561172857611728611591565b611640565b61173c63ffffffff8484611646565b8063ffffffff0482111561175257611752611591565b029392505050565b600061158a63ffffffff841663ffffffff8416611689565b600063ffffffff831680611788576117886115eb565b8063ffffffff84160691505092915050565b600063ffffffff8316806117b0576117b06115eb565b8063ffffffff84160491505092915050565b63ffffffff818116838216019081111561164057611640611591565b6000825160005b818110156117ff57602081860181015185830152016117e5565b50600092019182525091905056fe30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001a2646970667358221220b02ff0aa2482e2d5c96dc808653f03833fb36ec1e6b15aae7d79ca885ffda98164736f6c634300081c003330644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IVerifier";
            readonly name: "_verifier";
            readonly type: "address";
        }, {
            readonly internalType: "contract IHasher";
            readonly name: "_hasher";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_denomination";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "_merkleTreeHeight";
            readonly type: "uint32";
        }, {
            readonly internalType: "contract IERC20";
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
            readonly internalType: "uint32";
            readonly name: "leafIndex";
            readonly type: "uint32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "Deposit";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "nullifierHash";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }];
        readonly name: "Withdrawal";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "FIELD_SIZE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROOT_HISTORY_SIZE";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZERO_VALUE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "commitments";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "currentRootIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
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
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_commitment";
            readonly type: "bytes32";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "filledSubtrees";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLastRoot";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IHasher";
            readonly name: "_hasher";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_left";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_right";
            readonly type: "bytes32";
        }];
        readonly name: "hashLeftRight";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hasher";
        readonly outputs: readonly [{
            readonly internalType: "contract IHasher";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_root";
            readonly type: "bytes32";
        }];
        readonly name: "isKnownRoot";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_nullifierHash";
            readonly type: "bytes32";
        }];
        readonly name: "isSpent";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "_nullifierHashes";
            readonly type: "bytes32[]";
        }];
        readonly name: "isSpentArray";
        readonly outputs: readonly [{
            readonly internalType: "bool[]";
            readonly name: "spent";
            readonly type: "bool[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "levels";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nextIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "nullifierHashes";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "roots";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "verifier";
        readonly outputs: readonly [{
            readonly internalType: "contract IVerifier";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_proof";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_root";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_nullifierHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address payable";
            readonly name: "_recipient";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_relayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_refund";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "zeros";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ERC20TornadoInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC20Tornado;
}
export {};
