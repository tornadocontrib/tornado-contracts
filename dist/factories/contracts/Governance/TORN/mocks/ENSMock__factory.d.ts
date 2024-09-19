import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { ENSMock, ENSMockInterface } from "../../../../../contracts/Governance/TORN/mocks/ENSMock";
type ENSMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ENSMock__factory extends ContractFactory {
    constructor(...args: ENSMockConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ENSMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): ENSMock__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b5061044b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630178b8bf1461005c5780633b3b57de146100855780637ef5029814610098578063ac9650d8146100ab578063d5fa2b00146100cb575b600080fd5b61006f61006a3660046102bc565b6100e0565b60405161007c919061031e565b60405180910390f35b61006f6100933660046102bc565b6100e5565b61006f6100a63660046102bc565b610100565b6100be6100b936600461024d565b61011b565b60405161007c9190610332565b6100de6100d93660046102d4565b61021f565b005b503090565b6000908152602081905260409020546001600160a01b031690565b6000602081905290815260409020546001600160a01b031681565b60608167ffffffffffffffff8111801561013457600080fd5b5060405190808252806020026020018201604052801561016857816020015b60608152602001906001900390816101535790505b50905060005b8281101561021857600060603086868581811061018757fe5b905060200281019061019991906103c9565b6040516101a792919061030e565b600060405180830381855af49150503d80600081146101e2576040519150601f19603f3d011682016040523d82523d6000602084013e6101e7565b606091505b5091509150816101f657600080fd5b8084848151811061020357fe5b6020908102919091010152505060010161016e565b5092915050565b60009182526020829052604090912080546001600160a01b0319166001600160a01b03909216919091179055565b6000806020838503121561025f578182fd5b823567ffffffffffffffff80821115610276578384fd5b818501915085601f830112610289578384fd5b813581811115610297578485fd5b86602080830285010111156102aa578485fd5b60209290920196919550909350505050565b6000602082840312156102cd578081fd5b5035919050565b600080604083850312156102e6578182fd5b8235915060208301356001600160a01b0381168114610303578182fd5b809150509250929050565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b6000602080830181845280855180835260408601915060408482028701019250838701855b828110156103bc57878503603f1901845281518051808752885b8181101561038c578281018901518882018a01528801610371565b8181111561039c578989838a0101525b50601f01601f191695909501860194509285019290850190600101610357565b5092979650505050505050565b6000808335601e198436030181126103df578283fd5b83018035915067ffffffffffffffff8211156103f9578283fd5b60200191503681900382131561040e57600080fd5b925092905056fea26469706673582212202e44de42b72aec6265acc191876b290bc887c846ffca216ac5d28a16fd49092564736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_node";
            readonly type: "bytes32";
        }];
        readonly name: "addr";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "data";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "results";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "registry";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly name: "resolver";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "_node";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "_addr";
            readonly type: "address";
        }];
        readonly name: "setAddr";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): ENSMockInterface;
    static connect(address: string, runner?: ContractRunner | null): ENSMock;
}
export {};
