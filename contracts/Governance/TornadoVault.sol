// SPDX-License-Identifier: MIT

pragma solidity ^0.6.12;

import { IERC20 } from "@openzeppelin/contracts-v3/token/ERC20/IERC20.sol";
import { SafeERC20 } from "@openzeppelin/contracts-v3/token/ERC20/SafeERC20.sol";

/// @title Vault which holds user funds
contract TornadoVault {
  using SafeERC20 for IERC20;

  address internal immutable TornTokenAddress;
  address internal immutable GovernanceAddress;

  constructor(address _torn, address _governance) public {
    TornTokenAddress = _torn;
    GovernanceAddress = _governance;
  }

  /// @notice withdraws TORN from the contract
  /// @param amount amount to withdraw
  function withdrawTorn(address recipient, uint256 amount) external {
    require(msg.sender == GovernanceAddress, "only gov");
    IERC20(TornTokenAddress).safeTransfer(recipient, amount);
  }
}