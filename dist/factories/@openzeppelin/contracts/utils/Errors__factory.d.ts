import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Errors, ErrorsInterface } from "../../../../@openzeppelin/contracts/utils/Errors";
type ErrorsConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Errors__factory extends ContractFactory {
    constructor(...args: ErrorsConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Errors & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Errors__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212206e0d5922a018cc1796aca29f49cc00b7ffd8988f2d37a8dd1c233a73a7f9209864736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "FailedCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedDeployment";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "needed";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "MissingPrecompile";
        readonly type: "error";
    }];
    static createInterface(): ErrorsInterface;
    static connect(address: string, runner?: ContractRunner | null): Errors;
}
export {};
