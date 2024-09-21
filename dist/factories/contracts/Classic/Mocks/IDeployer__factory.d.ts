import { type ContractRunner } from "ethers";
import type { IDeployer, IDeployerInterface } from "../../../../contracts/Classic/Mocks/IDeployer";
export declare class IDeployer__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_salt";
            readonly type: "bytes32";
        }];
        readonly name: "deploy";
        readonly outputs: readonly [{
            readonly internalType: "address payable";
            readonly name: "createdContract";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): IDeployerInterface;
    static connect(address: string, runner?: ContractRunner | null): IDeployer;
}
