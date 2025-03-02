import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { GovernanceVaultUpgrade, GovernanceVaultUpgradeInterface } from "../../../../contracts/Governance/v2-vault-and-gas/GovernanceVaultUpgrade";
type GovernanceVaultUpgradeConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GovernanceVaultUpgrade__factory extends ContractFactory {
    constructor(...args: GovernanceVaultUpgradeConstructorParams);
    getDeployTransaction(_userVault: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_userVault: AddressLike, overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<GovernanceVaultUpgrade & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): GovernanceVaultUpgrade__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200277e3803806200277e833981016040819052620000349162000142565b600054610100900460ff168062000050575062000050620000fb565b806200005f575060005460ff16155b620000875760405162461bcd60e51b81526004016200007e9062000172565b60405180910390fd5b600054610100900460ff16158015620000b3576000805460ff1961ff0019909116610100171660011790555b604080546001600160a01b03191661dead179055620000d162000101565b8015620000e4576000805461ff00191690555b5060601b6001600160601b031916608052620001c0565b303b1590565b6202a3006033556203f480603481905569054b40b1f852bda00000603555683635c9adc5dea00000603655604b603755603855610e10603955615460603a55565b60006020828403121562000154578081fd5b81516001600160a01b03811681146200016b578182fd5b9392505050565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b60805160601c612596620001e860003980610af15280610cb3528061194752506125966000f3fe6080604052600436106102255760003560e01c80639daafec711610123578063ce25d71c116100ab578063e4917d9f1161006f578063e4917d9f1461061b578063ea0217cf1461063b578063ece40cc11461065b578063f0b768921461067b578063fe0d94c11461069b57610225565b8063ce25d71c1461058f578063d6159fe5146105a4578063d6f0948c146105b9578063da35c664146105d9578063e23a9a52146105ee57610225565b8063b1610d7e116100f2578063b1610d7e146104fa578063b54426c81461050f578063b859f11b1461052f578063c0c0e8201461054f578063c4d66de81461056f57610225565b80639daafec71461049b578063a6c26603146104b0578063a72edda3146104c5578063adf898a4146104e557610225565b80635c19a95c116101b15780636dc2dc6c116101755780636dc2dc6c1461040657806370b0f6601461042657806392ab89bb146104465780639a9e3b6e1461045b5780639ae697bf1461047b57610225565b80635c19a95c1461036f5780636198e3391461038f57806365da1264146103af578063671dd275146103dc5780636a661755146103f157610225565b806337f135d7116101f857806337f135d7146102d65780633e4f49e6146102eb57806354fd4d5014610318578063587a6ecb1461033a57806358e9fff01461034f57610225565b8063013cf08b1461022a57806302ec8f9e1461026757806315373e3d1461028957806317977c61146102a9575b600080fd5b34801561023657600080fd5b5061024a610245366004611dfd565b6106ae565b60405161025e989796959493929190611f09565b60405180910390f35b34801561027357600080fd5b50610287610282366004611dfd565b610713565b005b34801561029557600080fd5b506102876102a4366004611e41565b610740565b3480156102b557600080fd5b506102c96102c4366004611bf4565b61074f565b60405161025e91906124dd565b3480156102e257600080fd5b506102c9610761565b3480156102f757600080fd5b5061030b610306366004611dfd565b610767565b60405161025e9190611fc7565b34801561032457600080fd5b5061032d6108aa565b60405161025e9190611fdb565b34801561034657600080fd5b506102c96108d5565b34801561035b57600080fd5b506102c961036a366004611c0f565b6108db565b34801561037b57600080fd5b5061028761038a366004611bf4565b610929565b34801561039b57600080fd5b506102876103aa366004611dfd565b610a4b565b3480156103bb57600080fd5b506103cf6103ca366004611bf4565b610b64565b60405161025e9190611eb8565b3480156103e857600080fd5b506102c9610b7f565b3480156103fd57600080fd5b506102c9610b85565b34801561041257600080fd5b50610287610421366004611dfd565b610b8b565b34801561043257600080fd5b50610287610441366004611dfd565b610bd0565b34801561045257600080fd5b50610287610bf4565b34801561046757600080fd5b50610287610476366004611dfd565b610c7b565b34801561048757600080fd5b506102c9610496366004611bf4565b610c9f565b3480156104a757600080fd5b506103cf610cb1565b3480156104bc57600080fd5b506102c9610cd5565b3480156104d157600080fd5b506102c96104e0366004611bf4565b610cdb565b3480156104f157600080fd5b506103cf610ced565b34801561050657600080fd5b506102c9610cfc565b34801561051b57600080fd5b5061028761052a366004611dfd565b610d02565b34801561053b57600080fd5b5061028761054a366004611d1c565b610d0f565b34801561055b57600080fd5b5061028761056a366004611dfd565b610dc6565b34801561057b57600080fd5b5061028761058a366004611bf4565b610dea565b34801561059b57600080fd5b506102c961102d565b3480156105b057600080fd5b506102c9611033565b3480156105c557600080fd5b506102c96105d4366004611c6f565b611039565b3480156105e557600080fd5b506102c961104f565b3480156105fa57600080fd5b5061060e610609366004611e15565b611059565b60405161025e91906124b8565b34801561062757600080fd5b50610287610636366004611dfd565b6110cb565b34801561064757600080fd5b50610287610656366004611dfd565b6110ef565b34801561066757600080fd5b50610287610676366004611dfd565b611113565b34801561068757600080fd5b50610287610696366004611cbd565b611137565b6102876106a9366004611dfd565b6111b7565b603d81815481106106bb57fe5b600091825260209091206008909102018054600182015460028301546003840154600485015460058601546006909601546001600160a01b039586169750949093169491939092919060ff8082169161010090041688565b33301461073b5760405162461bcd60e51b815260040161073290612284565b60405180910390fd5b603555565b61074b338383611349565b5050565b603e6020526000908152604090205481565b60335481565b600061077161104f565b82111580156107805750600082115b61079c5760405162461bcd60e51b8152600401610732906123ba565b6000603d83815481106107ab57fe5b9060005260206000209060080201905080600201546107c861157a565b116107d75760009150506108a5565b80600301546107e461157a565b116107f35760019150506108a5565b8060050154816004015411158061081557506035548160050154826004015401105b156108245760029150506108a5565b600681015460ff161561083b5760059150506108a5565b61086060345461085a603354846003015461157e90919063ffffffff16565b9061157e565b61086861157a565b106108775760069150506108a5565b60335460038201546108889161157e565b61089061157a565b1061089f5760049150506108a5565b60039150505b919050565b60408051808201909152601181527019173b30bab63a16b6b4b3b930ba34b7b760791b602082015290565b603a5481565b6001600160a01b038381166000908152603c602052604081205490911633146109165760405162461bcd60e51b81526004016107329061244a565b6109218484846115a3565b949350505050565b336000818152603c60205260409020546001600160a01b03908116919083161480159061095f57506001600160a01b0382163014155b801561097357506001600160a01b03821615155b80156109915750806001600160a01b0316826001600160a01b031614155b6109ad5760405162461bcd60e51b8152600401610732906122bb565b6001600160a01b038116156109f3576040516001600160a01b0382169033907f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da7290600090a35b336000818152603c602052604080822080546001600160a01b0319166001600160a01b03871690811790915590519092917f4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea291a35050565b336000908152603f6020526040902054610a6361157a565b11610a805760405162461bcd60e51b815260040161073290612216565b60408051808201825260208082527f476f7665726e616e63653a20696e73756666696369656e742062616c616e636581830152336000908152603b9091529190912054610ace9183906118f1565b336000818152603b6020526040908190209290925590516391fe357360e01b81527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316916391fe357391610b2f91908590600401611ecc565b600060405180830381600087803b158015610b4957600080fd5b505af1158015610b5d573d6000803e3d6000fd5b5050505050565b603c602052600090815260409020546001600160a01b031681565b60355481565b60345481565b333014610baa5760405162461bcd60e51b815260040161073290612284565b6033548110610bcb5760405162461bcd60e51b8152600401610732906121d2565b603a55565b333014610bef5760405162461bcd60e51b815260040161073290612284565b603755565b336000908152603c60205260409020546001600160a01b031680610c2a5760405162461bcd60e51b815260040161073290612400565b336000818152603c602052604080822080546001600160a01b0319169055516001600160a01b03841692917f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da7291a350565b333014610c9a5760405162461bcd60e51b815260040161073290612284565b603455565b603b6020526000908152604090205481565b7f000000000000000000000000000000000000000000000000000000000000000081565b60365481565b603f6020526000908152604090205481565b6040546001600160a01b031681565b60385481565b610d0c338261191d565b50565b60005b8351811015610da057336001600160a01b0316603c6000868481518110610d3557fe5b6020908102919091018101516001600160a01b03908116835290820192909252604001600020541614610d7a5760405162461bcd60e51b81526004016107329061244a565b610d98848281518110610d8957fe5b60200260200101518484611349565b600101610d12565b50336000908152603b602052604090205415610dc157610dc1338383611349565b505050565b333014610de55760405162461bcd60e51b815260040161073290612284565b603955565b600054610100900460ff1680610e035750610e03611a22565b80610e11575060005460ff16155b610e2d5760405162461bcd60e51b81526004016107329061236c565b600054610100900460ff16158015610e58576000805460ff1961ff0019909116610100171660011790555b604080546001600160a01b038085166001600160a01b03199283161783558251610100818101855230825261dead602083019081526000958301868152606084018781526080850188815260a08601898152600160c0880181815260e089018c8152603d80549384018155909c52975160089091027fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc381018054928b16928c169290921790915594517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc4860180549190991699169890981790965590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc5830155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc682015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc784015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc8830155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc990910180549351151590920261ff001991151560ff199094169390931716919091179055611018611a28565b801561074b576000805461ff00191690555050565b60395481565b60375481565b60006110463384846115a3565b90505b92915050565b603d546000190190565b611061611aee565b603d838154811061106e57fe5b600091825260208083206001600160a01b0395909516835260089190910290930160070183526040908190208151606081018352815460ff8082161515835261010090910416151594810194909452600101549083015250919050565b3330146110ea5760405162461bcd60e51b815260040161073290612284565b603355565b33301461110e5760405162461bcd60e51b815260040161073290612284565b603855565b3330146111325760405162461bcd60e51b815260040161073290612284565b603655565b60408054905163d505accf60e01b81526001600160a01b039091169063d505accf9061117390899030908a908a908a908a908a90600401611f4f565b600060405180830381600087803b15801561118d57600080fd5b505af11580156111a1573d6000803e3d6000fd5b505050506111af868661191d565b505050505050565b60046111c282610767565b60068111156111cd57fe5b146111ea5760405162461bcd60e51b815260040161073290612031565b6000603d82815481106111f957fe5b600091825260209091206006600890920201908101805460ff191660019081179091558101549091506001600160a01b031661123481611a69565b6112505760405162461bcd60e51b815260040161073290611fee565b60408051600481526024810182526020810180516001600160e01b03166306e60b1760e31b17905290516000916060916001600160a01b0385169161129491611e9c565b600060405180830381855af49150503d80600081146112cf576040519150601f19603f3d011682016040523d82523d6000602084013e6112d4565b606091505b509150915081611317578051156112ff578060405162461bcd60e51b81526004016107329190611fdb565b60405162461bcd60e51b815260040161073290612481565b60405185907f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f90600090a25050505050565b600161135483610767565b600681111561135f57fe5b1461137c5760405162461bcd60e51b8152600401610732906120f7565b6000603d838154811061138b57fe5b600091825260208083206001600160a01b038816845260076008909302019182018152604080842060058401546004850154603b9094529190942054929450101590806113ea5760405162461bcd60e51b8152600401610732906122f2565b825460ff1615611439578254610100900460ff1615611420576001830154600485015461141691611a6f565b6004850155611439565b6001830154600585015461143391611a6f565b60058501555b841561145857600484015461144e908261157e565b600485015561146d565b6005840154611467908261157e565b60058501555b6006840154610100900460ff1615801561149d575060395461149b61149061157a565b600387015490611a6f565b105b156114e15760058401546004850154111582151581146114df5760068501805461ff001916610100179055603a5460038601546114d99161157e565b60038601555b505b8254600160ff19909116811761ff001916610100871515021784558301819055603354603454603a54600387015461152c938b9361152793919261085a9283919061157e565b611ab1565b841515876001600160a01b0316877f7c2de587c00d75474a0c6c6fa96fd3b45dc974cd4e8a75f712bb84c950dce1b58460405161156991906124dd565b60405180910390a450505050505050565b4290565b6000828201838110156110465760405162461bcd60e51b81526004016107329061219b565b6001600160a01b0383166000908152603b60205260408120546036548110156115de5760405162461bcd60e51b81526004016107329061213e565b6115e784611a69565b6116035760405162461bcd60e51b815260040161073290612329565b6001600160a01b0385166000908152603e6020526040902054801561167557600061162d82610767565b9050600181600681111561163d57fe5b141580156116575750600081600681111561165457fe5b14155b6116735760405162461bcd60e51b81526004016107329061207c565b505b600061168560375461085a61157a565b9050600061169e6038548361157e90919063ffffffff16565b90506116a8611b0e565b506040805161010080820183526001600160a01b03808c1683528a8116602084019081529383018681526060840186815260006080860181815260a0870182815260c0880183815260e08901848152603d80546001810182559086528a5160089091027fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc381018054928b166001600160a01b03199384161790559b517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc48d01805491909a1691161790975594517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc58a015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc6890155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc788015590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc887015590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc990950180549251151590930261ff001995151560ff1990931692909217949094161790559061185a61104f565b82516001600160a01b03166000908152603e60205260409020819055603354603454603a5492935061189c928d9261152792909161085a919082908a9061157e565b896001600160a01b0316817f90ec05050aa23d54ba425e926fe646c318e85825bc400b13a46010abe86eb2f08b87878d6040516118dc9493929190611f90565b60405180910390a39998505050505050505050565b600081848411156119155760405162461bcd60e51b81526004016107329190611fdb565b505050900390565b6040805490516323b872dd60e01b81526001600160a01b03909116906323b872dd906119719085907f0000000000000000000000000000000000000000000000000000000000000000908690600401611ee5565b602060405180830381600087803b15801561198b57600080fd5b505af115801561199f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c39190611de1565b6119df5760405162461bcd60e51b81526004016107329061224d565b6001600160a01b0382166000908152603b6020526040902054611a02908261157e565b6001600160a01b039092166000908152603b602052604090209190915550565b303b1590565b6202a3006033556203f480603481905569054b40b1f852bda00000603555683635c9adc5dea00000603655604b603755603855610e10603955615460603a55565b3b151590565b600061104683836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506118f1565b6001600160a01b0382166000908152603f602052604090205481111561074b576001600160a01b03919091166000908152603f6020526040902055565b604080516060810182526000808252602082018190529181019190915290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b80356001600160a01b038116811461104957600080fd5b803561104981612552565b600082601f830112611b9b578081fd5b813567ffffffffffffffff811115611bb1578182fd5b611bc4601f8201601f19166020016124e6565b9150808252836020828501011115611bdb57600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611c05578081fd5b6110468383611b69565b600080600060608486031215611c23578182fd5b8335611c2e8161253d565b92506020840135611c3e8161253d565b9150604084013567ffffffffffffffff811115611c59578182fd5b611c6586828701611b8b565b9150509250925092565b60008060408385031215611c81578182fd5b8235611c8c8161253d565b9150602083013567ffffffffffffffff811115611ca7578182fd5b611cb385828601611b8b565b9150509250929050565b60008060008060008060c08789031215611cd5578182fd5b611cdf8888611b69565b95506020870135945060408701359350606087013560ff81168114611d02578283fd5b9598949750929560808101359460a0909101359350915050565b600080600060608486031215611d30578283fd5b833567ffffffffffffffff80821115611d47578485fd5b818601915086601f830112611d5a578485fd5b813581811115611d68578586fd5b60209150818102611d7a8382016124e6565b8281528381019085850183870186018c1015611d9457898afd5b8996505b84871015611dbe57611daa8c82611b69565b835260019690960195918501918501611d98565b5097505050508501359250611dd890508560408601611b80565b90509250925092565b600060208284031215611df2578081fd5b815161104681612552565b600060208284031215611e0e578081fd5b5035919050565b60008060408385031215611e27578182fd5b82359150611e388460208501611b69565b90509250929050565b60008060408385031215611e53578182fd5b823591506020830135611e6581612552565b809150509250929050565b60008151808452611e8881602086016020860161250d565b601f01601f19169290920160200192915050565b60008251611eae81846020870161250d565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03988916815296909716602087015260408601949094526060850192909252608084015260a0830152151560c082015290151560e08201526101000190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b600060018060a01b038616825284602083015283604083015260806060830152611fbd6080830184611e70565b9695505050505050565b6020810160078310611fd557fe5b91905290565b6000602082526110466020830184611e70565b60208082526023908201527f476f7665726e616e63653a3a657865637574653a206e6f74206120636f6e74726040820152621858dd60ea1b606082015260800190565b6020808252602b908201527f476f7665726e616e63653a3a657865637574653a20696e76616c69642070726f60408201526a706f73616c20737461746560a81b606082015260800190565b60208082526055908201527f476f7665726e616e63653a3a70726f706f73653a206f6e65206c69766520707260408201527f6f706f73616c207065722070726f706f7365722c20666f756e6420616e20616c6060820152741c9958591e481858dd1a5d99481c1c9bdc1bdcd85b605a1b608082015260a00190565b60208082526027908201527f476f7665726e616e63653a3a5f63617374566f74653a20766f74696e672069736040820152660818db1bdcd95960ca1b606082015260800190565b6020808252603c908201527f476f7665726e616e63653a3a70726f706f73653a2070726f706f73657220766f60408201527f7465732062656c6f772070726f706f73616c207468726573686f6c6400000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526024908201527f476f7665726e616e63653a20696e636f727265637420766f7465457874656e6460408201526354696d6560e01b606082015260800190565b6020808252601d908201527f476f7665726e616e63653a20746f6b656e7320617265206c6f636b6564000000604082015260600190565b60208082526019908201527f544f524e3a207472616e7366657246726f6d206661696c656400000000000000604082015260600190565b60208082526018908201527f476f7665726e616e63653a20756e617574686f72697a65640000000000000000604082015260600190565b6020808252601d908201527f476f7665726e616e63653a20696e76616c69642064656c656761746565000000604082015260600190565b60208082526018908201527f476f7665726e616e63653a2062616c616e636520697320300000000000000000604082015260600190565b60208082526023908201527f476f7665726e616e63653a3a70726f706f73653a206e6f74206120636f6e74726040820152621858dd60ea1b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526026908201527f476f7665726e616e63653a3a73746174653a20696e76616c69642070726f706f6040820152651cd85b081a5960d21b606082015260800190565b6020808252602a908201527f476f7665726e616e63653a20746f6b656e732061726520616c726561647920756040820152691b99195b1959d85d195960b21b606082015260800190565b6020808252601a908201527f476f7665726e616e63653a206e6f7420617574686f72697a6564000000000000604082015260600190565b60208082526019908201527f50726f706f73616c20657865637574696f6e206661696c656400000000000000604082015260600190565b8151151581526020808301511515908201526040918201519181019190915260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561250557600080fd5b604052919050565b60005b83811015612528578181015183820152602001612510565b83811115612537576000848401525b50505050565b6001600160a01b0381168114610d0c57600080fd5b8015158114610d0c57600080fdfea2646970667358221220a5a11ac2ef7ca8ffa3de99d889dba1ca33694751876e9ba0dfd274c33441764f64736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_userVault";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "Delegated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "id";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "proposer";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "endTime";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "description";
            readonly type: "string";
        }];
        readonly name: "ProposalCreated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "ProposalExecuted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }];
        readonly name: "Undelegated";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "bool";
            readonly name: "support";
            readonly type: "bool";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "votes";
            readonly type: "uint256";
        }];
        readonly name: "Voted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [];
        readonly name: "CLOSING_PERIOD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EXECUTION_DELAY";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "EXECUTION_EXPIRATION";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "PROPOSAL_THRESHOLD";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "QUORUM_VOTES";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTE_EXTEND_TIME";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTING_DELAY";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "VOTING_PERIOD";
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
        readonly name: "canWithdrawAfter";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "from";
            readonly type: "address[]";
        }, {
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "support";
            readonly type: "bool";
        }];
        readonly name: "castDelegatedVote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "support";
            readonly type: "bool";
        }];
        readonly name: "castVote";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }];
        readonly name: "delegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "delegatedTo";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "execute";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "voter";
            readonly type: "address";
        }];
        readonly name: "getReceipt";
        readonly outputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bool";
                readonly name: "hasVoted";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "support";
                readonly type: "bool";
            }, {
                readonly internalType: "uint256";
                readonly name: "votes";
                readonly type: "uint256";
            }];
            readonly internalType: "struct Governance.Receipt";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_torn";
            readonly type: "address";
        }];
        readonly name: "initialize";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "latestProposalIds";
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
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
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
        readonly name: "lock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "lockWithApproval";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly name: "lockedBalance";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "proposalCount";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly name: "proposals";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "proposer";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "startTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "endTime";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "forVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "againstVotes";
            readonly type: "uint256";
        }, {
            readonly internalType: "bool";
            readonly name: "executed";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "extended";
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
            readonly internalType: "string";
            readonly name: "description";
            readonly type: "string";
        }];
        readonly name: "propose";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }, {
            readonly internalType: "string";
            readonly name: "description";
            readonly type: "string";
        }];
        readonly name: "proposeByDelegate";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "closingPeriod";
            readonly type: "uint256";
        }];
        readonly name: "setClosingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "executionDelay";
            readonly type: "uint256";
        }];
        readonly name: "setExecutionDelay";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "executionExpiration";
            readonly type: "uint256";
        }];
        readonly name: "setExecutionExpiration";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalThreshold";
            readonly type: "uint256";
        }];
        readonly name: "setProposalThreshold";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "quorumVotes";
            readonly type: "uint256";
        }];
        readonly name: "setQuorumVotes";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "voteExtendTime";
            readonly type: "uint256";
        }];
        readonly name: "setVoteExtendTime";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "votingDelay";
            readonly type: "uint256";
        }];
        readonly name: "setVotingDelay";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "votingPeriod";
            readonly type: "uint256";
        }];
        readonly name: "setVotingPeriod";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "proposalId";
            readonly type: "uint256";
        }];
        readonly name: "state";
        readonly outputs: readonly [{
            readonly internalType: "enum Governance.ProposalState";
            readonly name: "";
            readonly type: "uint8";
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
        readonly name: "undelegate";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "unlock";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "userVault";
        readonly outputs: readonly [{
            readonly internalType: "contract ITornadoVault";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "version";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): GovernanceVaultUpgradeInterface;
    static connect(address: string, runner?: ContractRunner | null): GovernanceVaultUpgrade;
}
export {};
