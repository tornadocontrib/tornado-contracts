import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Deployer, DeployerInterface } from "../../../../contracts/Governance/Deployer.sol/Deployer";
type DeployerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Deployer__factory extends ContractFactory {
    constructor(...args: DeployerConstructorParams);
    getDeployTransaction(_deployer: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_deployer: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Deployer & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Deployer__factory;
    static readonly bytecode = "0x60a060405234801561001057600080fd5b506040516103a93803806103a98339818101604052602081101561003357600080fd5b50516001600160a01b0381161561004a5780610060565b73ce0042b868300000d44a59004da54a005ffdcf9f5b60601b6001600160601b031916608052604051309032907f09e48df7857bd0c1e0d31bb8a85d42cf1874817895f171c917f6ee2cea73ec2090600090a35060805160601c6102e96100c06000398061010d528061029152506102e96000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80634af63f021461003b578063d5f39488146100e5575b600080fd5b6100e36004803603604081101561005157600080fd5b81019060208101813564010000000081111561006c57600080fd5b82018360208201111561007e57600080fd5b803590602001918460018302840111640100000000831117156100a057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505091359250610109915050565b005b6100ed61028f565b604080516001600160a01b039092168252519081900360200190f35b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634af63f0284846040518363ffffffff1660e01b81526004018080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561018e578181015183820152602001610176565b50505050905090810190601f1680156101bb5780820380516001836020036101000a031916815260200191505b509350505050602060405180830381600087803b1580156101db57600080fd5b505af11580156101ef573d6000803e3d6000fd5b505050506040513d602081101561020557600080fd5b505190506001600160a01b038116610254576040805162461bcd60e51b815260206004820152600d60248201526c11195c1b1bde4819985a5b1959609a1b604482015290519081900360640190fd5b6040516001600160a01b0382169033907f09e48df7857bd0c1e0d31bb8a85d42cf1874817895f171c917f6ee2cea73ec2090600090a3505050565b7f00000000000000000000000000000000000000000000000000000000000000008156fea26469706673582212209953fa5f914c0545d70cc77da3d32eb42578c493556e94287f916e56bd242ec564736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "contract IDeployer";
            readonly name: "_deployer";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "addr";
            readonly type: "address";
        }];
        readonly name: "Deployed";
        readonly type: "event";
    }, {
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
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "deployer";
        readonly outputs: readonly [{
            readonly internalType: "contract IDeployer";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): DeployerInterface;
    static connect(address: string, runner?: ContractRunner | null): Deployer;
}
export {};
