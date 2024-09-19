import { type ContractRunner } from "ethers";
import type { IENS, IENSInterface } from "../../../../contracts/Governance/RelayerRegistry.sol/IENS";
export declare class IENS__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "node";
            readonly type: "bytes32";
        }];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IENSInterface;
    static connect(address: string, runner?: ContractRunner | null): IENS;
}
