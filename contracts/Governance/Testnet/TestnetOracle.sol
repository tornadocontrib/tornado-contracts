// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

interface IChainlinkOracle {
    function decimals() external view returns (uint8 decimal);
    function latestAnswer() external view returns (int answer);
}

interface IOffchainOracle {
    function getRateToEth(address srcToken, bool useSrcWrappers) external view returns (uint256 weightedRate);
}

contract TestnetOracle {
    address public stablecoin;

    mapping(address => IChainlinkOracle) public chainlinkOracles;

    mapping(address => bool) public isStablecoin;

    mapping(address => uint256) public arbitraryPrice;

    address public owner;

    error NotOwner();

    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert NotOwner();
        }
        _;
    }

    constructor(address _stablecoin, address _stablecoinOracle) {
        stablecoin = _stablecoin;

        isStablecoin[_stablecoin] = true;
        chainlinkOracles[_stablecoin] = IChainlinkOracle(_stablecoinOracle);

        owner = msg.sender;
    }

    function changeOwner(address newOwner) external onlyOwner {
        owner = newOwner;
    }

    function changeArbitraryPrice(address token, uint256 price) external onlyOwner {
        arbitraryPrice[token] = price;
    }

    function setOracle(address token, address oracle, bool _isStablecoin) external onlyOwner {
        if (_isStablecoin) {
            isStablecoin[token] = true;
        }

        chainlinkOracles[token] = IChainlinkOracle(oracle);
    }

    // USD/TOKEN from Chainlink
    function getOracleUSD(address token) public view returns (uint256) {
        IChainlinkOracle oracle = chainlinkOracles[token];
        (uint8 oracleDecimals, uint256 oracleAnswer) = (oracle.decimals(), uint256(oracle.latestAnswer()));
        
        return (10 ** (18 + oracleDecimals) / oracleAnswer);
    }

    // Wrap around OffchainOracle function to get compatible rates from testnet chainlink oracles (which is the same as market rate)
    function getRateToEth(address srcToken, bool useSrcWrappers) external view returns (uint256) {
        if (address(chainlinkOracles[srcToken]) == address(0)) {
            return arbitraryPrice[srcToken];
        }

        uint8 tokenDecimals = IChainlinkOracle(srcToken).decimals();

        if (isStablecoin[srcToken]) {
            return getOracleUSD(srcToken) * 10 ** (18 - tokenDecimals);
        }

        uint256 usdEth = getOracleUSD(stablecoin);

        return usdEth * (10 ** (18 + 18 - tokenDecimals)) / getOracleUSD(srcToken);
    }
}