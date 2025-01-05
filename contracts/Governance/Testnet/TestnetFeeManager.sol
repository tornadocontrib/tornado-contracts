// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

import { FeeManager, IERC20, ITornadoInstance, UniswapV3OracleHelper } from '../FeeManager.sol';
import { OwnableLibrary } from '../libraries/OwnableLibrary.sol';

/**
 * @dev Stores and returns overrided TORN-Token price
        Literally you don't need to do this unless you don't want to occupy another storage slot for the contract
 */
library TokenPriceLibrary {
    struct PriceStorage {
        mapping(address => uint256) _prices;
    }

    bytes32 private constant PriceStorageLocation = keccak256(abi.encode(uint256(keccak256('tornado.storage.price'))));

    function _getPriceStorage() private pure returns (PriceStorage storage pointer) {
        bytes32 slot = PriceStorageLocation;
        assembly {
            pointer_slot := slot
        }
    }

    function setPrice(address _token, uint256 _price) internal {
        PriceStorage storage priceStorage = _getPriceStorage();
        priceStorage._prices[_token] = _price;
    }

    function getPrice(address _token) internal view returns (uint256 price) {
        PriceStorage storage priceStorage = _getPriceStorage();
        price = priceStorage._prices[_token];
    }
}

/**
 * @dev A testnet feeManager that the maintainer could override V3 oracles, assuming it has been deployed with TestnetProxy
 */
contract TestnetFeeManager is FeeManager {
    constructor(
        address _torn,
        address _governance,
        address _registry
    ) public FeeManager(_torn, _governance, _registry) {}

    modifier onlyOwner() {
        require(OwnableLibrary.getOwner() == msg.sender, 'Not an owner');
        _;
    }

    function setTokenPrice(address _token, uint256 _price) external onlyOwner {
        TokenPriceLibrary.setPrice(_token, _price);
    }

    function getTokenPriceRatio(address _token, uint24 _uniswapPoolSwappingFee) public view returns (uint256) {
        return
            TokenPriceLibrary.getPrice(_token) != 0
                ? TokenPriceLibrary.getPrice(_token)
                : UniswapV3OracleHelper.getPriceRatioOfTokens(
                    [torn, _token],
                    [uniswapTornPoolSwappingFee, _uniswapPoolSwappingFee],
                    uniswapTimePeriod
                );
    }

    function calculatePoolFee(ITornadoInstance _instance) public view override returns (uint160) {
        (bool isERC20, IERC20 token, , uint24 uniswapPoolSwappingFee, uint32 protocolFeePercentage) = registry
            .instances(_instance);
        if (protocolFeePercentage == 0) {
            return 0;
        }

        token = token == IERC20(0) && !isERC20 ? IERC20(UniswapV3OracleHelper.WETH) : token; // for eth instances
        uint256 tokenPriceRatio = getTokenPriceRatio(address(token), uniswapPoolSwappingFee);

        return
            uint160(
                _instance
                    .denomination()
                    .mul(UniswapV3OracleHelper.RATIO_DIVIDER)
                    .div(tokenPriceRatio)
                    .mul(uint256(protocolFeePercentage))
                    .div(PROTOCOL_FEE_DIVIDER)
            );
    }
}
