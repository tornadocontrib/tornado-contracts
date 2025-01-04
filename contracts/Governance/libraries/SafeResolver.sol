// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {
    IAddressResolver,
    IAddrResolver,
    IContentHashResolver,
    INameResolver,
    ITextResolver
} from '@ensdomains/ens-contracts/contracts/resolvers/Resolver.sol';

/**
 * @dev Goal is to not revert on custom ENS resolvers
 */
library SafeResolver {
    function safeaddr(IAddressResolver resolver, bytes32 node, uint256 coinType) internal view returns (address) {
        (bool success, bytes memory data) = address(resolver).staticcall(abi.encodeWithSelector(resolver.addr.selector, node, coinType));
        if (!success || data.length == 0) {
            return address(0);
        }
        return abi.decode(data, (address));
    }

    function safeaddr(IAddrResolver resolver, bytes32 node) internal view returns (address) {
        (bool success, bytes memory data) = address(resolver).staticcall(abi.encodeWithSelector(resolver.addr.selector, node));
        if (!success || data.length == 0) {
            return address(0);
        }
        return abi.decode(data, (address));
    }

    function safecontenthash(IContentHashResolver resolver, bytes32 node) internal view returns (bytes memory) {
        (bool success, bytes memory data) = address(resolver).staticcall(abi.encodeWithSelector(resolver.contenthash.selector, node));
        if (!success || data.length == 0) {
            return new bytes(0);
        }
        return abi.decode(data, (bytes));
    }

    function safename(INameResolver resolver, bytes32 node) internal view returns (string memory) {
        (bool success, bytes memory data) = address(resolver).staticcall(abi.encodeWithSelector(resolver.name.selector, node));
        if (!success || data.length == 0) {
            return '';
        }
        return abi.decode(data, (string));
    }

    function safetext(ITextResolver resolver, bytes32 node, string memory key) internal view returns (string memory) {
        (bool success, bytes memory data) = address(resolver).staticcall(abi.encodeWithSelector(resolver.text.selector, node, key));
        if (!success || data.length == 0) {
            return '';
        }
        return abi.decode(data, (string));
    }   
}