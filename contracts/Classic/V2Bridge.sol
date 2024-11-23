// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { IERC20, SafeERC20 } from './libraries/SafeERC20.sol';
import { ITornadoV2 } from './interfaces/ITornadoV2.sol';

contract V2Bridge {
    using SafeERC20 for IERC20;

    ITornadoV2 public immutable TornadoV2;

    address public immutable tornadoProxyLight;

    uint256 public immutable id;

    constructor(ITornadoV2 _tornadoV2, uint256 _id, address _proxyLight) {
        TornadoV2 = _tornadoV2;
        id = _id;
        tornadoProxyLight = _proxyLight;

        IERC20 _token = IERC20(TornadoV2.token(id));

        _token.approve(address(TornadoV2), type(uint256).max);
    }

    function deposit(bytes32 _commitment) external payable {
        uint256[] memory _ids = new uint256[](1);
        bytes32[] memory _commitments = new bytes32[](1);
        _ids[0] = id;
        _commitments[0] = _commitment;

        IERC20 _token = IERC20(token());
        uint256 _denomination = denomination();

        if (address(_token) != TornadoV2.weth()) {
            if (msg.sender == tornadoProxyLight) {
                _token.safeTransferFrom(tx.origin, address(this), _denomination);
            } else {
                _token.safeTransferFrom(msg.sender, address(this), _denomination);
            }
        }

        TornadoV2.deposit{ value: msg.value }(_ids, _commitments, '');
    }

    function withdraw(
        bytes calldata _proof,
        bytes32 _root,
        bytes32 _nullifierHash,
        address payable _recipient,
        address payable _relayer,
        uint256 _fee,
        uint256 _refund
    ) external payable {
        TornadoV2.withdraw{ value: msg.value }(
            id,
            _proof,
            _root,
            _nullifierHash,
            _recipient,
            _relayer,
            _fee,
            _refund,
            ''
        );
    }

    function nextIndex() external view returns (uint32) {
        return TornadoV2.nextIndex(id);
    }

    function getLastRoot() external view returns (bytes32) {
        return TornadoV2.getLastRoot(id);
    }

    function token() public view returns (address) {
        return TornadoV2.token(id);
    }

    function denomination() public view returns (uint256) {
        return TornadoV2.denomination(id);
    }

    function roots(uint256 index) external view returns (bytes32) {
        return TornadoV2.roots(id, index);
    }

    function isSpent(bytes32 _nullifierHash) external view returns (bool) {
        return TornadoV2.isSpent(_nullifierHash);
    }
}