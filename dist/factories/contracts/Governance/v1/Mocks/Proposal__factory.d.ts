import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { Proposal, ProposalInterface } from "../../../../../contracts/Governance/v1/Mocks/Proposal";
type ProposalConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Proposal__factory extends ContractFactory {
    constructor(...args: ProposalConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Proposal & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Proposal__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506103d5806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063373058b814610030575b600080fd5b61003861003a565b005b6000604051610048906100fa565b604051809103906000f080158015610064573d6000803e3d6000fd5b509050806001600160a01b0316638129fc1c6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156100a257600080fd5b505af11580156100b6573d6000803e3d6000fd5b5050604080516001600160a01b038516815290517f330da4cde831ccab151372275307c2f0cce2bcce846635cd66e6908f10d203639350908190036020019150a150565b610298806101088339019056fe608060405234801561001057600080fd5b50610278806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80631f1bd692146100465780633fa4f245146100c35780638129fc1c146100dd575b600080fd5b61004e6100e7565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610088578181015183820152602001610070565b50505050905090810190601f1680156100b55780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6100cb610174565b60408051918252519081900360200190f35b6100e561017a565b005b60018054604080516020600284861615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561016c5780601f106101415761010080835404028352916020019161016c565b820191906000526020600020905b81548152906001019060200180831161014f57829003601f168201915b505050505081565b60005481565b600160008190556040805180820190915260058082526464756d6d7960d81b60209092019182526101ac9291906101af565b50565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106101f057805160ff191683800117855561021d565b8280016001018555821561021d579182015b8281111561021d578251825591602001919060010190610202565b5061022992915061022d565b5090565b5b80821115610229576000815560010161022e56fea26469706673582212204b4d54284aeff9c7c570415da4a9efb9bf7115fe94a322210f9981c1c7ae107a64736f6c634300060c0033a26469706673582212205967b156db23a5fd2372953049f5c366f68a9f95cfa116f9fbd6d0c8e7bdaa6364736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "output";
            readonly type: "address";
        }];
        readonly name: "Debug";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "executeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ProposalInterface;
    static connect(address: string, runner?: ContractRunner | null): Proposal;
}
export {};