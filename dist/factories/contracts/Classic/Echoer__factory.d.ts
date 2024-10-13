import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { Echoer, EchoerInterface } from "../../../contracts/Classic/Echoer";
type EchoerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Echoer__factory extends ContractFactory {
    constructor(...args: EchoerConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Echoer & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Echoer__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b506101658061001f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063624fbfdc14610030575b600080fd5b61004361003e36600461008c565b610045565b005b336001600160a01b03167f50d6f3fc915efd1695d8a4cb50da185984f50d256834b9cb308295eb3c872c9c8383604051610080929190610100565b60405180910390a25050565b6000806020838503121561009f57600080fd5b823567ffffffffffffffff8111156100b657600080fd5b8301601f810185136100c757600080fd5b803567ffffffffffffffff8111156100de57600080fd5b8560208284010111156100f057600080fd5b6020919091019590945092505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f1916010191905056fea264697066735822122050c4191eadbd3981b9be4954b8abbadae91d7cfb743a47cc6930c8fe566e1c6e64736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "who";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "Echo";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "echo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): EchoerInterface;
    static connect(address: string, runner?: ContractRunner | null): Echoer;
}
export {};
