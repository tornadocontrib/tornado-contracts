// SPDX-License-Identifier: MIT
pragma solidity ^0.6.12;
pragma experimental ABIEncoderV2;

interface ENSRegistry {
    // Logged when the owner of a node assigns a new owner to a subnode.
    event NewOwner(bytes32 indexed node, bytes32 indexed label, address owner);

    // Logged when the owner of a node transfers ownership to a new account.
    event Transfer(bytes32 indexed node, address owner);

    // Logged when the resolver for a node changes.
    event NewResolver(bytes32 indexed node, address resolver);

    // Logged when the TTL of a node changes
    event NewTTL(bytes32 indexed node, uint64 ttl);

    // Logged when an operator is added or removed.
    event ApprovalForAll(address indexed owner, address indexed operator, bool approved);

    function setRecord(
        bytes32 node,
        address owner,
        address resolver,
        uint64 ttl
    ) external;

    function setSubnodeRecord(
        bytes32 node,
        bytes32 label,
        address owner,
        address resolver,
        uint64 ttl
    ) external;

    function setSubnodeOwner(
        bytes32 node,
        bytes32 label,
        address owner
    ) external returns (bytes32);

    function setResolver(bytes32 node, address resolver) external;

    function setOwner(bytes32 node, address owner) external;

    function setTTL(bytes32 node, uint64 ttl) external;

    function setApprovalForAll(address operator, bool approved) external;

    function owner(bytes32 node) external view returns (address);

    function resolver(bytes32 node) external view returns (address);

    function ttl(bytes32 node) external view returns (uint64);

    function recordExists(bytes32 node) external view returns (bool);

    function isApprovedForAll(address owner, address operator) external view returns (bool);
}

interface ENSResolver {
    function addr(bytes32 node) external view returns (address);
    
    function text(bytes32 node, string calldata key) external view returns (string memory);
}

interface RelayerRegistry {
    function getRelayerBalance(address relayer) external view returns (uint256);
    
    function isRelayerRegistered(address relayer, address toResolve) external view returns (bool);
}

struct Relayer {
    address owner;
    uint256 balance;
    bool isRegistered;
    string[20] records;
}

contract RelayerAggregator {
    ENSRegistry public immutable ensRegistry;
    RelayerRegistry public immutable relayerRegistry;

    constructor(address _ensRegistry, address _relayerRegistry) public {
        ensRegistry = ENSRegistry(_ensRegistry);
        relayerRegistry = RelayerRegistry(_relayerRegistry);
    }

    function relayersData(bytes32[] memory _relayers, string[] memory _subdomains) public view returns (Relayer[] memory) {
        Relayer[] memory relayers = new Relayer[](_relayers.length);

        for (uint256 i = 0; i < _relayers.length; i++) {
            relayers[i].owner = ensRegistry.owner(_relayers[i]);
            ENSResolver resolver = ENSResolver(ensRegistry.resolver(_relayers[i]));

            for (uint256 j = 0; j < _subdomains.length; j++) {
                bytes32 subdomainHash = keccak256(abi.encodePacked(_relayers[i], keccak256(abi.encodePacked(_subdomains[j]))));
                relayers[i].records[j] = resolver.text(subdomainHash, "url");
            }

            relayers[i].isRegistered = relayerRegistry.isRelayerRegistered(relayers[i].owner, relayers[i].owner);
            relayers[i].balance = relayerRegistry.getRelayerBalance(relayers[i].owner);
        }
        return relayers;
    }
}