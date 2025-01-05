import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type { DummySecond, DummySecondInterface } from "../../../../../../contracts/Governance/v1/Mocks/Dummy.sol/DummySecond";
type DummySecondConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DummySecond__factory extends ContractFactory {
    constructor(...args: DummySecondConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<DummySecond & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): DummySecond__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610278806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631f1bd692146100465780633fa4f245146100c35780638129fc1c146100dd575b600080fd5b61004e6100e7565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610088578181015183820152602001610070565b50505050905090810190601f1680156100b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100cb610174565b60408051918252519081900360200190f35b6100e561017a565b005b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561016c5780601f106101415761010080835404028352916020019161016c565b820191906000526020600020905b81548152906001019060200180831161014f57829003601f168201915b505050505081565b60005481565b600260005560408051808201909152600680825265323ab6b6bc9960d11b60209092019182526101ac916001916101af565b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101f057805160ff191683800117855561021d565b8280016001018555821561021d579182015b8281111561021d578251825591602001919060010190610202565b5061022992915061022d565b5090565b5b80821115610229576000815560010161022e56fea2646970667358221220c9dbbc6dedad15a288bd489b6de1836089a46742eecb45fc12cf3104d7b2a3b664736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "text";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "value";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DummySecondInterface;
    static connect(address: string, runner?: ContractRunner | null): DummySecond;
}
export {};
