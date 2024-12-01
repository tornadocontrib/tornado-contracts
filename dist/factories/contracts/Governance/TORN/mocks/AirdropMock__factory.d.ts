import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { AirdropMock, AirdropMockInterface, Airdrop } from "../../../../../contracts/Governance/TORN/mocks/AirdropMock";
type AirdropMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AirdropMock__factory extends ContractFactory {
    constructor(...args: AirdropMockConstructorParams);
    getDeployTransaction(tokenAddress: BytesLike, targets: Airdrop.RecipientStruct[], overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(tokenAddress: BytesLike, targets: Airdrop.RecipientStruct[], overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<AirdropMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): AirdropMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5060405161038738038061038783398101604081905261002f91610220565b8181600061003c836101aa565b90506000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040161006c91906102f1565b60206040518083038186803b15801561008457600080fd5b505afa158015610098573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100bc91906102d9565b116100e25760405162461bcd60e51b81526004016100d99061031e565b60405180910390fd5b60005b82518110156101a557816001600160a01b031663a9059cbb84838151811061010957fe5b60200260200101516000015185848151811061012157fe5b6020026020010151602001516040518363ffffffff1660e01b815260040161014a929190610305565b602060405180830381600087803b15801561016457600080fd5b505af1158015610178573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019c91906101f9565b506001016100e5565b506000ff5b60601c90565b6000604082840312156101c1578081fd5b6101cb6040610360565b82519091506001600160a01b03811681146101e557600080fd5b808252506020820151602082015292915050565b60006020828403121561020a578081fd5b81518015158114610219578182fd5b9392505050565b6000806040808486031215610233578182fd5b8351602080860151919450906001600160401b0380821115610253578485fd5b818701915087601f830112610266578485fd5b815181811115610274578586fd5b6102818485830201610360565b8181528481019250838501868302850186018b101561029e578788fd5b8794505b828510156102c8576102b48b826101b0565b8452600194909401939285019286016102a2565b508096505050505050509250929050565b6000602082840312156102ea578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b60208082526022908201527f42616c616e636520697320302c2061697264726f7020616c726561647920646f6040820152616e6560f01b606082015260800190565b6040518181016001600160401b038111828210171561037e57600080fd5b60405291905056fe";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "tokenAddress";
            readonly type: "bytes32";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Airdrop.Recipient[]";
            readonly name: "targets";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32[]";
            readonly name: "domains";
            readonly type: "bytes32[]";
        }];
        readonly name: "bulkResolve";
        readonly outputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "result";
            readonly type: "address[]";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "addr";
            readonly type: "bytes32";
        }];
        readonly name: "resolve";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): AirdropMockInterface;
    static connect(address: string, runner?: ContractRunner | null): AirdropMock;
}
export {};
