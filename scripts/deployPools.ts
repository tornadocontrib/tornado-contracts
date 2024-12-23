import process from 'process';
import path from 'path';
import { readFile, stat } from 'fs/promises';
import { ethers } from 'hardhat';
import { ContractTransactionReceipt, Log, parseUnits, Signer, TransactionReceipt } from 'ethers';
import type { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import type { HardhatEthersProvider } from '@nomicfoundation/hardhat-ethers/internal/hardhat-ethers-provider';
import {
    ETHTornado__factory,
    Echoer__factory,
    SingletonFactory__factory,
    SingletonFactory,
    Deployer__factory,
    Deployer,
    Verifier__factory,
    TornadoProxyLight__factory,
    Verifier,
    TornadoProxyLight,
    Echoer,
    ApprovalTornado__factory,
    ETHTornado,
    ApprovalTornado,
    ERC20Mock__factory,
} from '../typechain-types';
import { ERC20__factory } from '../typechain-types/factories/@openzeppelin/contracts/token/ERC20';

const { parseEther, getSigners } = ethers;

const singletonFundingTx = {
    to: '0xBb6e024b9cFFACB947A71991E386681B1Cd1477D',
    value: parseEther('0.0247'),
};

const DEPLOY_DAI = process.env.DEPLOY_DAI === 'true';

const salt = '0x0000000000000000000000000000000000000000000000000000000047941987';

const merkleHeight = 20;

/**
 * Expected deterministic addresses
 *
 * The value here will be only used for checking if the pre deployed contracts exists,
 * so make sure you double-check the deployed result
 */
const addresses = {
    singleton: '0xce0042B868300000d44A59004Da54A005ffdcf9f',
    deployer: '0xd408455e186CD6447A196DdA6BBaFa6556a2555F',
    hasher: '0xBaffBE0e6C73d4dAd3f813194695FDC5829c962A',
    verifier: '0xfc9859303c0ac1a7721ECE639f2e249D8FD72ac6',
    proxyLight: '0x0D5550d52428E7e3175bfc9550207e4ad3859b17',
    echoer: '0xa75BF2815618872f155b7C4B0C81bF990f5245E4',
};

interface Pools {
    amount: string;
    symbol: string;
    tokenAddress?: string;
}

async function existsAsync(fileOrDir: string): Promise<boolean> {
    try {
        await stat(fileOrDir);

        return true;
    } catch {
        return false;
    }
}

async function getPools(): Promise<Pools[]> {
    if (await existsAsync('./pools.json')) {
        console.log('Reading pool config from ./pools.json');
        return JSON.parse(await readFile('./pools.json', { encoding: 'utf8' })) as Pools[];
    }

    console.log('Using default pool only do this on testing environment or L2s using ETH');
    return JSON.parse(await readFile(path.join(__dirname, './defaultPools.json'), { encoding: 'utf8' })) as Pools[];
}

// Only for testing DAI do not use this on real chain and deploy or connect token for yourself
async function getDaiPools(owner: SignerWithAddress): Promise<Pools[]> {
    if (!DEPLOY_DAI) {
        return [];
    }

    const DAIM = await new ERC20Mock__factory(owner).deploy();

    const pools = JSON.parse(
        await readFile(path.join(__dirname, './defaultTokenPools.json'), { encoding: 'utf8' }),
    ) as Pools[];

    pools.forEach((p) => {
        p.symbol = 'DAI';
        p.tokenAddress = DAIM.target as string;
    });

    return pools;
}

// Deploy ERC-2470: Singleton Factory
async function deploySingletonFactory(owner: SignerWithAddress): Promise<SingletonFactory> {
    // Return existing contract if it has
    if ((await owner.provider.getCode(addresses.singleton)) !== '0x') {
        return SingletonFactory__factory.connect(addresses.singleton, owner);
    }

    console.log('Funding SingletonFactory deployer with 0.0247 ETH');

    await (await owner.sendTransaction(singletonFundingTx)).wait();

    console.log('Sending SingletonFactory deployment tx');

    const { contractAddress } = (await (
        await owner.provider.broadcastTransaction(
            await readFile(path.join(__dirname, './bytecodes/singletonFactoryTx.txt'), { encoding: 'utf8' }),
        )
    ).wait()) as TransactionReceipt;

    return SingletonFactory__factory.connect(contractAddress as string, owner);
}

// Deploy Tornado Deployer
async function deployDeployer(singleton: SingletonFactory): Promise<Deployer> {
    // Return existing contract if it has
    if ((await (singleton.runner?.provider as HardhatEthersProvider).getCode(addresses.deployer)) !== '0x') {
        return Deployer__factory.connect(addresses.deployer, singleton.runner);
    }

    console.log('Deploying Tornado Deployer');

    const receipt = (await (
        await singleton.deploy(
            await readFile(path.join(__dirname, './bytecodes/deployer.txt'), { encoding: 'utf8' }),
            salt,
        )
    ).wait()) as ContractTransactionReceipt;

    const deployerInterface = Deployer__factory.createInterface();

    const { topicHash } = deployerInterface.getEvent('Deployed');

    const deployLog = deployerInterface.parseLog(receipt.logs.find((log) => log.topics[0] === topicHash) as Log);

    return Deployer__factory.connect(deployLog?.args.addr as string, singleton.runner as Signer);
}

async function deployDeterministic(deployer: Deployer, bytecodes: string): Promise<string> {
    const receipt = (await (await deployer.deploy(bytecodes, salt)).wait()) as ContractTransactionReceipt;

    const { topicHash } = deployer.interface.getEvent('Deployed');

    const deployLog = deployer.interface.parseLog(receipt.logs.find((log) => log.topics[0] === topicHash) as Log);

    return deployLog?.args.addr as string;
}

async function deployHasher(deployer: Deployer): Promise<string> {
    // Return existing contract if it has
    if ((await (deployer.runner?.provider as HardhatEthersProvider).getCode(addresses.hasher)) !== '0x') {
        return addresses.hasher;
    }

    console.log('Deploying Tornado Hasher');

    return await deployDeterministic(
        deployer,
        await readFile(path.join(__dirname, './bytecodes/hasher.txt'), { encoding: 'utf8' }),
    );
}

async function deployVerifier(deployer: Deployer): Promise<Verifier> {
    // Return existing contract if it has
    if ((await (deployer.runner?.provider as HardhatEthersProvider).getCode(addresses.verifier)) !== '0x') {
        return Verifier__factory.connect(addresses.verifier, deployer.runner);
    }

    console.log('Deploying Tornado Verifier');

    return Verifier__factory.connect(
        await deployDeterministic(
            deployer,
            await readFile(path.join(__dirname, './bytecodes/verifier.txt'), { encoding: 'utf8' }),
        ),
        deployer.runner,
    );
}

async function deployProxyLight(deployer: Deployer): Promise<TornadoProxyLight> {
    // Return existing contract if it has
    if ((await (deployer.runner?.provider as HardhatEthersProvider).getCode(addresses.proxyLight)) !== '0x') {
        return TornadoProxyLight__factory.connect(addresses.proxyLight, deployer.runner);
    }

    console.log('Deploying Tornado Proxy Light');

    return TornadoProxyLight__factory.connect(
        await deployDeterministic(
            deployer,
            await readFile(path.join(__dirname, './bytecodes/proxyLight.txt'), { encoding: 'utf8' }),
        ),
        deployer.runner,
    );
}

async function deployEchoer(deployer: Deployer): Promise<Echoer> {
    // Return existing contract if it has
    if ((await (deployer.runner?.provider as HardhatEthersProvider).getCode(addresses.echoer)) !== '0x') {
        return Echoer__factory.connect(addresses.echoer, deployer.runner);
    }

    console.log('Deploying Tornado Echoer');

    return Echoer__factory.connect(
        await deployDeterministic(
            deployer,
            await readFile(path.join(__dirname, './bytecodes/echoer.txt'), { encoding: 'utf8' }),
        ),
        deployer.runner,
    );
}

async function deployEthInstance(
    deployer: Deployer,
    verifer: Verifier,
    hasher: string,
    denomination: bigint,
): Promise<ETHTornado> {
    // Get encoded data including contract constructors
    // Should deploy contract code identical to https://bscscan.com/address/0x84443CFd09A48AF6eF360C6976C5392aC5023a1F#code
    // and identical address if denomination is same
    const { data } = await new ETHTornado__factory(
        ETHTornado__factory.abi,
        await readFile(path.join(__dirname, './bytecodes/ethInstance.txt'), { encoding: 'utf8' }),
        deployer.runner as Signer,
    ).getDeployTransaction(verifer.target, hasher, denomination, merkleHeight);

    console.log(`Deploying ${denomination} ETH Tornado`);

    return ETHTornado__factory.connect(await deployDeterministic(deployer, data), deployer.runner);
}

async function deployErcInstance(
    deployer: Deployer,
    verifer: Verifier,
    hasher: string,
    denomination: bigint,
    token: string,
    proxyLight: TornadoProxyLight,
): Promise<ApprovalTornado> {
    // Get encoded data including contract constructors
    const { data } = await new ApprovalTornado__factory(
        ApprovalTornado__factory.abi,
        await readFile(path.join(__dirname, './bytecodes/ercInstance.txt'), { encoding: 'utf8' }),
        deployer.runner as Signer,
    ).getDeployTransaction(verifer.target, hasher, denomination, merkleHeight, token, proxyLight.target);

    console.log(`Deploying ${denomination} ${token} ERC Tornado`);

    return ApprovalTornado__factory.connect(await deployDeterministic(deployer, data), deployer.runner);
}

async function deploy() {
    const [owner] = await getSigners();

    console.log(`Connected with ${(await owner.provider.getNetwork()).chainId}`);

    const singleton = await deploySingletonFactory(owner);

    const deployer = await deployDeployer(singleton);

    const hasher = await deployHasher(deployer);

    const verifier = await deployVerifier(deployer);

    const proxyLight = await deployProxyLight(deployer);

    const echoer = await deployEchoer(deployer);

    const pools = [...(await getPools()), ...(await getDaiPools(owner))];

    const instances = [] as {
        instanceAddress: string;
        amount: string;
        tokenAddress?: string;
        symbol: string;
        decimals: number;
    }[];

    for (const pool of pools) {
        if (!pool.tokenAddress) {
            const { target } = await deployEthInstance(deployer, verifier, hasher, parseEther(pool.amount));

            instances.push({
                instanceAddress: target as string,
                amount: pool.amount,
                symbol: pool.symbol,
                decimals: 18,
            });
        } else {
            const token = ERC20__factory.connect(pool.tokenAddress, owner);

            const [decimals, symbol] = await Promise.all([token.decimals(), token.symbol()]);

            const { target } = await deployErcInstance(
                deployer,
                verifier,
                hasher,
                parseUnits(pool.amount, Number(decimals)),
                pool.tokenAddress,
                proxyLight,
            );

            instances.push({
                instanceAddress: target as string,
                amount: pool.amount,
                tokenAddress: pool.tokenAddress,
                symbol: pool.symbol || symbol,
                decimals: Number(decimals),
            });
        }
    }

    const deployedBlock = await owner.provider.getBlockNumber();

    const config = {
        deployedBlock,
        routerContract: proxyLight.target,
        echoContract: echoer.target,
        tokens: instances.reduce(
            (acc, curr) => {
                if (!acc[curr.symbol.toLowerCase()]) {
                    acc[curr.symbol.toLowerCase()] = {
                        instanceAddress: {},
                        instanceApproval: curr.tokenAddress ? true : undefined,
                        tokenAddress: curr.tokenAddress,
                        symbol: curr.symbol,
                        decimals: curr.decimals,
                    };
                }

                if (!acc[curr.symbol.toLowerCase()].instanceAddress[curr.amount]) {
                    acc[curr.symbol.toLowerCase()].instanceAddress[curr.amount] = curr.instanceAddress;
                }

                return acc;
            },
            {} as Record<
                string,
                {
                    instanceAddress: Record<string, string>;
                    instanceApproval?: boolean;
                    tokenAddress?: string;
                    symbol: string;
                    decimals: number;
                }
            >,
        ),
    };

    console.log(JSON.stringify(config, null, 2));
}
deploy();
