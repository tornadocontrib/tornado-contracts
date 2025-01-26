import { type ContractRunner } from "ethers";
import type { IRelayerRegistryProxy, IRelayerRegistryProxyInterface } from "../../../../contracts/Unaudited/RelayerRegistryBurnableProposal.sol/IRelayerRegistryProxy";
export declare class IRelayerRegistryProxy__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newImplementation";
            readonly type: "address";
        }];
        readonly name: "upgradeTo";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IRelayerRegistryProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): IRelayerRegistryProxy;
}
