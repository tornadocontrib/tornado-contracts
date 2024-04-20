import { type ContractRunner } from "ethers";
import type { GasCompensator, GasCompensatorInterface } from "../../../../../contracts/Governance/v2-vault-and-gas/GasCompensator.sol/GasCompensator";
export declare class GasCompensator__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_gasCompensationVault";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "gasCompensationVault";
        readonly outputs: readonly [{
            readonly internalType: "contract IGasCompensationVault";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_gasCompensationsLimit";
            readonly type: "uint256";
        }];
        readonly name: "setGasCompensations";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "withdrawFromHelper";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): GasCompensatorInterface;
    static connect(address: string, runner?: ContractRunner | null): GasCompensator;
}
