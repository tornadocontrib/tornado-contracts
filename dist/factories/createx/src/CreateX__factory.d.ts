import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { CreateX, CreateXInterface } from "../../../createx/src/CreateX";
type CreateXConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CreateX__factory extends ContractFactory {
    constructor(...args: CreateXConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<CreateX & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): CreateX__factory;
    static readonly bytecode = "0x60a06040523060805234801561001457600080fd5b506080516120436100d8600039600081816104cd015281816105b501528181610668015281816106ce01528181610af601528181610bc001528181610c0501528181610c3701528181610cb201528181610d6501528181610f3101528181610f7601528181610fa8015281816110230152818161111801528181611285015281816112ca015281816112fc015281816113770152818161146d01528181611638015281816116fe015281816117a60152818161184c01526118cf01526120436000f3fe60806040526004361061014a5760003560e01c806381503da1116100b6578063d323826a1161006f578063d323826a14610302578063ddda0acb14610322578063e437252a14610335578063e96deee414610348578063f5745aba1461035b578063f96644981461036e57600080fd5b806381503da114610283578063890c283b1461029657806398e81077146102b65780639c36a286146102c9578063a7db93f2146102dc578063c3fe107b146102ef57600080fd5b80632f990e3f116101085780632f990e3f146101ea57806331a7c8c8146101fd57806342d654fc146102105780636cec25361461023057806374637a7a146102505780637f5653601461027057600080fd5b8062d84acb1461014f578063263076681461017e57806326a32fc71461019157806327fe1822146101a45780632852527a146101b757806328ddd046146101ca575b600080fd5b61016261015d366004611b45565b610381565b6040516001600160a01b03909116815260200160405180910390f35b61016261018c366004611bc3565b610399565b61016261019f366004611c09565b6103f8565b6101626101b2366004611c09565b610411565b6101626101c5366004611c59565b61044d565b3480156101d657600080fd5b506101626101e5366004611caf565b6105ae565b6101626101f8366004611cc8565b6105da565b61016261020b366004611cc8565b6105f8565b34801561021c57600080fd5b5061016261022b366004611d3c565b610606565b34801561023c57600080fd5b5061016261024b366004611caf565b610660565b34801561025c57600080fd5b5061016261026b366004611d68565b61068c565b61016261027e366004611c09565b610abf565b610162610291366004611d92565b610ad2565b3480156102a257600080fd5b506101626102b1366004611dc9565b610aed565b6101626102c4366004611deb565b610b1a565b6101626102d7366004611bc3565b610cf7565b6101626102ea366004611e65565b610e6a565b6101626102fd366004611cc8565b61106a565b34801561030e57600080fd5b5061016261031d366004611ef4565b611080565b610162610330366004611e65565b6110aa565b610162610343366004611deb565b6113c0565b610162610356366004611b45565b6113d6565b610162610369366004611deb565b6113e5565b61016261037c366004611d92565b6113fb565b600061039085858585336110aa565b95945050505050565b6000806103a584611533565b90508083516020850134f591506103bb8261176c565b60405181906001600160a01b038416907fb8fda7e00c6b06a2b54e58521bc5894fee35f1090e5a3bb6390bfe2b98b497f790600090a35092915050565b600061040b6104056117d6565b83610399565b92915050565b600081516020830134f090506104268161176c565b6040516001600160a01b03821690600080516020611fee83398151915290600090a2919050565b60008061045985611533565b905060008460601b9050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b6028820152826037826000f59350506001600160a01b0383166104ff5760405163602e773d60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024015b60405180910390fd5b60405182906001600160a01b038516907fb8fda7e00c6b06a2b54e58521bc5894fee35f1090e5a3bb6390bfe2b98b497f790600090a3600080846001600160a01b031634876040516105519190611f44565b60006040518083038185875af1925050503d806000811461058e576040519150601f19603f3d011682016040523d82523d6000602084013e610593565b606091505b50915091506105a3828289611830565b505050509392505050565b600061040b7f00000000000000000000000000000000000000000000000000000000000000008361068c565b60006105f06105e76117d6565b858585336110aa565b949350505050565b60006105f084848433610b1a565b60006040518260005260ff600b53836020527f21c35dbe1b344a2488cf3321d6ce542f8e9f305544ff09e4993a62319a497c1f6040526055600b20601452806040525061d694600052600160345350506017601e20919050565b600061040b827f0000000000000000000000000000000000000000000000000000000000000000610606565b60006060602560fa1b6106a760016001600160401b03611f60565b6001600160401b03168411156106fb57604051633c55ab3b60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024016104f6565b8360000361075857604051606b60f91b60208201526001600160f81b0319821660218201526001600160601b0319606087901b166022820152600160ff1b60368201526037015b6040516020818303038152906040529150610aaf565b607f84116107a557604051606b60f91b60208201526001600160f81b031980831660218301526001600160601b0319606088901b16602283015260f886901b166036820152603701610742565b60ff84116107fc5760405160d760f81b60208201526001600160f81b031980831660218301526001600160601b0319606088901b166022830152608160f81b603683015260f886901b166037820152603801610742565b61ffff841161085c57604051601b60fb1b60208201526001600160f81b0319821660218201526001600160601b0319606087901b166022820152604160f91b60368201526001600160f01b031960f086901b166037820152603901610742565b62ffffff84116108bd5760405160d960f81b60208201526001600160f81b0319821660218201526001600160601b0319606087901b166022820152608360f81b60368201526001600160e81b031960e886901b166037820152603a01610742565b63ffffffff841161091f57604051606d60f91b60208201526001600160f81b0319821660218201526001600160601b0319606087901b166022820152602160fa1b60368201526001600160e01b031960e086901b166037820152603b01610742565b64ffffffffff84116109825760405160db60f81b60208201526001600160f81b0319821660218201526001600160601b0319606087901b166022820152608560f81b60368201526001600160d81b031960d886901b166037820152603c01610742565b65ffffffffffff84116109e657604051603760fa1b60208201526001600160f81b0319821660218201526001600160601b0319606087901b166022820152604360f91b60368201526001600160d01b031960d086901b166037820152603d01610742565b66ffffffffffffff8411610a4b5760405160dd60f81b60208201526001600160f81b0319821660218201526001600160601b0319606087901b166022820152608760f81b60368201526001600160c81b031960c886901b166037820152603e01610742565b604051606f60f91b60208201526001600160f81b0319821660218201526001600160601b0319606087901b166022820152601160fb1b60368201526001600160c01b031960c086901b166037820152603f0160405160208183030381529060405291505b5080516020909101209392505050565b600061040b610acc6117d6565b83610cf7565b6000610ae6610adf6117d6565b848461044d565b9392505050565b6000610ae683837f0000000000000000000000000000000000000000000000000000000000000000611080565b60008451602086018451f09050610b308161176c565b6040516001600160a01b03821690600080516020611fee83398151915290600090a2600080826001600160a01b0316856020015187604051610b729190611f44565b60006040518083038185875af1925050503d8060008114610baf576040519150601f19603f3d011682016040523d82523d6000602084013e610bb4565b606091505b509150915081610bfb577f00000000000000000000000000000000000000000000000000000000000000008160405163a57ca23960e01b81526004016104f6929190611f95565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163115610ced57836001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163160405160006040518083038185875af1925050503d8060008114610ca0576040519150601f19603f3d011682016040523d82523d6000602084013e610ca5565b606091505b50909250905081610ced577f00000000000000000000000000000000000000000000000000000000000000008160405163c2b3f44560e01b81526004016104f6929190611f95565b5050949350505050565b600080610d0384611533565b905060006040518060400160405280601081526020016f67363d3d37363d34f03d5260086018f360801b81525090506000828251602084016000f590506001600160a01b038116610d925760405163602e773d60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024016104f6565b60405183906001600160a01b038316907f2feea65dd4e9f9cbd86b74b7734210c59a1b2981b5b137bd0ee3e208200c906790600090a3610dd183610660565b93506000816001600160a01b03163487604051610dee9190611f44565b60006040518083038185875af1925050503d8060008114610e2b576040519150601f19603f3d011682016040523d82523d6000602084013e610e30565b606091505b50509050610e3e818661188c565b6040516001600160a01b03861690600080516020611fee83398151915290600090a25050505092915050565b600080610e7687611533565b9050808651602088018651f59150610e8d8261176c565b60405181906001600160a01b038416907fb8fda7e00c6b06a2b54e58521bc5894fee35f1090e5a3bb6390bfe2b98b497f790600090a3600080836001600160a01b0316866020015188604051610ee39190611f44565b60006040518083038185875af1925050503d8060008114610f20576040519150601f19603f3d011682016040523d82523d6000602084013e610f25565b606091505b509150915081610f6c577f00000000000000000000000000000000000000000000000000000000000000008160405163a57ca23960e01b81526004016104f6929190611f95565b6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016311561105e57846001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163160405160006040518083038185875af1925050503d8060008114611011576040519150601f19603f3d011682016040523d82523d6000602084013e611016565b606091505b5090925090508161105e577f00000000000000000000000000000000000000000000000000000000000000008160405163c2b3f44560e01b81526004016104f6929190611f95565b50505095945050505050565b60006105f06110776117d6565b85858533610e6a565b6000604051836040820152846020820152828152600b8101905060ff815360559020949350505050565b6000806110b687611533565b905060006040518060400160405280601081526020016f67363d3d37363d34f03d5260086018f360801b81525090506000828251602084016000f590506001600160a01b0381166111455760405163602e773d60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024016104f6565b60405183906001600160a01b038316907f2feea65dd4e9f9cbd86b74b7734210c59a1b2981b5b137bd0ee3e208200c906790600090a361118483610660565b93506000816001600160a01b031687600001518a6040516111a59190611f44565b60006040518083038185875af1925050503d80600081146111e2576040519150601f19603f3d011682016040523d82523d6000602084013e6111e7565b606091505b505090506111f5818661188c565b6040516001600160a01b03861690600080516020611fee83398151915290600090a26060856001600160a01b031688602001518a6040516112369190611f44565b60006040518083038185875af1925050503d8060008114611273576040519150601f19603f3d011682016040523d82523d6000602084013e611278565b606091505b509092509050816112c0577f00000000000000000000000000000000000000000000000000000000000000008160405163a57ca23960e01b81526004016104f6929190611f95565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001631156113b257866001600160a01b03167f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163160405160006040518083038185875af1925050503d8060008114611365576040519150601f19603f3d011682016040523d82523d6000602084013e61136a565b606091505b509092509050816113b2577f00000000000000000000000000000000000000000000000000000000000000008160405163c2b3f44560e01b81526004016104f6929190611f95565b505050505095945050505050565b60006103906113cd6117d6565b86868686610e6a565b60006103908585858533610e6a565b60006103906113f26117d6565b868686866110aa565b6000808360601b9050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09250506001600160a01b03821661149a5760405163602e773d60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024016104f6565b6040516001600160a01b03831690600080516020611fee83398151915290600090a2600080836001600160a01b031634866040516114d89190611f44565b60006040518083038185875af1925050503d8060008114611515576040519150601f19603f3d011682016040523d82523d6000602084013e61151a565b606091505b509150915061152a828288611830565b50505092915050565b600080600061154184611900565b9092509050600082600281111561155a5761155a611fd7565b1480156115785750600081600281111561157657611576611fd7565b145b156115b65760408051336020820152469181019190915260608101859052608001604051602081830303815290604052805190602001209250611765565b60008260028111156115ca576115ca611fd7565b1480156115e8575060018160028111156115e6576115e6611fd7565b145b1561160857611601338560009182526020526040902090565b9250611765565b600082600281111561161c5761161c611fd7565b03611665576040516313b3a2a160e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024016104f6565b600182600281111561167957611679611fd7565b1480156116975750600081600281111561169557611695611fd7565b145b156116b057611601468560009182526020526040902090565b60018260028111156116c4576116c4611fd7565b1480156116e2575060028160028111156116e0576116e0611fd7565b145b1561172b576040516313b3a2a160e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024016104f6565b6117336117d6565b840361173f5783611762565b604080516020810186905201604051602081830303815290604052805190602001205b92505b5050919050565b6001600160a01b038116158061178a57506001600160a01b0381163b155b156117d35760405163602e773d60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024016104f6565b50565b6040805143601f198101406020830152419282019290925260608101919091524260808201524460a08201524660c08201523360e08201526000906101000160405160208183030381529060405280519060200120905090565b82158061184557506001600160a01b0381163b155b15611887577f00000000000000000000000000000000000000000000000000000000000000008260405163a57ca23960e01b81526004016104f6929190611f95565b505050565b8115806118a057506001600160a01b038116155b806118b357506001600160a01b0381163b155b156118fc5760405163602e773d60e11b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001660048201526024016104f6565b5050565b600080606083901c3314801561192957508260141a60f81b6001600160f81b031916600160f81b145b1561193957506000905080915091565b606083901c3314801561195b57506001600160f81b0319601484901a60f81b16155b1561196c5750600090506001915091565b33606084901c036119835750600090506002915091565b606083901c1580156119a857508260141a60f81b6001600160f81b031916600160f81b145b156119b95750600190506000915091565b606083901c1580156119da57506001600160f81b0319601484901a60f81b16155b156119ea57506001905080915091565b606083901c6119ff5750600190506002915091565b8260141a60f81b6001600160f81b031916600160f81b03611a265750600290506000915091565b8260141a60f81b6001600160f81b031916600003611a4a5750600290506001915091565b506002905080915091565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611a7c57600080fd5b81356001600160401b0380821115611a9657611a96611a55565b604051601f8301601f19908116603f01168101908282118183101715611abe57611abe611a55565b81604052838152866020858801011115611ad757600080fd5b836020870160208301376000602085830101528094505050505092915050565b600060408284031215611b0957600080fd5b604051604081018181106001600160401b0382111715611b2b57611b2b611a55565b604052823581526020928301359281019290925250919050565b60008060008060a08587031215611b5b57600080fd5b8435935060208501356001600160401b0380821115611b7957600080fd5b611b8588838901611a6b565b94506040870135915080821115611b9b57600080fd5b50611ba887828801611a6b565b925050611bb88660608701611af7565b905092959194509250565b60008060408385031215611bd657600080fd5b8235915060208301356001600160401b03811115611bf357600080fd5b611bff85828601611a6b565b9150509250929050565b600060208284031215611c1b57600080fd5b81356001600160401b03811115611c3157600080fd5b6105f084828501611a6b565b80356001600160a01b0381168114611c5457600080fd5b919050565b600080600060608486031215611c6e57600080fd5b83359250611c7e60208501611c3d565b915060408401356001600160401b03811115611c9957600080fd5b611ca586828701611a6b565b9150509250925092565b600060208284031215611cc157600080fd5b5035919050565b600080600060808486031215611cdd57600080fd5b83356001600160401b0380821115611cf457600080fd5b611d0087838801611a6b565b94506020860135915080821115611d1657600080fd5b50611d2386828701611a6b565b925050611d338560408601611af7565b90509250925092565b60008060408385031215611d4f57600080fd5b82359150611d5f60208401611c3d565b90509250929050565b60008060408385031215611d7b57600080fd5b611d8483611c3d565b946020939093013593505050565b60008060408385031215611da557600080fd5b611dae83611c3d565b915060208301356001600160401b03811115611bf357600080fd5b60008060408385031215611ddc57600080fd5b50508035926020909101359150565b60008060008060a08587031215611e0157600080fd5b84356001600160401b0380821115611e1857600080fd5b611e2488838901611a6b565b95506020870135915080821115611e3a57600080fd5b50611e4787828801611a6b565b935050611e578660408701611af7565b9150611bb860808601611c3d565b600080600080600060c08688031215611e7d57600080fd5b8535945060208601356001600160401b0380821115611e9b57600080fd5b611ea789838a01611a6b565b95506040880135915080821115611ebd57600080fd5b50611eca88828901611a6b565b935050611eda8760608801611af7565b9150611ee860a08701611c3d565b90509295509295909350565b600080600060608486031215611f0957600080fd5b8335925060208401359150611d3360408501611c3d565b60005b83811015611f3b578181015183820152602001611f23565b50506000910152565b60008251611f56818460208701611f20565b9190910192915050565b6001600160401b03828116828216039080821115611f8e57634e487b7160e01b600052601160045260246000fd5b5092915050565b60018060a01b03831681526040602082015260008251806040840152611fc2816060850160208701611f20565b601f01601f1916919091016060019392505050565b634e487b7160e01b600052602160045260246000fdfe4db17dd5e4732fb6da34a148104a592783ca119a1e7bb8829eba6cbadef0b511a2646970667358221220be729583c75a85e162df8e344338e3a8181e60985f9998ad51d63d579e4aef1764736f6c63430008170033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }];
        readonly name: "FailedContractCreation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "revertData";
            readonly type: "bytes";
        }];
        readonly name: "FailedContractInitialisation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "revertData";
            readonly type: "bytes";
        }];
        readonly name: "FailedEtherTransfer";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }];
        readonly name: "InvalidNonceValue";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "emitter";
            readonly type: "address";
        }];
        readonly name: "InvalidSalt";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "ContractCreation";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly name: "ContractCreation";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "Create3ProxyContractCreation";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "initCodeHash";
            readonly type: "bytes32";
        }];
        readonly name: "computeCreate2Address";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "computedAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "initCodeHash";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "deployer";
            readonly type: "address";
        }];
        readonly name: "computeCreate2Address";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "computedAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "deployer";
            readonly type: "address";
        }];
        readonly name: "computeCreate3Address";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "computedAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "computeCreate3Address";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "computedAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly name: "computeCreateAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "computedAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "deployer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }];
        readonly name: "computeCreateAddress";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "computedAddress";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }];
        readonly name: "deployCreate";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }];
        readonly name: "deployCreate2";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }];
        readonly name: "deployCreate2";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "deployCreate2AndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }];
        readonly name: "deployCreate2AndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "deployCreate2AndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }];
        readonly name: "deployCreate2AndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "deployCreate2Clone";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "deployCreate2Clone";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }];
        readonly name: "deployCreate3";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }];
        readonly name: "deployCreate3";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }];
        readonly name: "deployCreate3AndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }];
        readonly name: "deployCreate3AndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "deployCreate3AndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "deployCreate3AndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }];
        readonly name: "deployCreateAndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "constructorAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "initCallAmount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct CreateX.Values";
            readonly name: "values";
            readonly type: "tuple";
        }, {
            readonly internalType: "address";
            readonly name: "refundAddress";
            readonly type: "address";
        }];
        readonly name: "deployCreateAndInit";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "newContract";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "implementation";
            readonly type: "address";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "deployCreateClone";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "proxy";
            readonly type: "address";
        }];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): CreateXInterface;
    static connect(address: string, runner?: ContractRunner | null): CreateX;
}
export {};
