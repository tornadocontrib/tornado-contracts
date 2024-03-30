// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Echoer {
    event Echo(address indexed who, bytes data);
    
    function echo(bytes calldata _data) external {
        emit Echo(msg.sender, _data);
    }
}