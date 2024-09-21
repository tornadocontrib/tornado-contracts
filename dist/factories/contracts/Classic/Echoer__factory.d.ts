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
    static readonly bytecode = "0x6080604052348015600f57600080fd5b506101638061001f6000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063624fbfdc14610030575b600080fd5b61004361003e36600461008c565b610045565b005b336001600160a01b03167f50d6f3fc915efd1695d8a4cb50da185984f50d256834b9cb308295eb3c872c9c83836040516100809291906100fe565b60405180910390a25050565b6000806020838503121561009f57600080fd5b823567ffffffffffffffff808211156100b757600080fd5b818501915085601f8301126100cb57600080fd5b8135818111156100da57600080fd5b8660208285010111156100ec57600080fd5b60209290920196919550909350505050565b60208152816020820152818360408301376000818301604090810191909152601f909201601f1916010191905056fea2646970667358221220cadc2288aafcfeb373ae536503c025419ca51a0b1642ad003ff215a6bff8658464736f6c63430008190033";
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
