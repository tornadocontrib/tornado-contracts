import { type ContractRunner } from "ethers";
import type { IVerifier, IVerifierInterface } from "../../../../contracts/Classic/interfaces/IVerifier";
export declare class IVerifier__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_proof";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256[6]";
            readonly name: "_input";
            readonly type: "uint256[6]";
        }];
        readonly name: "verifyProof";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IVerifierInterface;
    static connect(address: string, runner?: ContractRunner | null): IVerifier;
}
