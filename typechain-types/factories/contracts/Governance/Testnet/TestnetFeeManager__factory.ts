/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  TestnetFeeManager,
  TestnetFeeManagerInterface,
} from "../../../../contracts/Governance/Testnet/TestnetFeeManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_torn",
        type: "address",
      },
      {
        internalType: "address",
        name: "_governance",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "instance",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "FeeUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint24",
        name: "newFee",
        type: "uint24",
      },
    ],
    name: "UniswapTornPoolSwappingFeeChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "PROTOCOL_FEE_DIVIDER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "_instance",
        type: "address",
      },
    ],
    name: "calculatePoolFee",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeDeviations",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "instance",
            type: "address",
          },
          {
            internalType: "int256",
            name: "deviation",
            type: "int256",
          },
        ],
        internalType: "struct FeeManager.Deviation[]",
        name: "results",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "_uniswapPoolSwappingFee",
        type: "uint24",
      },
    ],
    name: "getTokenPriceRatio",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governance",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "",
        type: "address",
      },
    ],
    name: "instanceFee",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "",
        type: "address",
      },
    ],
    name: "instanceFeeUpdated",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "_instance",
        type: "address",
      },
    ],
    name: "instanceFeeWithUpdate",
    outputs: [
      {
        internalType: "uint160",
        name: "",
        type: "uint160",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "registry",
    outputs: [
      {
        internalType: "contract InstanceRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "newPeriod",
        type: "uint32",
      },
    ],
    name: "setPeriodForTWAPOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "setTokenPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "_uniswapTornPoolSwappingFee",
        type: "uint24",
      },
    ],
    name: "setUniswapTornPoolSwappingFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "newLimit",
        type: "uint24",
      },
    ],
    name: "setUpdateFeeTimeLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "torn",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapTimePeriod",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uniswapTornPoolSwappingFee",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateAllFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance",
        name: "_instance",
        type: "address",
      },
    ],
    name: "updateFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateFeeTimeLimit",
    outputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ITornadoInstance[]",
        name: "_instances",
        type: "address[]",
      },
    ],
    name: "updateFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162001ca738038062001ca783398101604081905262000034916200005c565b6001600160601b0319606093841b811660805291831b821660a05290911b1660c052620000c8565b60008060006060848603121562000071578283fd5b83516200007e81620000af565b60208501519093506200009181620000af565b6040850151909250620000a481620000af565b809150509250925092565b6001600160a01b0381168114620000c557600080fd5b50565b60805160601c60a05160601c60c05160601c611b866200012160003980610350528061061452806108915280610a42525080610539528061064c528061072d528061082252508061059852806107ad5250611b866000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806380eb7bf0116100ad578063bcc5ee6411610071578063bcc5ee641461024b578063c51c229714610253578063d8718fb114610266578063e1f121561461027b578063f522d6d61461028e5761012c565b806380eb7bf014610202578063a028752014610215578063adf898a414610228578063aeb3077a14610230578063b19a2972146102385761012c565b8063603a54fe116100f4578063603a54fe146101ac57806369574fef146101bf5780637b103999146101d25780637ccd2f48146101da57806380679eb3146101ef5761012c565b806305e34364146101315780632efbf3841461015a578063431f63c91461017a5780634bf0a5421461018f5780635aa6e675146101a4575b600080fd5b61014461013f366004611848565b610296565b6040516101519190611ab4565b60405180910390f35b61016d610168366004611848565b6102a8565b60405161015191906118d5565b61018d6101883660046115bc565b610305565b005b61019761034b565b6040516101519190611911565b61016d610537565b61016d6101ba366004611848565b61055b565b6101446101cd366004611584565b610576565b61016d610612565b6101e2610636565b6040516101519190611aa4565b61018d6101fd366004611898565b610641565b61018d610210366004611848565b61069c565b61018d610223366004611864565b610722565b61016d6107ab565b6101446107cf565b61018d6102463660046115e7565b6107d5565b6101e2610805565b61018d610261366004611864565b610817565b61026e610874565b6040516101519190611abd565b61016d610289366004611848565b610887565b61018d610a3d565b60026020526000908152604090205481565b600080546001600160a01b038316825260026020526040822054600160381b90910462ffffff16429190910311156102e3576102e38261069c565b506001600160a01b03808216600090815260016020526040902054165b919050565b3361030e610ad7565b6001600160a01b03161461033d5760405162461bcd60e51b815260040161033490611a06565b60405180910390fd5b6103478282610af0565b5050565b6060807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310c13ac36040518163ffffffff1660e01b815260040160006040518083038186803b1580156103a757600080fd5b505afa1580156103bb573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526103e3919081019061167f565b9050805167ffffffffffffffff811180156103fd57600080fd5b5060405190808252806020026020018201604052801561043757816020015b6104246114b2565b81526020019060019003908161041c5790505b50915060005b815181101561053257600061046483838151811061045757fe5b6020026020010151610887565b6001600160a01b03169050600081156104e0576103e8826001600087878151811061048b57fe5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060009054906101000a90046001600160a01b03166103e8026001600160a01b0316816104db57fe5b040390505b60405180604001604052808585815181106104f757fe5b60200260200101516001600160a01b031681526020018281525085848151811061051d57fe5b6020908102919091010152505060010161043d565b505090565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001602052600090815260409020546001600160a01b031681565b600061058183610b19565b610600576040805180820182526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811682528516602080830191909152825180840190935260005462ffffff80821685528616918401919091526105fb929063ffffffff630100000090910416610b44565b610609565b61060983610b19565b90505b92915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60005462ffffff1681565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461067657600080fd5b6000805463ffffffff90921663010000000266ffffffff00000019909216919091179055565b60006106a782610887565b6001600160a01b03838116600081815260016020908152604080832080546001600160a01b03191695871695909517909455600290528290204290559051919250907f6f0eaf2c2f89fb4cfe96a1dee5e764d60b52c7f48aaa590f0850e308aa1b953a906107169084906118d5565b60405180910390a25050565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461075757600080fd5b6000805462ffffff191662ffffff83811691909117918290556040517fbfe65cfc2359076c4468c9b895156c309c78f94fb09f6d2fc0463c4ca9a71ac2926107a0921690611aa4565b60405180910390a150565b7f000000000000000000000000000000000000000000000000000000000000000081565b61271081565b60005b8151811015610347576107fd8282815181106107f057fe5b602002602001015161069c565b6001016107d8565b600054600160381b900462ffffff1681565b336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461084c57600080fd5b6000805462ffffff909216600160381b0269ffffff0000000000000019909216919091179055565b6000546301000000900463ffffffff1681565b60008060008060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663032bb443876040518263ffffffff1660e01b81526004016108db91906118d5565b60a06040518083038186803b1580156108f357600080fd5b505afa158015610907573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061092b91906117cd565b9450945050935093508063ffffffff1660001415610950576000945050505050610300565b6001600160a01b038316158015610965575083155b61096f5782610985565b73c02aaa39b223fe8d0a0e5c4f27ead9083c756cc25b925060006109938484610576565b9050610a32612710610a2c8463ffffffff16610a2685610a2c670de0b6b3a76400008e6001600160a01b0316638bca6d166040518163ffffffff1660e01b815260040160206040518083038186803b1580156109ee57600080fd5b505afa158015610a02573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a269190611880565b90610b90565b90610bca565b979650505050505050565b610ad57f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166310c13ac36040518163ffffffff1660e01b815260040160006040518083038186803b158015610a9957600080fd5b505afa158015610aad573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610246919081019061167f565b565b6000610ae1610c0c565b546001600160a01b0316919050565b6000610afa610c61565b6001600160a01b03909316600090815260209390935250604090912055565b600080610b24610c61565b6001600160a01b0390931660009081526020939093525050604090205490565b60208084015190830151600091610b5b9184610c98565b84518451610b7e91670de0b6b3a764000091610b78919087610c98565b90610cc2565b81610b8557fe5b0490505b9392505050565b600082610b9f5750600061060c565b82820282848281610bac57fe5b04146106095760405162461bcd60e51b815260040161033490611a63565b600061060983836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250610ce6565b6000807fb4d03667d60278cc15e9a68fa7679dc39ebe71350c4566a2c23c26580da4e0b360001c604051602001610c439190611ab4565b60408051601f19818403018152919052805160209091012092915050565b6000807f6521c13ddfc30471ec629848a30b01f73c36737d417c11843e7a9afa6985e84860001c604051602001610c439190611ab4565b6000610cba8473c02aaa39b223fe8d0a0e5c4f27ead9083c756cc28585610d1d565b949350505050565b6000821580610cdd57505081810281838281610cda57fe5b04145b61060c57600080fd5b60008183610d075760405162461bcd60e51b815260040161033491906119b3565b506000838581610d1357fe5b0495945050505050565b600080846001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015610d5957600080fd5b505afa158015610d6d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d9191906118b4565b60ff16600a0a90506001600160a01b038681169086161415610dbd576001600160801b03169050610cba565b604051630b4c774160e11b8152610e5e90610e5690731f98431c8ad98523631ae4a59f267346ea31f98490631698ee8290610e00908b908b908b906004016118e9565b60206040518083038186803b158015610e1857600080fd5b505afa158015610e2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e509190611568565b85610e6f565b828888611004565b915050610cba565b50949350505050565b600063ffffffff8216610e945760405162461bcd60e51b815260040161033490611a2c565b60408051600280825260608083018452926020830190803683370190505090508281600081518110610ec257fe5b602002602001019063ffffffff16908163ffffffff1681525050600081600181518110610eeb57fe5b63ffffffff9092166020928302919091019091015260405163883bdbfd60e01b81526060906001600160a01b0386169063883bdbfd90610f2f908590600401611969565b60006040518083038186803b158015610f4757600080fd5b505afa158015610f5b573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f83919081019061170b565b509050600081600081518110610f9557fe5b602002602001015182600181518110610faa57fe5b60200260200101510390508463ffffffff168160060b81610fc757fe5b05935060008160060b128015610fee57508463ffffffff168160060b81610fea57fe5b0715155b15610ffb57600019909301925b50505092915050565b600080611010866110ee565b90506001600160801b036001600160a01b0382161161107f576001600160a01b038082168002908481169086161061105f5761105a600160c01b876001600160801b031683611407565b611077565b61107781876001600160801b0316600160c01b611407565b925050610e66565b600061109e6001600160a01b0383168068010000000000000000611407565b9050836001600160a01b0316856001600160a01b0316106110d6576110d1600160801b876001600160801b031683611407565b610a32565b610a3281876001600160801b0316600160801b611407565b60008060008360020b12611105578260020b61110d565b8260020b6000035b9050620d89e88111156111325760405162461bcd60e51b815260040161033490611a48565b60006001821661114657600160801b611158565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff169050600282161561118c576ffff97272373d413259a46990580e213a0260801c5b60048216156111ab576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156111ca576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156111e9576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615611208576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615611227576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615611246576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615611266576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615611286576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156112a6576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156112c6576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156112e6576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615611306576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615611326576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615611346576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615611367576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615611387576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156113a6576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156113c3576b048a170391f7dc42444e8fa20260801c5b60008460020b13156113de5780600019816113da57fe5b0490505b6401000000008106156113f25760016113f5565b60005b60ff16602082901c0192505050919050565b600080806000198587098686029250828110908390030390508061143d576000841161143257600080fd5b508290049050610b89565b80841161144957600080fd5b60008486880960026001871981018816978890046003810283188082028403028082028403028082028403028082028403028082028403029081029092039091026000889003889004909101858311909403939093029303949094049190911702949350505050565b604080518082019091526000808252602082015290565b600082601f8301126114d9578081fd5b81516114ec6114e782611af5565b611ace565b81815291506020808301908481018184028601820187101561150d57600080fd5b60005b8481101561153557815161152381611b15565b84529282019290820190600101611510565b505050505092915050565b803561060c81611b15565b805161060c81611b15565b8051600681900b811461060c57600080fd5b600060208284031215611579578081fd5b815161060981611b15565b60008060408385031215611596578081fd5b82356115a181611b15565b915060208301356115b181611b2d565b809150509250929050565b600080604083850312156115ce578182fd5b82356115d981611b15565b946020939093013593505050565b600060208083850312156115f9578182fd5b823567ffffffffffffffff81111561160f578283fd5b8301601f8101851361161f578283fd5b803561162d6114e782611af5565b8181528381019083850185840285018601891015611649578687fd5b8694505b838510156116735761165f8982611540565b83526001949094019391850191850161164d565b50979650505050505050565b60006020808385031215611691578182fd5b825167ffffffffffffffff8111156116a7578283fd5b8301601f810185136116b7578283fd5b80516116c56114e782611af5565b81815283810190838501858402850186018910156116e1578687fd5b8694505b83851015611673576116f7898261154b565b8352600194909401939185019185016116e5565b6000806040838503121561171d578182fd5b825167ffffffffffffffff80821115611734578384fd5b818501915085601f830112611747578384fd5b81516117556114e782611af5565b80828252602080830192508086018a828387028901011115611775578889fd5b8896505b8487101561179f5761178b8b82611556565b845260019690960195928101928101611779565b5088015190965093505050808211156117b6578283fd5b506117c3858286016114c9565b9150509250929050565b600080600080600060a086880312156117e4578081fd5b855180151581146117f3578182fd5b602087015190955061180481611b15565b604087015190945060028110611818578182fd5b606087015190935061182981611b2d565b608087015190925061183a81611b3e565b809150509295509295909350565b600060208284031215611859578081fd5b813561060981611b15565b600060208284031215611875578081fd5b813561060981611b2d565b600060208284031215611891578081fd5b5051919050565b6000602082840312156118a9578081fd5b813561060981611b3e565b6000602082840312156118c5578081fd5b815160ff81168114610609578182fd5b6001600160a01b0391909116815260200190565b6001600160a01b03938416815291909216602082015262ffffff909116604082015260600190565b602080825282518282018190526000919060409081850190868401855b8281101561195c57815180516001600160a01b0316855286015186850152928401929085019060010161192e565b5091979650505050505050565b6020808252825182820181905260009190848201906040850190845b818110156119a757835163ffffffff1683529284019291840191600101611985565b50909695505050505050565b6000602080835283518082850152825b818110156119df578581018301518582016040015282016119c3565b818111156119f05783604083870101525b50601f01601f1916929092016040019392505050565b6020808252600c908201526b2737ba1030b71037bbb732b960a11b604082015260600190565b602080825260029082015261042560f41b604082015260600190565b6020808252600190820152601560fa1b604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b62ffffff91909116815260200190565b90815260200190565b63ffffffff91909116815260200190565b60405181810167ffffffffffffffff81118282101715611aed57600080fd5b604052919050565b600067ffffffffffffffff821115611b0b578081fd5b5060209081020190565b6001600160a01b0381168114611b2a57600080fd5b50565b62ffffff81168114611b2a57600080fd5b63ffffffff81168114611b2a57600080fdfea2646970667358221220b8619fe35592e9a088c79b20176127c645718756b7306182c9ee6dae5580bc2464736f6c634300060c0033";

type TestnetFeeManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestnetFeeManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestnetFeeManager__factory extends ContractFactory {
  constructor(...args: TestnetFeeManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _torn: AddressLike,
    _governance: AddressLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _torn,
      _governance,
      _registry,
      overrides || {}
    );
  }
  override deploy(
    _torn: AddressLike,
    _governance: AddressLike,
    _registry: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _torn,
      _governance,
      _registry,
      overrides || {}
    ) as Promise<
      TestnetFeeManager & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): TestnetFeeManager__factory {
    return super.connect(runner) as TestnetFeeManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestnetFeeManagerInterface {
    return new Interface(_abi) as TestnetFeeManagerInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TestnetFeeManager {
    return new Contract(address, _abi, runner) as unknown as TestnetFeeManager;
  }
}
