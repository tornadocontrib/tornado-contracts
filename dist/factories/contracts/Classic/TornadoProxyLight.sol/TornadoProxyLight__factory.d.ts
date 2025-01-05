import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TornadoProxyLight, TornadoProxyLightInterface } from "../../../../contracts/Classic/TornadoProxyLight.sol/TornadoProxyLight";
type TornadoProxyLightConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TornadoProxyLight__factory extends ContractFactory {
    constructor(...args: TornadoProxyLightConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TornadoProxyLight & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TornadoProxyLight__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506104f6806100206000396000f3fe6080604052600436106100345760003560e01c806313d98d13146100395780636485ba2a1461004e578063b438689f1461006e575b600080fd5b61004c6100473660046102c7565b610081565b005b34801561005a57600080fd5b5061004c610069366004610258565b61012a565b61004c61007c366004610321565b610198565b60405163b214faa560e01b81526001600160a01b0385169063b214faa59034906100af9087906004016103ec565b6000604051808303818588803b1580156100c857600080fd5b505af11580156100dc573d6000803e3d6000fd5b5050505050336001600160a01b03167ffa28df43db3553771f7209dcef046f3bdfea15870ab625dcda30ac58b82b4008838360405161011c9291906103f5565b60405180910390a250505050565b60005b8181101561019357337ffa28df43db3553771f7209dcef046f3bdfea15870ab625dcda30ac58b82b400884848481811061016357fe5b90506020028101906101759190610463565b6040516101839291906103f5565b60405180910390a260010161012d565b505050565b6040516310d056db60e11b81526001600160a01b038a16906321a0adb69034906101d4908c908c908c908c908c908c908c908c90600401610411565b6000604051808303818588803b1580156101ed57600080fd5b505af1158015610201573d6000803e3d6000fd5b5050505050505050505050505050565b60008083601f840112610222578182fd5b50813567ffffffffffffffff811115610239578182fd5b60208301915083602082850101111561025157600080fd5b9250929050565b6000806020838503121561026a578182fd5b823567ffffffffffffffff80821115610281578384fd5b818501915085601f830112610294578384fd5b8135818111156102a2578485fd5b86602080830285010111156102b5578485fd5b60209290920196919550909350505050565b600080600080606085870312156102dc578182fd5b84356102e7816104a8565b935060208501359250604085013567ffffffffffffffff811115610309578283fd5b61031587828801610211565b95989497509550505050565b60008060008060008060008060006101008a8c03121561033f578485fd5b893561034a816104a8565b985060208a013567ffffffffffffffff811115610365578586fd5b6103718c828d01610211565b90995097505060408a0135955060608a0135945060808a0135610393816104a8565b935060a08a01356103a3816104a8565b8093505060c08a0135915060e08a013590509295985092959850929598565b60008284528282602086013780602084860101526020601f19601f85011685010190509392505050565b90815260200190565b6000602082526104096020830184866103c2565b949350505050565b600060e0825261042560e083018a8c6103c2565b60208301989098525060408101959095526001600160a01b03938416606086015291909216608084015260a083019190915260c09091015292915050565b6000808335601e19843603018112610479578283fd5b83018035915067ffffffffffffffff821115610493578283fd5b60200191503681900382131561025157600080fd5b6001600160a01b03811681146104bd57600080fd5b5056fea2646970667358221220e2ccd720d0fc72187047e9b2ff415467e5c1551d2754933865924e1fc6c5f84e64736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "encryptedNote";
            readonly type: "bytes";
        }];
        readonly name: "EncryptedNote";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes[]";
            readonly name: "_encryptedNotes";
            readonly type: "bytes[]";
        }];
        readonly name: "backupNotes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITornadoInstance";
            readonly name: "_tornado";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_commitment";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "_encryptedNote";
            readonly type: "bytes";
        }];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract ITornadoInstance";
            readonly name: "_tornado";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "_proof";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_root";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "_nullifierHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address payable";
            readonly name: "_recipient";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_relayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_fee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "_refund";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): TornadoProxyLightInterface;
    static connect(address: string, runner?: ContractRunner | null): TornadoProxyLight;
}
export {};
