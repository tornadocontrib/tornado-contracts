import { type ContractRunner } from "ethers";
import type { ITovarishRegistry, ITovarishRegistryInterface } from "../../../../contracts/Unaudited/interfaces/ITovarishRegistry";
export declare class ITovarishRegistry__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "relayerRegistry";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string[]";
            readonly name: "additionalRelayers";
            readonly type: "string[]";
        }];
        readonly name: "relayersData";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "string";
                readonly name: "ensName";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "isRegistered";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "isPrior";
                readonly type: "bool";
            }, {
                readonly internalType: "string";
                readonly name: "tovarishHost";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "tovarishChains";
                readonly type: "string";
            }, {
                readonly internalType: "string[]";
                readonly name: "records";
                readonly type: "string[]";
            }];
            readonly internalType: "struct ITovarishRegistry.Relayer[]";
            readonly name: "";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ITovarishRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): ITovarishRegistry;
}
