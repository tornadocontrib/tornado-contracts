// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EnumerableSet} from '@openzeppelin/contracts/utils/structs/EnumerableSet.sol';

/**
 * @dev Tornado Cash info registry for multi-chain
 */
contract InfoRegistry {
    using EnumerableSet for EnumerableSet.Bytes32Set;

    struct RpcInfo {
        uint64 chainId;
        string url;
        bool isPrior;
    }

    struct TokenInfo {
        uint64 chainId;
        address addr;
        string name;
        string symbol;
        uint8 decimals;
        uint32 transferGas;
    }

    struct InstanceInfo {
        uint64 chainId;
        address addr;
        uint256 denomination;
        address tokenAddress;
        bool instanceApproval;
        bool isOptional;
        bool isDisabled;
    }

    event BumpedRevision(uint16 indexed newRevision);
    event AddedChain(uint16 indexed revision, uint64 indexed chainId, bytes netInfo);
    event AddedRpc(
        uint64 indexed chainId,
        string url,
        bool indexed isPrior
    );
    event RemovedRpc(
        uint64 indexed chainId,
        string url,
        bool indexed isPrior
    );
    event AddedToken(
        uint64 indexed chainId,
        address indexed addr,
        string name,
        string symbol,
        uint8 decimals,
        uint32 transferGas,
        uint16 indexed nonce
    );
    event UpdatedInstance(
        uint64 indexed chainId,
        address indexed addr,
        uint256 denomination,
        address indexed tokenAddress,
        bool instanceApproval,
        bool isOptional,
        bool isDisabled,
        uint16 nonce,
        bool pushed
    );
    event UpdatedOwner(address indexed newOwner);

    address public owner;

    // Info revision so that infos pushed will be immutable per revision
    uint16 public revision;

    /**
     * Chain Storage
     */
    // list of chainIds
    uint64[] public chainIds;
    mapping(uint64 => bool) public hasChainId;
    // revision => chainId => netInfo
    mapping(uint16 => mapping(uint64 => bytes)) public netInfos;

    /**
     * RPC Storage
     */
    mapping(bytes32 => RpcInfo) public rpcInfos;
    EnumerableSet.Bytes32Set private rpchashes;

    /**
     * Token Storage
     */
    TokenInfo[] public tokens;
    // chainId => address
    mapping(uint64 => mapping(address => uint16)) public tokenNonce;

    /**
     * Instance Storage
     */
    InstanceInfo[] public instances;
    // chainId => address
    mapping(uint64 => mapping(address => uint16)) public instanceNonce;

    modifier onlyOwner() {
        require(msg.sender == owner, 'Not owner');
        _;
    }

    constructor() {
        owner = msg.sender;

        emit UpdatedOwner(owner);
    }

    /**
     * @dev Revision == dbSchema version
     * 
     * Bump only when wrong info is pushed by mistake (should push all infos as well)
     */
    function bumpRevision() external onlyOwner {
        revision++;

        emit BumpedRevision(revision);   
    }

    function addChain(uint64 chainId, bytes memory netInfo) public onlyOwner {
        if (!hasChainId[chainId]) {
            chainIds.push(chainId);
            hasChainId[chainId] = true;
        }

        require(netInfos[revision][chainId].length == 0, 'Already added');

        netInfos[revision][chainId] = netInfo;

        emit AddedChain(revision, chainId, netInfo);
    }

    function addRpc(uint64 chainId, string memory url, bool isPrior) public onlyOwner {
        bytes32 rpchash = keccak256(abi.encodePacked(chainId, url, isPrior));

        if (!rpchashes.contains(rpchash)) {
            rpchashes.add(rpchash);
            rpcInfos[rpchash] = RpcInfo({
                chainId: chainId,
                url: url,
                isPrior: isPrior
            });

            emit AddedRpc(chainId, url, isPrior);
        } else {
            rpchashes.remove(rpchash);

            emit RemovedRpc(chainId, url, isPrior);
        }
    }

    function addToken(TokenInfo memory token) public onlyOwner {
        uint16 nonce = tokenNonce[token.chainId][token.addr];

        require(tokens.length == 0 || nonce == 0, 'Duplicated token');

        nonce = uint16(tokens.length);
        tokens.push(token);
        tokenNonce[token.chainId][token.addr] = nonce;

        emit AddedToken(
            token.chainId,
            token.addr,
            token.name,
            token.symbol,
            token.decimals,
            token.transferGas,
            nonce
        );
    }

    function updateInstance(InstanceInfo memory instance) public onlyOwner {
        uint16 nonce = instanceNonce[instance.chainId][instance.addr];
        bool pushed;

        // Push new instance
        if (instances.length == 0 || nonce == 0) {
            nonce = uint16(instances.length);
            pushed = true;

            instances.push(instance);

            instanceNonce[instance.chainId][instance.addr] = nonce;

        // Update limited data
        } else {
            instances[nonce].isOptional = instance.isOptional;
            instances[nonce].isDisabled = instance.isDisabled;
        }

        emit UpdatedInstance(
            instance.chainId,
            instance.addr,
            instance.denomination,
            instance.tokenAddress,
            instance.instanceApproval,
            instance.isOptional,
            instance.isDisabled,
            nonce,
            pushed
        );
    }

    struct NetInfo {
        uint64 chainId;
        bytes netInfo;
    }

    function addInfos(
        NetInfo[] memory _chains,
        RpcInfo[] memory _rpcs,
        TokenInfo[] memory _tokens,
        InstanceInfo[] memory _instances
    ) external {
        for (uint i; i < _chains.length; ++i) {
            addChain(_chains[i].chainId, _chains[i].netInfo);
        }

        for (uint i; i < _rpcs.length; ++i) {
            addRpc(_rpcs[i].chainId, _rpcs[i].url, _rpcs[i].isPrior);
        }

        for (uint i; i < _tokens.length; ++i) {
            addToken(_tokens[i]);
        }

        for (uint i; i < _instances.length; ++i) {
            updateInstance(_instances[i]);
        }
    }

    function updateOwner(address newOwner) external onlyOwner {
        owner = newOwner;

        emit UpdatedOwner(newOwner);
    }

    function getChainIds() external view returns (uint64[] memory) {
        uint64[] memory chains = new uint64[](chainIds.length);

        for (uint i; i < chainIds.length; ++i) {
            chains[i] = chainIds[i];
        }

        return chains;
    }

    /**
     * @dev Revision should be constant value by UI
     */
    function getNetInfos(uint16 _revision) external view returns (bytes[] memory) {
        bytes[] memory infos = new bytes[](chainIds.length);

        for (uint i; i < infos.length; ++i) {
            infos[i] = netInfos[_revision][chainIds[i]];
        }

        return infos;
    }

    function getRpcs() external view returns (RpcInfo[] memory) {
        RpcInfo[] memory rpcs = new RpcInfo[](rpchashes.length());

        for (uint i; i < rpcs.length; ++i) {
            rpcs[i] = rpcInfos[rpchashes.at(i)];
        }

        return rpcs;
    }

    function getRpchashes() external view returns (bytes32[] memory) {
        return rpchashes.values();
    }

    function getInstances() external view returns (InstanceInfo[] memory) {
        InstanceInfo[] memory _instances = new InstanceInfo[](instances.length);

        for (uint i; i < instances.length; ++i) {
            _instances[i] = instances[i];
        }

        return _instances;
    }

    function getTokens() external view returns (TokenInfo[] memory) {
        TokenInfo[] memory _tokens = new TokenInfo[](tokens.length);

        for (uint i; i < tokens.length; ++i) {
            _tokens[i] = tokens[i];
        }

        return _tokens;
    }
}