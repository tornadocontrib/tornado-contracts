// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import { OwnableLibrary } from "../libraries/OwnableLibrary.sol";
import { LoopbackProxy } from "../LoopbackProxy.sol";

/**
 * @dev Enables testnet contracts to be upgraded by the maintainer, since we don't want to waste time
 */
contract TestnetProxy is LoopbackProxy {
    modifier onlyOwner {
        require(OwnableLibrary.getOwner() == msg.sender, "Not an owner");
        _;
    }

    constructor(address _logic, bytes memory _data) public payable LoopbackProxy(_logic, _data) {
        OwnableLibrary.setOwner(msg.sender);
    }

    function upgradeToOwner(address newImplementation) external onlyOwner {
        _upgradeTo(newImplementation);
    }
}