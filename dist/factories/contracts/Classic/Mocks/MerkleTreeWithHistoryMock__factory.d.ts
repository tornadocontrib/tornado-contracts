import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { MerkleTreeWithHistoryMock, MerkleTreeWithHistoryMockInterface } from "../../../../contracts/Classic/Mocks/MerkleTreeWithHistoryMock";
type MerkleTreeWithHistoryMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MerkleTreeWithHistoryMock__factory extends ContractFactory {
    constructor(...args: MerkleTreeWithHistoryMockConstructorParams);
    getDeployTransaction(_treeLevels: BigNumberish, _hasher: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_treeLevels: BigNumberish, _hasher: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MerkleTreeWithHistoryMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MerkleTreeWithHistoryMock__factory;
    static readonly bytecode = "0x60c0604052600380546001600160401b031916905534801561002057600080fd5b50604051610e43380380610e4383398101604081905261003f91610389565b818160008263ffffffff16116100a85760405162461bcd60e51b815260206004820152602360248201527f5f6c6576656c732073686f756c642062652067726561746572207468616e207a60448201526265726f60e81b60648201526084015b60405180910390fd5b60208263ffffffff16106100fe5760405162461bcd60e51b815260206004820152601e60248201527f5f6c6576656c732073686f756c64206265206c657373207468616e2033320000604482015260640161009f565b63ffffffff821660a0526001600160a01b0381166080527f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c60005b8363ffffffff168163ffffffff1610156101865763ffffffff8116600090815260016020908152604080832085905590829052902082905561017c8383806101bc565b9150600101610139565b506000805260026020527fac33ff75c19e70fe83507db0d683fd3465c996598dc972688b7ace676c89077b55506103fc92505050565b6000600080516020610e23833981519152831061021b5760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c64604482015260640161009f565b600080516020610e2383398151915282106102825760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b606482015260840161009f565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156102d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102f591906103d8565b9092509050600080516020610e2383398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa15801561035a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061037e91906103d8565b509695505050505050565b6000806040838503121561039c57600080fd5b825163ffffffff811681146103b057600080fd5b60208401519092506001600160a01b03811681146103cd57600080fd5b809150509250929050565b600080604083850312156103eb57600080fd5b505080516020909101519092909150565b60805160a0516109ed610436600039600081816101310152818161052701526105c901526000818161023f015261066101526109ed6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c8063c2b40ae41161008c578063ec73295911610066578063ec73295914610213578063ed33639f1461023a578063f178e47c14610279578063fc7e9c6f1461029957600080fd5b8063c2b40ae4146101cb578063cd87a3b4146101eb578063e8295588146101f357600080fd5b80636d9833e3116100c85780636d9833e3146101685780638ea3099e1461018b57806390eeb02b1461019e578063ba70f757146101ae57600080fd5b80632d287e43146100ef578063414a37ba146101045780634ecf518b1461012c575b600080fd5b6101026100fd36600461072c565b6102b1565b005b61011960008051602061099883398151915281565b6040519081526020015b60405180910390f35b6101537f000000000000000000000000000000000000000000000000000000000000000081565b60405163ffffffff9091168152602001610123565b61017b61017636600461072c565b6102be565b6040519015158152602001610123565b610119610199366004610745565b61033c565b6003546101539063ffffffff1681565b60035463ffffffff16600090815260026020526040902054610119565b6101196101d936600461072c565b60026020526000908152604090205481565b610153601e81565b61011961020136600461072c565b60016020526000908152604090205481565b6101197f2fe54c60d3acabf3343a35b6eba15db4821b340f76e741e2249685ed4899af6c81565b6102617f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610123565b61011961028736600461072c565b60006020819052908152604090205481565b60035461015390640100000000900463ffffffff1681565b6102ba8161050e565b5050565b60008181036102cf57506000919050565b60035463ffffffff16805b63ffffffff81166000908152600260205260409020548403610300575060019392505050565b8063ffffffff166000036103125750601e5b8061031c8161079c565b9150508163ffffffff168163ffffffff16036102da575060009392505050565b600060008051602061099883398151915283106103a05760405162461bcd60e51b815260206004820181905260248201527f5f6c6566742073686f756c6420626520696e7369646520746865206669656c6460448201526064015b60405180910390fd5b60008051602061099883398151915282106104075760405162461bcd60e51b815260206004820152602160248201527f5f72696768742073686f756c6420626520696e7369646520746865206669656c6044820152601960fa1b6064820152608401610397565b60405163f47d33b560e01b81526004810184905260006024820181905284916001600160a01b0387169063f47d33b5906044016040805180830381865afa158015610456573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047a91906107bc565b909250905060008051602061099883398151915284830860405163f47d33b560e01b815260048101829052602481018390529092506001600160a01b0387169063f47d33b5906044016040805180830381865afa1580156104df573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061050391906107bc565b509695505050505050565b600354600090640100000000900463ffffffff1661054d7f0000000000000000000000000000000000000000000000000000000000000000600261090c565b63ffffffff168163ffffffff16036105c05760405162461bcd60e51b815260206004820152603060248201527f4d65726b6c6520747265652069732066756c6c2e204e6f206d6f7265206c656160448201526f1d995cc818d85b88189948185919195960821b6064820152608401610397565b8083600080805b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff168163ffffffff16101561069e5761060660028661092b565b63ffffffff166000036106405763ffffffff811660009081526001602090815260408083205491839052909120859055849350915061065c565b63ffffffff811660009081526020819052604090205492508391505b6106877f0000000000000000000000000000000000000000000000000000000000000000848461033c565b9350610694600286610953565b94506001016105c7565b50600354600090601e906106b99063ffffffff16600161097b565b6106c3919061092b565b6003805463ffffffff191663ffffffff8316908117909155600090815260026020526040902085905590506106f986600161097b565b6003805463ffffffff929092166401000000000267ffffffff000000001990921691909117905550939695505050505050565b60006020828403121561073e57600080fd5b5035919050565b60008060006060848603121561075a57600080fd5b83356001600160a01b038116811461077157600080fd5b95602085013595506040909401359392505050565b634e487b7160e01b600052601160045260246000fd5b600063ffffffff8216806107b2576107b2610786565b6000190192915050565b600080604083850312156107cf57600080fd5b505080516020909101519092909150565b634e487b7160e01b600052601260045260246000fd5b6001815b60018411156108315780850481111561081557610815610786565b600184161561082357908102905b60019390931c9280026107fa565b935093915050565b60008261084857506001610906565b8161085557506000610906565b816001811461086b5760028114610875576108a6565b6001915050610906565b60ff84111561088657610886610786565b6001841b915063ffffffff8211156108a0576108a0610786565b50610906565b5060208310610133831016604e8410600b84101617156108dd575081810a63ffffffff8111156108d8576108d8610786565b610906565b6108ec63ffffffff84846107f6565b8063ffffffff0482111561090257610902610786565b0290505b92915050565b600061092463ffffffff841663ffffffff8416610839565b9392505050565b600063ffffffff831680610941576109416107e0565b8063ffffffff84160691505092915050565b600063ffffffff831680610969576109696107e0565b8063ffffffff84160491505092915050565b63ffffffff81811683821601908111156109065761090661078656fe30644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001a2646970667358221220d4af2da17834eee5c4dc18614acb3b0fdfdd29ac766eb65a8d0826d4773a4afb64736f6c634300081c003330644e72e131a029b85045b68181585d2833e84879b9709143e1f593f0000001";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint32";
            readonly name: "_treeLevels";
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
            readonly name: "_leaf";
            readonly type: "bytes32";
        }];
        readonly name: "insert";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
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
    static createInterface(): MerkleTreeWithHistoryMockInterface;
    static connect(address: string, runner?: ContractRunner | null): MerkleTreeWithHistoryMock;
}
export {};
