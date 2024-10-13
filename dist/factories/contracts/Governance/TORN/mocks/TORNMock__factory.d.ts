import { ContractFactory, ContractTransactionResponse } from "ethers";
import type { Signer, BigNumberish, AddressLike, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../../common";
import type { TORNMock, TORNMockInterface, TORN } from "../../../../../contracts/Governance/TORN/mocks/TORNMock";
type TORNMockConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TORNMock__factory extends ContractFactory {
    constructor(...args: TORNMockConstructorParams);
    getDeployTransaction(_governance: AddressLike, _pausePeriod: BigNumberish, _vesting: TORN.RecipientStruct[], overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<ContractDeployTransaction>;
    deploy(_governance: AddressLike, _pausePeriod: BigNumberish, _vesting: TORN.RecipientStruct[], overrides?: NonPayableOverrides & {
        from?: string;
    }): Promise<TORNMock & {
        deploymentTransaction(): ContractTransactionResponse;
    }>;
    connect(runner: ContractRunner | null): TORNMock__factory;
    static readonly bytecode = "0x60c06040523480156200001157600080fd5b506040516200298e3803806200298e8339810160408190526200003491620006d6565b604080518082018252600b81526a0a8dee4dcc2c8de86c2e6d60ab1b6020808301918252835180850190945260048452632a27a92760e11b90840152815186938693869390926200008891600391620005e4565b5080516200009e906004906020840190620005e4565b50506005805460ff1916601217905550620000b8620001f8565b506008805460ff199081169091556001600160601b0319606085901b1660a0526001600160a01b0384166000908152600960205260408120805490921660011790915583905b82518110156200017b5760008382815181106200011757fe5b60200260200101516000015190506200014f818584815181106200013757fe5b602002602001015160200151620002b460201b60201c565b6001600160a01b03166000908152600960205260409020805460ff1916600190811790915501620000fe565b506200019f836200018b62000397565b620003b360201b62000d721790919060201c565b608052620001ac620003e4565b620001b66200045b565b6a084595161401484a00000014620001eb5760405162461bcd60e51b8152600401620001e290620008a8565b60405180910390fd5b5050505050505062000946565b6000806200020562000461565b905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6200023462000467565b805160209182012060408051808201825260018152603160f81b90840152516200028693927fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6918791309101620007be565b60408051601f1981840301815291815281516020928301206000948552600790925290922082905550905090565b6001600160a01b038216620002dd5760405162461bcd60e51b8152600401620001e290620008df565b620002eb6000838362000501565b6200030781600254620003b360201b62000d721790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200033a91839062000d72620003b3821b17901c565b6001600160a01b0383166000818152602081905260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906200038b90859062000916565b60405180910390a35050565b6000620003ae620005bc60201b62000d9e1760201c565b905090565b600082820183811015620003db5760405162461bcd60e51b8152600401620001e290620007ea565b90505b92915050565b60085460ff16156200040a5760405162461bcd60e51b8152600401620001e2906200087e565b6008805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25862000442620005d7565b604051620004519190620007aa565b60405180910390a1565b60025490565b600b5490565b60038054604080516020601f6002600019610100600188161502019095169490940493840181900481028201810190925282815260609390929091830182828015620004f75780601f10620004cb57610100808354040283529160200191620004f7565b820191906000526020600020905b815481529060010190602001808311620004d957829003601f168201915b5050505050905090565b62000519838383620005b760201b620007421760201c565b62000523620005db565b15806200054857506001600160a01b03831660009081526009602052604090205460ff165b806200056c57506001600160a01b03821660009081526009602052604090205460ff165b6200058b5760405162461bcd60e51b8152600401620001e29062000858565b6001600160a01b038216301415620005b75760405162461bcd60e51b8152600401620001e29062000821565b505050565b6000600a54600014620005d257600a54620003ae565b504290565b3390565b60085460ff1690565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200062757805160ff191683800117855562000657565b8280016001018555821562000657579182015b82811115620006575782518255916020019190600101906200063a565b506200066592915062000669565b5090565b5b808211156200066557600081556001016200066a565b80516001600160a01b0381168114620003de57600080fd5b600060408284031215620006aa578081fd5b620006b660406200091f565b9050620006c4838362000680565b81526020820151602082015292915050565b600080600060608486031215620006eb578283fd5b620006f7858562000680565b9250602080850151925060408086015160018060401b03808211156200071b578485fd5b818801915088601f8301126200072f578485fd5b8151818111156200073e578586fd5b6200074d85868302016200091f565b8181528581019250838601858302850187018c10156200076b578788fd5b8794505b828510156200079957620007848c8262000698565b8452600194909401939286019285016200076f565b508096505050505050509250925092565b6001600160a01b0391909116815260200190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526017908201527f544f524e3a20696e76616c696420726563697069656e74000000000000000000604082015260600190565b6020808252600c908201526b1513d4938e881c185d5cd95960a21b604082015260600190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b6020808252601c908201527f544f524e3a20696e636f727265637420646973747269627574696f6e00000000604082015260600190565b6020808252601f908201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604082015260600190565b90815260200190565b6040518181016001600160401b03811182821017156200093e57600080fd5b604052919050565b60805160a05160601c612008620009866000398061056f52806106975280610764528061081d5280610a215250806107bc5280610d2052506120086000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80637ecebe0011610104578063adb61832116100a2578063d505accf11610071578063d505accf1461038d578063dc0f0d12146103a0578063dd62ed3e146103a8578063ef0e2ff4146103bb576101cf565b8063adb6183214610357578063adc879e91461035f578063c565882714610367578063cea9d26f1461037a576101cf565b806395d89b41116100de57806395d89b41146103215780639a8a059214610329578063a457c2d714610331578063a9059cbb14610344576101cf565b80637ecebe00146102e857806381893c7c146102fb578063885ad0cf1461030e576101cf565b80633c8d76d1116101715780635c975abb1161014b5780635c975abb146102a75780635d4545a0146102af57806370a08231146102c257806379cc6790146102d5576101cf565b80633c8d76d11461026a57806342966c681461027f5780635aa6e67514610292576101cf565b806318160ddd116101ad57806318160ddd1461022757806323b872dd1461022f578063313ce567146102425780633950935114610257576101cf565b806301ec0fab146101d457806306fdde03146101f2578063095ea7b314610207575b600080fd5b6101dc6103ce565b6040516101e99190611e68565b60405180910390f35b6101fa6103d4565b6040516101e99190611943565b61021a610215366004611708565b61046b565b6040516101e991906118ba565b6101dc610489565b61021a61023d366004611653565b61048f565b61024a610516565b6040516101e99190611e71565b61021a610265366004611708565b61051f565b61027d610278366004611733565b61056d565b005b61027d61028d36600461181c565b610681565b61029a610695565b6040516101e9919061188d565b61021a6106b9565b61021a6102bd3660046115ff565b6106c2565b6101dc6102d03660046115ff565b6106d7565b61027d6102e3366004611708565b6106f2565b6101dc6102f63660046115ff565b610747565b61027d6103093660046117d0565b610762565b61027d61031c366004611733565b61081b565b6101fa610922565b6101dc610983565b61021a61033f366004611708565b610989565b61021a610352366004611708565b6109f1565b6101dc610a05565b6101dc610a14565b61027d61037536600461181c565b610a1a565b61027d610388366004611808565b610a1f565b61027d61039b366004611693565b610bdd565b6101dc610d1e565b6101dc6103b636600461161b565b610d42565b61027d6103c936600461181c565b610d6d565b600a5481565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104605780601f1061043557610100808354040283529160200191610460565b820191906000526020600020905b81548152906001019060200180831161044357829003601f168201915b505050505090505b90565b600061047f610478610db7565b8484610dbb565b5060015b92915050565b60025490565b600061049c848484610e6f565b61050c846104a8610db7565b61050785604051806060016040528060288152602001611f62602891396001600160a01b038a166000908152600160205260408120906104e6610db7565b6001600160a01b031681526020810191909152604001600020549190610f84565b610dbb565b5060019392505050565b60055460ff1690565b600061047f61052c610db7565b84610507856001600061053d610db7565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610d72565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661059f610db7565b6001600160a01b0316146105ce5760405162461bcd60e51b81526004016105c590611de4565b60405180910390fd5b60005b815181101561067d576000600960008484815181106105ec57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055507f9ef90a89b00db1a1891a357dc96b2a273add9d883e378c350d22bad87a9d7d3082828151811061065857fe5b602002602001015160405161066d919061188d565b60405180910390a16001016105d1565b5050565b61069261068c610db7565b82610fb0565b50565b7f000000000000000000000000000000000000000000000000000000000000000081565b60085460ff1690565b60096020526000908152604090205460ff1681565b6001600160a01b031660009081526020819052604090205490565b600061072482604051806060016040528060248152602001611f8a6024913961071d866103b6610db7565b9190610f84565b905061073883610732610db7565b83610dbb565b6107428383610fb0565b505050565b6001600160a01b031660009081526006602052604090205490565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610794610db7565b6001600160a01b0316146107ba5760405162461bcd60e51b81526004016105c590611de4565b7f00000000000000000000000000000000000000000000000000000000000000006107e3610a05565b116108005760405162461bcd60e51b81526004016105c590611bd9565b80156108135761080e611092565b610692565b6106926110fe565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661084d610db7565b6001600160a01b0316146108735760405162461bcd60e51b81526004016105c590611de4565b60005b815181101561067d5760016009600084848151811061089157fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a81548160ff0219169083151502179055507f77a7dbc6ad97703ad411a8d5edfcd1df382fb34b076a90898b11884f7ebdcc058282815181106108fd57fe5b6020026020010151604051610912919061188d565b60405180910390a1600101610876565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104605780601f1061043557610100808354040283529160200191610460565b600b5481565b600061047f610996610db7565b8461050785604051806060016040528060258152602001611fae60259139600160006109c0610db7565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610f84565b600061047f6109fe610db7565b8484610e6f565b6000610a0f610d9e565b905090565b600b5490565b600a55565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610a51610db7565b6001600160a01b031614610a775760405162461bcd60e51b81526004016105c590611de4565b6001600160a01b038216610a9d5760405162461bcd60e51b81526004016105c590611d58565b6001600160a01b038316610b06574760008215610ac357610abe8284611157565b610ac5565b815b6040519091506001600160a01b0385169082156108fc029083906000818181858888f19350505050158015610afe573d6000803e3d6000fd5b505050610742565b6040516370a0823160e01b81526000906001600160a01b038516906370a0823190610b3590309060040161188d565b60206040518083038186803b158015610b4d57600080fd5b505afa158015610b61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b859190611834565b905060008215610b9e57610b998284611157565b610ba0565b815b905060008111610bc25760405162461bcd60e51b81526004016105c590611e31565b610bd66001600160a01b038616858361116d565b5050505050565b83610be6610a05565b1115610c045760405162461bcd60e51b81526004016105c590611ace565b6001600160a01b0387166000908152600660209081526040808320549051610c57927f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9928c928c928c92918c91016118c5565b6040516020818303038152906040528051906020012090506000611901610c7c6111c3565b83604051602001610c8f93929190611868565b6040516020818303038152906040528051906020012090506000610cb582878787611202565b9050896001600160a01b0316816001600160a01b031614610ce85760405162461bcd60e51b81526004016105c590611c20565b6001600160a01b038a16600090815260066020526040902080546001019055610d128a8a8a610dbb565b50505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b600b55565b600082820183811015610d975760405162461bcd60e51b81526004016105c590611a60565b9392505050565b6000600a54600014610db257600a54610a0f565b504290565b3390565b6001600160a01b038316610de15760405162461bcd60e51b81526004016105c590611cdd565b6001600160a01b038216610e075760405162461bcd60e51b81526004016105c590611a1e565b6001600160a01b0380841660008181526001602090815260408083209487168084529490915290819020849055517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92590610e62908590611e68565b60405180910390a3505050565b6001600160a01b038316610e955760405162461bcd60e51b81526004016105c590611c98565b6001600160a01b038216610ebb5760405162461bcd60e51b81526004016105c5906119ad565b610ec68383836112fa565b610f0381604051806060016040528060268152602001611f3c602691396001600160a01b0386166000908152602081905260409020549190610f84565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610f329082610d72565b6001600160a01b0380841660008181526020819052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610e62908590611e68565b60008184841115610fa85760405162461bcd60e51b81526004016105c59190611943565b505050900390565b6001600160a01b038216610fd65760405162461bcd60e51b81526004016105c590611c57565b610fe2826000836112fa565b61101f81604051806060016040528060228152602001611f1a602291396001600160a01b0385166000908152602081905260409020549190610f84565b6001600160a01b0383166000908152602081905260409020556002546110459082611399565b6002556040516000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90611086908590611e68565b60405180910390a35050565b60085460ff166110b45760405162461bcd60e51b81526004016105c5906119f0565b6008805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa6110e7610db7565b6040516110f4919061188d565b60405180910390a1565b60085460ff16156111215760405162461bcd60e51b81526004016105c590611b6d565b6008805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110e7610db7565b60008183106111665781610d97565b5090919050565b6107428363a9059cbb60e01b848460405160240161118c9291906118a1565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b0319909316929092179091526113db565b600080600760006111d2610a14565b8152602081019190915260400160002054905080156111f2579050610468565b6111fa61146a565b915050610468565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08211156112445760405162461bcd60e51b81526004016105c590611b2b565b8360ff16601b148061125957508360ff16601c145b6112755760405162461bcd60e51b81526004016105c590611b97565b60006001868686866040516000815260200160405260405161129a9493929190611925565b6020604051602081039080840390855afa1580156112bc573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166112ef5760405162461bcd60e51b81526004016105c590611976565b90505b949350505050565b611305838383610742565b61130d6106b9565b158061133157506001600160a01b03831660009081526009602052604090205460ff165b8061135457506001600160a01b03821660009081526009602052604090205460ff165b6113705760405162461bcd60e51b81526004016105c590611b05565b6001600160a01b0382163014156107425760405162461bcd60e51b81526004016105c590611a97565b6000610d9783836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250610f84565b6060611430826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115209092919063ffffffff16565b805190915015610742578080602001905181019061144e91906117ec565b6107425760405162461bcd60e51b81526004016105c590611d9a565b600080611475610a14565b905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6114a26103d4565b805160209182012060408051808201825260018152603160f81b90840152516114f293927fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc69187913091016118f9565b60408051601f1981840301815291815281516020928301206000948552600790925290922082905550905090565b60606112f284846000856060611535856115ee565b6115515760405162461bcd60e51b81526004016105c590611d21565b60006060866001600160a01b0316858760405161156e919061184c565b60006040518083038185875af1925050503d80600081146115ab576040519150601f19603f3d011682016040523d82523d6000602084013e6115b0565b606091505b509150915081156115c45791506112f29050565b8051156115d45780518082602001fd5b8360405162461bcd60e51b81526004016105c59190611943565b3b151590565b803561048381611ef6565b600060208284031215611610578081fd5b8135610d9781611ef6565b6000806040838503121561162d578081fd5b823561163881611ef6565b9150602083013561164881611ef6565b809150509250929050565b600080600060608486031215611667578081fd5b833561167281611ef6565b9250602084013561168281611ef6565b929592945050506040919091013590565b600080600080600080600060e0888a0312156116ad578283fd5b87356116b881611ef6565b965060208801356116c881611ef6565b95506040880135945060608801359350608088013560ff811681146116eb578384fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561171a578182fd5b823561172581611ef6565b946020939093013593505050565b60006020808385031215611745578182fd5b823567ffffffffffffffff81111561175b578283fd5b8301601f8101851361176b578283fd5b803561177e61177982611ea6565b611e7f565b818152838101908385018584028501860189101561179a578687fd5b8694505b838510156117c4576117b089826115f4565b83526001949094019391850191850161179e565b50979650505050505050565b6000602082840312156117e1578081fd5b8135610d9781611f0b565b6000602082840312156117fd578081fd5b8151610d9781611f0b565b600080600060608486031215611667578283fd5b60006020828403121561182d578081fd5b5035919050565b600060208284031215611845578081fd5b5051919050565b6000825161185e818460208701611ec6565b9190910192915050565b60f09390931b6001600160f01b03191683526002830191909152602282015260420190565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b9586526001600160a01b0394851660208701529290931660408501526060840152608083019190915260a082015260c00190565b9485526020850193909352604084019190915260608301526001600160a01b0316608082015260a00190565b93845260ff9290921660208401526040830152606082015260800190565b6000602082528251806020840152611962816040850160208701611ec6565b601f01601f19169190910160400192915050565b60208082526018908201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604082015260600190565b60208082526023908201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260408201526265737360e81b606082015260800190565b60208082526014908201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604082015260600190565b60208082526022908201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526017908201527f544f524e3a20696e76616c696420726563697069656e74000000000000000000604082015260600190565b6020808252601d908201527f45524332305065726d69743a206578706972656420646561646c696e65000000604082015260600190565b6020808252600c908201526b1513d4938e881c185d5cd95960a21b604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604082015261756560f01b606082015260800190565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b60208082526022908201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604082015261756560f01b606082015260800190565b60208082526027908201527f544f524e3a2063616e6e6f74206368616e6765207472616e736665726162696c6040820152661a5d1e481e595d60ca1b606082015260800190565b6020808252601e908201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604082015260600190565b60208082526021908201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736040820152607360f81b606082015260800190565b60208082526025908201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604082015264647265737360d81b606082015260800190565b60208082526024908201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646040820152637265737360e01b606082015260800190565b6020808252601d908201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604082015260600190565b60208082526022908201527f544f524e3a2063616e206e6f742073656e6420746f207a65726f206164647265604082015261737360f01b606082015260800190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b6020808252602d908201527f544f524e3a206f6e6c7920676f7665726e616e63652063616e20706572666f7260408201526c36903a3434b99030b1ba34b7b760991b606082015260800190565b6020808252601e908201527f544f524e3a20747279696e6720746f2073656e6420302062616c616e63650000604082015260600190565b90815260200190565b60ff91909116815260200190565b60405181810167ffffffffffffffff81118282101715611e9e57600080fd5b604052919050565b600067ffffffffffffffff821115611ebc578081fd5b5060209081020190565b60005b83811015611ee1578181015183820152602001611ec9565b83811115611ef0576000848401525b50505050565b6001600160a01b038116811461069257600080fd5b801515811461069257600080fdfe45524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220c25cb2cef98080abbebec9b5719a4f46d638fbe559a3ab7a9de64272855c3c1064736f6c634300060c0033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_governance";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_pausePeriod";
            readonly type: "uint256";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "amount";
                readonly type: "uint256";
            }];
            readonly internalType: "struct TORN.Recipient[]";
            readonly name: "_vesting";
            readonly type: "tuple[]";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Allowed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Approval";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "target";
            readonly type: "address";
        }];
        readonly name: "Disallowed";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Paused";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "from";
            readonly type: "address";
        }, {
            readonly indexed: true;
            readonly internalType: "address";
            readonly name: "to";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "value";
            readonly type: "uint256";
        }];
        readonly name: "Transfer";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "Unpaused";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "target";
            readonly type: "address[]";
        }];
        readonly name: "addToAllowedList";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }];
        readonly name: "allowance";
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
        readonly name: "allowedTransferee";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "blockTimestamp";
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
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burn";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "account";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "burnFrom";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "canUnpauseAfter";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "chainID";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "chainId";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bool";
            readonly name: "decision";
            readonly type: "bool";
        }];
        readonly name: "changeTransferability";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "decimals";
        readonly outputs: readonly [{
            readonly internalType: "uint8";
            readonly name: "";
            readonly type: "uint8";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "subtractedValue";
            readonly type: "uint256";
        }];
        readonly name: "decreaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "fakeTimestamp";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
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
            readonly name: "spender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "addedValue";
            readonly type: "uint256";
        }];
        readonly name: "increaseAllowance";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "name";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "owner";
            readonly type: "address";
        }];
        readonly name: "nonces";
        readonly outputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "paused";
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
            readonly name: "owner";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "spender";
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
        readonly name: "permit";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address[]";
            readonly name: "target";
            readonly type: "address[]";
        }];
        readonly name: "removeFromAllowedList";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "contract IERC20";
            readonly name: "_token";
            readonly type: "address";
        }, {
            readonly internalType: "address payable";
            readonly name: "_to";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "_balance";
            readonly type: "uint256";
        }];
        readonly name: "rescueTokens";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_chainId";
            readonly type: "uint256";
        }];
        readonly name: "setChainId";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "_fakeTimestamp";
            readonly type: "uint256";
        }];
        readonly name: "setFakeTimestamp";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "symbol";
        readonly outputs: readonly [{
            readonly internalType: "string";
            readonly name: "";
            readonly type: "string";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "totalSupply";
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
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "address";
            readonly name: "recipient";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly internalType: "bool";
            readonly name: "";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "function";
    }];
    static createInterface(): TORNMockInterface;
    static connect(address: string, runner?: ContractRunner | null): TORNMock;
}
export {};