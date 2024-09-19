import type { BaseContract, BigNumberish, FunctionFragment, Interface, EventFragment, AddressLike, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedLogDescription, TypedListener } from "../../../../../../../common";
export interface IUniswapV3PoolEventsInterface extends Interface {
    getEvent(nameOrSignatureOrTopic: "Burn" | "Collect" | "CollectProtocol" | "Flash" | "IncreaseObservationCardinalityNext" | "Initialize" | "Mint" | "SetFeeProtocol" | "Swap"): EventFragment;
}
export declare namespace BurnEvent {
    type InputTuple = [
        owner: AddressLike,
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount: BigNumberish,
        amount0: BigNumberish,
        amount1: BigNumberish
    ];
    type OutputTuple = [
        owner: string,
        tickLower: bigint,
        tickUpper: bigint,
        amount: bigint,
        amount0: bigint,
        amount1: bigint
    ];
    interface OutputObject {
        owner: string;
        tickLower: bigint;
        tickUpper: bigint;
        amount: bigint;
        amount0: bigint;
        amount1: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CollectEvent {
    type InputTuple = [
        owner: AddressLike,
        recipient: AddressLike,
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount0: BigNumberish,
        amount1: BigNumberish
    ];
    type OutputTuple = [
        owner: string,
        recipient: string,
        tickLower: bigint,
        tickUpper: bigint,
        amount0: bigint,
        amount1: bigint
    ];
    interface OutputObject {
        owner: string;
        recipient: string;
        tickLower: bigint;
        tickUpper: bigint;
        amount0: bigint;
        amount1: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace CollectProtocolEvent {
    type InputTuple = [
        sender: AddressLike,
        recipient: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish
    ];
    type OutputTuple = [
        sender: string,
        recipient: string,
        amount0: bigint,
        amount1: bigint
    ];
    interface OutputObject {
        sender: string;
        recipient: string;
        amount0: bigint;
        amount1: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace FlashEvent {
    type InputTuple = [
        sender: AddressLike,
        recipient: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish,
        paid0: BigNumberish,
        paid1: BigNumberish
    ];
    type OutputTuple = [
        sender: string,
        recipient: string,
        amount0: bigint,
        amount1: bigint,
        paid0: bigint,
        paid1: bigint
    ];
    interface OutputObject {
        sender: string;
        recipient: string;
        amount0: bigint;
        amount1: bigint;
        paid0: bigint;
        paid1: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace IncreaseObservationCardinalityNextEvent {
    type InputTuple = [
        observationCardinalityNextOld: BigNumberish,
        observationCardinalityNextNew: BigNumberish
    ];
    type OutputTuple = [
        observationCardinalityNextOld: bigint,
        observationCardinalityNextNew: bigint
    ];
    interface OutputObject {
        observationCardinalityNextOld: bigint;
        observationCardinalityNextNew: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace InitializeEvent {
    type InputTuple = [sqrtPriceX96: BigNumberish, tick: BigNumberish];
    type OutputTuple = [sqrtPriceX96: bigint, tick: bigint];
    interface OutputObject {
        sqrtPriceX96: bigint;
        tick: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace MintEvent {
    type InputTuple = [
        sender: AddressLike,
        owner: AddressLike,
        tickLower: BigNumberish,
        tickUpper: BigNumberish,
        amount: BigNumberish,
        amount0: BigNumberish,
        amount1: BigNumberish
    ];
    type OutputTuple = [
        sender: string,
        owner: string,
        tickLower: bigint,
        tickUpper: bigint,
        amount: bigint,
        amount0: bigint,
        amount1: bigint
    ];
    interface OutputObject {
        sender: string;
        owner: string;
        tickLower: bigint;
        tickUpper: bigint;
        amount: bigint;
        amount0: bigint;
        amount1: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SetFeeProtocolEvent {
    type InputTuple = [
        feeProtocol0Old: BigNumberish,
        feeProtocol1Old: BigNumberish,
        feeProtocol0New: BigNumberish,
        feeProtocol1New: BigNumberish
    ];
    type OutputTuple = [
        feeProtocol0Old: bigint,
        feeProtocol1Old: bigint,
        feeProtocol0New: bigint,
        feeProtocol1New: bigint
    ];
    interface OutputObject {
        feeProtocol0Old: bigint;
        feeProtocol1Old: bigint;
        feeProtocol0New: bigint;
        feeProtocol1New: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export declare namespace SwapEvent {
    type InputTuple = [
        sender: AddressLike,
        recipient: AddressLike,
        amount0: BigNumberish,
        amount1: BigNumberish,
        sqrtPriceX96: BigNumberish,
        liquidity: BigNumberish,
        tick: BigNumberish
    ];
    type OutputTuple = [
        sender: string,
        recipient: string,
        amount0: bigint,
        amount1: bigint,
        sqrtPriceX96: bigint,
        liquidity: bigint,
        tick: bigint
    ];
    interface OutputObject {
        sender: string;
        recipient: string;
        amount0: bigint;
        amount1: bigint;
        sqrtPriceX96: bigint;
        liquidity: bigint;
        tick: bigint;
    }
    type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
    type Filter = TypedDeferredTopicFilter<Event>;
    type Log = TypedEventLog<Event>;
    type LogDescription = TypedLogDescription<Event>;
}
export interface IUniswapV3PoolEvents extends BaseContract {
    connect(runner?: ContractRunner | null): IUniswapV3PoolEvents;
    waitForDeployment(): Promise<this>;
    interface: IUniswapV3PoolEventsInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getEvent(key: "Burn"): TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
    getEvent(key: "Collect"): TypedContractEvent<CollectEvent.InputTuple, CollectEvent.OutputTuple, CollectEvent.OutputObject>;
    getEvent(key: "CollectProtocol"): TypedContractEvent<CollectProtocolEvent.InputTuple, CollectProtocolEvent.OutputTuple, CollectProtocolEvent.OutputObject>;
    getEvent(key: "Flash"): TypedContractEvent<FlashEvent.InputTuple, FlashEvent.OutputTuple, FlashEvent.OutputObject>;
    getEvent(key: "IncreaseObservationCardinalityNext"): TypedContractEvent<IncreaseObservationCardinalityNextEvent.InputTuple, IncreaseObservationCardinalityNextEvent.OutputTuple, IncreaseObservationCardinalityNextEvent.OutputObject>;
    getEvent(key: "Initialize"): TypedContractEvent<InitializeEvent.InputTuple, InitializeEvent.OutputTuple, InitializeEvent.OutputObject>;
    getEvent(key: "Mint"): TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
    getEvent(key: "SetFeeProtocol"): TypedContractEvent<SetFeeProtocolEvent.InputTuple, SetFeeProtocolEvent.OutputTuple, SetFeeProtocolEvent.OutputObject>;
    getEvent(key: "Swap"): TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
    filters: {
        "Burn(address,int24,int24,uint128,uint256,uint256)": TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        Burn: TypedContractEvent<BurnEvent.InputTuple, BurnEvent.OutputTuple, BurnEvent.OutputObject>;
        "Collect(address,address,int24,int24,uint128,uint128)": TypedContractEvent<CollectEvent.InputTuple, CollectEvent.OutputTuple, CollectEvent.OutputObject>;
        Collect: TypedContractEvent<CollectEvent.InputTuple, CollectEvent.OutputTuple, CollectEvent.OutputObject>;
        "CollectProtocol(address,address,uint128,uint128)": TypedContractEvent<CollectProtocolEvent.InputTuple, CollectProtocolEvent.OutputTuple, CollectProtocolEvent.OutputObject>;
        CollectProtocol: TypedContractEvent<CollectProtocolEvent.InputTuple, CollectProtocolEvent.OutputTuple, CollectProtocolEvent.OutputObject>;
        "Flash(address,address,uint256,uint256,uint256,uint256)": TypedContractEvent<FlashEvent.InputTuple, FlashEvent.OutputTuple, FlashEvent.OutputObject>;
        Flash: TypedContractEvent<FlashEvent.InputTuple, FlashEvent.OutputTuple, FlashEvent.OutputObject>;
        "IncreaseObservationCardinalityNext(uint16,uint16)": TypedContractEvent<IncreaseObservationCardinalityNextEvent.InputTuple, IncreaseObservationCardinalityNextEvent.OutputTuple, IncreaseObservationCardinalityNextEvent.OutputObject>;
        IncreaseObservationCardinalityNext: TypedContractEvent<IncreaseObservationCardinalityNextEvent.InputTuple, IncreaseObservationCardinalityNextEvent.OutputTuple, IncreaseObservationCardinalityNextEvent.OutputObject>;
        "Initialize(uint160,int24)": TypedContractEvent<InitializeEvent.InputTuple, InitializeEvent.OutputTuple, InitializeEvent.OutputObject>;
        Initialize: TypedContractEvent<InitializeEvent.InputTuple, InitializeEvent.OutputTuple, InitializeEvent.OutputObject>;
        "Mint(address,address,int24,int24,uint128,uint256,uint256)": TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        Mint: TypedContractEvent<MintEvent.InputTuple, MintEvent.OutputTuple, MintEvent.OutputObject>;
        "SetFeeProtocol(uint8,uint8,uint8,uint8)": TypedContractEvent<SetFeeProtocolEvent.InputTuple, SetFeeProtocolEvent.OutputTuple, SetFeeProtocolEvent.OutputObject>;
        SetFeeProtocol: TypedContractEvent<SetFeeProtocolEvent.InputTuple, SetFeeProtocolEvent.OutputTuple, SetFeeProtocolEvent.OutputObject>;
        "Swap(address,address,int256,int256,uint160,uint128,int24)": TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
        Swap: TypedContractEvent<SwapEvent.InputTuple, SwapEvent.OutputTuple, SwapEvent.OutputObject>;
    };
}
