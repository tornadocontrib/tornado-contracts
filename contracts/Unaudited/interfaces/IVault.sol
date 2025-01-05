// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IVault {
    function deposit(
        uint256[] memory id,
        address token,
        address from,
        uint256 value,
        bytes memory data
    ) external payable;

    function withdraw(
        uint256 id,
        address token,
        address recipient,
        uint256 value,
        address relayer,
        uint256 fee,
        uint256 refund,
        bytes memory data
    ) external payable;
}
