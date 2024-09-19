import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type { Governance, GovernanceInterface } from "../../../../contracts/Governance/v1/Governance";
type GovernanceConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class Governance__factory extends ContractFactory {
    constructor(...args: GovernanceConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<Governance & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): Governance__factory;
    static readonly bytecode = "0x60806040523480156200001157600080fd5b50600054610100900460ff16806200002e57506200002e620000c9565b806200003d575060005460ff16155b620000655760405162461bcd60e51b81526004016200005c9062000110565b60405180910390fd5b600054610100900460ff1615801562000091576000805460ff1961ff0019909116610100171660011790555b604080546001600160a01b03191661dead179055620000af620000cf565b8015620000c2576000805461ff00191690555b506200015e565b303b1590565b6202a3006033556203f480603481905569054b40b1f852bda00000603555683635c9adc5dea00000603655604b603755603855610e10603955615460603a55565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b612524806200016e6000396000f3fe60806040526004361061020f5760003560e01c8063a6c2660311610118578063d6159fe5116100a0578063e4917d9f1161006f578063e4917d9f146105ce578063ea0217cf146105ee578063ece40cc11461060e578063f0b768921461062e578063fe0d94c11461064e5761020f565b8063d6159fe514610557578063d6f0948c1461056c578063da35c6641461058c578063e23a9a52146105a15761020f565b8063b54426c8116100e7578063b54426c8146104c2578063b859f11b146104e2578063c0c0e82014610502578063c4d66de814610522578063ce25d71c146105425761020f565b8063a6c2660314610463578063a72edda314610478578063adf898a414610498578063b1610d7e146104ad5761020f565b80636198e3391161019b5780636dc2dc6c1161016a5780636dc2dc6c146103ce57806370b0f660146103ee57806392ab89bb1461040e5780639a9e3b6e146104235780639ae697bf146104435761020f565b80636198e3391461035757806365da126414610377578063671dd275146103a45780636a661755146103b95761020f565b806337f135d7116101e257806337f135d7146102c05780633e4f49e6146102d5578063587a6ecb1461030257806358e9fff0146103175780635c19a95c146103375761020f565b8063013cf08b1461021457806302ec8f9e1461025157806315373e3d1461027357806317977c6114610293575b600080fd5b34801561022057600080fd5b5061023461022f366004611d5c565b610661565b604051610248989796959493929190611e68565b60405180910390f35b34801561025d57600080fd5b5061027161026c366004611d5c565b6106c6565b005b34801561027f57600080fd5b5061027161028e366004611da0565b6106f3565b34801561029f57600080fd5b506102b36102ae366004611b53565b610702565b604051610248919061246b565b3480156102cc57600080fd5b506102b3610714565b3480156102e157600080fd5b506102f56102f0366004611d5c565b61071a565b6040516102489190611f26565b34801561030e57600080fd5b506102b361085d565b34801561032357600080fd5b506102b3610332366004611b6e565b610863565b34801561034357600080fd5b50610271610352366004611b53565b6108b1565b34801561036357600080fd5b50610271610372366004611d5c565b6109d3565b34801561038357600080fd5b50610397610392366004611b53565b610b0a565b6040516102489190611e17565b3480156103b057600080fd5b506102b3610b25565b3480156103c557600080fd5b506102b3610b2b565b3480156103da57600080fd5b506102716103e9366004611d5c565b610b31565b3480156103fa57600080fd5b50610271610409366004611d5c565b610b76565b34801561041a57600080fd5b50610271610b9a565b34801561042f57600080fd5b5061027161043e366004611d5c565b610c21565b34801561044f57600080fd5b506102b361045e366004611b53565b610c45565b34801561046f57600080fd5b506102b3610c57565b34801561048457600080fd5b506102b3610493366004611b53565b610c5d565b3480156104a457600080fd5b50610397610c6f565b3480156104b957600080fd5b506102b3610c7e565b3480156104ce57600080fd5b506102716104dd366004611d5c565b610c84565b3480156104ee57600080fd5b506102716104fd366004611c7b565b610c8e565b34801561050e57600080fd5b5061027161051d366004611d5c565b610d45565b34801561052e57600080fd5b5061027161053d366004611b53565b610d69565b34801561054e57600080fd5b506102b3610fac565b34801561056357600080fd5b506102b3610fb2565b34801561057857600080fd5b506102b3610587366004611bce565b610fb8565b34801561059857600080fd5b506102b3610fce565b3480156105ad57600080fd5b506105c16105bc366004611d74565b610fd8565b6040516102489190612446565b3480156105da57600080fd5b506102716105e9366004611d5c565b61104a565b3480156105fa57600080fd5b50610271610609366004611d5c565b61106e565b34801561061a57600080fd5b50610271610629366004611d5c565b611092565b34801561063a57600080fd5b50610271610649366004611c1c565b6110b6565b61027161065c366004611d5c565b611136565b603d818154811061066e57fe5b600091825260209091206008909102018054600182015460028301546003840154600485015460058601546006909601546001600160a01b039586169750949093169491939092919060ff8082169161010090041688565b3330146106ee5760405162461bcd60e51b81526004016106e590612212565b60405180910390fd5b603555565b6106fe3383836112c8565b5050565b603e6020526000908152604090205481565b60335481565b6000610724610fce565b82111580156107335750600082115b61074f5760405162461bcd60e51b81526004016106e590612348565b6000603d838154811061075e57fe5b90600052602060002090600802019050806002015461077b6114f9565b1161078a576000915050610858565b80600301546107976114f9565b116107a6576001915050610858565b806005015481600401541115806107c857506035548160050154826004015401105b156107d7576002915050610858565b600681015460ff16156107ee576005915050610858565b61081360345461080d60335484600301546114fd90919063ffffffff16565b906114fd565b61081b6114f9565b1061082a576006915050610858565b603354600382015461083b916114fd565b6108436114f9565b10610852576004915050610858565b60039150505b919050565b603a5481565b6001600160a01b038381166000908152603c6020526040812054909116331461089e5760405162461bcd60e51b81526004016106e5906123d8565b6108a9848484611522565b949350505050565b336000818152603c60205260409020546001600160a01b0390811691908316148015906108e757506001600160a01b0382163014155b80156108fb57506001600160a01b03821615155b80156109195750806001600160a01b0316826001600160a01b031614155b6109355760405162461bcd60e51b81526004016106e590612249565b6001600160a01b0381161561097b576040516001600160a01b0382169033907f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da7290600090a35b336000818152603c602052604080822080546001600160a01b0319166001600160a01b03871690811790915590519092917f4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea291a35050565b336000908152603f60205260409020546109eb6114f9565b11610a085760405162461bcd60e51b81526004016106e590612175565b60408051808201825260208082527f476f7665726e616e63653a20696e73756666696369656e742062616c616e636581830152336000908152603b9091529190912054610a56918390611870565b336000818152603b602052604090819020929092558154915163a9059cbb60e01b81526001600160a01b039092169163a9059cbb91610a99918590600401611e2b565b602060405180830381600087803b158015610ab357600080fd5b505af1158015610ac7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aeb9190611d40565b610b075760405162461bcd60e51b81526004016106e5906121ac565b50565b603c602052600090815260409020546001600160a01b031681565b60355481565b60345481565b333014610b505760405162461bcd60e51b81526004016106e590612212565b6033548110610b715760405162461bcd60e51b81526004016106e590612131565b603a55565b333014610b955760405162461bcd60e51b81526004016106e590612212565b603755565b336000908152603c60205260409020546001600160a01b031680610bd05760405162461bcd60e51b81526004016106e59061238e565b336000818152603c602052604080822080546001600160a01b0319169055516001600160a01b03841692917f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da7291a350565b333014610c405760405162461bcd60e51b81526004016106e590612212565b603455565b603b6020526000908152604090205481565b60365481565b603f6020526000908152604090205481565b6040546001600160a01b031681565b60385481565b610b07338261189c565b60005b8351811015610d1f57336001600160a01b0316603c6000868481518110610cb457fe5b6020908102919091018101516001600160a01b03908116835290820192909252604001600020541614610cf95760405162461bcd60e51b81526004016106e5906123d8565b610d17848281518110610d0857fe5b602002602001015184846112c8565b600101610c91565b50336000908152603b602052604090205415610d4057610d403383836112c8565b505050565b333014610d645760405162461bcd60e51b81526004016106e590612212565b603955565b600054610100900460ff1680610d825750610d82611981565b80610d90575060005460ff16155b610dac5760405162461bcd60e51b81526004016106e5906122fa565b600054610100900460ff16158015610dd7576000805460ff1961ff0019909116610100171660011790555b604080546001600160a01b038085166001600160a01b03199283161783558251610100818101855230825261dead602083019081526000958301868152606084018781526080850188815260a08601898152600160c0880181815260e089018c8152603d80549384018155909c52975160089091027fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc381018054928b16928c169290921790915594517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc4860180549190991699169890981790965590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc5830155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc682015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc784015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc8830155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc990910180549351151590920261ff001991151560ff199094169390931716919091179055610f97611987565b80156106fe576000805461ff00191690555050565b60395481565b60375481565b6000610fc5338484611522565b90505b92915050565b603d546000190190565b610fe0611a4d565b603d8381548110610fed57fe5b600091825260208083206001600160a01b0395909516835260089190910290930160070183526040908190208151606081018352815460ff8082161515835261010090910416151594810194909452600101549083015250919050565b3330146110695760405162461bcd60e51b81526004016106e590612212565b603355565b33301461108d5760405162461bcd60e51b81526004016106e590612212565b603855565b3330146110b15760405162461bcd60e51b81526004016106e590612212565b603655565b60408054905163d505accf60e01b81526001600160a01b039091169063d505accf906110f290899030908a908a908a908a908a90600401611eae565b600060405180830381600087803b15801561110c57600080fd5b505af1158015611120573d6000803e3d6000fd5b5050505061112e868661189c565b505050505050565b60046111418261071a565b600681111561114c57fe5b146111695760405162461bcd60e51b81526004016106e590611f90565b6000603d828154811061117857fe5b600091825260209091206006600890920201908101805460ff191660019081179091558101549091506001600160a01b03166111b3816119c8565b6111cf5760405162461bcd60e51b81526004016106e590611f4d565b60408051600481526024810182526020810180516001600160e01b03166306e60b1760e31b17905290516000916060916001600160a01b0385169161121391611dfb565b600060405180830381855af49150503d806000811461124e576040519150601f19603f3d011682016040523d82523d6000602084013e611253565b606091505b5091509150816112965780511561127e578060405162461bcd60e51b81526004016106e59190611f3a565b60405162461bcd60e51b81526004016106e59061240f565b60405185907f712ae1383f79ac853f8d882153778e0260ef8f03b504e2866e0593e04d2b291f90600090a25050505050565b60016112d38361071a565b60068111156112de57fe5b146112fb5760405162461bcd60e51b81526004016106e590612056565b6000603d838154811061130a57fe5b600091825260208083206001600160a01b038816845260076008909302019182018152604080842060058401546004850154603b9094529190942054929450101590806113695760405162461bcd60e51b81526004016106e590612280565b825460ff16156113b8578254610100900460ff161561139f5760018301546004850154611395916119ce565b60048501556113b8565b600183015460058501546113b2916119ce565b60058501555b84156113d75760048401546113cd90826114fd565b60048501556113ec565b60058401546113e690826114fd565b60058501555b6006840154610100900460ff1615801561141c575060395461141a61140f6114f9565b6003870154906119ce565b105b1561146057600584015460048501541115821515811461145e5760068501805461ff001916610100179055603a546003860154611458916114fd565b60038601555b505b8254600160ff19909116811761ff001916610100871515021784558301819055603354603454603a5460038701546114ab938b936114a693919261080d928391906114fd565b611a10565b841515876001600160a01b0316877f7c2de587c00d75474a0c6c6fa96fd3b45dc974cd4e8a75f712bb84c950dce1b5846040516114e8919061246b565b60405180910390a450505050505050565b4290565b600082820183811015610fc55760405162461bcd60e51b81526004016106e5906120fa565b6001600160a01b0383166000908152603b602052604081205460365481101561155d5760405162461bcd60e51b81526004016106e59061209d565b611566846119c8565b6115825760405162461bcd60e51b81526004016106e5906122b7565b6001600160a01b0385166000908152603e602052604090205480156115f45760006115ac8261071a565b905060018160068111156115bc57fe5b141580156115d6575060008160068111156115d357fe5b14155b6115f25760405162461bcd60e51b81526004016106e590611fdb565b505b600061160460375461080d6114f9565b9050600061161d603854836114fd90919063ffffffff16565b9050611627611a6d565b506040805161010080820183526001600160a01b03808c1683528a8116602084019081529383018681526060840186815260006080860181815260a0870182815260c0880183815260e08901848152603d80546001810182559086528a5160089091027fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc381018054928b166001600160a01b03199384161790559b517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc48d01805491909a1691161790975594517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc58a015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc6890155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc788015590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc887015590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc990950180549251151590930261ff001995151560ff199093169290921794909416179055906117d9610fce565b82516001600160a01b03166000908152603e60205260409020819055603354603454603a5492935061181b928d926114a692909161080d919082908a906114fd565b896001600160a01b0316817f90ec05050aa23d54ba425e926fe646c318e85825bc400b13a46010abe86eb2f08b87878d60405161185b9493929190611eef565b60405180910390a39998505050505050505050565b600081848411156118945760405162461bcd60e51b81526004016106e59190611f3a565b505050900390565b6040805490516323b872dd60e01b81526001600160a01b03909116906323b872dd906118d090859030908690600401611e44565b602060405180830381600087803b1580156118ea57600080fd5b505af11580156118fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119229190611d40565b61193e5760405162461bcd60e51b81526004016106e5906121db565b6001600160a01b0382166000908152603b602052604090205461196190826114fd565b6001600160a01b039092166000908152603b602052604090209190915550565b303b1590565b6202a3006033556203f480603481905569054b40b1f852bda00000603555683635c9adc5dea00000603655604b603755603855610e10603955615460603a55565b3b151590565b6000610fc583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611870565b6001600160a01b0382166000908152603f60205260409020548111156106fe576001600160a01b03919091166000908152603f6020526040902055565b604080516060810182526000808252602082018190529181019190915290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b80356001600160a01b0381168114610fc857600080fd5b8035610fc8816124e0565b600082601f830112611afa578081fd5b813567ffffffffffffffff811115611b10578182fd5b611b23601f8201601f1916602001612474565b9150808252836020828501011115611b3a57600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611b64578081fd5b610fc58383611ac8565b600080600060608486031215611b82578182fd5b8335611b8d816124cb565b92506020840135611b9d816124cb565b9150604084013567ffffffffffffffff811115611bb8578182fd5b611bc486828701611aea565b9150509250925092565b60008060408385031215611be0578182fd5b8235611beb816124cb565b9150602083013567ffffffffffffffff811115611c06578182fd5b611c1285828601611aea565b9150509250929050565b60008060008060008060c08789031215611c34578182fd5b611c3e8888611ac8565b95506020870135945060408701359350606087013560ff81168114611c61578283fd5b9598949750929560808101359460a0909101359350915050565b600080600060608486031215611c8f578283fd5b833567ffffffffffffffff80821115611ca6578485fd5b818601915086601f830112611cb9578485fd5b813581811115611cc7578586fd5b60209150818102611cd9838201612474565b8281528381019085850183870186018c1015611cf357898afd5b8996505b84871015611d1d57611d098c82611ac8565b835260019690960195918501918501611cf7565b5097505050508501359250611d3790508560408601611adf565b90509250925092565b600060208284031215611d51578081fd5b8151610fc5816124e0565b600060208284031215611d6d578081fd5b5035919050565b60008060408385031215611d86578182fd5b82359150611d978460208501611ac8565b90509250929050565b60008060408385031215611db2578182fd5b823591506020830135611dc4816124e0565b809150509250929050565b60008151808452611de781602086016020860161249b565b601f01601f19169290920160200192915050565b60008251611e0d81846020870161249b565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03988916815296909716602087015260408601949094526060850192909252608084015260a0830152151560c082015290151560e08201526101000190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b600060018060a01b038616825284602083015283604083015260806060830152611f1c6080830184611dcf565b9695505050505050565b6020810160078310611f3457fe5b91905290565b600060208252610fc56020830184611dcf565b60208082526023908201527f476f7665726e616e63653a3a657865637574653a206e6f74206120636f6e74726040820152621858dd60ea1b606082015260800190565b6020808252602b908201527f476f7665726e616e63653a3a657865637574653a20696e76616c69642070726f60408201526a706f73616c20737461746560a81b606082015260800190565b60208082526055908201527f476f7665726e616e63653a3a70726f706f73653a206f6e65206c69766520707260408201527f6f706f73616c207065722070726f706f7365722c20666f756e6420616e20616c6060820152741c9958591e481858dd1a5d99481c1c9bdc1bdcd85b605a1b608082015260a00190565b60208082526027908201527f476f7665726e616e63653a3a5f63617374566f74653a20766f74696e672069736040820152660818db1bdcd95960ca1b606082015260800190565b6020808252603c908201527f476f7665726e616e63653a3a70726f706f73653a2070726f706f73657220766f60408201527f7465732062656c6f772070726f706f73616c207468726573686f6c6400000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526024908201527f476f7665726e616e63653a20696e636f727265637420766f7465457874656e6460408201526354696d6560e01b606082015260800190565b6020808252601d908201527f476f7665726e616e63653a20746f6b656e7320617265206c6f636b6564000000604082015260600190565b6020808252601590820152741513d4938e881d1c985b9cd9995c8819985a5b1959605a1b604082015260600190565b60208082526019908201527f544f524e3a207472616e7366657246726f6d206661696c656400000000000000604082015260600190565b60208082526018908201527f476f7665726e616e63653a20756e617574686f72697a65640000000000000000604082015260600190565b6020808252601d908201527f476f7665726e616e63653a20696e76616c69642064656c656761746565000000604082015260600190565b60208082526018908201527f476f7665726e616e63653a2062616c616e636520697320300000000000000000604082015260600190565b60208082526023908201527f476f7665726e616e63653a3a70726f706f73653a206e6f74206120636f6e74726040820152621858dd60ea1b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526026908201527f476f7665726e616e63653a3a73746174653a20696e76616c69642070726f706f6040820152651cd85b081a5960d21b606082015260800190565b6020808252602a908201527f476f7665726e616e63653a20746f6b656e732061726520616c726561647920756040820152691b99195b1959d85d195960b21b606082015260800190565b6020808252601a908201527f476f7665726e616e63653a206e6f7420617574686f72697a6564000000000000604082015260600190565b60208082526019908201527f50726f706f73616c20657865637574696f6e206661696c656400000000000000604082015260600190565b8151151581526020808301511515908201526040918201519181019190915260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561249357600080fd5b604052919050565b60005b838110156124b657818101518382015260200161249e565b838111156124c5576000848401525b50505050565b6001600160a01b0381168114610b0757600080fd5b8015158114610b0757600080fdfea26469706673582212208c8a57d0dd9da76417112ba79eab1d38dbdf5e0a8bc014651f10bebe82ce8f9b64736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
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
    }];
    static createInterface(): GovernanceInterface;
    static connect(address: string, runner?: ContractRunner | null): Governance;
}
export {};
