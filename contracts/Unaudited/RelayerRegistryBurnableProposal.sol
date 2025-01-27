// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

interface IRelayerRegistryProxy {
    function upgradeTo(address newImplementation) external;
}

contract RelayerRegistryBurnableProposal {
    address public constant newRelayerRegistry = 0xc82a0737372cb0953E7645eB6b5Bd13da566a29f;
    address public constant relayerRegistryProxyAddr = 0x58E8dCC13BE9780fC42E8723D8EaD4CF46943dF2;

    function executeProposal() public {
        IRelayerRegistryProxy relayerRegistryProxy = IRelayerRegistryProxy(relayerRegistryProxyAddr);
        relayerRegistryProxy.upgradeTo(newRelayerRegistry);
    }
}
