import path from 'path';
import { readFile } from 'fs/promises';

import { ethers } from 'hardhat';
import {
    BaseContract,
    formatEther,
    MaxUint256,
    parseEther,
    Provider,
    Signature,
    Signer,
    solidityPackedKeccak256,
    TypedDataEncoder,
    TypedDataField,
} from 'ethers';

import { ERC20, ERC20Mock, ERC20Mock__factory, Permit2Mock__factory } from '../typechain-types';
import * as constants from './constants';

const { permit2Address } = constants;

/**
 * Deploy Deterministic Deployment Proxy and Permit2
 *
 * https://github.com/Arachnid/deterministic-deployment-proxy
 * https://github.com/Uniswap/permit2
 */
async function deployPermit2() {
    const [owner] = await ethers.getSigners();

    const { provider } = owner;

    const { deterministicProxy, deterministicSigner, deterministicSignerCost } = constants;

    const deterministicSignedTx = await readFile(path.join(__dirname, './deterministicTx.txt'), { encoding: 'utf-8' });

    // Send deployment cost for deterministicProxyDeploy contract
    (await owner.sendTransaction({ to: deterministicSigner, value: parseEther(deterministicSignerCost) })).wait();

    (await provider.broadcastTransaction(deterministicSignedTx)).wait();

    console.log(`Deterministic Deployment Proxy code: ${await provider.getCode(deterministicProxy)}`);

    // Send Permit2 tx
    const data = await readFile(path.join(__dirname, './permit2tx.txt'), { encoding: 'utf-8' });

    (await owner.sendTransaction({ to: deterministicProxy, data })).wait();

    const permit2code = await provider.getCode(permit2Address);

    console.log(`Permit2 code: ${permit2code ? permit2code.slice(0, 20) : ''}`);
}

interface PermitValue {
    spender: string;
    value: bigint;
    nonce?: bigint;
    deadline?: bigint;
}

async function getPermitSignature(Token: ERC20 | ERC20Mock, { spender, value, nonce, deadline }: PermitValue) {
    const signer = Token.runner as Signer & { address: string };
    const provider = signer.provider as Provider;

    const [name, { chainId }] = await Promise.all([Token.name(), provider.getNetwork()]);

    const DOMAIN_SEPARATOR = {
        name,
        version: '1',
        chainId,
        verifyingContract: Token.target as string,
    };

    const PERMIT_TYPE = {
        Permit: [
            { name: 'owner', type: 'address' },
            { name: 'spender', type: 'address' },
            { name: 'value', type: 'uint256' },
            { name: 'nonce', type: 'uint256' },
            { name: 'deadline', type: 'uint256' },
        ],
    };

    return Signature.from(
        await signer.signTypedData(DOMAIN_SEPARATOR, PERMIT_TYPE, {
            owner: signer.address,
            spender,
            value,
            nonce,
            deadline: deadline || MaxUint256,
        }),
    );
}

/**
 * From @uniswap/permit2-sdk ported for ethers.js v6
 */
