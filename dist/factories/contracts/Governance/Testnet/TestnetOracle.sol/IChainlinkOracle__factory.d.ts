import { type ContractRunner } from "ethers";
import type { IChainlinkOracle, IChainlinkOracleInterface } from "../../../../../contracts/Governance/Testnet/TestnetOracle.sol/IChainlinkOracle";
export declare class IChainlinkOracle__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "decimal";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "latestAnswer";
        readonly outputs: readonly [{
            readonly internalType: "int256";
            readonly name: "answer";
            readonly type: "int256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IChainlinkOracleInterface;
    static connect(address: string, runner?: ContractRunner | null): IChainlinkOracle;
}
