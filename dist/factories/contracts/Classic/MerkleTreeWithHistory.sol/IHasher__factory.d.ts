import { type ContractRunner } from "ethers";
import type { IHasher, IHasherInterface } from "../../../../contracts/Classic/MerkleTreeWithHistory.sol/IHasher";
export declare class IHasher__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "in_xL";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "in_xR";
            readonly type: "uint256";
        }];
        readonly name: "MiMCSponge";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "xL";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "xR";
            readonly type: "uint256";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): IHasherInterface;
    static connect(address: string, runner?: ContractRunner | null): IHasher;
}
