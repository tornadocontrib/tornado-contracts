import { type ContractRunner } from "ethers";
import type { ENS, ENSInterface } from "../../../../../contracts/Governance/TORN/ENS.sol/ENS";
export declare class ENS__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "node";
            readonly type: "bytes32";
        }];
        readonly name: "resolver";
        readonly outputs: readonly [{
            readonly internalType: "contract Resolver";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ENSInterface;
    static connect(address: string, runner?: ContractRunner | null): ENS;
}
