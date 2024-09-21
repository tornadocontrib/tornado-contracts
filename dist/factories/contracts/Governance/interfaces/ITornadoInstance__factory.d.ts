import { type ContractRunner } from "ethers";
import type { ITornadoInstance, ITornadoInstanceInterface } from "../../../../contracts/Governance/interfaces/ITornadoInstance";
export declare class ITornadoInstance__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "denomination";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "commitment";
            readonly type: "bytes32";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "token";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "proof";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "root";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "nullifierHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address payable";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "refund";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): ITornadoInstanceInterface;
    static connect(address: string, runner?: ContractRunner | null): ITornadoInstance;
}
