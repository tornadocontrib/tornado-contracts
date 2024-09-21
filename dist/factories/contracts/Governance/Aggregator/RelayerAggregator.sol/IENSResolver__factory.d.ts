import { type ContractRunner } from "ethers";
import type { IENSResolver, IENSResolverInterface } from "../../../../../contracts/Governance/Aggregator/RelayerAggregator.sol/IENSResolver";
export declare class IENSResolver__factory {
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "node";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "key";
            readonly type: "string";
        }];
        readonly name: "text";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IENSResolverInterface;
    static connect(address: string, runner?: ContractRunner | null): IENSResolver;
}
