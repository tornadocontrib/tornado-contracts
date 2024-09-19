import { type ContractRunner } from "ethers";
import type { IGasCompensationVault, IGasCompensationVaultInterface } from "../../../../../contracts/Governance/v2-vault-and-gas/GasCompensator.sol/IGasCompensationVault";
export declare class IGasCompensationVault__factory {
    static readonly abi: readonly [{
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
    }];
    static createInterface(): IGasCompensationVaultInterface;
    static connect(address: string, runner?: ContractRunner | null): IGasCompensationVault;
}
