import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../../common";
import type { NewImplementation, NewImplementationInterface } from "../../../../../../contracts/Governance/v1/Mocks/ProposalUpgrade.sol/NewImplementation";
type NewImplementationConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NewImplementation__factory extends ContractFactory {
    constructor(...args: NewImplementationConstructorParams);
    getDeployTransaction(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<NewImplementation & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): NewImplementation__factory;
    static readonly bytecode = "0x6080604052426041553480156200001557600080fd5b50600054610100900460ff168062000032575062000032620000cd565b8062000041575060005460ff16155b620000695760405162461bcd60e51b8152600401620000609062000114565b60405180910390fd5b600054610100900460ff1615801562000095576000805460ff1961ff0019909116610100171660011790555b604080546001600160a01b03191661dead179055620000b3620000d3565b8015620000c6576000805461ff00191690555b5062000162565b303b1590565b6202a3006033556203f480603481905569054b40b1f852bda00000603555683635c9adc5dea00000603655604b603755603855610e10603955615460603a55565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b6123ac80620001726000396000f3fe60806040526004361061023b5760003560e01c8063a0a2b5731161012e578063ce25d71c116100ab578063e4917d9f1161006f578063e4917d9f14610664578063ea0217cf14610684578063ece40cc1146106a4578063f0b76892146106c4578063fe0d94c1146106e45761023b565b8063ce25d71c146105d8578063d6159fe5146105ed578063d6f0948c14610602578063da35c66414610622578063e23a9a52146106375761023b565b8063b54426c8116100f2578063b54426c814610538578063b5f6a74314610558578063b859f11b14610578578063c0c0e82014610598578063c4d66de8146105b85761023b565b8063a0a2b573146104b9578063a6c26603146104d9578063a72edda3146104ee578063adf898a41461050e578063b1610d7e146105235761023b565b80636198e339116101bc57806370b0f6601161018057806370b0f6601461042f5780638d7a72f31461044f57806392ab89bb146104645780639a9e3b6e146104795780639ae697bf146104995761023b565b80636198e3391461039857806365da1264146103b8578063671dd275146103e55780636a661755146103fa5780636dc2dc6c1461040f5761023b565b806337f135d71161020357806337f135d7146103015780633e4f49e614610316578063587a6ecb1461034357806358e9fff0146103585780635c19a95c146103785761023b565b8063013cf08b1461024057806302ec8f9e1461027d57806315373e3d1461029f57806316ada547146102bf57806317977c61146102e1575b600080fd5b34801561024c57600080fd5b5061026061025b366004611cd6565b6106f7565b604051610274989796959493929190611de5565b60405180910390f35b34801561028957600080fd5b5061029d610298366004611cd6565b61075c565b005b3480156102ab57600080fd5b5061029d6102ba366004611d1a565b610789565b3480156102cb57600080fd5b506102d4610798565b6040516102749190612323565b3480156102ed57600080fd5b506102d46102fc366004611acd565b61079e565b34801561030d57600080fd5b506102d46107b0565b34801561032257600080fd5b50610336610331366004611cd6565b6107b6565b6040516102749190611ea3565b34801561034f57600080fd5b506102d46108f9565b34801561036457600080fd5b506102d4610373366004611ae8565b6108ff565b34801561038457600080fd5b5061029d610393366004611acd565b61094d565b3480156103a457600080fd5b5061029d6103b3366004611cd6565b610a6f565b3480156103c457600080fd5b506103d86103d3366004611acd565b610ba6565b6040516102749190611d94565b3480156103f157600080fd5b506102d4610bc1565b34801561040657600080fd5b506102d4610bc7565b34801561041b57600080fd5b5061029d61042a366004611cd6565b610bcd565b34801561043b57600080fd5b5061029d61044a366004611cd6565b610c12565b34801561045b57600080fd5b506102d4610c36565b34801561047057600080fd5b5061029d610c3c565b34801561048557600080fd5b5061029d610494366004611cd6565b610cc3565b3480156104a557600080fd5b506102d46104b4366004611acd565b610ce7565b3480156104c557600080fd5b5061029d6104d4366004611cd6565b610cf9565b3480156104e557600080fd5b506102d4610cfe565b3480156104fa57600080fd5b506102d4610509366004611acd565b610d04565b34801561051a57600080fd5b506103d8610d16565b34801561052f57600080fd5b506102d4610d25565b34801561054457600080fd5b5061029d610553366004611cd6565b610d2b565b34801561056457600080fd5b5061029d610573366004611acd565b610d35565b34801561058457600080fd5b5061029d610593366004611bf5565b610d57565b3480156105a457600080fd5b5061029d6105b3366004611cd6565b610e0e565b3480156105c457600080fd5b5061029d6105d3366004611acd565b610e32565b3480156105e457600080fd5b506102d4611075565b3480156105f957600080fd5b506102d461107b565b34801561060e57600080fd5b506102d461061d366004611b48565b611081565b34801561062e57600080fd5b506102d4611097565b34801561064357600080fd5b50610657610652366004611cee565b6110a1565b60405161027491906122fe565b34801561067057600080fd5b5061029d61067f366004611cd6565b611113565b34801561069057600080fd5b5061029d61069f366004611cd6565b611137565b3480156106b057600080fd5b5061029d6106bf366004611cd6565b61115b565b3480156106d057600080fd5b5061029d6106df366004611b96565b61117f565b61029d6106f2366004611cd6565b6111ff565b603d818154811061070457fe5b600091825260209091206008909102018054600182015460028301546003840154600485015460058601546006909601546001600160a01b039586169750949093169491939092919060ff8082169161010090041688565b3330146107845760405162461bcd60e51b815260040161077b90612101565b60405180910390fd5b603555565b610794338383611240565b5050565b60415481565b603e6020526000908152604090205481565b60335481565b60006107c0611097565b82111580156107cf5750600082115b6107eb5760405162461bcd60e51b815260040161077b90612237565b6000603d83815481106107fa57fe5b906000526020600020906008020190508060020154610817611471565b116108265760009150506108f4565b8060030154610833611471565b116108425760019150506108f4565b8060050154816004015411158061086457506035548160050154826004015401105b156108735760029150506108f4565b600681015460ff161561088a5760059150506108f4565b6108af6034546108a9603354846003015461147790919063ffffffff16565b90611477565b6108b7611471565b106108c65760069150506108f4565b60335460038201546108d791611477565b6108df611471565b106108ee5760049150506108f4565b60039150505b919050565b603a5481565b6001600160a01b038381166000908152603c6020526040812054909116331461093a5760405162461bcd60e51b815260040161077b906122c7565b61094584848461149c565b949350505050565b336000818152603c60205260409020546001600160a01b03908116919083161480159061098357506001600160a01b0382163014155b801561099757506001600160a01b03821615155b80156109b55750806001600160a01b0316826001600160a01b031614155b6109d15760405162461bcd60e51b815260040161077b90612138565b6001600160a01b03811615610a17576040516001600160a01b0382169033907f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da7290600090a35b336000818152603c602052604080822080546001600160a01b0319166001600160a01b03871690811790915590519092917f4bc154dd35d6a5cb9206482ecb473cdbf2473006d6bce728b9cc0741bcc59ea291a35050565b336000908152603f6020526040902054610a87611471565b11610aa45760405162461bcd60e51b815260040161077b90612064565b60408051808201825260208082527f476f7665726e616e63653a20696e73756666696369656e742062616c616e636581830152336000908152603b9091529190912054610af29183906117ea565b336000818152603b602052604090819020929092558154915163a9059cbb60e01b81526001600160a01b039092169163a9059cbb91610b35918590600401611da8565b602060405180830381600087803b158015610b4f57600080fd5b505af1158015610b63573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b879190611cba565b610ba35760405162461bcd60e51b815260040161077b9061209b565b50565b603c602052600090815260409020546001600160a01b031681565b60355481565b60345481565b333014610bec5760405162461bcd60e51b815260040161077b90612101565b6033548110610c0d5760405162461bcd60e51b815260040161077b90612020565b603a55565b333014610c315760405162461bcd60e51b815260040161077b90612101565b603755565b60425481565b336000908152603c60205260409020546001600160a01b031680610c725760405162461bcd60e51b815260040161077b9061227d565b336000818152603c602052604080822080546001600160a01b0319169055516001600160a01b03841692917f1af5b1c85495b3618ea659a1ba256c8b8974b437297d3b914e321e086a28da7291a350565b333014610ce25760405162461bcd60e51b815260040161077b90612101565b603455565b603b6020526000908152604090205481565b604155565b60365481565b603f6020526000908152604090205481565b6040546001600160a01b031681565b60385481565b610ba33382611816565b604080546001600160a01b0319166001600160a01b0392909216919091179055565b60005b8351811015610de857336001600160a01b0316603c6000868481518110610d7d57fe5b6020908102919091018101516001600160a01b03908116835290820192909252604001600020541614610dc25760405162461bcd60e51b815260040161077b906122c7565b610de0848281518110610dd157fe5b60200260200101518484611240565b600101610d5a565b50336000908152603b602052604090205415610e0957610e09338383611240565b505050565b333014610e2d5760405162461bcd60e51b815260040161077b90612101565b603955565b600054610100900460ff1680610e4b5750610e4b6118fb565b80610e59575060005460ff16155b610e755760405162461bcd60e51b815260040161077b906121e9565b600054610100900460ff16158015610ea0576000805460ff1961ff0019909116610100171660011790555b604080546001600160a01b038085166001600160a01b03199283161783558251610100818101855230825261dead602083019081526000958301868152606084018781526080850188815260a08601898152600160c0880181815260e089018c8152603d80549384018155909c52975160089091027fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc381018054928b16928c169290921790915594517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc4860180549190991699169890981790965590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc5830155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc682015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc784015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc8830155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc990910180549351151590920261ff001991151560ff199094169390931716919091179055611060611901565b8015610794576000805461ff00191690555050565b60395481565b60375481565b600061108e33848461149c565b90505b92915050565b603d546000190190565b6110a96119c7565b603d83815481106110b657fe5b600091825260208083206001600160a01b0395909516835260089190910290930160070183526040908190208151606081018352815460ff8082161515835261010090910416151594810194909452600101549083015250919050565b3330146111325760405162461bcd60e51b815260040161077b90612101565b603355565b3330146111565760405162461bcd60e51b815260040161077b90612101565b603855565b33301461117a5760405162461bcd60e51b815260040161077b90612101565b603655565b60408054905163d505accf60e01b81526001600160a01b039091169063d505accf906111bb90899030908a908a908a908a908a90600401611e2b565b600060405180830381600087803b1580156111d557600080fd5b505af11580156111e9573d6000803e3d6000fd5b505050506111f78686611816565b505050505050565b6103e76042556040517fc22c84ebcf25b30190d2b53474def7b552efd2018ef8acaf6bed1b67e8d2be7c90611235908390612323565b60405180910390a150565b600161124b836107b6565b600681111561125657fe5b146112735760405162461bcd60e51b815260040161077b90611f45565b6000603d838154811061128257fe5b600091825260208083206001600160a01b038816845260076008909302019182018152604080842060058401546004850154603b9094529190942054929450101590806112e15760405162461bcd60e51b815260040161077b9061216f565b825460ff1615611330578254610100900460ff1615611317576001830154600485015461130d91611942565b6004850155611330565b6001830154600585015461132a91611942565b60058501555b841561134f5760048401546113459082611477565b6004850155611364565b600584015461135e9082611477565b60058501555b6006840154610100900460ff161580156113945750603954611392611387611471565b600387015490611942565b105b156113d85760058401546004850154111582151581146113d65760068501805461ff001916610100179055603a5460038601546113d091611477565b60038601555b505b8254600160ff19909116811761ff001916610100871515021784558301819055603354603454603a546003870154611423938b9361141e9391926108a992839190611477565b611984565b841515876001600160a01b0316877f7c2de587c00d75474a0c6c6fa96fd3b45dc974cd4e8a75f712bb84c950dce1b5846040516114609190612323565b60405180910390a450505050505050565b60415490565b60008282018381101561108e5760405162461bcd60e51b815260040161077b90611fe9565b6001600160a01b0383166000908152603b60205260408120546036548110156114d75760405162461bcd60e51b815260040161077b90611f8c565b6114e0846119c1565b6114fc5760405162461bcd60e51b815260040161077b906121a6565b6001600160a01b0385166000908152603e6020526040902054801561156e576000611526826107b6565b9050600181600681111561153657fe5b141580156115505750600081600681111561154d57fe5b14155b61156c5760405162461bcd60e51b815260040161077b90611eca565b505b600061157e6037546108a9611471565b905060006115976038548361147790919063ffffffff16565b90506115a16119e7565b506040805161010080820183526001600160a01b03808c1683528a8116602084019081529383018681526060840186815260006080860181815260a0870182815260c0880183815260e08901848152603d80546001810182559086528a5160089091027fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc381018054928b166001600160a01b03199384161790559b517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc48d01805491909a1691161790975594517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc58a015592517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc6890155517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc788015590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc887015590517fece66cfdbd22e3f37d348a3d8e19074452862cd65fd4b9a11f0336d1ac6d1dc990950180549251151590930261ff001995151560ff19909316929092179490941617905590611753611097565b82516001600160a01b03166000908152603e60205260409020819055603354603454603a54929350611795928d9261141e9290916108a9919082908a90611477565b896001600160a01b0316817f90ec05050aa23d54ba425e926fe646c318e85825bc400b13a46010abe86eb2f08b87878d6040516117d59493929190611e6c565b60405180910390a39998505050505050505050565b6000818484111561180e5760405162461bcd60e51b815260040161077b9190611eb7565b505050900390565b6040805490516323b872dd60e01b81526001600160a01b03909116906323b872dd9061184a90859030908690600401611dc1565b602060405180830381600087803b15801561186457600080fd5b505af1158015611878573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061189c9190611cba565b6118b85760405162461bcd60e51b815260040161077b906120ca565b6001600160a01b0382166000908152603b60205260409020546118db9082611477565b6001600160a01b039092166000908152603b602052604090209190915550565b303b1590565b6202a3006033556203f480603481905569054b40b1f852bda00000603555683635c9adc5dea00000603655604b603755603855610e10603955615460603a55565b600061108e83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506117ea565b6001600160a01b0382166000908152603f6020526040902054811115610794576001600160a01b03919091166000908152603f6020526040902055565b3b151590565b604080516060810182526000808252602082018190529181019190915290565b60405180610100016040528060006001600160a01b0316815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001600081526020016000151581526020016000151581525090565b80356001600160a01b038116811461109157600080fd5b803561109181612368565b600082601f830112611a74578081fd5b813567ffffffffffffffff811115611a8a578182fd5b611a9d601f8201601f191660200161232c565b9150808252836020828501011115611ab457600080fd5b8060208401602084013760009082016020015292915050565b600060208284031215611ade578081fd5b61108e8383611a42565b600080600060608486031215611afc578182fd5b8335611b0781612353565b92506020840135611b1781612353565b9150604084013567ffffffffffffffff811115611b32578182fd5b611b3e86828701611a64565b9150509250925092565b60008060408385031215611b5a578182fd5b8235611b6581612353565b9150602083013567ffffffffffffffff811115611b80578182fd5b611b8c85828601611a64565b9150509250929050565b60008060008060008060c08789031215611bae578182fd5b611bb88888611a42565b95506020870135945060408701359350606087013560ff81168114611bdb578283fd5b9598949750929560808101359460a0909101359350915050565b600080600060608486031215611c09578283fd5b833567ffffffffffffffff80821115611c20578485fd5b818601915086601f830112611c33578485fd5b813581811115611c41578586fd5b60209150818102611c5383820161232c565b8281528381019085850183870186018c1015611c6d57898afd5b8996505b84871015611c9757611c838c82611a42565b835260019690960195918501918501611c71565b5097505050508501359250611cb190508560408601611a59565b90509250925092565b600060208284031215611ccb578081fd5b815161108e81612368565b600060208284031215611ce7578081fd5b5035919050565b60008060408385031215611d00578182fd5b82359150611d118460208501611a42565b90509250929050565b60008060408385031215611d2c578182fd5b823591506020830135611d3e81612368565b809150509250929050565b60008151808452815b81811015611d6e57602081850181015186830182015201611d52565b81811115611d7f5782602083870101525b50601f01601f19169290920160200192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03988916815296909716602087015260408601949094526060850192909252608084015260a0830152151560c082015290151560e08201526101000190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b600060018060a01b038616825284602083015283604083015260806060830152611e996080830184611d49565b9695505050505050565b6020810160078310611eb157fe5b91905290565b60006020825261108e6020830184611d49565b60208082526055908201527f476f7665726e616e63653a3a70726f706f73653a206f6e65206c69766520707260408201527f6f706f73616c207065722070726f706f7365722c20666f756e6420616e20616c6060820152741c9958591e481858dd1a5d99481c1c9bdc1bdcd85b605a1b608082015260a00190565b60208082526027908201527f476f7665726e616e63653a3a5f63617374566f74653a20766f74696e672069736040820152660818db1bdcd95960ca1b606082015260800190565b6020808252603c908201527f476f7665726e616e63653a3a70726f706f73653a2070726f706f73657220766f60408201527f7465732062656c6f772070726f706f73616c207468726573686f6c6400000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526024908201527f476f7665726e616e63653a20696e636f727265637420766f7465457874656e6460408201526354696d6560e01b606082015260800190565b6020808252601d908201527f476f7665726e616e63653a20746f6b656e7320617265206c6f636b6564000000604082015260600190565b6020808252601590820152741513d4938e881d1c985b9cd9995c8819985a5b1959605a1b604082015260600190565b60208082526019908201527f544f524e3a207472616e7366657246726f6d206661696c656400000000000000604082015260600190565b60208082526018908201527f476f7665726e616e63653a20756e617574686f72697a65640000000000000000604082015260600190565b6020808252601d908201527f476f7665726e616e63653a20696e76616c69642064656c656761746565000000604082015260600190565b60208082526018908201527f476f7665726e616e63653a2062616c616e636520697320300000000000000000604082015260600190565b60208082526023908201527f476f7665726e616e63653a3a70726f706f73653a206e6f74206120636f6e74726040820152621858dd60ea1b606082015260800190565b6020808252602e908201527f436f6e747261637420696e7374616e63652068617320616c726561647920626560408201526d195b881a5b9a5d1a585b1a5e995960921b606082015260800190565b60208082526026908201527f476f7665726e616e63653a3a73746174653a20696e76616c69642070726f706f6040820152651cd85b081a5960d21b606082015260800190565b6020808252602a908201527f476f7665726e616e63653a20746f6b656e732061726520616c726561647920756040820152691b99195b1959d85d195960b21b606082015260800190565b6020808252601a908201527f476f7665726e616e63653a206e6f7420617574686f72697a6564000000000000604082015260600190565b8151151581526020808301511515908201526040918201519181019190915260600190565b90815260200190565b60405181810167ffffffffffffffff8111828210171561234b57600080fd5b604052919050565b6001600160a01b0381168114610ba357600080fd5b8015158114610ba357600080fdfea26469706673582212206f540560a5472a38df6b483c52ac5640fb69f60fb4ff28455964c53378242bed64736f6c634300060c0033";
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
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "x";
            readonly type: "uint256";
        }];
        readonly name: "Overriden";
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
        readonly name: "newVariable";
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
    static createInterface(): NewImplementationInterface;
    static connect(address: string, runner?: ContractRunner | null): NewImplementation;
}
export {};
