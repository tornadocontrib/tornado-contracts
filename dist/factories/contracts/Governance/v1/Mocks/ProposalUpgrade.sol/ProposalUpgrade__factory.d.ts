import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type { ProposalUpgrade, ProposalUpgradeInterface } from "../../../../../../contracts/Governance/v1/Mocks/ProposalUpgrade.sol/ProposalUpgrade";
type ProposalUpgradeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ProposalUpgrade__factory extends ContractFactory {
    constructor(...args: ProposalUpgradeConstructorParams);
    getDeployTransaction(_newLogic: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_newLogic: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ProposalUpgrade & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ProposalUpgrade__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516101da3803806101da83398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c610148610092600039806065528060a252506101486000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806305ccb23e1461003b578063373058b814610059575b600080fd5b610043610063565b60405161005091906100fe565b60405180910390f35b610061610087565b005b7f000000000000000000000000000000000000000000000000000000000000000081565b604051631b2ce7f360e11b81523090633659cfe6906100ca907f0000000000000000000000000000000000000000000000000000000000000000906004016100fe565b600060405180830381600087803b1580156100e457600080fd5b505af11580156100f8573d6000803e3d6000fd5b50505050565b6001600160a01b039190911681526020019056fea26469706673582212207d2c2c988cd8f64fa7efb7ef33cfeee3b01f81a501e4a71ae8a63d6a5e269eb664736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_newLogic";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "executeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "newLogic";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ProposalUpgradeInterface;
    static connect(address: string, runner?: ContractRunner | null): ProposalUpgrade;
}
export {};
