import path from 'path';
import { readFile } from 'fs/promises';

import { ethers } from 'hardhat';
import {
  parseEther,
} from 'ethers';

import * as constants from './constants';

const { permit2Address } = constants;

/**
 * Deploy Deterministic Deployment Proxy and Permit2
 * 
 * https://github.com/Arachnid/deterministic-deployment-proxy
 * https://github.com/Uniswap/permit2
 */
export async function deployPermit2() {
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