import { type ContractRunner } from "ethers";
import type { Resolver, ResolverInterface } from "../../../../../contracts/Governance/TORN/ENS.sol/Resolver";
export declare class Resolver__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "node";
            readonly type: "bytes32";
        }];
        readonly name: "addr";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): Resolver;
}
