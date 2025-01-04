import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BytesLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Airdrop, AirdropInterface } from "../../../../contracts/Governance/TORN/Airdrop";
type AirdropConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Airdrop__factory extends ContractFactory {
    constructor(...args: AirdropConstructorParams);
    getDeployTransaction(tokenAddress: BytesLike, targets: Airdrop.RecipientStruct[], overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(tokenAddress: BytesLike, targets: Airdrop.RecipientStruct[], overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Airdrop & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Airdrop__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200054038038062000540833981016040819052620000349162000396565b60006200004183620001c2565b90506000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040162000073919062000467565b60206040518083038186803b1580156200008c57600080fd5b505afa158015620000a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c791906200044e565b11620000f05760405162461bcd60e51b8152600401620000e7906200049d565b60405180910390fd5b60005b8251811015620001bd57816001600160a01b031663a9059cbb8483815181106200011957fe5b6020026020010151600001518584815181106200013257fe5b6020026020010151602001516040518363ffffffff1660e01b81526004016200015d9291906200047b565b602060405180830381600087803b1580156200017857600080fd5b505af11580156200018d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b3919062000374565b50600101620000f3565b506000ff5b600080620001cf62000310565b600114620001f257738595bfb0d940dfedc98943fa8a907091203f25ee62000203565b6e0c2e074ec69a0dfb2997ba6c7d2e1e5b604051630178b8bf60e01b81529091506001600160a01b03821690630178b8bf906200023490869060040162000494565b60206040518083038186803b1580156200024d57600080fd5b505afa15801562000262573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000288919062000355565b6001600160a01b0316633b3b57de846040518263ffffffff1660e01b8152600401620002b5919062000494565b60206040518083038186803b158015620002ce57600080fd5b505afa158015620002e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000309919062000355565b9392505050565b4690565b60006040828403121562000326578081fd5b620003326040620004df565b90508151620003418162000526565b808252506020820151602082015292915050565b60006020828403121562000367578081fd5b8151620003098162000526565b60006020828403121562000386578081fd5b8151801515811462000309578182fd5b6000806040808486031215620003aa578182fd5b8351602080860151919450906001600160401b03811115620003ca578384fd5b8501601f81018713620003db578384fd5b8051620003f2620003ec8262000506565b620004df565b81815283810190838501868402850186018b10156200040f578788fd5b8794505b838510156200043d57620004288b8262000314565b83526001949094019391850191860162000413565b508096505050505050509250929050565b60006020828403121562000460578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b90815260200190565b60208082526022908201527f42616c616e636520697320302c2061697264726f7020616c726561647920646f6040820152616e6560f01b606082015260800190565b6040518181016001600160401b0381118282101715620004fe57600080fd5b604052919050565b60006001600160401b038211156200051c578081fd5b5060209081020190565b6001600160a01b03811681146200053c57600080fd5b5056fe";
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
            readonly name: "node";
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
    static createInterface(): AirdropInterface;
    static connect(address: string, runner?: ContractRunner | null): Airdrop;
}
export {};
