// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

/**
 * @dev Ownable contract that wouldn't use any existing storage slots
 */
library OwnableLibrary {
    struct OwnerStorage {
        address owner;
    }

    bytes32 private constant OwnerStorageLocation = keccak256(abi.encode(uint256(keccak256("tornado.storage.owner"))));

    function _getOwnerStorage() private pure returns (OwnerStorage storage pointer) {
        bytes32 slot = OwnerStorageLocation;
        assembly {
            pointer_slot := slot
        }
    }

    function setOwner(address _owner) internal {
        _getOwnerStorage().owner = _owner;
    }

    function getOwner() internal view returns (address owner) {
        owner = _getOwnerStorage().owner;
    }
}