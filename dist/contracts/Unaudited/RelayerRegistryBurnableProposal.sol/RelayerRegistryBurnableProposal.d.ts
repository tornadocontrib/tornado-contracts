import type { BaseContract, BytesLike, FunctionFragment, Result, Interface, ContractRunner, ContractMethod, Listener } from "ethers";
import type { TypedContractEvent, TypedDeferredTopicFilter, TypedEventLog, TypedListener, TypedContractMethod } from "../../../common";
export interface RelayerRegistryBurnableProposalInterface extends Interface {
    getFunction(nameOrSignature: "executeProposal" | "newRelayerRegistry" | "relayerRegistryProxyAddr"): FunctionFragment;
    encodeFunctionData(functionFragment: "executeProposal", values?: undefined): string;
    encodeFunctionData(functionFragment: "newRelayerRegistry", values?: undefined): string;
    encodeFunctionData(functionFragment: "relayerRegistryProxyAddr", values?: undefined): string;
    decodeFunctionResult(functionFragment: "executeProposal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "newRelayerRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "relayerRegistryProxyAddr", data: BytesLike): Result;
}
export interface RelayerRegistryBurnableProposal extends BaseContract {
    connect(runner?: ContractRunner | null): RelayerRegistryBurnableProposal;
    waitForDeployment(): Promise<this>;
    interface: RelayerRegistryBurnableProposalInterface;
    queryFilter<TCEvent extends TypedContractEvent>(event: TCEvent, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    queryFilter<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TypedEventLog<TCEvent>>>;
    on<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    on<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(event: TCEvent, listener: TypedListener<TCEvent>): Promise<this>;
    once<TCEvent extends TypedContractEvent>(filter: TypedDeferredTopicFilter<TCEvent>, listener: TypedListener<TCEvent>): Promise<this>;
    listeners<TCEvent extends TypedContractEvent>(event: TCEvent): Promise<Array<TypedListener<TCEvent>>>;
    listeners(eventName?: string): Promise<Array<Listener>>;
    removeAllListeners<TCEvent extends TypedContractEvent>(event?: TCEvent): Promise<this>;
    executeProposal: TypedContractMethod<[], [void], "nonpayable">;
    newRelayerRegistry: TypedContractMethod<[], [string], "view">;
    relayerRegistryProxyAddr: TypedContractMethod<[], [string], "view">;
    getFunction<T extends ContractMethod = ContractMethod>(key: string | FunctionFragment): T;
    getFunction(nameOrSignature: "executeProposal"): TypedContractMethod<[], [void], "nonpayable">;
    getFunction(nameOrSignature: "newRelayerRegistry"): TypedContractMethod<[], [string], "view">;
    getFunction(nameOrSignature: "relayerRegistryProxyAddr"): TypedContractMethod<[], [string], "view">;
    filters: {};
}
