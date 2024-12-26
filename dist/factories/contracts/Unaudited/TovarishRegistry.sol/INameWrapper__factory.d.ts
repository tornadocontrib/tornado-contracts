import { type ContractRunner } from "ethers";
import type { INameWrapper, INameWrapperInterface } from "../../../../contracts/Unaudited/TovarishRegistry.sol/INameWrapper";
export declare class INameWrapper__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }];
        readonly name: "ownerOf";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): INameWrapperInterface;
    static connect(address: string, runner?: ContractRunner | null): INameWrapper;
}