interface Witness {
    witnessTypeName: string;
    witnessType: {
        [key: string]: TypedDataField[];
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    witness: any;
}

function bytesToHex(bytes: Uint8Array) {
    return (
        '0x' +
        Array.from(bytes)
            .map((b) => b.toString(16).padStart(2, '0'))
            .join('')
    );
}

function bytesToBN(bytes: Uint8Array) {
    return BigInt(bytesToHex(bytes));
}

function rBigInt(nbytes: number = 31) {
    return bytesToBN(crypto.getRandomValues(new Uint8Array(nbytes)));
}

function rHex(nbytes: number = 31) {
    return bytesToHex(crypto.getRandomValues(new Uint8Array(nbytes)));
}

async function getPermit2Signature(
    Token: BaseContract,
    { spender, value: amount, nonce, deadline }: PermitValue,
    witness?: Witness,
) {
    const signer = Token.runner as Signer & { address: string };
    const provider = signer.provider as Provider;

    const domain = {
        name: 'Permit2',
        chainId: (await provider.getNetwork()).chainId,
        verifyingContract: permit2Address,
    };

    const types: {
        [key: string]: TypedDataField[];
    } = !witness
        ? {
              PermitTransferFrom: [
                  { name: 'permitted', type: 'TokenPermissions' },
                  { name: 'spender', type: 'address' },
                  { name: 'nonce', type: 'uint256' },
                  { name: 'deadline', type: 'uint256' },
              ],
              TokenPermissions: [
                  { name: 'token', type: 'address' },
                  { name: 'amount', type: 'uint256' },
              ],
          }
        : {
              PermitWitnessTransferFrom: [
                  { name: 'permitted', type: 'TokenPermissions' },
                  { name: 'spender', type: 'address' },
                  { name: 'nonce', type: 'uint256' },
                  { name: 'deadline', type: 'uint256' },
                  { name: 'witness', type: witness.witnessTypeName },
              ],
              TokenPermissions: [
                  { name: 'token', type: 'address' },
                  { name: 'amount', type: 'uint256' },
              ],
              ...witness.witnessType,
          };

    const values: {
        permitted: {
            token: string;
            amount: bigint;
        };
        spender: string;
        nonce: bigint;
        deadline: bigint;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        witness?: any;
    } = {
        permitted: {
            token: Token.target as string,
            amount,
        },
        spender,
        // Sorted nonce are not required for Permit2
        nonce: nonce || rBigInt(16),
        deadline: deadline || MaxUint256,
    };

    if (witness) {
        values.witness = witness.witness;
    }

    const hash = new TypedDataEncoder(types).hash(values);

    const signature = Signature.from(await signer.signTypedData(domain, types, values));

    return {
        domain,
        types,
        values,
        hash,
        signature,
    };
}

async function test() {
    await deployPermit2();

    const [owner, user] = await ethers.getSigners();

    const DAI = await new ERC20Mock__factory(owner).deploy();

    (await DAI.mint(owner.address, parseEther('1000000'))).wait();

    // Test Permit
    const { v, r, s } = await getPermitSignature(DAI, {
        spender: user.address,
        value: parseEther('1'),
        nonce: 0n,
    });

    (await DAI.permit(owner.address, user.address, parseEther('1'), MaxUint256, v, r, s)).wait();

    (await DAI.connect(user).transferFrom(owner.address, user.address, parseEther('1'))).wait();

    console.log(`User balance: ${formatEther(await DAI.balanceOf(user.address))}`);

    // Test Permit2
    {
        const Permit2Mock = await new Permit2Mock__factory(owner).deploy(parseEther('1'), DAI.target);

        const {
            values: { nonce, deadline },
            signature: { serialized },
        } = await getPermit2Signature(DAI, {
            spender: Permit2Mock.target as string,
            value: parseEther('1'),
        });

        // Should approve Permit2 first
        (await DAI.approve(permit2Address, MaxUint256)).wait();

        (await Permit2Mock.permit2Test(owner.address, nonce, deadline, serialized)).wait();

        console.log(`Permit2Mock balance: ${formatEther(await DAI.balanceOf(Permit2Mock.target))}`);
    }

    {
        const Permit2Mock = await new Permit2Mock__factory(owner).deploy(parseEther('1'), DAI.target);

        const commitments = [rHex(32), rHex(32)];

        const commitmentsHash = solidityPackedKeccak256(['bytes32[]'], [commitments]);

        const {
            values: { nonce, deadline },
            signature: { serialized },
        } = await getPermit2Signature(
            DAI,
            {
                spender: Permit2Mock.target as string,
                value: BigInt(commitments.length) * parseEther('1'),
            },
            {
                witnessTypeName: 'PermitCommitments',
                witnessType: {
                    PermitCommitments: [
                        { name: 'instance', type: 'address' },
                        { name: 'commitmentsHash', type: 'bytes32' },
                    ],
                },
                witness: {
                    instance: Permit2Mock.target,
                    commitmentsHash,
                },
            },
        );

        // Should approve Permit2 first
        (await DAI.approve(permit2Address, MaxUint256)).wait();

        (await Permit2Mock.permit2Commitments(owner.address, commitments, nonce, deadline, serialized)).wait();

        console.log(`Permit2Mock balance: ${formatEther(await DAI.balanceOf(Permit2Mock.target))}`);

        console.log(owner.address);

        console.log(await Permit2Mock.verifiedCommitments(commitments[0]));

        console.log(await Permit2Mock.verifiedCommitments(commitments[1]));
    }
}

test();
