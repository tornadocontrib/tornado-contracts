import { type ContractRunner } from "ethers";
import type { IOffchainOracle, IOffchainOracleInterface } from "../../../../../contracts/Governance/Testnet/TestnetOracle.sol/IOffchainOracle";
export declare class IOffchainOracle__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "srcToken";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "useSrcWrappers";
            readonly type: "bool";
        }];
        readonly name: "getRateToEth";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "weightedRate";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IOffchainOracleInterface;
    static connect(address: string, runner?: ContractRunner | null): IOffchainOracle;
}
