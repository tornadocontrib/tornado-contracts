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
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051806040016040528060078152602001664441494d6f636b60c81b815250604051806040016040528060048152602001634441494d60e01b815250816003908161005d9190610111565b50600461006a8282610111565b5050506101cf565b634e487b7160e01b600052604160045260246000fd5b600181811c9082168061009c57607f821691505b6020821081036100bc57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561010c57806000526020600020601f840160051c810160208510156100e95750805b601f840160051c820191505b8181101561010957600081556001016100f5565b50505b505050565b81516001600160401b0381111561012a5761012a610072565b61013e816101388454610088565b846100c2565b6020601f821160018114610172576000831561015a5750848201515b600019600385901b1c1916600184901b178455610109565b600084815260208120601f198516915b828110156101a25787850151825560209485019460019092019101610182565b50848210156101c05786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b610785806101de6000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c806340c10f191161006657806340c10f191461011857806370a082311461012d57806395d89b4114610156578063a9059cbb1461015e578063dd62ed3e1461017157600080fd5b806306fdde03146100a3578063095ea7b3146100c157806318160ddd146100e457806323b872dd146100f6578063313ce56714610109575b600080fd5b6100ab6101aa565b6040516100b891906105ce565b60405180910390f35b6100d46100cf366004610638565b61023c565b60405190151581526020016100b8565b6002545b6040519081526020016100b8565b6100d4610104366004610662565b610256565b604051601281526020016100b8565b61012b610126366004610638565b61027a565b005b6100e861013b36600461069f565b6001600160a01b031660009081526020819052604090205490565b6100ab610288565b6100d461016c366004610638565b610297565b6100e861017f3660046106c1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101b9906106f4565b80601f01602080910402602001604051908101604052809291908181526020018280546101e5906106f4565b80156102325780601f1061020757610100808354040283529160200191610232565b820191906000526020600020905b81548152906001019060200180831161021557829003601f168201915b5050505050905090565b60003361024a8185856102a5565b60019150505b92915050565b6000336102648582856102b7565b61026f85858561033a565b506001949350505050565b6102848282610399565b5050565b6060600480546101b9906106f4565b60003361024a81858561033a565b6102b283838360016103cf565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610334578181101561032557604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064015b60405180910390fd5b610334848484840360006103cf565b50505050565b6001600160a01b03831661036457604051634b637e8f60e11b81526000600482015260240161031c565b6001600160a01b03821661038e5760405163ec442f0560e01b81526000600482015260240161031c565b6102b28383836104a4565b6001600160a01b0382166103c35760405163ec442f0560e01b81526000600482015260240161031c565b610284600083836104a4565b6001600160a01b0384166103f95760405163e602df0560e01b81526000600482015260240161031c565b6001600160a01b03831661042357604051634a1406b160e11b81526000600482015260240161031c565b6001600160a01b038085166000908152600160209081526040808320938716835292905220829055801561033457826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161049691815260200190565b60405180910390a350505050565b6001600160a01b0383166104cf5780600260008282546104c4919061072e565b909155506105419050565b6001600160a01b038316600090815260208190526040902054818110156105225760405163391434e360e21b81526001600160a01b0385166004820152602481018290526044810183905260640161031c565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661055d5760028054829003905561057c565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516105c191815260200190565b60405180910390a3505050565b602081526000825180602084015260005b818110156105fc57602081860181015160408684010152016105df565b506000604082850101526040601f19601f83011684010191505092915050565b80356001600160a01b038116811461063357600080fd5b919050565b6000806040838503121561064b57600080fd5b6106548361061c565b946020939093013593505050565b60008060006060848603121561067757600080fd5b6106808461061c565b925061068e6020850161061c565b929592945050506040919091013590565b6000602082840312156106b157600080fd5b6106ba8261061c565b9392505050565b600080604083850312156106d457600080fd5b6106dd8361061c565b91506106eb6020840161061c565b90509250929050565b600181811c9082168061070857607f821691505b60208210810361072857634e487b7160e01b600052602260045260246000fd5b50919050565b8082018082111561025057634e487b7160e01b600052601160045260246000fdfea2646970667358221220df85cece2633b7b39a7e3c92023521dbd4a76129843a0efc262b8e208f146bdf64736f6c634300081c0033";
    static readonly abi: readonly [{
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
