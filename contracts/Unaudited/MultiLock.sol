// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import { EnumerableSet } from '@openzeppelin/contracts/utils/structs/EnumerableSet.sol';
import { TimelockController, AccessControl } from '@openzeppelin/contracts/governance/TimelockController.sol';

/**
 * @dev Timelock contract with basic multisig functionality
 *
 * Note: anyone could execute once the approved transaction pass the required delay
 * this allows emergency queue when the proposer is not available for execution
 * Also, transactions doesn't expire so once queued passed delay it can be executed anytime until canceled
 */
contract MultiLock is TimelockController {
    using EnumerableSet for EnumerableSet.AddressSet;

    event QuorumChange(uint256 oldQuorum, uint256 newQuorum);
    event CallApproved(bytes32 indexed id, address proposer);
    event CallDisapproved(bytes32 indexed id, address proposer);

    // required quorums
    uint256 public minQuorum;

    // timestamp value of last action (increases transparency without looking up events)
    uint256 public lastQueue;
    uint256 public lastExecution;

    // total number of actions (increases transparency without looking up events)
    uint256 public queued;
    uint256 public executed;

    mapping(bytes32 => mapping(address => bool)) public isApproved;

    EnumerableSet.AddressSet private proposers;

    // reverts when timelock tries to fuck up roles
    error MultiLockRoleLimited();

    // reverts when transaction is not approved by required proposers
    error MultiLockUnderQuorum();

    constructor(
        uint256 _minDelay,
        uint256 _minQuorum,
        address[] memory _proposers
    ) TimelockController(_minDelay, _proposers, new address[](0), address(0)) {
        minQuorum = _minQuorum;

        for (uint i; i < _proposers.length; ++i) {
            proposers.add(_proposers[i]);
        }

        _grantRole(EXECUTOR_ROLE, address(0));
    }

    /**
     * Override functions to use quorum
     */
    function schedule(
        address target,
        uint256 value,
        bytes calldata data,
        bytes32 predecessor,
        bytes32 salt,
        uint256 delay
    ) public virtual override onlyRole(PROPOSER_ROLE) {
        bytes32 id = hashOperation(target, value, data, predecessor, salt);
        isApproved[id][msg.sender] = true;
        lastQueue = block.timestamp;
        queued++;
        super.schedule(target, value, data, predecessor, salt, delay);
        emit CallApproved(id, msg.sender);
    }

    function scheduleBatch(
        address[] calldata targets,
        uint256[] calldata values,
        bytes[] calldata payloads,
        bytes32 predecessor,
        bytes32 salt,
        uint256 delay
    ) public virtual override onlyRole(PROPOSER_ROLE) {
        bytes32 id = hashOperationBatch(targets, values, payloads, predecessor, salt);
        isApproved[id][msg.sender] = true;
        lastQueue = block.timestamp;
        queued++;
        super.scheduleBatch(targets, values, payloads, predecessor, salt, delay);
        emit CallApproved(id, msg.sender);
    }

    function execute(
        address target,
        uint256 value,
        bytes calldata payload,
        bytes32 predecessor,
        bytes32 salt
    ) public payable virtual override onlyRoleOrOpenRole(EXECUTOR_ROLE) {
        bytes32 id = hashOperation(target, value, payload, predecessor, salt);
        if (minQuorum > getQuorum(id)) {
            revert MultiLockUnderQuorum();
        }
        lastExecution = block.timestamp;
        executed++;
        super.execute(target, value, payload, predecessor, salt);
    }

    function executeBatch(
        address[] calldata targets,
        uint256[] calldata values,
        bytes[] calldata payloads,
        bytes32 predecessor,
        bytes32 salt
    ) public payable virtual override onlyRoleOrOpenRole(EXECUTOR_ROLE) {
        bytes32 id = hashOperationBatch(targets, values, payloads, predecessor, salt);
        if (minQuorum > getQuorum(id)) {
            revert MultiLockUnderQuorum();
        }
        lastExecution = block.timestamp;
        executed++;
        super.executeBatch(targets, values, payloads, predecessor, salt);
    }

    /**
     * Quorum
     */
    function approve(bytes32 id) external virtual {
        if (!proposers.contains(msg.sender)) {
            revert AccessControlUnauthorizedAccount(msg.sender, PROPOSER_ROLE);
        }

        if (!isApproved[id][msg.sender]) {
            isApproved[id][msg.sender] = true;
            emit CallApproved(id, msg.sender);
        } else {
            isApproved[id][msg.sender] = false;
            emit CallDisapproved(id, msg.sender);
        }
    }

    function setQuorum(uint256 newQuorum) external onlyRole(DEFAULT_ADMIN_ROLE) {
        emit QuorumChange(minQuorum, newQuorum);
        minQuorum = newQuorum;
    }

    function getQuorum(bytes32 id) public view returns (uint256 quorum) {
        uint256 proposerCount = proposers.length();

        for (uint i; i < proposerCount; ++i) {
            if (isApproved[id][proposers.at(i)]) {
                quorum++;
            }
        }
    }

    /**
     * Proposer
     */
    function addProposer(address newProposer) external onlyRole(DEFAULT_ADMIN_ROLE) {
        proposers.add(newProposer);

        _grantRole(PROPOSER_ROLE, newProposer);
        _grantRole(CANCELLER_ROLE, newProposer);
    }

    function removeProposer(address oldProposer) external onlyRole(DEFAULT_ADMIN_ROLE) {
        proposers.remove(oldProposer);

        _revokeRole(PROPOSER_ROLE, oldProposer);
        _revokeRole(CANCELLER_ROLE, oldProposer);
    }

    function grantRole(bytes32 role, address account) public virtual override onlyRole(getRoleAdmin(role)) {
        if (role == PROPOSER_ROLE || role == DEFAULT_ADMIN_ROLE) {
            revert MultiLockRoleLimited();
        }
        super.grantRole(role, account);
    }

    function getProposers() external view returns (address[] memory) {
        return proposers.values();
    }
}
