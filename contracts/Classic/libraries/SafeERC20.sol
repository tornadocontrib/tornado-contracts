// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20 } from "../interfaces/IERC20.sol";

library SafeERC20 {
    function safeTransfer(IERC20 token, address to, uint256 value) internal {
        (bool success, bytes memory data) = address(token).call(abi.encodeWithSelector(token.transfer.selector, to, value));
        // Return native revert data from token
        if (!success) {
            assembly {
              revert(add(32, data), mload(data))
            }
        }
        require(data.length == 0 || abi.decode(data, (bool)), 'SafeERC20: safeTransfer failed');
    }

    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {
        (bool success, bytes memory data) = address(token).call(abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
        // Return native revert data from token
        if (!success) {
            assembly {
              revert(add(32, data), mload(data))
            }
        }
        require(data.length == 0 || abi.decode(data, (bool)), 'SafeERC20: safeTransferFrom failed');
    }

    function safeApprove(IERC20 token, address spender, uint256 value) internal {
        (bool success, bytes memory data) = address(token).call(abi.encodeWithSelector(token.approve.selector, spender, value));
        // Return native revert data from token
        if (!success) {
            assembly {
              revert(add(32, data), mload(data))
            }
        }
        require(data.length == 0 || abi.decode(data, (bool)), 'SafeERC20: safeApprove failed');
    }
}
