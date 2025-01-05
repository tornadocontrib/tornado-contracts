// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { ENS } from '@ensdomains/ens-contracts/contracts/registry/ENS.sol';
import { Resolver } from '@ensdomains/ens-contracts/contracts/resolvers/Resolver.sol';
import { EnumerableSet } from '@openzeppelin/contracts/utils/structs/EnumerableSet.sol';
import { ENSNamehash } from '../Governance/libraries/ENSNamehash.sol';
import { SafeResolver } from '../Governance/libraries/SafeResolver.sol';
import { IRelayerRegistry } from '../Governance/interfaces/IRelayerRegistry.sol';

interface INameWrapper {
    function ownerOf(uint256 id) external view returns (address);
}

/**
 * @dev An alternative, secondary tornado cash relayer registry
 */
contract TovarishRegistry {
    using ENSNamehash for bytes;
    using SafeResolver for Resolver;
    using EnumerableSet for EnumerableSet.Bytes32Set;

    event PushedBytes(bytes32 indexed index, bytes toStore);
    event PushedChain(uint64 indexed chainId, string subdomain);
    event PushedRelayer(
        string ensName,
        bytes32 indexed ensHash,
        address indexed domainOwner,
        bool indexed alreadRegistered
    );
    event RemovedRelayer(string ensName, bytes32 indexed ensHash, address indexed domainOwner);
    event PrioritizedRelayer(string ensName, bytes32 indexed ensHash, bool isPrior);
    event UpdatedFee(uint256 newFee);
    event UpdatedOwner(address indexed newOwner);
    event Migrated(address indexed oldRegistry);

    bytes32 public constant tovarishSubname = keccak256(abi.encodePacked('tovarish-relayer'));

    ENS public immutable ensRegistry;
    INameWrapper public immutable nameWrapper;
    IRelayerRegistry public immutable relayerRegistry;

    address public owner;

    /**
     * Bytes storage
     */
    mapping(bytes32 => bytes) public bytesStore;

    /**
     * Chain Storage
     */

    // list of chainIds
    uint64[] public chainIds;

    mapping(uint64 => bool) public hasChainId;

    mapping(uint64 => string) public subdomains;

    /**
     * Relayer Storage
     */

    uint256 public registerFee;

    mapping(bytes32 => string) public hashToName;

    mapping(bytes32 => bool) public isPrior;

    EnumerableSet.Bytes32Set private namehashes;

    uint256 public lastUpdate;

    modifier onlyOwner() {
        require(msg.sender == owner, 'Not owner');
        _;
    }

    constructor(ENS _ensRegistry, INameWrapper _nameWrapper, IRelayerRegistry _relayerRegistry) {
        ensRegistry = _ensRegistry;
        nameWrapper = _nameWrapper;
        relayerRegistry = _relayerRegistry;
        registerFee = 0.1 ether;
        owner = msg.sender;

        emit UpdatedFee(registerFee);
        emit UpdatedOwner(owner);
    }

    function storeBytes(bytes32 index, bytes memory toStore) external onlyOwner {
        bytesStore[index] = toStore;
        emit PushedBytes(index, toStore);
    }

    function addChain(uint64 chainId, string memory subdomain) public onlyOwner {
        if (!hasChainId[chainId]) {
            chainIds.push(chainId);
            hasChainId[chainId] = true;
        }

        subdomains[chainId] = subdomain;

        emit PushedChain(chainId, subdomain);
    }

    struct Chain {
        uint64 chainId;
        string subdomain;
    }

    function addChains(Chain[] memory chains) public {
        for (uint i; i < chains.length; ++i) {
            addChain(chains[i].chainId, chains[i].subdomain);
        }
    }

    /**
     * Push already registered relayer to this contract
     */
    function pushRelayer(string memory ensName) public {
        bytes32 ensHash = bytes(ensName).namehash();
        address domainOwner = getAddress(ensHash);
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
        address domainOwner = getAddress(ensHash);
        require(domainOwner != address(0), 'Invalid name');

        hashToName[ensHash] = ensName;
        namehashes.add(ensHash);

        emit PushedRelayer(ensName, ensHash, domainOwner, false);
    }

    function removeRelayer(string memory ensName) external onlyOwner {
        bytes32 ensHash = bytes(ensName).namehash();
        require(namehashes.contains(ensHash), 'Invalid hash');

        address domainOwner = getAddress(ensHash);
        bool isValidName = ensHash == relayerRegistry.getRelayerEnsHash(domainOwner);
        bool isRegistered = relayerRegistry.isRelayerRegistered(domainOwner, domainOwner);

        require(!(isValidName && isRegistered), 'Registered relayer');

        namehashes.remove(ensHash);

        emit RemovedRelayer(ensName, ensHash, domainOwner);
    }

    function prioritizeRelayer(string memory ensName) external onlyOwner {
        bytes32 ensHash = bytes(ensName).namehash();
        require(namehashes.contains(ensHash), 'Invalid hash');

        bool _isPrior = isPrior[ensHash] ? false : true;

        isPrior[ensHash] = _isPrior;

        emit PrioritizedRelayer(ensName, ensHash, _isPrior);
    }

    function updateFee(uint256 fee) external onlyOwner {
        registerFee = fee;

        emit UpdatedFee(fee);
    }

    /**
     * Migration func in case contract should be replaced
     */
    function migrate(TovarishRegistry oldRegistry) external onlyOwner {
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

    function getChainIds() external view returns (uint64[] memory) {
        uint64[] memory chains = new uint64[](chainIds.length);

        for (uint i; i < chainIds.length; ++i) {
            chains[i] = chainIds[i];
        }

        return chains;
    }

    function getChains() external view returns (Chain[] memory) {
        Chain[] memory chains = new Chain[](chainIds.length);

        for (uint i; i < chainIds.length; ++i) {
            uint64 chainId = chainIds[i];

            chains[i] = Chain({ chainId: chainId, subdomain: subdomains[chainId] });
        }

        return chains;
    }

    struct Relayer {
        string ensName;
        address owner;
        uint256 balance;
        bool isRegistered;
        bool isPrior;
        string tovarishHost;
        string tovarishChains;
        string[] records;
    }

    function relayersData() public view returns (Relayer[] memory) {
        Relayer[] memory _relayers = new Relayer[](namehashes.length());

        for (uint i; i < _relayers.length; ++i) {
            bytes32 ensHash = namehashes.at(i);
            _relayers[i].ensName = hashToName[ensHash];

            {
                // key-value record of tovarish-relayer.yourname.eth (key: url)
                bytes32 tovarishHash = keccak256(abi.encodePacked(ensHash, tovarishSubname));
                Resolver resolver = Resolver(ensRegistry.resolver(tovarishHash));

                if (address(resolver) != address(0)) {
                    address tovarishAddr = getAddress(tovarishHash);
                    if (tovarishAddr != address(0)) {
                        _relayers[i].owner = tovarishAddr;
                    }
                    _relayers[i].tovarishHost = resolver.safetext(tovarishHash, 'url');
                    _relayers[i].tovarishChains = resolver.safetext(tovarishHash, 'chains');
                }
            }

            {
                if (_relayers[i].owner == address(0)) {
                    _relayers[i].owner = getAddress(ensHash);
                }
                _relayers[i].balance = relayerRegistry.getRelayerBalance(_relayers[i].owner);
                _relayers[i].isRegistered = relayerRegistry.isRelayerRegistered(_relayers[i].owner, _relayers[i].owner);
                _relayers[i].isPrior = isPrior[ensHash];
            }

            // lookup legacy relayer url from ens
            _relayers[i].records = new string[](chainIds.length);

            for (uint j; j < chainIds.length; ++j) {
                string memory subdomain = subdomains[chainIds[j]];
                bytes32 subdomainHash = keccak256(abi.encodePacked(ensHash, keccak256(abi.encodePacked(subdomain))));
                // Lookup ENS records (for relayer hosts per chain)
                Resolver resolver = Resolver(ensRegistry.resolver(subdomainHash));
                // Resolver should be zero when the ENS name doesn't exist
                if (address(resolver) != address(0)) {
                    _relayers[i].records[j] = resolver.safetext(subdomainHash, 'url');
                }
            }
        }

        return _relayers;
    }

    /**
     * Resolve address displayed on etherscan first
     * If record doesn't exist fallback to the owner of name
     */
    function getAddress(bytes32 node) public view returns (address) {
        Resolver resolver = Resolver(ensRegistry.resolver(node));

        if (address(resolver) == address(0)) {
            return address(0);
        }

        address resolvedAddr = resolver.safeaddr(node);

        if (resolvedAddr != address(0)) {
            return resolvedAddr;
        }

        return getNameOwner(node);
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
