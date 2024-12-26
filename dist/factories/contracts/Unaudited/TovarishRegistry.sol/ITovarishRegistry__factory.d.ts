import { type ContractRunner } from "ethers";
import type { ITovarishRegistry, ITovarishRegistryInterface } from "../../../../contracts/Unaudited/TovarishRegistry.sol/ITovarishRegistry";
export declare class ITovarishRegistry__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "getNamehashes";
        readonly outputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "";
            readonly type: "bytes32[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getNames";
        readonly outputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "";
            readonly type: "string[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ITovarishRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): ITovarishRegistry;
}
