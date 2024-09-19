import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../../../../common";
import type { TestnetAdminProxy, TestnetAdminProxyInterface } from "../../../../contracts/Governance/Testnet/TestnetAdminProxy";
type TestnetAdminProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestnetAdminProxy__factory extends ContractFactory {
    constructor(...args: TestnetAdminProxyConstructorParams);
    getDeployTransaction(_logic: AddressLike, _admin: AddressLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_logic: AddressLike, _admin: AddressLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<TestnetAdminProxy & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TestnetAdminProxy__factory;
    static readonly bytecode = "0x608060405260405162000e6738038062000e67833981810160405260608110156200002957600080fd5b815160208301516040808501805191519395929483019291846401000000008211156200005557600080fd5b9083019060208201858111156200006b57600080fd5b82516401000000008111828201881017156200008657600080fd5b82525081516020918201929091019080838360005b83811015620000b55781810151838201526020016200009b565b50505050905090810190601f168015620000e35780820380516001836020036101000a031916815260200191505b5060405250849150839050828282828281620000ff82620001f6565b805115620001bd576000826001600160a01b0316826040518082805190602001908083835b60208310620001455780518252601f19909201916020918201910162000124565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114620001a7576040519150601f19603f3d011682016040523d82523d6000602084013e620001ac565b606091505b5050905080620001bb57600080fd5b505b50620001c69050565b620001d1826200026d565b505050505050620001ed336200029160201b620008ab1760201c565b50505062000308565b6200020c81620002bd60201b620008d51760201c565b620002495760405162461bcd60e51b815260040180806020018281038252603681526020018062000e316036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b806200029c620002c3565b80546001600160a01b0319166001600160a01b039290921691909117905550565b3b151590565b604080517fb4d03667d60278cc15e9a68fa7679dc39ebe71350c4566a2c23c26580da4e0b3602080830191909152825180830382018152918301909252805191012090565b610b1980620003186000396000f3fe6080604052600436106100955760003560e01c80635c60da1b116100595780635c60da1b146102fe5780638f2839701461032f578063a18a186b14610362578063a6f9dae114610377578063f851a440146103aa576100a4565b806323711ab1146100ac57806323c735f1146101625780632e44e0e0146101955780633659cfe61461024b5780634f1ef2861461027e576100a4565b366100a4576100a26103bf565b005b6100a26103bf565b6100a2600480360360408110156100c257600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156100ed57600080fd5b8201836020820111156100ff57600080fd5b8035906020019184600183028401116401000000008311171561012157600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506103d9945050505050565b34801561016e57600080fd5b506100a26004803603602081101561018557600080fd5b50356001600160a01b03166104e7565b6100a2600480360360408110156101ab57600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156101d657600080fd5b8201836020820111156101e857600080fd5b8035906020019184600183028401116401000000008311171561020a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610546945050505050565b34801561025757600080fd5b506100a26004803603602081101561026e57600080fd5b50356001600160a01b031661063a565b6100a26004803603604081101561029457600080fd5b6001600160a01b0382351691908101906040810160208201356401000000008111156102bf57600080fd5b8201836020820111156102d157600080fd5b803590602001918460018302840111640100000000831117156102f357600080fd5b509092509050610671565b34801561030a57600080fd5b5061031361071e565b604080516001600160a01b039092168252519081900360200190f35b34801561033b57600080fd5b506100a26004803603602081101561035257600080fd5b50356001600160a01b031661075b565b34801561036e57600080fd5b50610313610815565b34801561038357600080fd5b506100a26004803603602081101561039a57600080fd5b50356001600160a01b0316610824565b3480156103b657600080fd5b50610313610880565b6103c76103d7565b6103d76103d26108db565b610900565b565b336103e2610924565b6001600160a01b03161461042c576040805162461bcd60e51b815260206004820152600c60248201526b2737ba1030b71037bbb732b960a11b604482015290519081900360640190fd5b60006060836001600160a01b0316836040518082805190602001908083835b6020831061046a5780518252601f19909201916020918201910161044b565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146104ca576040519150601f19603f3d011682016040523d82523d6000602084013e6104cf565b606091505b5091509150816104e157805181602001fd5b50505050565b336104f0610924565b6001600160a01b03161461053a576040805162461bcd60e51b815260206004820152600c60248201526b2737ba1030b71037bbb732b960a11b604482015290519081900360640190fd5b6105438161093d565b50565b3361054f610924565b6001600160a01b031614610599576040805162461bcd60e51b815260206004820152600c60248201526b2737ba1030b71037bbb732b960a11b604482015290519081900360640190fd5b60006060836001600160a01b031634846040518082805190602001908083835b602083106105d85780518252601f1990920191602091820191016105b9565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146104ca576040519150601f19603f3d011682016040523d82523d6000602084013e6104cf565b61064261097d565b6001600160a01b0316336001600160a01b03161415610669576106648161093d565b610543565b6105436103bf565b61067961097d565b6001600160a01b0316336001600160a01b031614156107115761069b8361093d565b6000836001600160a01b031683836040518083838082843760405192019450600093509091505080830381855af49150503d80600081146106f8576040519150601f19603f3d011682016040523d82523d6000602084013e6106fd565b606091505b505090508061070b57600080fd5b50610719565b6107196103bf565b505050565b600061072861097d565b6001600160a01b0316336001600160a01b03161415610750576107496108db565b9050610758565b6107586103bf565b90565b61076361097d565b6001600160a01b0316336001600160a01b03161415610669576001600160a01b0381166107c15760405162461bcd60e51b815260040180806020018281038252603a815260200180610a74603a913960400191505060405180910390fd5b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6107ea61097d565b604080516001600160a01b03928316815291841660208301528051918290030190a1610664816109a2565b600061081f610924565b905090565b3361082d610924565b6001600160a01b031614610877576040805162461bcd60e51b815260206004820152600c60248201526b2737ba1030b71037bbb732b960a11b604482015290519081900360640190fd5b610543816108ab565b600061088a61097d565b6001600160a01b0316336001600160a01b031614156107505761074961097d565b806108b46109c6565b80546001600160a01b0319166001600160a01b039290921691909117905550565b3b151590565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e80801561091f573d6000f35b3d6000fd5b600061092e6109c6565b546001600160a01b0316919050565b61094681610a0b565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035490565b7fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d610355565b604080517fb4d03667d60278cc15e9a68fa7679dc39ebe71350c4566a2c23c26580da4e0b3602080830191909152825180830382018152918301909252805191012090565b610a14816108d5565b610a4f5760405162461bcd60e51b8152600401808060200182810382526036815260200180610aae6036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5556fe5472616e73706172656e745570677261646561626c6550726f78793a206e65772061646d696e20697320746865207a65726f20616464726573735570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374a264697066735822122001f07e10d1eeadbd61da070e50227b529a3ec4b8f2e780a0e6bc1dc6028ba95764736f6c634300060c00335570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374";
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
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "callToOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "changeOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "delegateToOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getCurrentOwner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
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
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeToOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): TestnetAdminProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): TestnetAdminProxy;
}
export {};
