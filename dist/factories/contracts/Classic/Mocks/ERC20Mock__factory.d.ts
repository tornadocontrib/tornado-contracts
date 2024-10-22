import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { ERC20Mock, ERC20MockInterface } from "../../../../contracts/Classic/Mocks/ERC20Mock";
type ERC20MockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC20Mock__factory extends ContractFactory {
    constructor(...args: ERC20MockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ERC20Mock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ERC20Mock__factory;
    static readonly bytecode = "0x61016060405234801561001157600080fd5b50604051806040016040528060078152602001664441494d6f636b60c81b81525080604051806040016040528060018152602001603160f81b815250604051806040016040528060078152602001664441494d6f636b60c81b815250604051806040016040528060048152602001634441494d60e01b8152508160039081610099919061027a565b5060046100a6828261027a565b506100b691508390506005610161565b610120526100c5816006610161565b61014052815160208084019190912060e052815190820120610100524660a05261015260e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506103aa565b600060208351101561017d5761017683610194565b905061018e565b81610188848261027a565b5060ff90505b92915050565b600080829050601f815111156101c8578260405163305a27a960e01b81526004016101bf9190610338565b60405180910390fd5b80516101d382610386565b179392505050565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061020557607f821691505b60208210810361022557634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561027557806000526020600020601f840160051c810160208510156102525750805b601f840160051c820191505b81811015610272576000815560010161025e565b50505b505050565b81516001600160401b03811115610293576102936101db565b6102a7816102a184546101f1565b8461022b565b6020601f8211600181146102db57600083156102c35750848201515b600019600385901b1c1916600184901b178455610272565b600084815260208120601f198516915b8281101561030b57878501518255602094850194600190920191016102eb565b50848210156103295786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015260005b818110156103665760208186018101516040868401015201610349565b506000604082850101526040601f19601f83011684010191505092915050565b805160208083015191908110156102255760001960209190910360031b1b16919050565b60805160a05160c05160e05161010051610120516101405161101a6104046000396000610804015260006107d701526000610713015260006106eb01526000610646015260006106700152600061069a015261101a6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c806370a082311161009757806395d89b411161006657806395d89b4114610214578063a9059cbb1461021c578063d505accf1461022f578063dd62ed3e1461024257600080fd5b806370a08231146101aa57806379cc6790146101d35780637ecebe00146101e657806384b0196e146101f957600080fd5b8063313ce567116100d3578063313ce5671461016b5780633644e5151461017a57806340c10f191461018257806342966c681461019757600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d61027b565b60405161011a9190610d64565b60405180910390f35b610136610131366004610d9a565b61030d565b604051901515815260200161011a565b6002545b60405190815260200161011a565b610136610166366004610dc4565b610327565b6040516012815260200161011a565b61014a61034b565b610195610190366004610d9a565b61035a565b005b6101956101a5366004610e01565b610368565b61014a6101b8366004610e1a565b6001600160a01b031660009081526020819052604090205490565b6101956101e1366004610d9a565b610375565b61014a6101f4366004610e1a565b61038a565b6102016103a8565b60405161011a9796959493929190610e35565b61010d6103ee565b61013661022a366004610d9a565b6103fd565b61019561023d366004610ecd565b61040b565b61014a610250366004610f40565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461028a90610f73565b80601f01602080910402602001604051908101604052809291908181526020018280546102b690610f73565b80156103035780601f106102d857610100808354040283529160200191610303565b820191906000526020600020905b8154815290600101906020018083116102e657829003601f168201915b5050505050905090565b60003361031b81858561054a565b60019150505b92915050565b60003361033585828561055c565b6103408585856105da565b506001949350505050565b6000610355610639565b905090565b6103648282610764565b5050565b610372338261079a565b50565b61038082338361055c565b610364828261079a565b6001600160a01b038116600090815260076020526040812054610321565b6000606080600080600060606103bc6107d0565b6103c46107fd565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b60606004805461028a90610f73565b60003361031b8185856105da565b834211156104345760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886104818c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006104dc8261082a565b905060006104ec82878787610857565b9050896001600160a01b0316816001600160a01b031614610533576040516325c0072360e11b81526001600160a01b0380831660048301528b16602482015260440161042b565b61053e8a8a8a61054a565b50505050505050505050565b6105578383836001610885565b505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146105d457818110156105c557604051637dc7a0d960e11b81526001600160a01b0384166004820152602481018290526044810183905260640161042b565b6105d484848484036000610885565b50505050565b6001600160a01b03831661060457604051634b637e8f60e11b81526000600482015260240161042b565b6001600160a01b03821661062e5760405163ec442f0560e01b81526000600482015260240161042b565b61055783838361095a565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561069257507f000000000000000000000000000000000000000000000000000000000000000046145b156106bc57507f000000000000000000000000000000000000000000000000000000000000000090565b610355604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6001600160a01b03821661078e5760405163ec442f0560e01b81526000600482015260240161042b565b6103646000838361095a565b6001600160a01b0382166107c457604051634b637e8f60e11b81526000600482015260240161042b565b6103648260008361095a565b60606103557f00000000000000000000000000000000000000000000000000000000000000006005610a84565b60606103557f00000000000000000000000000000000000000000000000000000000000000006006610a84565b6000610321610837610639565b8360405161190160f01b8152600281019290925260228201526042902090565b60008060008061086988888888610b2f565b9250925092506108798282610bfe565b50909695505050505050565b6001600160a01b0384166108af5760405163e602df0560e01b81526000600482015260240161042b565b6001600160a01b0383166108d957604051634a1406b160e11b81526000600482015260240161042b565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156105d457826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161094c91815260200190565b60405180910390a350505050565b6001600160a01b03831661098557806002600082825461097a9190610fad565b909155506109f79050565b6001600160a01b038316600090815260208190526040902054818110156109d85760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161042b565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610a1357600280548290039055610a32565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a7791815260200190565b60405180910390a3505050565b606060ff8314610a9e57610a9783610cb7565b9050610321565b818054610aaa90610f73565b80601f0160208091040260200160405190810160405280929190818152602001828054610ad690610f73565b8015610b235780601f10610af857610100808354040283529160200191610b23565b820191906000526020600020905b815481529060010190602001808311610b0657829003601f168201915b50505050509050610321565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610b6a5750600091506003905082610bf4565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610bbe573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610bea57506000925060019150829050610bf4565b9250600091508190505b9450945094915050565b6000826003811115610c1257610c12610fce565b03610c1b575050565b6001826003811115610c2f57610c2f610fce565b03610c4d5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610c6157610c61610fce565b03610c825760405163fce698f760e01b81526004810182905260240161042b565b6003826003811115610c9657610c96610fce565b03610364576040516335e2f38360e21b81526004810182905260240161042b565b60606000610cc483610cf6565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f81111561032157604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610d4457602081850181015186830182015201610d28565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610d776020830184610d1e565b9392505050565b80356001600160a01b0381168114610d9557600080fd5b919050565b60008060408385031215610dad57600080fd5b610db683610d7e565b946020939093013593505050565b600080600060608486031215610dd957600080fd5b610de284610d7e565b9250610df060208501610d7e565b929592945050506040919091013590565b600060208284031215610e1357600080fd5b5035919050565b600060208284031215610e2c57600080fd5b610d7782610d7e565b60ff60f81b8816815260e060208201526000610e5460e0830189610d1e565b8281036040840152610e668189610d1e565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b81811015610ebc578351835260209384019390920191600101610e9e565b50909b9a5050505050505050505050565b600080600080600080600060e0888a031215610ee857600080fd5b610ef188610d7e565b9650610eff60208901610d7e565b95506040880135945060608801359350608088013560ff81168114610f2357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b60008060408385031215610f5357600080fd5b610f5c83610d7e565b9150610f6a60208401610d7e565b90509250929050565b600181811c90821680610f8757607f821691505b602082108103610fa757634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561032157634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea2646970667358221220e576ea72175cad97303c16106a449691832d2c19ed98a87d7dad19549b0d754564736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "ECDSAInvalidSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "length";
            readonly type: "uint256";
        }];
        readonly name: "ECDSAInvalidSignatureLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "ECDSAInvalidSignatureS";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "allowance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientAllowance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "ERC20InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "approver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidApprover";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "ERC20InvalidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }];
        readonly name: "ERC2612ExpiredSignature";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "signer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "ERC2612InvalidSigner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "currentNonce";
            readonly type: "uint256";
        }];
        readonly name: "InvalidAccountNonce";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidShortString";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "str";
            readonly type: "string";
        }];
        readonly name: "StringTooLong";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [];
        readonly name: "EIP712DomainChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "DOMAIN_SEPARATOR";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "eip712Domain";
        readonly outputs: readonly [{
            readonly internalType: "bytes1";
            readonly name: "fields";
            readonly type: "bytes1";
        }, {
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "version";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "chainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "verifyingContract";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "extensions";
            readonly type: "uint256[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "mint";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ERC20MockInterface;
    static connect(address: string, runner?: ContractRunner | null): ERC20Mock;
}
export {};
