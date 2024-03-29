// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import { IERC20 } from "@openzeppelin/contracts-v3/token/ERC20/IERC20.sol";
import { ERC20 } from "@openzeppelin/contracts-v3/token/ERC20/ERC20.sol";
import { ERC20Burnable } from "@openzeppelin/contracts-v3/token/ERC20/ERC20Burnable.sol";
import { SafeERC20 } from "@openzeppelin/contracts-v3/token/ERC20/SafeERC20.sol";
import { Ownable } from "@openzeppelin/contracts-v3/access/Ownable.sol";
import { Pausable } from "@openzeppelin/contracts-v3/utils/Pausable.sol";
import { Math } from "@openzeppelin/contracts-v3/math/Math.sol";
import { ERC20Permit } from "./ERC20Permit.sol";

contract TORN is ERC20("TornadoCash", "TORN"), ERC20Burnable, ERC20Permit, Pausable {
  using SafeERC20 for IERC20;

  uint256 public immutable canUnpauseAfter;
  address public immutable governance;
  mapping(address => bool) public allowedTransferee;

  event Allowed(address target);
  event Disallowed(address target);

  struct Recipient {
    address to;
    uint256 amount;
  }

  constructor(
    address _governance,
    uint256 _pausePeriod,
    Recipient[] memory _vestings
  ) public {
    address _resolvedGovernance = _governance;
    governance = _resolvedGovernance;
    allowedTransferee[_resolvedGovernance] = true;

    for (uint256 i = 0; i < _vestings.length; i++) {
      address to = _vestings[i].to;
      _mint(to, _vestings[i].amount);
      allowedTransferee[to] = true;
    }

    canUnpauseAfter = blockTimestamp().add(_pausePeriod);
    _pause();
    require(totalSupply() == 10000000 ether, "TORN: incorrect distribution");
  }

  modifier onlyGovernance() {
    require(_msgSender() == governance, "TORN: only governance can perform this action");
    _;
  }

  function changeTransferability(bool decision) public onlyGovernance {
    require(blockTimestamp() > canUnpauseAfter, "TORN: cannot change transferability yet");
    if (decision) {
      _unpause();
    } else {
      _pause();
    }
  }

  function addToAllowedList(address[] memory target) public onlyGovernance {
    for (uint256 i = 0; i < target.length; i++) {
      allowedTransferee[target[i]] = true;
      emit Allowed(target[i]);
    }
  }

  function removeFromAllowedList(address[] memory target) public onlyGovernance {
    for (uint256 i = 0; i < target.length; i++) {
      allowedTransferee[target[i]] = false;
      emit Disallowed(target[i]);
    }
  }

  function _beforeTokenTransfer(
    address from,
    address to,
    uint256 amount
  ) internal override {
    super._beforeTokenTransfer(from, to, amount);
    require(!paused() || allowedTransferee[from] || allowedTransferee[to], "TORN: paused");
    require(to != address(this), "TORN: invalid recipient");
  }

  /// @dev Method to claim junk and accidentally sent tokens
  function rescueTokens(
    IERC20 _token,
    address payable _to,
    uint256 _balance
  ) external onlyGovernance {
    require(_to != address(0), "TORN: can not send to zero address");

    if (_token == IERC20(0)) {
      // for Ether
      uint256 totalBalance = address(this).balance;
      uint256 balance = _balance == 0 ? totalBalance : Math.min(totalBalance, _balance);
      _to.transfer(balance);
    } else {
      // any other erc20
      uint256 totalBalance = _token.balanceOf(address(this));
      uint256 balance = _balance == 0 ? totalBalance : Math.min(totalBalance, _balance);
      require(balance > 0, "TORN: trying to send 0 balance");
      _token.safeTransfer(_to, balance);
    }
  }
}
