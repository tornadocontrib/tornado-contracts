import { type ContractRunner } from "ethers";
import type { IFeeManager, IFeeManagerInterface } from "../../../../contracts/Governance/RelayerRegistry.sol/IFeeManager";
export declare class IFeeManager__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract ITornadoInstance";
            readonly name: "_instance";
            readonly type: "address";
        }];
        readonly name: "instanceFeeWithUpdate";
        readonly outputs: readonly [{
            readonly internalType: "uint160";
            readonly name: "";
            readonly type: "uint160";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IFeeManagerInterface;
    static connect(address: string, runner?: ContractRunner | null): IFeeManager;
}
