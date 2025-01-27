import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { RelayerRegistryBurnableProposal, RelayerRegistryBurnableProposalInterface } from "../../../../contracts/Unaudited/RelayerRegistryBurnableProposal.sol/RelayerRegistryBurnableProposal";
type RelayerRegistryBurnableProposalConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayerRegistryBurnableProposal__factory extends ContractFactory {
    constructor(...args: RelayerRegistryBurnableProposalConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RelayerRegistryBurnableProposal & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RelayerRegistryBurnableProposal__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610172806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806326ec0a3614610046578063373058b814610064578063629793cb1461006e575b600080fd5b61004e610076565b60405161005b9190610128565b60405180910390f35b61006c61008e565b005b61004e610110565b7358e8dcc13be9780fc42e8723d8ead4cf46943df281565b604051631b2ce7f360e11b81527358e8dcc13be9780fc42e8723d8ead4cf46943df2908190633659cfe6906100db9073c82a0737372cb0953e7645eb6b5bd13da566a29f90600401610128565b600060405180830381600087803b1580156100f557600080fd5b505af1158015610109573d6000803e3d6000fd5b5050505050565b73c82a0737372cb0953e7645eb6b5bd13da566a29f81565b6001600160a01b039190911681526020019056fea264697066735822122006da6593aec500bccd0837f70bd8624b1e4a4d684a0bd84daaa974eee7ce02ef64736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "executeProposal";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "newRelayerRegistry";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "relayerRegistryProxyAddr";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RelayerRegistryBurnableProposalInterface;
    static connect(address: string, runner?: ContractRunner | null): RelayerRegistryBurnableProposal;
}
export {};
