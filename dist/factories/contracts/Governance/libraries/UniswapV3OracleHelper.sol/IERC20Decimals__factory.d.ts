import { type ContractRunner } from "ethers";
import type { IERC20Decimals, IERC20DecimalsInterface } from "../../../../../contracts/Governance/libraries/UniswapV3OracleHelper.sol/IERC20Decimals";
export declare class IERC20Decimals__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): IERC20DecimalsInterface;
    static connect(address: string, runner?: ContractRunner | null): IERC20Decimals;
}
