import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { Math, MathInterface } from "../../../../../@openzeppelin/contracts/utils/math/Math";
type MathConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Math__factory extends ContractFactory {
    constructor(...args: MathConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Math & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Math__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122054710e438b4d818c9886821c7249e64e03942ccb6f261579743c3dd2da7d85c964736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "MathOverflowedMulDiv";
        readonly type: "error";
    }];
    static createInterface(): MathInterface;
    static connect(address: string, runner?: ContractRunner | null): Math;
}
export {};
