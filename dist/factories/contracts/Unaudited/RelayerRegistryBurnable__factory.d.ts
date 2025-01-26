import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type { RelayerRegistryBurnable, RelayerRegistryBurnableInterface } from "../../../contracts/Unaudited/RelayerRegistryBurnable";
type RelayerRegistryBurnableConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayerRegistryBurnable__factory extends ContractFactory {
    constructor(...args: RelayerRegistryBurnableConstructorParams);
    getDeployTransaction(_torn: AddressLike, _governance: AddressLike, _ens: AddressLike, _staking: AddressLike, _feeManager: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_torn: AddressLike, _governance: AddressLike, _ens: AddressLike, _staking: AddressLike, _feeManager: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<RelayerRegistryBurnable & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): RelayerRegistryBurnable__factory;
    static readonly bytecode = "0x6101206040523480156200001257600080fd5b50604051620020ed380380620020ed83398101604081905262000035916200006d565b6001600160601b0319606095861b811660805293851b841660a05291841b831660c052831b821660e05290911b166101005262000105565b600080600080600060a0868803121562000085578081fd5b85516200009281620000ec565b6020870151909550620000a581620000ec565b6040870151909450620000b881620000ec565b6060870151909350620000cb81620000ec565b6080870151909250620000de81620000ec565b809150509295509295909350565b6001600160a01b03811681146200010257600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c611f49620001a4600039806106a65280610d2652508061078252806108dd5280610a685280610aa4528061103352806112f3525080610590528061112452508061037f5280610837528061090a5280610a155280610e17525080610a455280610b535280610bdc5280610d6a528061101052806112d05250611f496000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c80636fafdf83116100de578063c4d66de811610097578063e37e8bcc11610071578063e37e8bcc14610333578063e43fdb3c14610346578063eb4af04514610359578063f18876841461036c5761018e565b8063c4d66de814610305578063d0fb020314610318578063d990231d146103205761018e565b80636fafdf831461029157806385a29683146102a4578063adf898a4146102b7578063ae53941c146102bf578063b69fd4ab146102df578063b971a6bf146102f25761018e565b80634ba16d9d1161014b5780634d4efd04116101255780634d4efd04146102355780635300f84114610248578063541d5548146102695780635aa6e675146102895761018e565b80634ba16d9d146102125780634cb16c2e146102255780634cf088d91461022d5761018e565b806314d92307146101935780632e650649146101a85780633523dc85146101bb5780633f15457f146101ce5780634048a257146101ec57806345a11cec146101ff575b600080fd5b6101a66101a1366004611745565b610374565b005b6101a66101b636600461177d565b610442565b6101a66101c9366004611745565b61048e565b6101d661058e565b6040516101e39190611a28565b60405180910390f35b6101d66101fa366004611745565b6105b2565b6101a661020d3660046117b5565b6105cd565b6101a6610220366004611745565b61082c565b6101d66108c6565b6101d66108db565b6101a6610243366004611745565b6108ff565b61025b610256366004611745565b6109da565b6040516101e39291906119fe565b61027c610277366004611745565b6109f3565b6040516101e39190611ad4565b6101d6610a13565b6101a661029f3660046119e6565b610a37565b6101a66102b236600461182a565b610b3c565b6101d6610bda565b6102d26102cd366004611745565b610bfe565b6040516101e39190611adf565b61027c6102ed36600461177d565b610c2c565b6102d2610300366004611745565b610c53565b6101a6610313366004611745565b610c7e565b6101d6610d24565b6101a661032e3660046117ff565b610d48565b6101a661034136600461192f565b610d53565b6101a66103543660046118b8565b610df7565b6101a66103673660046119e6565b610e0c565b6102d2610e89565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103c55760405162461bcd60e51b81526004016103bc90611c17565b60405180910390fd5b6103ce816108ff565b6001600160a01b038116600090815260026020908152604080832083815560010183905560039091529081902080546001600160a01b0319169055517f490a66cc56c789979052c7052fc0c10a6c4627d8e6165caec80db97a4c38352190610437908390611a28565b60405180910390a150565b3360008181526003602052604090205483906001600160a01b0380831691161461047e5760405162461bcd60e51b81526004016103bc90611db6565b6104888484610e8f565b50505050565b6001600160a01b03811633146104d7576001600160a01b038181166000908152600360205260409020541633146104d75760405162461bcd60e51b81526004016103bc90611e0b565b6001600160a01b0380821660008181526003602052604090205490911614156105125760405162461bcd60e51b81526004016103bc90611cbe565b6001600160a01b03808216600090815260036020526040908190205490517fb2a8e18b9e887f502d65c1683e60b723fa582a6903ea4e8eb23907a19c1ce8a09261055f9216908490611a3c565b60405180910390a16001600160a01b0316600090815260036020526040902080546001600160a01b0319169055565b7f000000000000000000000000000000000000000000000000000000000000000081565b6003602052600090815260409020546001600160a01b031681565b6000546201000090046001600160a01b031633146105fd5760405162461bcd60e51b81526004016103bc90611b97565b6001600160a01b03808416600090815260036020526040902054168061065b576001600160a01b0383811660009081526003602052604090205416156106555760405162461bcd60e51b81526004016103bc90611d1b565b50610827565b826001600160a01b0316816001600160a01b03161461068c5760405162461bcd60e51b81526004016103bc90611db6565b604051630bbefce160e21b81526000906001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632efbf384906106db908690600401611a28565b602060405180830381600087803b1580156106f557600080fd5b505af1158015610709573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072d9190611761565b6001600160a01b03858116600090815260026020526040902054911691506107559082610f28565b6001600160a01b038086166000908152600260205260409081902092909255905163338610af60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063338610af906107b9908490600401611adf565b600060405180830381600087803b1580156107d357600080fd5b505af11580156107e7573d6000803e3d6000fd5b505050507f659f33fc6677bebf3a9bf3101092792e31f35766d0358e54577bdd91a655f6a0848260405161081c929190611abb565b60405180910390a150505b505050565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108745760405162461bcd60e51b81526004016103bc90611c17565b6000805462010000600160b01b031916620100006001600160a01b038416021790556040517f94df8c3a8087dce110e5fbc5acf380c83c94bbd31b2c8ed4c08e1396a696e1a890610437908390611a28565b6000546201000090046001600160a01b031681565b7f000000000000000000000000000000000000000000000000000000000000000081565b336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146109475760405162461bcd60e51b81526004016103bc90611c17565b6001600160a01b038082166000818152600360205260409020549091169081146109835760405162461bcd60e51b81526004016103bc90611ea7565b6001600160a01b03811660009081526002602052604080822091909155517fafa759fb3c68e89eaaba359f0930ab40c24875b73cc9e2f6a38b0180019eb8f3906109ce908490611a28565b60405180910390a15050565b6002602052600090815260409020805460019091015482565b6001600160a01b0390811660009081526003602052604090205416151590565b7f000000000000000000000000000000000000000000000000000000000000000081565b33610a8d6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016827f000000000000000000000000000000000000000000000000000000000000000085610f71565b60405163338610af60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063338610af90610ad9908590600401611adf565b600060405180830381600087803b158015610af357600080fd5b505af1158015610b07573d6000803e3d6000fd5b505050507f659f33fc6677bebf3a9bf3101092792e31f35766d0358e54577bdd91a655f6a081836040516109ce929190611abb565b60405163d505accf60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d505accf90610b9490889030908b908a908a908a908a90600401611a7a565b600060405180830381600087803b158015610bae57600080fd5b505af1158015610bc2573d6000803e3d6000fd5b50505050610bd1858888610fc9565b50505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b03908116600090815260036020908152604080832054909316825260029052206001015490565b6001600160a01b038181166000908152600360205260409020548116908316145b92915050565b6001600160a01b03908116600090815260036020908152604080832054909316825260029052205490565b600054610100900460ff1680610c975750610c976110d7565b80610ca5575060005460ff16155b610cc15760405162461bcd60e51b81526004016103bc90611c70565b600054610100900460ff16158015610cec576000805460ff1961ff0019909116610100171660011790555b6000805462010000600160b01b031916620100006001600160a01b038516021790558015610d20576000805461ff00191690555b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610d20338383610fc9565b60405163d505accf60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d505accf90610dab90889030908d908a908a908a908a90600401611a7a565b600060405180830381600087803b158015610dc557600080fd5b505af1158015610dd9573d6000803e3d6000fd5b50505050610deb858b8b8b8b8b6110dd565b50505050505050505050565b610e053386868686866110dd565b5050505050565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610e545760405162461bcd60e51b81526004016103bc90611c17565b60018190556040517f404663163d528ec45288abc4389b81bd96fabf858ff57577ebd4ee7f15d7b0a690610437908390611adf565b60015481565b6001600160a01b038181166000908152600360205260409020541615610ec75760405162461bcd60e51b81526004016103bc90611c40565b6001600160a01b038181166000908152600360205260409081902080546001600160a01b03191692851692909217909155517fcde75bd02c5f739608c891bcd9aa6809e6c4a7035ac7b9f3fd5fea756db74724906109ce9084908490611a3c565b6000610f6a83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611412565b9392505050565b610488846323b872dd60e01b858585604051602401610f9293929190611a56565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b03199093169290921790915261143e565b6001600160a01b03808316600081815260036020526040902054909116146110035760405162461bcd60e51b81526004016103bc90611bf2565b6110586001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016847f000000000000000000000000000000000000000000000000000000000000000084610f71565b6001600160a01b03821660009081526002602052604090205461107c9082906114cd565b6001600160a01b0383166000908152600260205260409081902091909155517f1275dbe2a271b2b822e60f1d44894fa5fb337e7e2dc6a200205b1a5b17c07d64906110ca9084908490611abb565b60405180910390a1505050565b303b1590565b600061111e86868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506114f292505050565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166302571be3836040518263ffffffff1660e01b815260040161116e9190611adf565b60206040518083038186803b15801561118657600080fd5b505afa15801561119a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111be9190611761565b905073d4416b13d2b3a9abae7acd5d6c2bbdbe256864016001600160a01b0382168114156111fe5760405162461bcd60e51b81526004016103bc90611d48565b816001600160a01b0316896001600160a01b03161461122f5760405162461bcd60e51b81526004016103bc90611ddc565b6001600160a01b0389811660009081526003602052604090205416156112675760405162461bcd60e51b81526004016103bc90611cee565b6001600160a01b03891660009081526002602052604090206001810154156112a15760405162461bcd60e51b81526004016103bc90611b6b565b6001548710156112c35760405162461bcd60e51b81526004016103bc90611e83565b6113186001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168b7f00000000000000000000000000000000000000000000000000000000000000008a610f71565b7f1275dbe2a271b2b822e60f1d44894fa5fb337e7e2dc6a200205b1a5b17c07d648a88604051611349929190611abb565b60405180910390a1868155600181018490556001600160a01b038a16600081815260036020526040812080546001600160a01b0319169092179091555b858110156113c657600087878381811061139c57fe5b90506020020160208101906113b19190611745565b90506113bd8c82610e8f565b50600101611386565b507f9ca7c9c762eff27b021608f232b4c4b8f9b8bf9a3d322297e47cc4209a67d5e2848a8a8d8b6040516113fe959493929190611ae8565b60405180910390a150505050505050505050565b600081848411156114365760405162461bcd60e51b81526004016103bc9190611b38565b505050900390565b6060611493826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166114ff9092919063ffffffff16565b80519091501561082757808060200190518101906114b19190611898565b6108275760405162461bcd60e51b81526004016103bc90611e39565b600082820183811015610f6a5760405162461bcd60e51b81526004016103bc90611bbb565b6000610c4d826000611516565b606061150e8484600085611580565b949350505050565b60008183511161152857506000610c4d565b60006115348484611644565b905061154584828501600101611516565b611550858584611689565b6040516020016115619291906119fe565b6040516020818303038152906040528051906020012091505092915050565b606061158b856116a5565b6115a75760405162461bcd60e51b81526004016103bc90611d7f565b60006060866001600160a01b031685876040516115c49190611a0c565b60006040518083038185875af1925050503d8060008114611601576040519150601f19603f3d011682016040523d82523d6000602084013e611606565b606091505b5091509150811561161a57915061150e9050565b80511561162a5780518082602001fd5b8360405162461bcd60e51b81526004016103bc9190611b38565b6000805b83518184011415801561167c5750838184018151811061166457fe5b6020910101516001600160f81b031916601760f91b14155b15610f6a57600101611648565b60008351828401111561169b57600080fd5b5091016020012090565b3b151590565b60008083601f8401126116bc578182fd5b50813567ffffffffffffffff8111156116d3578182fd5b60208301915083602080830285010111156116ed57600080fd5b9250929050565b60008083601f840112611705578182fd5b50813567ffffffffffffffff81111561171c578182fd5b6020830191508360208285010111156116ed57600080fd5b803560ff81168114610c4d57600080fd5b600060208284031215611756578081fd5b8135610f6a81611efb565b600060208284031215611772578081fd5b8151610f6a81611efb565b6000806040838503121561178f578081fd5b823561179a81611efb565b915060208301356117aa81611efb565b809150509250929050565b6000806000606084860312156117c9578081fd5b83356117d481611efb565b925060208401356117e481611efb565b915060408401356117f481611efb565b809150509250925092565b60008060408385031215611811578182fd5b823561181c81611efb565b946020939093013593505050565b600080600080600080600060e0888a031215611844578283fd5b873561184f81611efb565b965060208801359550604088013561186681611efb565b94506060880135935061187c8960808a01611734565b925060a0880135915060c0880135905092959891949750929550565b6000602082840312156118a9578081fd5b81518015158114610f6a578182fd5b6000806000806000606086880312156118cf578081fd5b853567ffffffffffffffff808211156118e6578283fd5b6118f289838a016116f4565b9097509550602088013594506040880135915080821115611911578283fd5b5061191e888289016116ab565b969995985093965092949392505050565b6000806000806000806000806000806101008b8d03121561194e578283fd5b8a3567ffffffffffffffff80821115611965578485fd5b6119718e838f016116f4565b909c509a5060208d0135995060408d0135915080821115611990578485fd5b5061199d8d828e016116ab565b90985096505060608b01356119b181611efb565b945060808b013593506119c78c60a08d01611734565b925060c08b0135915060e08b013590509295989b9194979a5092959850565b6000602082840312156119f7578081fd5b5035919050565b918252602082015260400190565b60008251611a1e818460208701611ecf565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b90815260200190565b600086825260806020830152846080830152848660a084013760a08583018101919091526001600160a01b039390931660408201526060810191909152601f909201601f19169091010192915050565b6000602082528251806020840152611b57816040850160208701611ecf565b601f01601f19169190910160400192915050565b6020808252601290820152717265676973746572656420616c726561647960701b604082015260600190565b6020808252600a90820152696f6e6c792070726f787960b01b604082015260600190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252600b908201526a085c9959da5cdd195c995960aa1b604082015260600190565b6020808252600f908201526e6f6e6c7920676f7665726e616e636560881b604082015260600190565b60208082526016908201527563616e277420737465616c20616e206164647265737360501b604082015260600190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526016908201527531b0b73a103ab73932b3b4b9ba32b91036b0b9ba32b960511b604082015260600190565b60208082526013908201527231b0b73a103932b3b4b9ba32b91030b3b0b4b760691b604082015260600190565b60208082526013908201527227b7363c9031bab9ba37b6903932b630bcb2b960691b604082015260600190565b6020808252601a908201527f6f6e6c7920756e7772617070656420656e7320646f6d61696e73000000000000604082015260600190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b6020808252600c908201526b37b7363c903932b630bcb2b960a11b604082015260600190565b60208082526015908201527437b7363c9032b739903237b6b0b4b71037bbb732b960591b604082015260600190565b60208082526014908201527337b7363c9037bbb732b91037b3103bb7b935b2b960611b604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252600a9082015269216d696e5f7374616b6560b01b604082015260600190565b6020808252600e908201526d36bab9ba1031329036b0b9ba32b960911b604082015260600190565b60005b83811015611eea578181015183820152602001611ed2565b838111156104885750506000910152565b6001600160a01b0381168114611f1057600080fd5b5056fea2646970667358221220be3a6263f0e59265d20e0ea6b1acdaa703b0d470d9d92c99bb310b097080aa2a64736f6c634300060c0033";
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
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "toBurn";
            readonly type: "uint256";
        }];
        readonly name: "burnAmount";
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
    static createInterface(): RelayerRegistryBurnableInterface;
    static connect(address: string, runner?: ContractRunner | null): RelayerRegistryBurnable;
}
export {};
