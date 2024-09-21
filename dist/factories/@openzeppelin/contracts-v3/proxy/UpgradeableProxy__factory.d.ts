import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../../../../common";
import type { UpgradeableProxy, UpgradeableProxyInterface } from "../../../../@openzeppelin/contracts-v3/proxy/UpgradeableProxy";
type UpgradeableProxyConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class UpgradeableProxy__factory extends ContractFactory {
    constructor(...args: UpgradeableProxyConstructorParams);
    getDeployTransaction(_logic: AddressLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_logic: AddressLike, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<UpgradeableProxy & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): UpgradeableProxy__factory;
    static readonly bytecode = "0x60806040526040516103123803806103128339818101604052604081101561002657600080fd5b81516020830180516040519294929383019291908464010000000082111561004d57600080fd5b90830190602082018581111561006257600080fd5b825164010000000081118282018810171561007c57600080fd5b82525081516020918201929091019080838360005b838110156100a9578181015183820152602001610091565b50505050905090810190601f1680156100d65780820380516001836020036101000a031916815260200191505b50604052506100e3915050565b6100ec826101ab565b8051156101a4576000826001600160a01b0316826040518082805190602001908083835b6020831061012f5780518252601f199092019160209182019101610110565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461018f576040519150601f19603f3d011682016040523d82523d6000602084013e610194565b606091505b50509050806101a257600080fd5b505b5050610223565b6101be8161021d60201b6100271760201c565b6101f95760405162461bcd60e51b81526004018080602001828103825260368152602001806102dc6036913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b3b151590565b60ab806102316000396000f3fe608060405236601057600e6013565b005b600e5b60196025565b60256021602d565b6052565b565b3b151590565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b3660008037600080366000845af43d6000803e8080156070573d6000f35b3d6000fdfea2646970667358221220621b7042bfb847b4073a3c58bdbea5295ce2e761b4e2307ca010caaac996d80c64736f6c634300060c00335570677261646561626c6550726f78793a206e657720696d706c656d656e746174696f6e206973206e6f74206120636f6e7472616374";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_logic";
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
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): UpgradeableProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): UpgradeableProxy;
}
export {};
