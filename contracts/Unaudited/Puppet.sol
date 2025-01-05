// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @dev Simple contract that would execute any transactions from specific origin
 */
contract Puppet {
    address public immutable admin;

    constructor(address _admin) {
        admin = _admin;
    }

    function callTo(address payable _to, bytes calldata _data) public payable returns (bytes memory) {
        require(msg.sender == admin, 'NOT_ADMIN');

        (bool sent, bytes memory data) = _to.call{ value: msg.value }(_data);

        if (!sent) {
            assembly {
                let size := mload(data)
                revert(add(32, data), size)
            }
        }

        return data;
    }
}
