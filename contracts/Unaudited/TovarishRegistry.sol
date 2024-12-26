// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {EnumerableSet} from '@openzeppelin/contracts/utils/structs/EnumerableSet.sol';

/*
 * @dev Solidity implementation of the ENS namehash algorithm.
 *
 * Warning! Does not normalize or validate names before hashing.
 * Original version can be found here https://github.com/JonahGroendal/ens-namehash/
 */
library ENSNamehash2 {
    function namehash(bytes memory domain) internal pure returns (bytes32) {
        return namehash(domain, 0);
    }

    function namehash(bytes memory domain, uint256 i) internal pure returns (bytes32) {
        if (domain.length <= i) return 0x0000000000000000000000000000000000000000000000000000000000000000;

        uint256 len = labelLength(domain, i);

        return keccak256(abi.encodePacked(namehash(domain, i + len + 1), keccak(domain, i, len)));
    }

    function labelLength(bytes memory domain, uint256 i) private pure returns (uint256) {
        uint256 len;
        while (i + len != domain.length && domain[i + len] != 0x2e) {
            len++;
        }
        return len;
    }

    function keccak(bytes memory data, uint256 offset, uint256 len) private pure returns (bytes32 ret) {
        require(offset + len <= data.length);
        assembly {
            ret := keccak256(add(add(data, 32), offset), len)
        }
    }
}

interface IENSRegistry2 {
    function owner(bytes32 node) external view returns (address);
    function resolver(bytes32 node) external view returns (address);
}

interface IENSResolver2 {
    function addr(bytes32 node) external view returns (address);
    
    function text(bytes32 node, string calldata key) external view returns (string memory);
}

interface INameWrapper {
    function ownerOf(uint256 id) external view returns (address);
}

interface IRelayerRegistry2 {
    function getRelayerEnsHash(address relayer) external view returns (bytes32);

    function getRelayerBalance(address relayer) external view returns (uint256);
    
    function isRelayerRegistered(address relayer, address toResolve) external view returns (bool);
}

interface ITovarishRegistry {
    function getNames() external view returns (string[] memory);
    function getNamehashes() external view returns (bytes32[] memory);
}

/**
 * @dev An alternative, secondary tornado cash relayer registry
 */
