import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { MockGovernance, MockGovernanceInterface } from "../../../../../contracts/Governance/v1/Mocks/MockGovernance";
type MockGovernanceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class MockGovernance__factory extends ContractFactory {
    constructor(...args: MockGovernanceConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<MockGovernance & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): MockGovernance__factory;
    static readonly bytecode = "0x6080604052426041553480156200001557600080fd5b50600054610100900460ff168062000032575062000032620000cd565b8062000041575060005460ff16155b620000695760405162461bcd60e51b8152600401620000609062000114565b60405180910390fd5b600054610100900460ff1615801562000095576000805460ff1961ff0019909116610100171660011790555b604080546001600160a01b03191661dead179055620000b3620000d3565b8015620000c6576000805461ff00191690555b5062000162565b303b1590565b6202a3006033556203f480603481905569054b40b1f852bda00000603555683635c9adc5dea00000603655604b603755603855610e10603955615460603a55565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b6125c980620001726000396000f3fe6080604052600436106102305760003560e01c8063a0a2b5731161012e578063ce25d71c116100ab578063e4917d9f1161006f578063e4917d9f14610644578063ea0217cf14610664578063ece40cc114610684578063f0b76892146106a4578063fe0d94c1146106c457610230565b8063ce25d71c146105b8578063d6159fe5146105cd578063d6f0948c146105e2578063da35c66414610602578063e23a9a521461061757610230565b8063b54426c8116100f2578063b54426c814610518578063b5f6a74314610538578063b859f11b14610558578063c0c0e82014610578578063c4d66de81461059857610230565b8063a0a2b57314610499578063a6c26603146104b9578063a72edda3146104ce578063adf898a4146104ee578063b1610d7e1461050357610230565b80635c19a95c116101bc5780636dc2dc6c116101805780636dc2dc6c1461040457806370b0f6601461042457806392ab89bb146104445780639a9e3b6e146104595780639ae697bf1461047957610230565b80635c19a95c1461036d5780636198e3391461038d57806365da1264146103ad578063671dd275146103da5780636a661755146103ef57610230565b806317977c611161020357806317977c61146102d657806337f135d7146102f65780633e4f49e61461030b578063587a6ecb1461033857806358e9fff01461034d57610230565b8063013cf08b1461023557806302ec8f9e1461027257806315373e3d1461029457806316ada547146102b4575b600080fd5b34801561024157600080fd5b50610255610250366004611e01565b6106d7565b604051610269989796959493929190611f0d565b60405180910390f35b34801561027e57600080fd5b5061029261028d366004611e01565b61073c565b005b3480156102a057600080fd5b506102926102af366004611e45565b610769565b3480156102c057600080fd5b506102c9610778565b6040516102699190612510565b3480156102e257600080fd5b506102c96102f1366004611bf8565b61077e565b34801561030257600080fd5b506102c9610790565b34801561031757600080fd5b5061032b610326366004611e01565b610796565b6040516102699190611fcb565b34801561034457600080fd5b506102c96108d9565b34801561035957600080fd5b506102c9610368366004611c13565b6108df565b34801561037957600080fd5b50610292610388366004611bf8565b61092d565b34801561039957600080fd5b506102926103a8366004611e01565b610a4f565b3480156103b957600080fd5b506103cd6103c8366004611bf8565b610b86565b6040516102699190611ebc565b3480156103e657600080fd5b506102c9610ba1565b3480156103fb57600080fd5b506102c9610ba7565b34801561041057600080fd5b5061029261041f366004611e01565b610bad565b34801561043057600080fd5b5061029261043f366004611e01565b610bf2565b34801561045057600080fd5b50610292610c16565b34801561046557600080fd5b50610292610474366004611e01565b610c9d565b34801561048557600080fd5b506102c9610494366004611bf8565b610cc1565b3480156104a557600080fd5b506102926104b4366004611e01565b610cd3565b3480156104c557600080fd5b506102c9610cd8565b3480156104da57600080fd5b506102c96104e9366004611bf8565b610cde565b3480156104fa57600080fd5b506103cd610cf0565b34801561050f57600080fd5b506102c9610cff565b34801561052457600080fd5b50610292610533366004611e01565b610d05565b34801561054457600080fd5b50610292610553366004611bf8565b610d0f565b34801561056457600080fd5b50610292610573366004611d20565b610d31565b34801561058457600080fd5b50610292610593366004611e01565b610de8565b3480156105a457600080fd5b506102926105b3366004611bf8565b610e0c565b3480156105c457600080fd5b506102c961104f565b3480156105d957600080fd5b506102c9611055565b3480156105ee57600080fd5b506102c96105fd366004611c73565b61105b565b34801561060e57600080fd5b506102c9611071565b34801561062357600080fd5b50610637610632366004611e19565b61107b565b60405161026991906124eb565b34801561065057600080fd5b5061029261065f366004611e01565b6110ed565b34801561067057600080fd5b5061029261067f366004611e01565b611111565b34801561069057600080fd5b5061029261069f366004611e01565b611135565b3480156106b057600080fd5b506102926106bf366004611cc1565b611159565b6102926106d2366004611e01565b6111d9565b603d81815481106106e457fe5b600091825260209091206008909102018054600182015460028301546003840154600485015460058601546006909601546001600160a01b039586169750949093169491939092919060ff8082169161010090041688565b3330146107645760405162461bcd60e51b815260040161075b906122b7565b60405180910390fd5b603555565b61077433838361136b565b5050565b60415481565b603e6020526000908152604090205481565b60335481565b60006107a0611071565b82111580156107af5750600082115b6107cb5760405162461bcd60e51b815260040161075b906123ed565b6000603d83815481106107da57fe5b9060005260206000209060080201905080600201546107f761159c565b116108065760009150506108d4565b806003015461081361159c565b116108225760019150506108d4565b8060050154816004015411158061084457506035548160050154826004015401105b156108535760029150506108d4565b600681015460ff161561086a5760059150506108d4565b61088f60345461088960335484600301546115a290919063ffffffff16565b906115a2565b61089761159c565b106108a65760069150506108d4565b60335460038201546108b7916115a2565b6108bf61159c565b106108ce5760049150506108d4565b60039150505b919050565b603a5481565b6001600160a01b038381166000908152603c6020526040812054909116331461091a5760405162461bcd60e51b815260040161075b9061247d565b6109258484846115c7565b949350505050565b336000818152603c60205260409020546001600160a01b03908116919083161480159061096357506001600160a01b0382163014155b801561097757506001600160a01b03821615155b80156109955750806001600160a01b0316826001600160a01b031614155b6109b15760405162461bcd60e51b815260040161075b906122ee565b6001600160a01b038116156109f7576040516001600160a01b0382169033907f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da7290600090a35b336000818152603c602052604080822080546001600160a01b0319166001600160a01b03871690811790915590519092917f4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea291a35050565b336000908152603f6020526040902054610a6761159c565b11610a845760405162461bcd60e51b815260040161075b9061221a565b60408051808201825260208082527f476f7665726e616e63653a20696e73756666696369656e742062616c616e636581830152336000908152603b9091529190912054610ad2918390611915565b336000818152603b602052604090819020929092558154915163a9059cbb60e01b81526001600160a01b039092169163a9059cbb91610b15918590600401611ed0565b602060405180830381600087803b158015610b2f57600080fd5b505af1158015610b43573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b679190611de5565b610b835760405162461bcd60e51b815260040161075b90612251565b50565b603c602052600090815260409020546001600160a01b031681565b60355481565b60345481565b333014610bcc5760405162461bcd60e51b815260040161075b906122b7565b6033548110610bed5760405162461bcd60e51b815260040161075b906121d6565b603a55565b333014610c115760405162461bcd60e51b815260040161075b906122b7565b603755565b336000908152603c60205260409020546001600160a01b031680610c4c5760405162461bcd60e51b815260040161075b90612433565b336000818152603c602052604080822080546001600160a01b0319169055516001600160a01b03841692917f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da7291a350565b333014610cbc5760405162461bcd60e51b815260040161075b906122b7565b603455565b603b6020526000908152604090205481565b604155565b60365481565b603f6020526000908152604090205481565b6040546001600160a01b031681565b60385481565b610b833382611941565b604080546001600160a01b0319166001600160a01b0392909216919091179055565b60005b8351811015610dc257336001600160a01b0316603c6000868481518110610d5757fe5b6020908102919091018101516001600160a01b03908116835290820192909252604001600020541614610d9c5760405162461bcd60e51b815260040161075b9061247d565b610dba848281518110610dab57fe5b6020026020010151848461136b565b600101610d34565b50336000908152603b602052604090205415610de357610de333838361136b565b505050565b333014610e075760405162461bcd60e51b815260040161075b906122b7565b603955565b600054610100900460ff1680610e255750610e25611a26565b80610e33575060005460ff16155b610e4f5760405162461bcd60e51b815260040161075b9061239f565b600054610100900460ff16158015610e7a576000805460ff1961ff0019909116610100171660011790555b604080546001600160a01b038085166001600160a01b03199283161783558251610100818101855230825261dead602083019081526000958301868152606084018781526080850188815260a08601898152600160c0880181815260e089018c8152603d80549384018155909c52975160089091027fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc381018054928b16928c169290921790915594517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc4860180549190991699169890981790965590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc5830155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc682015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc784015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc8830155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc990910180549351151590920261ff001991151560ff19909416939093171691909117905561103a611a2c565b8015610774576000805461ff00191690555050565b60395481565b60375481565b60006110683384846115c7565b90505b92915050565b603d546000190190565b611083611af2565b603d838154811061109057fe5b600091825260208083206001600160a01b0395909516835260089190910290930160070183526040908190208151606081018352815460ff8082161515835261010090910416151594810194909452600101549083015250919050565b33301461110c5760405162461bcd60e51b815260040161075b906122b7565b603355565b3330146111305760405162461bcd60e51b815260040161075b906122b7565b603855565b3330146111545760405162461bcd60e51b815260040161075b906122b7565b603655565b60408054905163d505accf60e01b81526001600160a01b039091169063d505accf9061119590899030908a908a908a908a908a90600401611f53565b600060405180830381600087803b1580156111af57600080fd5b505af11580156111c3573d6000803e3d6000fd5b505050506111d18686611941565b505050505050565b60046111e482610796565b60068111156111ef57fe5b1461120c5760405162461bcd60e51b815260040161075b90612035565b6000603d828154811061121b57fe5b600091825260209091206006600890920201908101805460ff191660019081179091558101549091506001600160a01b031661125681611a6d565b6112725760405162461bcd60e51b815260040161075b90611ff2565b60408051600481526024810182526020810180516001600160e01b03166306e60b1760e31b17905290516000916060916001600160a01b038516916112b691611ea0565b600060405180830381855af49150503d80600081146112f1576040519150601f19603f3d011682016040523d82523d6000602084013e6112f6565b606091505b50915091508161133957805115611321578060405162461bcd60e51b815260040161075b9190611fdf565b60405162461bcd60e51b815260040161075b906124b4565b60405185907f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f90600090a25050505050565b600161137683610796565b600681111561138157fe5b1461139e5760405162461bcd60e51b815260040161075b906120fb565b6000603d83815481106113ad57fe5b600091825260208083206001600160a01b038816845260076008909302019182018152604080842060058401546004850154603b90945291909420549294501015908061140c5760405162461bcd60e51b815260040161075b90612325565b825460ff161561145b578254610100900460ff1615611442576001830154600485015461143891611a73565b600485015561145b565b6001830154600585015461145591611a73565b60058501555b841561147a57600484015461147090826115a2565b600485015561148f565b600584015461148990826115a2565b60058501555b6006840154610100900460ff161580156114bf57506039546114bd6114b261159c565b600387015490611a73565b105b156115035760058401546004850154111582151581146115015760068501805461ff001916610100179055603a5460038601546114fb916115a2565b60038601555b505b8254600160ff19909116811761ff001916610100871515021784558301819055603354603454603a54600387015461154e938b93611549939192610889928391906115a2565b611ab5565b841515876001600160a01b0316877f7c2de587c00d75474a0c6c6fa96fd3b45dc974cd4e8a75f712bb84c950dce1b58460405161158b9190612510565b60405180910390a450505050505050565b60415490565b6000828201838110156110685760405162461bcd60e51b815260040161075b9061219f565b6001600160a01b0383166000908152603b60205260408120546036548110156116025760405162461bcd60e51b815260040161075b90612142565b61160b84611a6d565b6116275760405162461bcd60e51b815260040161075b9061235c565b6001600160a01b0385166000908152603e6020526040902054801561169957600061165182610796565b9050600181600681111561166157fe5b1415801561167b5750600081600681111561167857fe5b14155b6116975760405162461bcd60e51b815260040161075b90612080565b505b60006116a960375461088961159c565b905060006116c2603854836115a290919063ffffffff16565b90506116cc611b12565b506040805161010080820183526001600160a01b03808c1683528a8116602084019081529383018681526060840186815260006080860181815260a0870182815260c0880183815260e08901848152603d80546001810182559086528a5160089091027fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc381018054928b166001600160a01b03199384161790559b517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc48d01805491909a1691161790975594517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc58a015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc6890155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc788015590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc887015590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc990950180549251151590930261ff001995151560ff1990931692909217949094161790559061187e611071565b82516001600160a01b03166000908152603e60205260409020819055603354603454603a549293506118c0928d92611549929091610889919082908a906115a2565b896001600160a01b0316817f90ec05050aa23d54ba425e926fe646c318e85825bc400b13a46010abe86eb2f08b87878d6040516119009493929190611f94565b60405180910390a39998505050505050505050565b600081848411156119395760405162461bcd60e51b815260040161075b9190611fdf565b505050900390565b6040805490516323b872dd60e01b81526001600160a01b03909116906323b872dd9061197590859030908690600401611ee9565b602060405180830381600087803b15801561198f57600080fd5b505af11580156119a3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119c79190611de5565b6119e35760405162461bcd60e51b815260040161075b90612280565b6001600160a01b0382166000908152603b6020526040902054611a0690826115a2565b6001600160a01b039092166000908152603b602052604090209190915550565b303b1590565b6202a3006033556203f480603481905569054b40b1f852bda00000603555683635c9adc5dea00000603655604b603755603855610e10603955615460603a55565b3b151590565b600061106883836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611915565b6001600160a01b0382166000908152603f6020526040902054811115610774576001600160a01b03919091166000908152603f6020526040902055565b604080516060810182526000808252602082018190529181019190915290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b80356001600160a01b038116811461106b57600080fd5b803561106b81612585565b600082601f830112611b9f578081fd5b813567ffffffffffffffff811115611bb5578182fd5b611bc8601f8201601f1916602001612519565b9150808252836020828501011115611bdf57600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611c09578081fd5b6110688383611b6d565b600080600060608486031215611c27578182fd5b8335611c3281612570565b92506020840135611c4281612570565b9150604084013567ffffffffffffffff811115611c5d578182fd5b611c6986828701611b8f565b9150509250925092565b60008060408385031215611c85578182fd5b8235611c9081612570565b9150602083013567ffffffffffffffff811115611cab578182fd5b611cb785828601611b8f565b9150509250929050565b60008060008060008060c08789031215611cd9578182fd5b611ce38888611b6d565b95506020870135945060408701359350606087013560ff81168114611d06578283fd5b9598949750929560808101359460a0909101359350915050565b600080600060608486031215611d34578283fd5b833567ffffffffffffffff80821115611d4b578485fd5b818601915086601f830112611d5e578485fd5b813581811115611d6c578586fd5b60209150818102611d7e838201612519565b8281528381019085850183870186018c1015611d9857898afd5b8996505b84871015611dc257611dae8c82611b6d565b835260019690960195918501918501611d9c565b5097505050508501359250611ddc90508560408601611b84565b90509250925092565b600060208284031215611df6578081fd5b815161106881612585565b600060208284031215611e12578081fd5b5035919050565b60008060408385031215611e2b578182fd5b82359150611e3c8460208501611b6d565b90509250929050565b60008060408385031215611e57578182fd5b823591506020830135611e6981612585565b809150509250929050565b60008151808452611e8c816020860160208601612540565b601f01601f19169290920160200192915050565b60008251611eb2818460208701612540565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03988916815296909716602087015260408601949094526060850192909252608084015260a0830152151560c082015290151560e08201526101000190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b600060018060a01b038616825284602083015283604083015260806060830152611fc16080830184611e74565b9695505050505050565b6020810160078310611fd957fe5b91905290565b6000602082526110686020830184611e74565b60208082526023908201527f476f7665726e616e63653a3a657865637574653a206e6f74206120636f6e74726040820152621858dd60ea1b606082015260800190565b6020808252602b908201527f476f7665726e616e63653a3a657865637574653a20696e76616c69642070726f60408201526a706f73616c20737461746560a81b606082015260800190565b60208082526055908201527f476f7665726e616e63653a3a70726f706f73653a206f6e65206c69766520707260408201527f6f706f73616c207065722070726f706f7365722c20666f756e6420616e20616c6060820152741c9958591e481858dd1a5d99481c1c9bdc1bdcd85b605a1b608082015260a00190565b60208082526027908201527f476f7665726e616e63653a3a5f63617374566f74653a20766f74696e672069736040820152660818db1bdcd95960ca1b606082015260800190565b6020808252603c908201527f476f7665726e616e63653a3a70726f706f73653a2070726f706f73657220766f60408201527f7465732062656c6f772070726f706f73616c207468726573686f6c6400000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526024908201527f476f7665726e616e63653a20696e636f727265637420766f7465457874656e6460408201526354696d6560e01b606082015260800190565b6020808252601d908201527f476f7665726e616e63653a20746f6b656e7320617265206c6f636b6564000000604082015260600190565b6020808252601590820152741513d4938e881d1c985b9cd9995c8819985a5b1959605a1b604082015260600190565b60208082526019908201527f544f524e3a207472616e7366657246726f6d206661696c656400000000000000604082015260600190565b60208082526018908201527f476f7665726e616e63653a20756e617574686f72697a65640000000000000000604082015260600190565b6020808252601d908201527f476f7665726e616e63653a20696e76616c69642064656c656761746565000000604082015260600190565b60208082526018908201527f476f7665726e616e63653a2062616c616e636520697320300000000000000000604082015260600190565b60208082526023908201527f476f7665726e616e63653a3a70726f706f73653a206e6f74206120636f6e74726040820152621858dd60ea1b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526026908201527f476f7665726e616e63653a3a73746174653a20696e76616c69642070726f706f6040820152651cd85b081a5960d21b606082015260800190565b6020808252602a908201527f476f7665726e616e63653a20746f6b656e732061726520616c726561647920756040820152691b99195b1959d85d195960b21b606082015260800190565b6020808252601a908201527f476f7665726e616e63653a206e6f7420617574686f72697a6564000000000000604082015260600190565b60208082526019908201527f50726f706f73616c20657865637574696f6e206661696c656400000000000000604082015260600190565b8151151581526020808301511515908201526040918201519181019190915260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561253857600080fd5b604052919050565b60005b8381101561255b578181015183820152602001612543565b8381111561256a576000848401525b50505050565b6001600160a01b0381168114610b8357600080fd5b8015158114610b8357600080fdfea2646970667358221220689d2e86b6f31dd2384839e9dbfe05bfbe48fdefe82f74779c34ca704fc1154764736f6c634300060c0033";
    static readonly abi: readonly [{
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
            readonly name: "time_";
            readonly type: "uint256";
        }];
        readonly name: "setTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "torna";
            readonly type: "address";
        }];
        readonly name: "setTorn";
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
        readonly name: "time";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
    }];
    static createInterface(): MockGovernanceInterface;
    static connect(address: string, runner?: ContractRunner | null): MockGovernance;
}
export {};
