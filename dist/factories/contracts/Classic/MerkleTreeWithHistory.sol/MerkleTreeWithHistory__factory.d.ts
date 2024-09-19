import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { MerkleTreeWithHistory, MerkleTreeWithHistoryInterface } from "../../../../contracts/Classic/MerkleTreeWithHistory.sol/MerkleTreeWithHistory";
type MerkleTreeWithHistoryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MerkleTreeWithHistory__factory extends ContractFactory {
    constructor(...args: MerkleTreeWithHistoryConstructorParams);
    getDeployTransaction(_levels: BigNumberish, _hasher: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_levels: BigNumberish, _hasher: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MerkleTreeWithHistory & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MerkleTreeWithHistory__factory;
    static readonly bytecode = "0x60c0604052600380546001600160401b031916905534801561002057600080fd5b50604051610a10380380610a1083398101604081905261003f91610385565b60008263ffffffff16116100a65760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208263ffffffff16106100fc5760405162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e2033320000604482015260640161009d565b63ffffffff821660a0526001600160a01b0381166080527f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c60005b8363ffffffff168163ffffffff1610156101845763ffffffff8116600090815260016020908152604080832085905590829052902082905561017a8383806101b8565b9150600101610137565b506000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b55506103f89050565b60006000805160206109f083398151915283106102175760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c64604482015260640161009d565b6000805160206109f0833981519152821061027e5760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b606482015260840161009d565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156102cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f191906103d4565b90925090506000805160206109f083398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610356573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037a91906103d4565b509695505050505050565b6000806040838503121561039857600080fd5b825163ffffffff811681146103ac57600080fd5b60208401519092506001600160a01b03811681146103c957600080fd5b809150509250929050565b600080604083850312156103e757600080fd5b505080516020909101519092909150565b60805160a0516105d361041d60003960006101010152600061020f01526105d36000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063c2b40ae41161008c578063ec73295911610066578063ec732959146101e3578063ed33639f1461020a578063f178e47c14610249578063fc7e9c6f1461026957600080fd5b8063c2b40ae41461019b578063cd87a3b4146101bb578063e8295588146101c357600080fd5b8063414a37ba146100d45780634ecf518b146100fc5780636d9833e3146101385780638ea3099e1461015b57806390eeb02b1461016e578063ba70f7571461017e575b600080fd5b6100e960008051602061057e83398151915281565b6040519081526020015b60405180910390f35b6101237f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff90911681526020016100f3565b61014b6101463660046104d1565b610281565b60405190151581526020016100f3565b6100e96101693660046104ea565b6102ff565b6003546101239063ffffffff1681565b60035463ffffffff166000908152600260205260409020546100e9565b6100e96101a93660046104d1565b60026020526000908152604090205481565b610123601e81565b6100e96101d13660046104d1565b60016020526000908152604090205481565b6100e97f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b6102317f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100f3565b6100e96102573660046104d1565b60006020819052908152604090205481565b60035461012390640100000000900463ffffffff1681565b600081810361029257506000919050565b60035463ffffffff16805b63ffffffff811660009081526002602052604090205484036102c3575060019392505050565b8063ffffffff166000036102d55750601e5b806102df8161052b565b9150508163ffffffff168163ffffffff160361029d575060009392505050565b600060008051602061057e83398151915283106103635760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6460448201526064015b60405180910390fd5b60008051602061057e83398151915282106103ca5760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b606482015260840161035a565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610419573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061043d9190610559565b909250905060008051602061057e83398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156104a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c69190610559565b509695505050505050565b6000602082840312156104e357600080fd5b5035919050565b6000806000606084860312156104ff57600080fd5b83356001600160a01b038116811461051657600080fd5b95602085013595506040909401359392505050565b600063ffffffff82168061054f57634e487b7160e01b600052601160045260246000fd5b6000190192915050565b6000806040838503121561056c57600080fd5b50508051602090910151909290915056fe30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001a2646970667358221220073b750aae4dba8655a2e525b0e8b02446e762412e24ec1684e134ada3303bda64736f6c6343000819003330644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_levels";
            readonly type: "uint32";
        }, {
            readonly internalType: "contract IHasher";
            readonly name: "_hasher";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "FIELD_SIZE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ROOT_HISTORY_SIZE";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ZERO_VALUE";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "currentRootIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "filledSubtrees";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getLastRoot";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IHasher";
            readonly name: "_hasher";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_left";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_right";
            readonly type: "bytes32";
        }];
        readonly name: "hashLeftRight";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "hasher";
        readonly outputs: readonly [{
            readonly internalType: "contract IHasher";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_root";
            readonly type: "bytes32";
        }];
        readonly name: "isKnownRoot";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "levels";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "nextIndex";
        readonly outputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "";
            readonly type: "uint32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "roots";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "zeros";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): MerkleTreeWithHistoryInterface;
    static connect(address: string, runner?: ContractRunner | null): MerkleTreeWithHistory;
}
export {};
