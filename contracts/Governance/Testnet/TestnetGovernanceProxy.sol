// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;

import { OwnableLibrary } from '../libraries/OwnableLibrary.sol';
import { LoopbackProxy } from '../LoopbackProxy.sol';

/**
 * @dev Enables testnet contracts to be upgraded by the maintainer, since we don't want to waste time
 */
contract TestnetGovernanceProxy is LoopbackProxy {
    modifier onlyOwner() {
        require(OwnableLibrary.getOwner() == msg.sender, 'Not an owner');
        _;
    }

    constructor(address _logic, bytes memory _data) public payable LoopbackProxy(_logic, _data) {
        OwnableLibrary.setOwner(msg.sender);
    }

    function getCurrentOwner() external view returns (address) {
        return OwnableLibrary.getOwner();
    }

    function changeOwner(address newOwner) external onlyOwner {
        OwnableLibrary.setOwner(newOwner);
    }

    function upgradeToOwner(address newImplementation) external onlyOwner {
        _upgradeTo(newImplementation);
    }

    function callToOwner(address target, bytes memory data) external payable onlyOwner {
        (bool success, bytes memory returnData) = target.call{ value: msg.value }(data);
        if (!success) {
            assembly {
                revert(add(32, returnData), mload(returnData))
            }
        }
    }

    function delegateToOwner(address target, bytes memory data) external payable onlyOwner {
        (bool success, bytes memory returnData) = target.delegatecall(data);
        if (!success) {
            assembly {
                revert(add(32, returnData), mload(returnData))
            }
        }
    }
}
