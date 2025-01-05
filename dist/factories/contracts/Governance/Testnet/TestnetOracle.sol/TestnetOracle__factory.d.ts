import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { TestnetOracle, TestnetOracleInterface } from "../../../../../contracts/Governance/Testnet/TestnetOracle.sol/TestnetOracle";
type TestnetOracleConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TestnetOracle__factory extends ContractFactory {
    constructor(...args: TestnetOracleConstructorParams);
    getDeployTransaction(_stablecoin: AddressLike, _stablecoinOracle: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_stablecoin: AddressLike, _stablecoinOracle: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TestnetOracle & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TestnetOracle__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50604051610905380380610905833981016040819052602c9160a7565b600080546001600160a01b039384166001600160a01b0319918216811783558252600260209081526040808420805460ff1916600190811790915590915290912080549290931691811691909117909155600480549091163317905560d5565b80516001600160a01b038116811460a257600080fd5b919050565b6000806040838503121560b957600080fd5b60c083608c565b915060cc60208401608c565b90509250929050565b610821806100e46000396000f3fe608060405234801561001057600080fd5b506004361061009e5760003560e01c8063d16c130711610066578063d16c130714610165578063dd01555214610178578063dd3a825a1461018b578063df60d05a1461019e578063e9cbd822146101be57600080fd5b80631a650cc7146100a35780636a75aa66146100db5780637de4fd101461011c5780638da5cb5b1461013d578063a6f9dae114610150575b600080fd5b6100c66100b1366004610566565b60026020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b6101046100e9366004610566565b6001602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016100d2565b61012f61012a366004610598565b6101d1565b6040519081526020016100d2565b600454610104906001600160a01b031681565b61016361015e366004610566565b610320565b005b6101636101733660046105cb565b61036d565b61012f610186366004610566565b6103f1565b61016361019936600461060e565b610503565b61012f6101ac366004610566565b60036020526000908152604090205481565b600054610104906001600160a01b031681565b6001600160a01b0382811660009081526001602052604081205490911661021157506001600160a01b03821660009081526003602052604090205461031a565b6000836001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610251573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102759190610638565b6001600160a01b03851660009081526002602052604090205490915060ff16156102ca576102a4816012610671565b6102af90600a610771565b6102b8856103f1565b6102c29190610780565b91505061031a565b600080546102e0906001600160a01b03166103f1565b90506102eb856103f1565b6102f6836024610671565b61030190600a610771565b61030b9083610780565b6103159190610797565b925050505b92915050565b6004546001600160a01b0316331461034b576040516330cd747160e01b815260040160405180910390fd5b600480546001600160a01b0319166001600160a01b0392909216919091179055565b6004546001600160a01b03163314610398576040516330cd747160e01b815260040160405180910390fd5b80156103c2576001600160a01b0383166000908152600260205260409020805460ff191660011790555b506001600160a01b03918216600090815260016020526040902080546001600160a01b03191691909216179055565b6001600160a01b03808216600090815260016020908152604080832054815163313ce56760e01b815291519394169284928392859263313ce567926004808401939192918290030181865afa15801561044e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104729190610638565b836001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156104b0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104d491906107b9565b9092509050806104e58360126107d2565b6104f090600a610771565b6104fa9190610797565b95945050505050565b6004546001600160a01b0316331461052e576040516330cd747160e01b815260040160405180910390fd5b6001600160a01b03909116600090815260036020526040902055565b80356001600160a01b038116811461056157600080fd5b919050565b60006020828403121561057857600080fd5b6105818261054a565b9392505050565b8035801515811461056157600080fd5b600080604083850312156105ab57600080fd5b6105b48361054a565b91506105c260208401610588565b90509250929050565b6000806000606084860312156105e057600080fd5b6105e98461054a565b92506105f76020850161054a565b915061060560408501610588565b90509250925092565b6000806040838503121561062157600080fd5b61062a8361054a565b946020939093013593505050565b60006020828403121561064a57600080fd5b815160ff8116811461058157600080fd5b634e487b7160e01b600052601160045260246000fd5b60ff828116828216039081111561031a5761031a61065b565b6001815b60018411156106c5578085048111156106a9576106a961065b565b60018416156106b757908102905b60019390931c92800261068e565b935093915050565b6000826106dc5750600161031a565b816106e95750600061031a565b81600181146106ff576002811461070957610725565b600191505061031a565b60ff84111561071a5761071a61065b565b50506001821b61031a565b5060208310610133831016604e8410600b8410161715610748575081810a61031a565b610755600019848461068a565b80600019048211156107695761076961065b565b029392505050565b600061058160ff8416836106cd565b808202811582820484141761031a5761031a61065b565b6000826107b457634e487b7160e01b600052601260045260246000fd5b500490565b6000602082840312156107cb57600080fd5b5051919050565b60ff818116838216019081111561031a5761031a61065b56fea2646970667358221220d8077a87fffbcb622e0db5525eec8ca5f91f53995db17f8ef4620a54879ba91664736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_stablecoin";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_stablecoinOracle";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "NotOwner";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "arbitraryPrice";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "chainlinkOracles";
        readonly outputs: readonly [{
            readonly internalType: "contract IChainlinkOracle";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }];
        readonly name: "changeArbitraryPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "newOwner";
            readonly type: "address";
        }];
        readonly name: "changeOwner";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }];
        readonly name: "getOracleUSD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "srcToken";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "useSrcWrappers";
            readonly type: "bool";
        }];
        readonly name: "getRateToEth";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "isStablecoin";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "owner";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "token";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "oracle";
            readonly type: "address";
        }, {
            readonly internalType: "bool";
            readonly name: "_isStablecoin";
            readonly type: "bool";
        }];
        readonly name: "setOracle";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "stablecoin";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): TestnetOracleInterface;
    static connect(address: string, runner?: ContractRunner | null): TestnetOracle;
}
export {};
