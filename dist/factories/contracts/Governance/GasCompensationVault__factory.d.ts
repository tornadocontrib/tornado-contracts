import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { GasCompensationVault, GasCompensationVaultInterface } from "../../../contracts/Governance/GasCompensationVault";
type GasCompensationVaultConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasCompensationVault__factory extends ContractFactory {
    constructor(...args: GasCompensationVaultConstructorParams);
    getDeployTransaction(_governance: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_governance: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<GasCompensationVault & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): GasCompensationVault__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b5060405161047838038061047883398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516103da61009e6000396000818160560152818160e101528181610212015261027701526103da6000f3fe6080604052600436106100385760003560e01c8063a3221c2e14610044578063a99ce80714610094578063e822f784146100b657600080fd5b3661003f57005b600080fd5b34801561005057600080fd5b506100787f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b3480156100a057600080fd5b506100b46100af366004610328565b6100d6565b005b3480156100c257600080fd5b506100b46100d1366004610360565b610207565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461013e5760405162461bcd60e51b815260206004820152600860248201526737b7363c9033b7bb60c11b60448201526064015b60405180910390fd5b47600061014b4884610379565b90508160000361015b5750505050565b6000846001600160a01b03168383116101745782610176565b835b604051600081818185875af1925050503d80600081146101b2576040519150601f19603f3d011682016040523d82523d6000602084013e6101b7565b606091505b50509050806102005760405162461bcd60e51b815260206004820152601560248201527418dbdb5c195b9cd85d194819d85cc819985a5b1959605a1b6044820152606401610135565b5050505050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461026a5760405162461bcd60e51b815260206004820152600860248201526737b7363c9033b7bb60c11b6044820152606401610135565b4760006001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168284116102a457836102a6565b825b604051600081818185875af1925050503d80600081146102e2576040519150601f19603f3d011682016040523d82523d6000602084013e6102e7565b606091505b50509050806103235760405162461bcd60e51b81526020600482015260086024820152671c185e4819985a5b60c21b6044820152606401610135565b505050565b6000806040838503121561033b57600080fd5b82356001600160a01b038116811461035257600080fd5b946020939093013593505050565b60006020828403121561037257600080fd5b5035919050565b808202811582820484141761039e57634e487b7160e01b600052601160045260246000fd5b9291505056fea2646970667358221220bed0d522f64ee52d8cc493080701cfb49351eb88a832a1a41f4998c1b9e002ba64736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governance";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "GovernanceAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "gasAmount";
            readonly type: "uint256";
        }];
        readonly name: "compensateGas";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawToGovernance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): GasCompensationVaultInterface;
    static connect(address: string, runner?: ContractRunner | null): GasCompensationVault;
}
export {};
