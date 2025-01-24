import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { TimelockController, TimelockControllerInterface } from "../../../../@openzeppelin/contracts/governance/TimelockController";
type TimelockControllerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TimelockController__factory extends ContractFactory {
    constructor(...args: TimelockControllerConstructorParams);
    getDeployTransaction(minDelay: BigNumberish, proposers: AddressLike[], executors: AddressLike[], admin: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(minDelay: BigNumberish, proposers: AddressLike[], executors: AddressLike[], admin: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TimelockController & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TimelockController__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50604051611df4380380611df483398101604081905261002f91610305565b61003a600030610181565b506001600160a01b0381161561005757610055600082610181565b505b60005b83518110156100ec576100ac7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc185838151811061009957610099610389565b602002602001015161018160201b60201c565b506100e37ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78385838151811061009957610099610389565b5060010161005a565b5060005b82518110156101385761012f7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6384838151811061009957610099610389565b506001016100f0565b5060028490556040805160008152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a15050505061039f565b6000828152602081815260408083206001600160a01b038516845290915281205460ff16610223576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556101db3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610227565b5060005b92915050565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461025a57600080fd5b919050565b600082601f83011261027057600080fd5b81516001600160401b038111156102895761028961022d565b604051600582901b90603f8201601f191681016001600160401b03811182821017156102b7576102b761022d565b6040529182526020818501810192908101868411156102d557600080fd5b6020860192505b838310156102fb576102ed83610243565b8152602092830192016102dc565b5095945050505050565b6000806000806080858703121561031b57600080fd5b845160208601519094506001600160401b0381111561033957600080fd5b6103458782880161025f565b604087015190945090506001600160401b0381111561036357600080fd5b61036f8782880161025f565b92505061037e60608601610243565b905092959194509250565b634e487b7160e01b600052603260045260246000fd5b611a46806103ae6000396000f3fe6080604052600436106101bb5760003560e01c80638065657f116100ec578063bc197c811161008a578063d547741f11610064578063d547741f1461056a578063e38335e51461058a578063f23a6e611461059d578063f27a0c92146105c957600080fd5b8063bc197c81146104f1578063c4d252f51461051d578063d45c44351461053d57600080fd5b806391d14854116100c657806391d1485414610468578063a217fddf14610488578063b08e51c01461049d578063b1c5f427146104d157600080fd5b80638065657f146103f45780638f2a0bb0146104145780638f61f4f51461043457600080fd5b80632ab0f5291161015957806336568abe1161013357806336568abe14610367578063584b153e1461038757806364d62353146103a75780637958004c146103c757600080fd5b80632ab0f529146103075780632f2ff15d1461032757806331d507501461034757600080fd5b8063134008d311610195578063134008d31461026057806313bc9f2014610273578063150b7a0214610293578063248a9ca3146102d757600080fd5b806301d5062a146101c757806301ffc9a7146101e957806307bd02651461021e57600080fd5b366101c257005b600080fd5b3480156101d357600080fd5b506101e76101e23660046111ba565b6105de565b005b3480156101f557600080fd5b5061020961020436600461122e565b6106b4565b60405190151581526020015b60405180910390f35b34801561022a57600080fd5b506102527fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610215565b6101e761026e366004611258565b6106c5565b34801561027f57600080fd5b5061020961028e3660046112c3565b61077a565b34801561029f57600080fd5b506102be6102ae366004611391565b630a85bd0160e11b949350505050565b6040516001600160e01b03199091168152602001610215565b3480156102e357600080fd5b506102526102f23660046112c3565b60009081526020819052604090206001015490565b34801561031357600080fd5b506102096103223660046112c3565b6107a0565b34801561033357600080fd5b506101e76103423660046113f8565b6107a9565b34801561035357600080fd5b506102096103623660046112c3565b6107d4565b34801561037357600080fd5b506101e76103823660046113f8565b6107f9565b34801561039357600080fd5b506102096103a23660046112c3565b610831565b3480156103b357600080fd5b506101e76103c23660046112c3565b610877565b3480156103d357600080fd5b506103e76103e23660046112c3565b6108ea565b604051610215919061143a565b34801561040057600080fd5b5061025261040f366004611258565b610935565b34801561042057600080fd5b506101e761042f3660046114a6565b610974565b34801561044057600080fd5b506102527fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b34801561047457600080fd5b506102096104833660046113f8565b610b02565b34801561049457600080fd5b50610252600081565b3480156104a957600080fd5b506102527ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b3480156104dd57600080fd5b506102526104ec366004611561565b610b2b565b3480156104fd57600080fd5b506102be61050c366004611695565b63bc197c8160e01b95945050505050565b34801561052957600080fd5b506101e76105383660046112c3565b610b70565b34801561054957600080fd5b506102526105583660046112c3565b60009081526001602052604090205490565b34801561057657600080fd5b506101e76105853660046113f8565b610c1b565b6101e7610598366004611561565b610c40565b3480156105a957600080fd5b506102be6105b8366004611748565b63f23a6e6160e01b95945050505050565b3480156105d557600080fd5b50600254610252565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161060881610dc7565b6000610618898989898989610935565b90506106248184610dd4565b6000817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a604051610660969594939291906117c9565b60405180910390a383156106a957807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d0387856040516106a091815260200190565b60405180910390a25b505050505050505050565b60006106bf82610e68565b92915050565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e636106f1816000610b02565b6106ff576106ff8133610e8d565b600061070f888888888888610935565b905061071b8185610eca565b61072788888888610f18565b6000817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a60405161075f9493929190611806565b60405180910390a361077081610f90565b5050505050505050565b600060025b610788836108ea565b600381111561079957610799611424565b1492915050565b6000600361077f565b6000828152602081905260409020600101546107c481610dc7565b6107ce8383610fbc565b50505050565b6000806107e0836108ea565b60038111156107f1576107f1611424565b141592915050565b6001600160a01b03811633146108225760405163334bd91960e11b815260040160405180910390fd5b61082c828261104e565b505050565b60008061083d836108ea565b9050600181600381111561085357610853611424565b14806108705750600281600381111561086e5761086e611424565b145b9392505050565b333081146108a85760405163e2850c5960e01b81526001600160a01b03821660048201526024015b60405180910390fd5b60025460408051918252602082018490527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a150600255565b6000818152600160205260408120548060000361090a5750600092915050565b6001810361091b5750600392915050565b4281111561092c5750600192915050565b50600292915050565b6000868686868686604051602001610952969594939291906117c9565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161099e81610dc7565b88871415806109ad5750888514155b156109df576040516001624fcdef60e01b03198152600481018a9052602481018690526044810188905260640161089f565b60006109f18b8b8b8b8b8b8b8b610b2b565b90506109fd8184610dd4565b60005b8a811015610ab35780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610a3d57610a3d61182e565b9050602002016020810190610a529190611844565b8d8d86818110610a6457610a6461182e565b905060200201358c8c87818110610a7d57610a7d61182e565b9050602002810190610a8f919061185f565b8c8b604051610aa3969594939291906117c9565b60405180910390a3600101610a00565b508315610af557807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610aec91815260200190565b60405180910390a25b5050505050505050505050565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b60008888888888888888604051602001610b4c98979695949392919061193e565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610b9a81610dc7565b610ba382610831565b610bdf5781610bb260026110b9565b610bbc60016110b9565b604051635ead8eb560e01b8152600481019390935217602482015260440161089f565b6000828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b600082815260208190526040902060010154610c3681610dc7565b6107ce838361104e565b7fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63610c6c816000610b02565b610c7a57610c7a8133610e8d565b8786141580610c895750878414155b15610cbb576040516001624fcdef60e01b0319815260048101899052602481018590526044810187905260640161089f565b6000610ccd8a8a8a8a8a8a8a8a610b2b565b9050610cd98185610eca565b60005b89811015610db15760008b8b83818110610cf857610cf861182e565b9050602002016020810190610d0d9190611844565b905060008a8a84818110610d2357610d2361182e565b9050602002013590503660008a8a86818110610d4157610d4161182e565b9050602002810190610d53919061185f565b91509150610d6384848484610f18565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051610d9a9493929190611806565b60405180910390a350505050806001019050610cdc565b50610dbb81610f90565b50505050505050505050565b610dd18133610e8d565b50565b610ddd826107d4565b15610e0f5781610ded60006110b9565b604051635ead8eb560e01b81526004810192909252602482015260440161089f565b6000610e1a60025490565b905080821015610e4757604051635433660960e01b8152600481018390526024810182905260440161089f565b610e5182426119df565b600093845260016020526040909320929092555050565b60006001600160e01b03198216630271189760e51b14806106bf57506106bf826110dc565b610e978282610b02565b610ec65760405163e2517d3f60e01b81526001600160a01b03821660048201526024810183905260440161089f565b5050565b610ed38261077a565b610ee25781610ded60026110b9565b8015801590610ef75750610ef5816107a0565b155b15610ec65760405163121534c360e31b81526004810182905260240161089f565b600080856001600160a01b0316858585604051610f36929190611a00565b60006040518083038185875af1925050503d8060008114610f73576040519150601f19603f3d011682016040523d82523d6000602084013e610f78565b606091505b5091509150610f878282611111565b50505050505050565b610f998161077a565b610fa85780610ded60026110b9565b600090815260016020819052604090912055565b6000610fc88383610b02565b611046576000838152602081815260408083206001600160a01b03861684529091529020805460ff19166001179055610ffe3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016106bf565b5060006106bf565b600061105a8383610b02565b15611046576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45060016106bf565b60008160038111156110cd576110cd611424565b600160ff919091161b92915050565b60006001600160e01b03198216637965db0b60e01b14806106bf57506301ffc9a760e01b6001600160e01b03198316146106bf565b606082611126576111218261112d565b6106bf565b50806106bf565b80511561113d5780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b80356001600160a01b038116811461116d57600080fd5b919050565b60008083601f84011261118457600080fd5b5081356001600160401b0381111561119b57600080fd5b6020830191508360208285010111156111b357600080fd5b9250929050565b600080600080600080600060c0888a0312156111d557600080fd5b6111de88611156565b96506020880135955060408801356001600160401b0381111561120057600080fd5b61120c8a828b01611172565b989b979a50986060810135976080820135975060a09091013595509350505050565b60006020828403121561124057600080fd5b81356001600160e01b03198116811461087057600080fd5b60008060008060008060a0878903121561127157600080fd5b61127a87611156565b95506020870135945060408701356001600160401b0381111561129c57600080fd5b6112a889828a01611172565b979a9699509760608101359660809091013595509350505050565b6000602082840312156112d557600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171561131a5761131a6112dc565b604052919050565b600082601f83011261133357600080fd5b81356001600160401b0381111561134c5761134c6112dc565b61135f601f8201601f19166020016112f2565b81815284602083860101111561137457600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156113a757600080fd5b6113b085611156565b93506113be60208601611156565b92506040850135915060608501356001600160401b038111156113e057600080fd5b6113ec87828801611322565b91505092959194509250565b6000806040838503121561140b57600080fd5b8235915061141b60208401611156565b90509250929050565b634e487b7160e01b600052602160045260246000fd5b602081016004831061145c57634e487b7160e01b600052602160045260246000fd5b91905290565b60008083601f84011261147457600080fd5b5081356001600160401b0381111561148b57600080fd5b6020830191508360208260051b85010111156111b357600080fd5b600080600080600080600080600060c08a8c0312156114c457600080fd5b89356001600160401b038111156114da57600080fd5b6114e68c828d01611462565b909a5098505060208a01356001600160401b0381111561150557600080fd5b6115118c828d01611462565b90985096505060408a01356001600160401b0381111561153057600080fd5b61153c8c828d01611462565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b03121561157d57600080fd5b88356001600160401b0381111561159357600080fd5b61159f8b828c01611462565b90995097505060208901356001600160401b038111156115be57600080fd5b6115ca8b828c01611462565b90975095505060408901356001600160401b038111156115e957600080fd5b6115f58b828c01611462565b999c989b509699959896976060870135966080013595509350505050565b600082601f83011261162457600080fd5b81356001600160401b0381111561163d5761163d6112dc565b8060051b61164d602082016112f2565b9182526020818501810192908101908684111561166957600080fd5b6020860192505b8383101561168b578235825260209283019290910190611670565b9695505050505050565b600080600080600060a086880312156116ad57600080fd5b6116b686611156565b94506116c460208701611156565b935060408601356001600160401b038111156116df57600080fd5b6116eb88828901611613565b93505060608601356001600160401b0381111561170757600080fd5b61171388828901611613565b92505060808601356001600160401b0381111561172f57600080fd5b61173b88828901611322565b9150509295509295909350565b600080600080600060a0868803121561176057600080fd5b61176986611156565b945061177760208701611156565b9350604086013592506060860135915060808601356001600160401b0381111561172f57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a0604082015260006117f160a0830186886117a0565b60608301949094525060800152949350505050565b60018060a01b038516815283602082015260606040820152600061168b6060830184866117a0565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561185657600080fd5b61087082611156565b6000808335601e1984360301811261187657600080fd5b8301803591506001600160401b0382111561189057600080fd5b6020019150368190038213156111b357600080fd5b60008383855260208501945060208460051b8201018360005b8681101561193257838303601f19018852813536879003601e190181126118e457600080fd5b86016020810190356001600160401b0381111561190057600080fd5b80360382131561190f57600080fd5b61191a8582846117a0565b60209a8b019a909550939093019250506001016118be565b50909695505050505050565b60a0808252810188905260008960c08301825b8b81101561197f576001600160a01b0361196a84611156565b16825260209283019290910190600101611951565b5083810360208501528881526001600160fb1b0389111561199f57600080fd5b8860051b9150818a602083013701828103602090810160408501526119c790820187896118a5565b60608401959095525050608001529695505050505050565b808201808211156106bf57634e487b7160e01b600052601160045260246000fd5b818382376000910190815291905056fea264697066735822122018417114ae593725c456a2baaccce2c409bfa0c6e911c7a861b2748a2e39f3e264736f6c634300081c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minDelay";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "proposers";
            readonly type: "address[]";
        }, {
            readonly internalType: "address[]";
            readonly name: "executors";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "admin";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "AccessControlBadConfirmation";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "bytes32";
            readonly name: "neededRole";
            readonly type: "bytes32";
        }];
        readonly name: "AccessControlUnauthorizedAccount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "FailedCall";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "delay";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "minDelay";
            readonly type: "uint256";
        }];
        readonly name: "TimelockInsufficientDelay";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "targets";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "payloads";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "values";
            readonly type: "uint256";
        }];
        readonly name: "TimelockInvalidOperationLength";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "caller";
            readonly type: "address";
        }];
        readonly name: "TimelockUnauthorizedCaller";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "predecessorId";
            readonly type: "bytes32";
        }];
        readonly name: "TimelockUnexecutedPredecessor";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "operationId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "expectedStates";
            readonly type: "bytes32";
        }];
        readonly name: "TimelockUnexpectedOperationState";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }];
        readonly name: "CallExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "CallSalt";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "index";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "predecessor";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "delay";
            readonly type: "uint256";
        }];
        readonly name: "CallScheduled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "Cancelled";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "oldDuration";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "newDuration";
            readonly type: "uint256";
        }];
        readonly name: "MinDelayChange";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "newAdminRole";
            readonly type: "bytes32";
        }];
        readonly name: "RoleAdminChanged";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleGranted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }];
        readonly name: "RoleRevoked";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "CANCELLER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EXECUTOR_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PROPOSER_ROLE";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "cancel";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "payload";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "predecessor";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "payloads";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "bytes32";
            readonly name: "predecessor";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "executeBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "getMinDelay";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "getOperationState";
        readonly outputs: readonly [{
            readonly internalType: "enum TimelockController.OperationState";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }];
        readonly name: "getRoleAdmin";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "getTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "grantRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "hasRole";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "predecessor";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "hashOperation";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "payloads";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "bytes32";
            readonly name: "predecessor";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }];
        readonly name: "hashOperationBatch";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "isOperation";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "isOperationDone";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "isOperationPending";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "id";
            readonly type: "bytes32";
        }];
        readonly name: "isOperationReady";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155BatchReceived";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC1155Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly name: "onERC721Received";
        readonly outputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "";
            readonly type: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "callerConfirmation";
            readonly type: "address";
        }];
        readonly name: "renounceRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "role";
            readonly type: "bytes32";
        }, {
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "revokeRole";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "data";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes32";
            readonly name: "predecessor";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "delay";
            readonly type: "uint256";
        }];
        readonly name: "schedule";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "targets";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256[]";
            readonly name: "values";
            readonly type: "uint256[]";
        }, {
            readonly internalType: "bytes[]";
            readonly name: "payloads";
            readonly type: "bytes[]";
        }, {
            readonly internalType: "bytes32";
            readonly name: "predecessor";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "salt";
            readonly type: "bytes32";
        }, {
            readonly internalType: "uint256";
            readonly name: "delay";
            readonly type: "uint256";
        }];
        readonly name: "scheduleBatch";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes4";
            readonly name: "interfaceId";
            readonly type: "bytes4";
        }];
        readonly name: "supportsInterface";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "newDelay";
            readonly type: "uint256";
        }];
        readonly name: "updateDelay";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly stateMutability: "payable";
        readonly type: "receive";
    }];
    static createInterface(): TimelockControllerInterface;
    static connect(address: string, runner?: ContractRunner | null): TimelockController;
}
export {};
