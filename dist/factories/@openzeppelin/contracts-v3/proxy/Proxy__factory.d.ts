import { type ContractRunner } from "ethers";
import type { Proxy, ProxyInterface } from "../../../../@openzeppelin/contracts-v3/proxy/Proxy";
export declare class Proxy__factory {
    static readonly abi: readonly [{
        readonly stateMutability: "payable";
        readonly type: "fallback";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): ProxyInterface;
    static connect(address: string, runner?: ContractRunner | null): Proxy;
}
