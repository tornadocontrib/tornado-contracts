import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { Timestamp, TimestampInterface } from "../../../../../contracts/Governance/TORN/mocks/Timestamp";
type TimestampConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Timestamp__factory extends ContractFactory {
    constructor(...args: TimestampConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Timestamp & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Timestamp__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060d28061001f6000396000f3fe6080604052348015600f57600080fd5b5060043610603c5760003560e01c806301ec0fab146041578063adb61832146059578063c565882714605f575b600080fd5b6047607b565b60408051918252519081900360200190f35b60476081565b607960048036036020811015607357600080fd5b50356097565b005b60005481565b60008054156090576000546092565b425b905090565b60005556fea2646970667358221220b2410460a5b24aec9983bcf8349aa3b589a0dff9120af5b704feae536a65813064736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "blockTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "fakeTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_fakeTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "setFakeTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TimestampInterface;
    static connect(address: string, runner?: ContractRunner | null): Timestamp;
}
export {};
