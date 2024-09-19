import { type ContractRunner } from "ethers";
import type { ITornadoRouter, ITornadoRouterInterface } from "../../../../contracts/Governance/InstanceRegistry.sol/ITornadoRouter";
export declare class ITornadoRouter__factory {
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_amount";
            readonly type: "uint256";
        }];
        readonly name: "approveExactToken";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ITornadoRouterInterface;
    static connect(address: string, runner?: ContractRunner | null): ITornadoRouter;
}
