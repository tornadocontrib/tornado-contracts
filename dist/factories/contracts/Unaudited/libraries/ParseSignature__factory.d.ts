import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { ParseSignature, ParseSignatureInterface } from "../../../../contracts/Unaudited/libraries/ParseSignature";
type ParseSignatureConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ParseSignature__factory extends ContractFactory {
    constructor(...args: ParseSignatureConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ParseSignature & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ParseSignature__factory;
    static readonly bytecode = "0x610220610039600b82828239805160001a607314602c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063fab4087a1461003a575b600080fd5b61004d610048366004610111565b610070565b6040805160ff909416845260208401929092529082015260600160405180910390f35b6000808060418490036100b25761008984860186610185565b9092509050848460408181106100a1576100a16101a7565b919091013560f81c935061010a9050565b60408490036100f15760006100c985870187610185565b9093506001600160ff1b038116925090506100e960ff82901c601b6101bd565b93505061010a565b604051634be6321b60e01b815260040160405180910390fd5b9250925092565b6000806020838503121561012457600080fd5b823567ffffffffffffffff81111561013b57600080fd5b8301601f8101851361014c57600080fd5b803567ffffffffffffffff81111561016357600080fd5b85602082840101111561017557600080fd5b6020919091019590945092505050565b6000806040838503121561019857600080fd5b50508035926020909101359150565b634e487b7160e01b600052603260045260246000fd5b60ff81811683821601908111156101e457634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220afce12604d1fa50adec7e509ffad592c7e983227ec176a4efd40f9653071958664736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "InvalidSignatureLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly name: "parse";
        readonly outputs: readonly [{
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
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): ParseSignatureInterface;
    static connect(address: string, runner?: ContractRunner | null): ParseSignature;
}
export {};
