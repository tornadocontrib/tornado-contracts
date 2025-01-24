import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Address, AddressInterface } from "../../../../@openzeppelin/contracts/utils/Address";
type AddressConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Address__factory extends ContractFactory {
    constructor(...args: AddressConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Address & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Address__factory;
    static readonly bytecode = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220d519d40cc262d4315fe9aa6b7075f0e606830f30be82f32f61f187341d0dc4c164736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "AddressEmptyCode";
        readonly type: "error";
    }];
    static createInterface(): AddressInterface;
    static connect(address: string, runner?: ContractRunner | null): Address;
}
export {};
