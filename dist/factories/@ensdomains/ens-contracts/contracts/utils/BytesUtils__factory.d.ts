import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { BytesUtils, BytesUtilsInterface } from "../../../../../@ensdomains/ens-contracts/contracts/utils/BytesUtils";
type BytesUtilsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BytesUtils__factory extends ContractFactory {
    constructor(...args: BytesUtilsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<BytesUtils & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): BytesUtils__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220bc2c4183d06241a20164143c3bce477fea22911b72108c029f43e19bce53ffc164736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "offset";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "length";
            readonly type: "uint256";
        }];
        readonly name: "OffsetOutOfBoundsError";
        readonly type: "error";
    }];
    static createInterface(): BytesUtilsInterface;
    static connect(address: string, runner?: ContractRunner | null): BytesUtils;
}
export {};
