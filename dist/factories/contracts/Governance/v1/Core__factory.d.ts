import { type ContractRunner } from "ethers";
import type { Core, CoreInterface } from "../../../../contracts/Governance/v1/Core";
export declare class Core__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "lockedBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): CoreInterface;
    static connect(address: string, runner?: ContractRunner | null): Core;
}
