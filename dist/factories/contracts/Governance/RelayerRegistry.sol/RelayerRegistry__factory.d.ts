import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { RelayerRegistry, RelayerRegistryInterface } from "../../../../contracts/Governance/RelayerRegistry.sol/RelayerRegistry";
type RelayerRegistryConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayerRegistry__factory extends ContractFactory {
    constructor(...args: RelayerRegistryConstructorParams);
    getDeployTransaction(_torn: AddressLike, _governance: AddressLike, _ens: AddressLike, _staking: AddressLike, _feeManager: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_torn: AddressLike, _governance: AddressLike, _ens: AddressLike, _staking: AddressLike, _feeManager: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RelayerRegistry & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RelayerRegistry__factory;
    static readonly bytecode = "0x6101206040523480156200001257600080fd5b5060405162001fab38038062001fab83398101604081905262000035916200006d565b6001600160601b0319606095861b811660805293851b841660a05291841b831660c052831b821660e05290911b166101005262000105565b600080600080600060a0868803121562000085578081fd5b85516200009281620000ec565b6020870151909550620000a581620000ec565b6040870151909450620000b881620000ec565b6060870151909350620000cb81620000ec565b6080870151909250620000de81620000ec565b809150509295509295909350565b6001600160a01b03811681146200010257600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c611e1662000195600039806106785280610bf352508061075452806108af5280610ea852806111685250806105625280610f99525080610351528061080952806108dc52806109e75280610ce4525080610a205280610aa95280610c375280610e8552806111455250611e166000f3fe608060405234801561001057600080fd5b50600436106101735760003560e01c80635aa6e675116100de578063c4d66de811610097578063e37e8bcc11610071578063e37e8bcc14610305578063e43fdb3c14610318578063eb4af0451461032b578063f18876841461033e57610173565b8063c4d66de8146102d7578063d0fb0203146102ea578063d990231d146102f257610173565b80635aa6e6751461026e57806385a2968314610276578063adf898a414610289578063ae53941c14610291578063b69fd4ab146102b1578063b971a6bf146102c457610173565b80634ba16d9d116101305780634ba16d9d146101f75780634cb16c2e1461020a5780634cf088d9146102125780634d4efd041461021a5780635300f8411461022d578063541d55481461024e57610173565b806314d92307146101785780632e6506491461018d5780633523dc85146101a05780633f15457f146101b35780634048a257146101d157806345a11cec146101e4575b600080fd5b61018b610186366004611612565b610346565b005b61018b61019b36600461164a565b610414565b61018b6101ae366004611612565b610460565b6101bb610560565b6040516101c891906118f5565b60405180910390f35b6101bb6101df366004611612565b610584565b61018b6101f2366004611682565b61059f565b61018b610205366004611612565b6107fe565b6101bb610898565b6101bb6108ad565b61018b610228366004611612565b6108d1565b61024061023b366004611612565b6109ac565b6040516101c89291906118cb565b61026161025c366004611612565b6109c5565b6040516101c891906119a1565b6101bb6109e5565b61018b6102843660046116f7565b610a09565b6101bb610aa7565b6102a461029f366004611612565b610acb565b6040516101c891906119ac565b6102616102bf36600461164a565b610af9565b6102a46102d2366004611612565b610b20565b61018b6102e5366004611612565b610b4b565b6101bb610bf1565b61018b6103003660046116cc565b610c15565b61018b6103133660046117fc565b610c20565b61018b610326366004611785565b610cc4565b61018b6103393660046118b3565b610cd9565b6102a4610d56565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103975760405162461bcd60e51b815260040161038e90611ae4565b60405180910390fd5b6103a0816108d1565b6001600160a01b038116600090815260026020908152604080832083815560010183905560039091529081902080546001600160a01b0319169055517f490a66cc56c789979052c7052fc0c10a6c4627d8e6165caec80db97a4c383521906104099083906118f5565b60405180910390a150565b3360008181526003602052604090205483906001600160a01b038083169116146104505760405162461bcd60e51b815260040161038e90611c83565b61045a8484610d5c565b50505050565b6001600160a01b03811633146104a9576001600160a01b038181166000908152600360205260409020541633146104a95760405162461bcd60e51b815260040161038e90611cd8565b6001600160a01b0380821660008181526003602052604090205490911614156104e45760405162461bcd60e51b815260040161038e90611b8b565b6001600160a01b03808216600090815260036020526040908190205490517fb2a8e18b9e887f502d65c1683e60b723fa582a6903ea4e8eb23907a19c1ce8a0926105319216908490611909565b60405180910390a16001600160a01b0316600090815260036020526040902080546001600160a01b0319169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b6003602052600090815260409020546001600160a01b031681565b6000546201000090046001600160a01b031633146105cf5760405162461bcd60e51b815260040161038e90611a64565b6001600160a01b03808416600090815260036020526040902054168061062d576001600160a01b0383811660009081526003602052604090205416156106275760405162461bcd60e51b815260040161038e90611be8565b506107f9565b826001600160a01b0316816001600160a01b03161461065e5760405162461bcd60e51b815260040161038e90611c83565b604051630bbefce160e21b81526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632efbf384906106ad9086906004016118f5565b602060405180830381600087803b1580156106c757600080fd5b505af11580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff919061162e565b6001600160a01b03858116600090815260026020526040902054911691506107279082610df5565b6001600160a01b038086166000908152600260205260409081902092909255905163338610af60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063338610af9061078b9084906004016119ac565b600060405180830381600087803b1580156107a557600080fd5b505af11580156107b9573d6000803e3d6000fd5b505050507f659f33fc6677bebf3a9bf3101092792e31f35766d0358e54577bdd91a655f6a084826040516107ee929190611988565b60405180910390a150505b505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108465760405162461bcd60e51b815260040161038e90611ae4565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f94df8c3a8087dce110e5fbc5acf380c83c94bbd31b2c8ed4c08e1396a696e1a8906104099083906118f5565b6000546201000090046001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109195760405162461bcd60e51b815260040161038e90611ae4565b6001600160a01b038082166000818152600360205260409020549091169081146109555760405162461bcd60e51b815260040161038e90611d74565b6001600160a01b03811660009081526002602052604080822091909155517fafa759fb3c68e89eaaba359f0930ab40c24875b73cc9e2f6a38b0180019eb8f3906109a09084906118f5565b60405180910390a15050565b6002602052600090815260409020805460019091015482565b6001600160a01b0390811660009081526003602052604090205416151590565b7f000000000000000000000000000000000000000000000000000000000000000081565b60405163d505accf60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d505accf90610a6190889030908b908a908a908a908a90600401611947565b600060405180830381600087803b158015610a7b57600080fd5b505af1158015610a8f573d6000803e3d6000fd5b50505050610a9e858888610e3e565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b03908116600090815260036020908152604080832054909316825260029052206001015490565b6001600160a01b038181166000908152600360205260409020548116908316145b92915050565b6001600160a01b03908116600090815260036020908152604080832054909316825260029052205490565b600054610100900460ff1680610b645750610b64610f4c565b80610b72575060005460ff16155b610b8e5760405162461bcd60e51b815260040161038e90611b3d565b600054610100900460ff16158015610bb9576000805460ff1961ff0019909116610100171660011790555b6000805462010000600160b01b031916620100006001600160a01b038516021790558015610bed576000805461ff00191690555b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610bed338383610e3e565b60405163d505accf60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d505accf90610c7890889030908d908a908a908a908a90600401611947565b600060405180830381600087803b158015610c9257600080fd5b505af1158015610ca6573d6000803e3d6000fd5b50505050610cb8858b8b8b8b8b610f52565b50505050505050505050565b610cd2338686868686610f52565b5050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610d215760405162461bcd60e51b815260040161038e90611ae4565b60018190556040517f404663163d528ec45288abc4389b81bd96fabf858ff57577ebd4ee7f15d7b0a6906104099083906119ac565b60015481565b6001600160a01b038181166000908152600360205260409020541615610d945760405162461bcd60e51b815260040161038e90611b0d565b6001600160a01b038181166000908152600360205260409081902080546001600160a01b03191692851692909217909155517fcde75bd02c5f739608c891bcd9aa6809e6c4a7035ac7b9f3fd5fea756db74724906109a09084908490611909565b6000610e3783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611287565b9392505050565b6001600160a01b0380831660008181526003602052604090205490911614610e785760405162461bcd60e51b815260040161038e90611abf565b610ecd6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016847f0000000000000000000000000000000000000000000000000000000000000000846112b3565b6001600160a01b038216600090815260026020526040902054610ef190829061130b565b6001600160a01b0383166000908152600260205260409081902091909155517f1275dbe2a271b2b822e60f1d44894fa5fb337e7e2dc6a200205b1a5b17c07d6490610f3f9084908490611988565b60405180910390a1505050565b303b1590565b6000610f9386868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061133092505050565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166302571be3836040518263ffffffff1660e01b8152600401610fe391906119ac565b60206040518083038186803b158015610ffb57600080fd5b505afa15801561100f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611033919061162e565b905073d4416b13d2b3a9abae7acd5d6c2bbdbe256864016001600160a01b0382168114156110735760405162461bcd60e51b815260040161038e90611c15565b816001600160a01b0316896001600160a01b0316146110a45760405162461bcd60e51b815260040161038e90611ca9565b6001600160a01b0389811660009081526003602052604090205416156110dc5760405162461bcd60e51b815260040161038e90611bbb565b6001600160a01b03891660009081526002602052604090206001810154156111165760405162461bcd60e51b815260040161038e90611a38565b6001548710156111385760405162461bcd60e51b815260040161038e90611d50565b61118d6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168b7f00000000000000000000000000000000000000000000000000000000000000008a6112b3565b7f1275dbe2a271b2b822e60f1d44894fa5fb337e7e2dc6a200205b1a5b17c07d648a886040516111be929190611988565b60405180910390a1868155600181018490556001600160a01b038a16600081815260036020526040812080546001600160a01b0319169092179091555b8581101561123b57600087878381811061121157fe5b90506020020160208101906112269190611612565b90506112328c82610d5c565b506001016111fb565b507f9ca7c9c762eff27b021608f232b4c4b8f9b8bf9a3d322297e47cc4209a67d5e2848a8a8d8b6040516112739594939291906119b5565b60405180910390a150505050505050505050565b600081848411156112ab5760405162461bcd60e51b815260040161038e9190611a05565b505050900390565b61045a846323b872dd60e01b8585856040516024016112d493929190611923565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261133d565b600082820183811015610e375760405162461bcd60e51b815260040161038e90611a88565b6000610b1a8260006113cc565b6060611392826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114369092919063ffffffff16565b8051909150156107f957808060200190518101906113b09190611765565b6107f95760405162461bcd60e51b815260040161038e90611d06565b6000818351116113de57506000610b1a565b60006113ea848461144d565b90506113fb848285016001016113cc565b611406858584611492565b6040516020016114179291906118cb565b6040516020818303038152906040528051906020012091505092915050565b606061144584846000856114ae565b949350505050565b6000805b8351818401141580156114855750838184018151811061146d57fe5b6020910101516001600160f81b031916601760f91b14155b15610e3757600101611451565b6000835182840111156114a457600080fd5b5091016020012090565b60606114b985611572565b6114d55760405162461bcd60e51b815260040161038e90611c4c565b60006060866001600160a01b031685876040516114f291906118d9565b60006040518083038185875af1925050503d806000811461152f576040519150601f19603f3d011682016040523d82523d6000602084013e611534565b606091505b509150915081156115485791506114459050565b8051156115585780518082602001fd5b8360405162461bcd60e51b815260040161038e9190611a05565b3b151590565b60008083601f840112611589578182fd5b50813567ffffffffffffffff8111156115a0578182fd5b60208301915083602080830285010111156115ba57600080fd5b9250929050565b60008083601f8401126115d2578182fd5b50813567ffffffffffffffff8111156115e9578182fd5b6020830191508360208285010111156115ba57600080fd5b803560ff81168114610b1a57600080fd5b600060208284031215611623578081fd5b8135610e3781611dc8565b60006020828403121561163f578081fd5b8151610e3781611dc8565b6000806040838503121561165c578081fd5b823561166781611dc8565b9150602083013561167781611dc8565b809150509250929050565b600080600060608486031215611696578081fd5b83356116a181611dc8565b925060208401356116b181611dc8565b915060408401356116c181611dc8565b809150509250925092565b600080604083850312156116de578182fd5b82356116e981611dc8565b946020939093013593505050565b600080600080600080600060e0888a031215611711578283fd5b873561171c81611dc8565b965060208801359550604088013561173381611dc8565b9450606088013593506117498960808a01611601565b925060a0880135915060c0880135905092959891949750929550565b600060208284031215611776578081fd5b81518015158114610e37578182fd5b60008060008060006060868803121561179c578081fd5b853567ffffffffffffffff808211156117b3578283fd5b6117bf89838a016115c1565b90975095506020880135945060408801359150808211156117de578283fd5b506117eb88828901611578565b969995985093965092949392505050565b6000806000806000806000806000806101008b8d03121561181b578283fd5b8a3567ffffffffffffffff80821115611832578485fd5b61183e8e838f016115c1565b909c509a5060208d0135995060408d013591508082111561185d578485fd5b5061186a8d828e01611578565b90985096505060608b013561187e81611dc8565b945060808b013593506118948c60a08d01611601565b925060c08b0135915060e08b013590509295989b9194979a5092959850565b6000602082840312156118c4578081fd5b5035919050565b918252602082015260400190565b600082516118eb818460208701611d9c565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b600086825260806020830152846080830152848660a084013760a08583018101919091526001600160a01b039390931660408201526060810191909152601f909201601f19169091010192915050565b6000602082528251806020840152611a24816040850160208701611d9c565b601f01601f19169190910160400192915050565b6020808252601290820152717265676973746572656420616c726561647960701b604082015260600190565b6020808252600a90820152696f6e6c792070726f787960b01b604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252600b908201526a085c9959da5cdd195c995960aa1b604082015260600190565b6020808252600f908201526e6f6e6c7920676f7665726e616e636560881b604082015260600190565b60208082526016908201527563616e277420737465616c20616e206164647265737360501b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526016908201527531b0b73a103ab73932b3b4b9ba32b91036b0b9ba32b960511b604082015260600190565b60208082526013908201527231b0b73a103932b3b4b9ba32b91030b3b0b4b760691b604082015260600190565b60208082526013908201527227b7363c9031bab9ba37b6903932b630bcb2b960691b604082015260600190565b6020808252601a908201527f6f6e6c7920756e7772617070656420656e7320646f6d61696e73000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252600c908201526b37b7363c903932b630bcb2b960a11b604082015260600190565b60208082526015908201527437b7363c9032b739903237b6b0b4b71037bbb732b960591b604082015260600190565b60208082526014908201527337b7363c9037bbb732b91037b3103bb7b935b2b960611b604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a9082015269216d696e5f7374616b6560b01b604082015260600190565b6020808252600e908201526d36bab9ba1031329036b0b9ba32b960911b604082015260600190565b60005b83811015611db7578181015183820152602001611d9f565b8381111561045a5750506000910152565b6001600160a01b0381168114611ddd57600080fd5b5056fea2646970667358221220318b6249d9d43d8f9ff8fa83b9f035036afb286031425761590fefd65a3969a064736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_torn";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_governance";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_ens";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_staking";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "_feeManager";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "minStakeAmount";
            readonly type: "uint256";
        }];
        readonly name: "MinimumStakeAmount";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly name: "RelayerBalanceNullified";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "bytes32";
            readonly name: "relayer";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "ensName";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "relayerAddress";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "stakedAmount";
            readonly type: "uint256";
        }];
        readonly name: "RelayerRegistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly name: "RelayerUnregistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "tornadoRouter";
            readonly type: "address";
        }];
        readonly name: "RouterRegistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountStakeAdded";
            readonly type: "uint256";
        }];
        readonly name: "StakeAddedToRelayer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amountBurned";
            readonly type: "uint256";
        }];
        readonly name: "StakeBurned";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "worker";
            readonly type: "address";
        }];
        readonly name: "WorkerRegistered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "worker";
            readonly type: "address";
        }];
        readonly name: "WorkerUnregistered";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "contract ITornadoInstance";
            readonly name: "pool";
            readonly type: "address";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "ens";
        readonly outputs: readonly [{
            readonly internalType: "contract IENS";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "feeManager";
        readonly outputs: readonly [{
            readonly internalType: "contract IFeeManager";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly name: "getRelayerBalance";
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
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly name: "getRelayerEnsHash";
        readonly outputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "governance";
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
            readonly name: "_tornadoRouter";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "toResolve";
            readonly type: "address";
        }];
        readonly name: "isRelayer";
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
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "toResolve";
            readonly type: "address";
        }];
        readonly name: "isRelayerRegistered";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "minStakeAmount";
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
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly name: "nullifyBalance";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "ensName";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "workersToRegister";
            readonly type: "address[]";
        }];
        readonly name: "register";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "string";
            readonly name: "ensName";
            readonly type: "string";
        }, {
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
        }, {
            readonly internalType: "address[]";
            readonly name: "workersToRegister";
            readonly type: "address[]";
        }, {
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "registerPermit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "worker";
            readonly type: "address";
        }];
        readonly name: "registerWorker";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "relayers";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes32";
            readonly name: "ensHash";
            readonly type: "bytes32";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }];
        readonly name: "setMinStakeAmount";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "tornadoRouterAddress";
            readonly type: "address";
        }];
        readonly name: "setTornadoRouter";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
        }];
        readonly name: "stakeToRelayer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "relayer";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "stake";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "staker";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "deadline";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint8";
            readonly name: "v";
            readonly type: "uint8";
        }, {
            readonly internalType: "bytes32";
            readonly name: "r";
            readonly type: "bytes32";
        }, {
            readonly internalType: "bytes32";
            readonly name: "s";
            readonly type: "bytes32";
        }];
        readonly name: "stakeToRelayerPermit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "staking";
        readonly outputs: readonly [{
            readonly internalType: "contract TornadoStakingRewards";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "torn";
        readonly outputs: readonly [{
            readonly internalType: "contract TORN";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "tornadoRouter";
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
            readonly name: "relayer";
            readonly type: "address";
        }];
        readonly name: "unregisterRelayer";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "worker";
            readonly type: "address";
        }];
        readonly name: "unregisterWorker";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "workers";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): RelayerRegistryInterface;
    static connect(address: string, runner?: ContractRunner | null): RelayerRegistry;
}
export {};
