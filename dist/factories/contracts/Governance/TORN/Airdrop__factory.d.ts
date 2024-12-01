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
    static readonly bytecode = "0x60806040523480156200001157600080fd5b506040516200052c3803806200052c833981016040819052620000349162000396565b60006200004183620001c2565b90506000816001600160a01b03166370a08231306040518263ffffffff1660e01b815260040162000073919062000473565b60206040518083038186803b1580156200008c57600080fd5b505afa158015620000a1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c791906200045a565b11620000f05760405162461bcd60e51b8152600401620000e790620004a9565b60405180910390fd5b60005b8251811015620001bd57816001600160a01b031663a9059cbb8483815181106200011957fe5b6020026020010151600001518584815181106200013257fe5b6020026020010151602001516040518363ffffffff1660e01b81526004016200015d92919062000487565b602060405180830381600087803b1580156200017857600080fd5b505af11580156200018d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001b3919062000374565b50600101620000f3565b506000ff5b600080620001cf62000310565b600114620001f257738595bfb0d940dfedc98943fa8a907091203f25ee62000203565b6e0c2e074ec69a0dfb2997ba6c7d2e1e5b604051630178b8bf60e01b81529091506001600160a01b03821690630178b8bf9062000234908690600401620004a0565b60206040518083038186803b1580156200024d57600080fd5b505afa15801562000262573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000288919062000355565b6001600160a01b0316633b3b57de846040518263ffffffff1660e01b8152600401620002b59190620004a0565b60206040518083038186803b158015620002ce57600080fd5b505afa158015620002e3573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000309919062000355565b9392505050565b4690565b60006040828403121562000326578081fd5b620003326040620004eb565b90508151620003418162000512565b808252506020820151602082015292915050565b60006020828403121562000367578081fd5b8151620003098162000512565b60006020828403121562000386578081fd5b8151801515811462000309578182fd5b6000806040808486031215620003aa578182fd5b8351602080860151919450906001600160401b0380821115620003cb578485fd5b818701915087601f830112620003df578485fd5b815181811115620003ee578586fd5b620003fd8485830201620004eb565b8181528481019250838501868302850186018b10156200041b578788fd5b8794505b828510156200044957620004348b8262000314565b8452600194909401939285019286016200041f565b508096505050505050509250929050565b6000602082840312156200046c578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b90815260200190565b60208082526022908201527f42616c616e636520697320302c2061697264726f7020616c726561647920646f6040820152616e6560f01b606082015260800190565b6040518181016001600160401b03811182821017156200050a57600080fd5b604052919050565b6001600160a01b03811681146200052857600080fd5b5056fe";
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
