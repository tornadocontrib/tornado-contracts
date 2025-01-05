import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { BadRecipient, BadRecipientInterface } from "../../../../contracts/Classic/Mocks/BadRecipient";
type BadRecipientConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BadRecipient__factory extends ContractFactory {
    constructor(...args: BadRecipientConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BadRecipient & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BadRecipient__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50609c80601d6000396000f3fe6080604052348015600f57600080fd5b5060405162461bcd60e51b815260206004820152602160248201527f7468697320636f6e747261637420646f6573206e6f74206163636570742045546044820152600960fb1b606482015260840160405180910390fdfea2646970667358221220867c1cc144acea3526d4798f90e7696b816ab299ab26d8655161f3e077c23c5564736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly stateMutability: "nonpayable";
        readonly type: "fallback";
    }];
    static createInterface(): BadRecipientInterface;
    static connect(address: string, runner?: ContractRunner | null): BadRecipient;
}
export {};
