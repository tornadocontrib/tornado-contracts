import { type ContractRunner } from "ethers";
import type { IProxy, IProxyInterface } from "../../../../../../contracts/Governance/v1/Mocks/ProposalUpgrade.sol/IProxy";
export declare class IProxy__factory {
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
    static createInterface(): IProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): IProxy;
}
