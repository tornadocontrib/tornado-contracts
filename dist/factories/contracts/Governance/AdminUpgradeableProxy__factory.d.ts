import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../../../common";
import type { AdminUpgradeableProxy, AdminUpgradeableProxyInterface } from "../../../contracts/Governance/AdminUpgradeableProxy";
type AdminUpgradeableProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AdminUpgradeableProxy__factory extends ContractFactory {
    constructor(...args: AdminUpgradeableProxyConstructorParams);
    getDeployTransaction(_logic: AddressLike, _admin: AddressLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_logic: AddressLike, _admin: AddressLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<AdminUpgradeableProxy & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AdminUpgradeableProxy__factory;
    static readonly bytecode = "0x60806040526040516108403803806108408339818101604052606081101561002657600080fd5b8151602083015160408085018051915193959294830192918464010000000082111561005157600080fd5b90830190602082018581111561006657600080fd5b825164010000000081118282018810171561008057600080fd5b82525081516020918201929091019080838360005b838110156100ad578181015183820152602001610095565b50505050905090810190601f1680156100da5780820380516001836020036101000a031916815260200191505b50604052508491508390508282816100f1826101c5565b8051156101a9576000826001600160a01b0316826040518082805190602001908083835b602083106101345780518252601f199092019160209182019101610115565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610194576040519150601f19603f3d011682016040523d82523d6000602084013e610199565b606091505b50509050806101a757600080fd5b505b506101b19050565b6101ba82610237565b505050505050610261565b6101d88161025b60201b6103b41760201c565b6102135760405162461bcd60e51b815260040180806020018281038252603681526020018061080a6036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b3b151590565b61059a806102706000396000f3fe60806040526004361061004e5760003560e01c80633659cfe6146100655780634f1ef286146100985780635c60da1b146101185780638f28397014610149578063f851a4401461017c5761005d565b3661005d5761005b610191565b005b61005b610191565b34801561007157600080fd5b5061005b6004803603602081101561008857600080fd5b50356001600160a01b03166101ab565b61005b600480360360408110156100ae57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100d957600080fd5b8201836020820111156100eb57600080fd5b8035906020019184600183028401116401000000008311171561010d57600080fd5b5090925090506101e5565b34801561012457600080fd5b5061012d610292565b604080516001600160a01b039092168252519081900360200190f35b34801561015557600080fd5b5061005b6004803603602081101561016c57600080fd5b50356001600160a01b03166102cf565b34801561018857600080fd5b5061012d610389565b6101996101a9565b6101a96101a46103ba565b6103df565b565b6101b3610403565b6001600160a01b0316336001600160a01b031614156101da576101d581610428565b6101e2565b6101e2610191565b50565b6101ed610403565b6001600160a01b0316336001600160a01b031614156102855761020f83610428565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d806000811461026c576040519150601f19603f3d011682016040523d82523d6000602084013e610271565b606091505b505090508061027f57600080fd5b5061028d565b61028d610191565b505050565b600061029c610403565b6001600160a01b0316336001600160a01b031614156102c4576102bd6103ba565b90506102cc565b6102cc610191565b90565b6102d7610403565b6001600160a01b0316336001600160a01b031614156101da576001600160a01b0381166103355760405162461bcd60e51b815260040180806020018281038252603a8152602001806104f5603a913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61035e610403565b604080516001600160a01b03928316815291841660208301528051918290030190a16101d581610468565b6000610393610403565b6001600160a01b0316336001600160a01b031614156102c4576102bd610403565b3b151590565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156103fe573d6000f35b3d6000fd5b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b6104318161048c565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b610495816103b4565b6104d05760405162461bcd60e51b815260040180806020018281038252603681526020018061052f6036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5556fe5472616e73706172656e745570677261646561626c6550726f78793a206e65772061646d696e20697320746865207a65726f20616464726573735570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374a26469706673582212209aae7d6e1518efadb27a8b88e62a8b538554142f2ef2569604a26ad39c61157464736f6c634300060c00335570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_logic";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_admin";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly stateMutability: "payable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "previousAdmin";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "AdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }];
        readonly name: "Upgraded";
        readonly type: "event";
    }, {
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly inputs: readonly [];
        readonly name: "admin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newAdmin";
            readonly type: "address";
        }];
        readonly name: "changeAdmin";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "implementation";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "upgradeToAndCall";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): AdminUpgradeableProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): AdminUpgradeableProxy;
}
export {};