contract TovarishRegistry {
    using ENSNamehash2 for bytes;
    using EnumerableSet for EnumerableSet.Bytes32Set;

    event PushedRelayer(string ensName, bytes32 indexed ensHash, address indexed domainOwner, bool indexed alreadRegistered);
    event RemovedRelayer(string ensName, bytes32 indexed ensHash, address indexed domainOwner);
    event PushedDigest(bytes32 indexed digest);
    event RemovedDigest(bytes32 indexed digest);
    event UpdatedFee(uint256 newFee);
    event UpdatedOwner(address indexed newOwner);
    event Migrated(address indexed oldRegistry);

    bytes32 public constant tovarishSubname = keccak256(abi.encodePacked('tovarish-relayer'));

    IENSRegistry2 public immutable ensRegistry;
    INameWrapper public immutable nameWrapper;
    IRelayerRegistry2 public immutable relayerRegistry;

    address public owner;

    /**
     * Relayer related
     */

    uint256 public registerFee;

    mapping(bytes32 => string) public hashToName;

    EnumerableSet.Bytes32Set private namehashes;

    uint256 public lastUpdate;

    /**
     * Known hashes (config, events, index.html or anything static)
     */
    EnumerableSet.Bytes32Set private digests;

    modifier onlyOwner() {
        require(msg.sender == owner, 'Not owner');
        _;
    }

    constructor(
        IENSRegistry2 _ensRegistry,
        INameWrapper _nameWrapper,
        IRelayerRegistry2 _relayerRegistry
    ) {
        ensRegistry = _ensRegistry;
        nameWrapper = _nameWrapper;
        relayerRegistry = _relayerRegistry;
        registerFee = 1 ether;
        owner = msg.sender;

        emit UpdatedFee(registerFee);
        emit UpdatedOwner(owner);
    }

    /**
     * Push already registered relayer to this contract
     */
    function pushRelayer(string memory ensName) public {
        bytes32 ensHash = bytes(ensName).namehash();
        address domainOwner = getNameOwner(ensHash);
        bool isValidName = ensHash == relayerRegistry.getRelayerEnsHash(domainOwner);
        bool isRegistered = relayerRegistry.isRelayerRegistered(domainOwner, domainOwner);
        bool hasRelayer = namehashes.contains(ensHash);

        if (!hasRelayer && isValidName && isRegistered) {
            hashToName[ensHash] = ensName;
            namehashes.add(ensHash);

            lastUpdate = block.number;

            emit PushedRelayer(ensName, ensHash, domainOwner, true);
        }
    }

    function pushRelayers(string[] memory names) external {
        for (uint i; i < names.length; ++i) {
            pushRelayer(names[i]);
        }
    }

    function registerRelayer(string memory ensName) external payable {
        // Process fee
        {
            require(msg.sender == owner || msg.value == registerFee, 'Invalid fee');
            (bool success, ) = owner.call{ value: msg.value }('');
            require(success, 'Payment failed');
        }

        bytes32 ensHash = bytes(ensName).namehash();
        address domainOwner = getNameOwner(ensHash);
        require(domainOwner != address(0), 'Invalid name');

        hashToName[ensHash] = ensName;
        namehashes.add(ensHash);

        emit PushedRelayer(ensName, ensHash, domainOwner, false);
    }

    function removeRelayer(bytes32 ensHash) external onlyOwner {
        require(namehashes.contains(ensHash), 'Invalid hash');

        string memory ensName = hashToName[ensHash];
        address domainOwner = getNameOwner(ensHash);
        bool isValidName = ensHash == relayerRegistry.getRelayerEnsHash(domainOwner);
        bool isRegistered = relayerRegistry.isRelayerRegistered(domainOwner, domainOwner);

        require(!(isValidName && isRegistered), 'Registered relayer');

        namehashes.remove(ensHash);

        emit RemovedRelayer(ensName, ensHash, domainOwner);
    }

    function updateFee(uint256 fee) external onlyOwner {
        registerFee = fee;

        emit UpdatedFee(fee);
    }

    /**
     * Digests func
     */
    function getDigests() external view returns (bytes32[] memory) {
        return digests.values();
    }

    function updateDigest(bytes32 digest) external onlyOwner {
        if (!digests.contains(digest)) {
            digests.add(digest);

            emit PushedDigest(digest);
        } else {
            digests.remove(digest);

            emit RemovedDigest(digest);
        }
    }

    /**
     * Migration func in case contract should be replaced
     */
    function migrate(ITovarishRegistry oldRegistry) external onlyOwner {
        require(namehashes.length() == 0, 'Can not migrate');

        string[] memory names = oldRegistry.getNames();
        bytes32[] memory hashes = oldRegistry.getNamehashes();

        for (uint i; i < names.length; ++i) {
            bytes32 ensHash = hashes[i];

            hashToName[ensHash] = names[i];
            namehashes.add(ensHash);
        }

        lastUpdate = block.number;

        emit Migrated(address(oldRegistry));
    }

    function updateOwner(address newOwner) external onlyOwner {
        owner = newOwner;

        emit UpdatedOwner(newOwner);
    }

    struct Relayer {
        string ensName;
        address owner;
        uint256 balance;
        bool isRegistered;
        string tovarishHost;
        string tovarishChains;
        string[] records;
    }

    function relayersData(string[] memory _subdomains) public view returns (Relayer[] memory) {
        Relayer[] memory _relayers = new Relayer[](namehashes.length());

        for (uint i; i < _relayers.length; ++i) {
            bytes32 ensHash = namehashes.at(i);
            _relayers[i].ensName = hashToName[ensHash];
            _relayers[i].owner = getNameOwner(ensHash);
            _relayers[i].balance = relayerRegistry.getRelayerBalance(_relayers[i].owner);
            _relayers[i].isRegistered = relayerRegistry.isRelayerRegistered(_relayers[i].owner, _relayers[i].owner);
            // lookup legacy relayer url from ens
            _relayers[i].records = new string[](_subdomains.length);

            // Lookup ENS records (for relayer hosts per chain)
            IENSResolver2 resolver = IENSResolver2(ensRegistry.resolver(ensHash));

            // Resolver should be zero when the ENS name doesn't exist
            if (address(resolver) == address(0)) {
                continue;
            }

            // key-value record of tovarish-relayer.yourname.eth (key: url)
            bytes32 tovarishHash = keccak256(abi.encodePacked(ensHash, tovarishSubname));
            _relayers[i].tovarishHost = resolver.text(tovarishHash, "url");
            _relayers[i].tovarishChains = resolver.text(tovarishHash, "chains");

            // lookup legacy relayer url from ens
            for (uint j; j < _subdomains.length; ++j) {
                _relayers[i].records[j] = resolver.text(
                    // subdomain hash
                    keccak256(abi.encodePacked(ensHash, keccak256(abi.encodePacked(_subdomains[j])))),
                    "url"
                );
            }
        }

        return _relayers;
    }

    function getNameOwner(bytes32 node) public view returns (address) {
        address unwrappedOwner = ensRegistry.owner(node);

        if (unwrappedOwner == address(nameWrapper)) {
            return nameWrapper.ownerOf(uint256(node));
        }

        return unwrappedOwner;
    }

    function getNamehashes() external view returns (bytes32[] memory) {
        return namehashes.values();
    }

    /**
     * @dev Get all known ensNames recorded on this contract
     */
    function getNames() external view returns (string[] memory) {
        string[] memory _relayers = new string[](namehashes.length());

        for (uint i; i < _relayers.length; ++i) {
            _relayers[i] = hashToName[namehashes.at(i)];
        }

        return _relayers;
    }
}