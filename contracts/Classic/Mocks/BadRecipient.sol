// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract BadRecipient {
    fallback() external {
        require(false, 'this contract does not accept ETH');
    }
}
