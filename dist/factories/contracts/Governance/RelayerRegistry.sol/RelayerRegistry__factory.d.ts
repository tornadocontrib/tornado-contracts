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
    static readonly bytecode = "0x6101206040523480156200001257600080fd5b5060405162001e3c38038062001e3c83398101604081905262000035916200006d565b6001600160601b0319606095861b811660805293851b841660a05291841b831660c052831b821660e05290911b166101005262000105565b600080600080600060a0868803121562000085578081fd5b85516200009281620000ec565b6020870151909550620000a581620000ec565b6040870151909450620000b881620000ec565b6060870151909350620000cb81620000ec565b6080870151909250620000de81620000ec565b809150509295509295909350565b6001600160a01b03811681146200010257600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c611cac62000190600039806105855280610b0b52508061066152806107c75280610dc0528061103e52508061046f5280610ec552508061071652806107f452806108ff5280610bfc52508061093852806109c15280610b4f5280610d9d528061101b5250611cac6000f3fe608060405234801561001057600080fd5b50600436106101585760003560e01c806385a29683116100c3578063d0fb02031161007c578063d0fb0203146102bc578063d990231d146102c4578063e37e8bcc146102d7578063e43fdb3c146102ea578063eb4af045146102fd578063f18876841461031057610158565b806385a2968314610248578063adf898a41461025b578063ae53941c14610263578063b69fd4ab14610283578063b971a6bf14610296578063c4d66de8146102a957610158565b80634cb16c2e116101155780634cb16c2e146101dc5780634cf088d9146101e45780634d4efd04146101ec5780635300f841146101ff578063541d5548146102205780635aa6e6751461024057610158565b80632e6506491461015d5780633523dc85146101725780633f15457f146101855780634048a257146101a357806345a11cec146101b65780634ba16d9d146101c9575b600080fd5b61017061016b36600461151e565b610318565b005b6101706101803660046114e6565b61036d565b61018d61046d565b60405161019a91906117c9565b60405180910390f35b61018d6101b13660046114e6565b610491565b6101706101c4366004611556565b6104ac565b6101706101d73660046114e6565b61070b565b61018d6107b0565b61018d6107c5565b6101706101fa3660046114e6565b6107e9565b61021261020d3660046114e6565b6108c4565b60405161019a92919061179f565b61023361022e3660046114e6565b6108dd565b60405161019a9190611875565b61018d6108fd565b6101706102563660046115cb565b610921565b61018d6109bf565b6102766102713660046114e6565b6109e3565b60405161019a9190611880565b61023361029136600461151e565b610a11565b6102766102a43660046114e6565b610a38565b6101706102b73660046114e6565b610a63565b61018d610b09565b6101706102d23660046115a0565b610b2d565b6101706102e53660046116d0565b610b38565b6101706102f8366004611659565b610bdc565b61017061030b366004611787565b610bf1565b610276610c6e565b3360008181526003602052604090205483906001600160a01b0380831691161461035d5760405162461bcd60e51b815260040161035490611b20565b60405180910390fd5b6103678484610c74565b50505050565b6001600160a01b03811633146103b6576001600160a01b038181166000908152600360205260409020541633146103b65760405162461bcd60e51b815260040161035490611b46565b6001600160a01b0380821660008181526003602052604090205490911614156103f15760405162461bcd60e51b815260040161035490611a5f565b6001600160a01b03808216600090815260036020526040908190205490517fb2a8e18b9e887f502d65c1683e60b723fa582a6903ea4e8eb23907a19c1ce8a09261043e92169084906117dd565b60405180910390a16001600160a01b0316600090815260036020526040902080546001600160a01b0319169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b6003602052600090815260409020546001600160a01b031681565b6000546201000090046001600160a01b031633146104dc5760405162461bcd60e51b815260040161035490611938565b6001600160a01b03808416600090815260036020526040902054168061053a576001600160a01b0383811660009081526003602052604090205416156105345760405162461bcd60e51b815260040161035490611abc565b50610706565b826001600160a01b0316816001600160a01b03161461056b5760405162461bcd60e51b815260040161035490611b20565b604051630bbefce160e21b81526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632efbf384906105ba9086906004016117c9565b602060405180830381600087803b1580156105d457600080fd5b505af11580156105e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060c9190611502565b6001600160a01b03858116600090815260026020526040902054911691506106349082610d0d565b6001600160a01b038086166000908152600260205260409081902092909255905163338610af60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063338610af90610698908490600401611880565b600060405180830381600087803b1580156106b257600080fd5b505af11580156106c6573d6000803e3d6000fd5b505050507f659f33fc6677bebf3a9bf3101092792e31f35766d0358e54577bdd91a655f6a084826040516106fb92919061185c565b60405180910390a150505b505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146107535760405162461bcd60e51b8152600401610354906119b8565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f94df8c3a8087dce110e5fbc5acf380c83c94bbd31b2c8ed4c08e1396a696e1a8906107a59083906117c9565b60405180910390a150565b6000546201000090046001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108315760405162461bcd60e51b8152600401610354906119b8565b6001600160a01b0380821660008181526003602052604090205490911690811461086d5760405162461bcd60e51b815260040161035490611c0a565b6001600160a01b03811660009081526002602052604080822091909155517fafa759fb3c68e89eaaba359f0930ab40c24875b73cc9e2f6a38b0180019eb8f3906108b89084906117c9565b60405180910390a15050565b6002602052600090815260409020805460019091015482565b6001600160a01b0390811660009081526003602052604090205416151590565b7f000000000000000000000000000000000000000000000000000000000000000081565b60405163d505accf60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d505accf9061097990889030908b908a908a908a908a9060040161181b565b600060405180830381600087803b15801561099357600080fd5b505af11580156109a7573d6000803e3d6000fd5b505050506109b6858888610d56565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b03908116600090815260036020908152604080832054909316825260029052206001015490565b6001600160a01b038181166000908152600360205260409020548116908316145b92915050565b6001600160a01b03908116600090815260036020908152604080832054909316825260029052205490565b600054610100900460ff1680610a7c5750610a7c610e64565b80610a8a575060005460ff16155b610aa65760405162461bcd60e51b815260040161035490611a11565b600054610100900460ff16158015610ad1576000805460ff1961ff0019909116610100171660011790555b6000805462010000600160b01b031916620100006001600160a01b038516021790558015610b05576000805461ff00191690555b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610b05338383610d56565b60405163d505accf60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d505accf90610b9090889030908d908a908a908a908a9060040161181b565b600060405180830381600087803b158015610baa57600080fd5b505af1158015610bbe573d6000803e3d6000fd5b50505050610bd0858b8b8b8b8b610e6a565b50505050505050505050565b610bea338686868686610e6a565b5050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c395760405162461bcd60e51b8152600401610354906119b8565b60018190556040517f404663163d528ec45288abc4389b81bd96fabf858ff57577ebd4ee7f15d7b0a6906107a5908390611880565b60015481565b6001600160a01b038181166000908152600360205260409020541615610cac5760405162461bcd60e51b8152600401610354906119e1565b6001600160a01b038181166000908152600360205260409081902080546001600160a01b03191692851692909217909155517fcde75bd02c5f739608c891bcd9aa6809e6c4a7035ac7b9f3fd5fea756db74724906108b890849084906117dd565b6000610d4f83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061115b565b9392505050565b6001600160a01b0380831660008181526003602052604090205490911614610d905760405162461bcd60e51b815260040161035490611993565b610de56001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016847f000000000000000000000000000000000000000000000000000000000000000084611187565b6001600160a01b038216600090815260026020526040902054610e099082906111df565b6001600160a01b0383166000908152600260205260409081902091909155517f1275dbe2a271b2b822e60f1d44894fa5fb337e7e2dc6a200205b1a5b17c07d6490610e57908490849061185c565b60405180910390a1505050565b303b1590565b6000610eab86868080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525061120492505050565b6040516302571be360e01b81529091506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906302571be390610efa908490600401611880565b60206040518083038186803b158015610f1257600080fd5b505afa158015610f26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f4a9190611502565b6001600160a01b0316876001600160a01b031614610f7a5760405162461bcd60e51b815260040161035490611be2565b6001600160a01b038781166000908152600360205260409020541615610fb25760405162461bcd60e51b815260040161035490611a8f565b6001600160a01b0387166000908152600260205260409020600181015415610fec5760405162461bcd60e51b81526004016103549061190c565b60015485101561100e5760405162461bcd60e51b815260040161035490611bbe565b6110636001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016897f000000000000000000000000000000000000000000000000000000000000000088611187565b7f1275dbe2a271b2b822e60f1d44894fa5fb337e7e2dc6a200205b1a5b17c07d64888660405161109492919061185c565b60405180910390a1848155600181018290556001600160a01b038816600081815260036020526040812080546001600160a01b0319169092179091555b838110156111115760008585838181106110e757fe5b90506020020160208101906110fc91906114e6565b90506111088a82610c74565b506001016110d1565b507f9ca7c9c762eff27b021608f232b4c4b8f9b8bf9a3d322297e47cc4209a67d5e28288888b89604051611149959493929190611889565b60405180910390a15050505050505050565b6000818484111561117f5760405162461bcd60e51b815260040161035491906118d9565b505050900390565b610367846323b872dd60e01b8585856040516024016111a8939291906117f7565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152611211565b600082820183811015610d4f5760405162461bcd60e51b81526004016103549061195c565b6000610a328260006112a0565b6060611266826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661130a9092919063ffffffff16565b80519091501561070657808060200190518101906112849190611639565b6107065760405162461bcd60e51b815260040161035490611b74565b6000818351116112b257506000610a32565b60006112be8484611321565b90506112cf848285016001016112a0565b6112da858584611366565b6040516020016112eb92919061179f565b6040516020818303038152906040528051906020012091505092915050565b60606113198484600085611382565b949350505050565b6000805b8351818401141580156113595750838184018151811061134157fe5b6020910101516001600160f81b031916601760f91b14155b15610d4f57600101611325565b60008351828401111561137857600080fd5b5091016020012090565b606061138d85611446565b6113a95760405162461bcd60e51b815260040161035490611ae9565b60006060866001600160a01b031685876040516113c691906117ad565b60006040518083038185875af1925050503d8060008114611403576040519150601f19603f3d011682016040523d82523d6000602084013e611408565b606091505b5091509150811561141c5791506113199050565b80511561142c5780518082602001fd5b8360405162461bcd60e51b815260040161035491906118d9565b3b151590565b60008083601f84011261145d578182fd5b50813567ffffffffffffffff811115611474578182fd5b602083019150836020808302850101111561148e57600080fd5b9250929050565b60008083601f8401126114a6578182fd5b50813567ffffffffffffffff8111156114bd578182fd5b60208301915083602082850101111561148e57600080fd5b803560ff81168114610a3257600080fd5b6000602082840312156114f7578081fd5b8135610d4f81611c5e565b600060208284031215611513578081fd5b8151610d4f81611c5e565b60008060408385031215611530578081fd5b823561153b81611c5e565b9150602083013561154b81611c5e565b809150509250929050565b60008060006060848603121561156a578081fd5b833561157581611c5e565b9250602084013561158581611c5e565b9150604084013561159581611c5e565b809150509250925092565b600080604083850312156115b2578182fd5b82356115bd81611c5e565b946020939093013593505050565b600080600080600080600060e0888a0312156115e5578283fd5b87356115f081611c5e565b965060208801359550604088013561160781611c5e565b94506060880135935061161d8960808a016114d5565b925060a0880135915060c0880135905092959891949750929550565b60006020828403121561164a578081fd5b81518015158114610d4f578182fd5b600080600080600060608688031215611670578081fd5b853567ffffffffffffffff80821115611687578283fd5b61169389838a01611495565b90975095506020880135945060408801359150808211156116b2578283fd5b506116bf8882890161144c565b969995985093965092949392505050565b6000806000806000806000806000806101008b8d0312156116ef578283fd5b8a3567ffffffffffffffff80821115611706578485fd5b6117128e838f01611495565b909c509a5060208d0135995060408d0135915080821115611731578485fd5b5061173e8d828e0161144c565b90985096505060608b013561175281611c5e565b945060808b013593506117688c60a08d016114d5565b925060c08b0135915060e08b013590509295989b9194979a5092959850565b600060208284031215611798578081fd5b5035919050565b918252602082015260400190565b600082516117bf818460208701611c32565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b600086825260806020830152846080830152848660a084013760a08583018101919091526001600160a01b039390931660408201526060810191909152601f909201601f19169091010192915050565b60006020825282518060208401526118f8816040850160208701611c32565b601f01601f19169190910160400192915050565b6020808252601290820152717265676973746572656420616c726561647960701b604082015260600190565b6020808252600a90820152696f6e6c792070726f787960b01b604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252600b908201526a085c9959da5cdd195c995960aa1b604082015260600190565b6020808252600f908201526e6f6e6c7920676f7665726e616e636560881b604082015260600190565b60208082526016908201527563616e277420737465616c20616e206164647265737360501b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526016908201527531b0b73a103ab73932b3b4b9ba32b91036b0b9ba32b960511b604082015260600190565b60208082526013908201527231b0b73a103932b3b4b9ba32b91030b3b0b4b760691b604082015260600190565b60208082526013908201527227b7363c9031bab9ba37b6903932b630bcb2b960691b604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252600c908201526b37b7363c903932b630bcb2b960a11b604082015260600190565b60208082526014908201527337b7363c9037bbb732b91037b3103bb7b935b2b960611b604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a9082015269216d696e5f7374616b6560b01b604082015260600190565b6020808252600e908201526d37b7363c9032b7399037bbb732b960911b604082015260600190565b6020808252600e908201526d36bab9ba1031329036b0b9ba32b960911b604082015260600190565b60005b83811015611c4d578181015183820152602001611c35565b838111156103675750506000910152565b6001600160a01b0381168114611c7357600080fd5b5056fea2646970667358221220af9b060307b803c3e85be3c7887780626ba06e3ccb6888222cb230fd87c11d5664736f6c634300060c0033";
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
