import { type ContractRunner } from "ethers";
import type { IENSRegistry2, IENSRegistry2Interface } from "../../../../contracts/Unaudited/TovarishRegistry.sol/IENSRegistry2";
export declare class IENSRegistry2__factory {
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
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "node";
            readonly type: "bytes32";
        }];
        readonly name: "resolver";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IENSRegistry2Interface;
    static connect(address: string, runner?: ContractRunner | null): IENSRegistry2;
}
