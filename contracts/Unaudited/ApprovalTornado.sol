/*
 * d888888P                                           dP              a88888b.                   dP
 *    88                                              88             d8'   `88                   88
 *    88    .d8888b. 88d888b. 88d888b. .d8888b. .d888b88 .d8888b.    88        .d8888b. .d8888b. 88d888b.
 *    88    88'  `88 88'  `88 88'  `88 88'  `88 88'  `88 88'  `88    88        88'  `88 Y8ooooo. 88'  `88
 *    88    88.  .88 88       88    88 88.  .88 88.  .88 88.  .88 dP Y8.   .88 88.  .88       88 88    88
 *    dP    `88888P' dP       dP    dP `88888P8 `88888P8 `88888P' 88  Y88888P' `88888P8 `88888P' dP    dP
 * ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
 */

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ERC20Tornado, IVerifier, IHasher, IERC20, SafeERC20 } from '../Classic/ERC20Tornado.sol';

/**
 * @dev Modified by tornadocontrib.eth to make it compatible with tornadoProxyLite contract
 */
contract ApprovalTornado is ERC20Tornado {
    using SafeERC20 for IERC20;

    address public immutable tornadoProxyLight;

    constructor(
        IVerifier _verifier,
        IHasher _hasher,
        uint256 _denomination,
        uint32 _merkleTreeHeight,
        IERC20 _token,
        address _tornadoProxyLight
    ) ERC20Tornado(_verifier, _hasher, _denomination, _merkleTreeHeight, _token) {
        token = _token;
        tornadoProxyLight = _tornadoProxyLight;
    }

    function _processDeposit() internal virtual override {
        require(msg.value == 0, 'ETH value is supposed to be 0 for ERC20 instance');
        if (msg.sender == tornadoProxyLight) {
            token.safeTransferFrom(tx.origin, address(this), denomination);
            return;
        }
        super._processDeposit();
    }
}
