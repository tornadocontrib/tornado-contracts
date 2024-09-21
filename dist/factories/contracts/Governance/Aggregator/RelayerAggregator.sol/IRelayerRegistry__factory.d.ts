import { type ContractRunner } from "ethers";
import type { IRelayerRegistry, IRelayerRegistryInterface } from "../../../../../contracts/Governance/Aggregator/RelayerAggregator.sol/IRelayerRegistry";
export declare class IRelayerRegistry__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly name: "getRelayerBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "toResolve";
            readonly type: "address";
        }];
        readonly name: "isRelayerRegistered";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IRelayerRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): IRelayerRegistry;
}
