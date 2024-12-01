import fs from 'fs';
import path from 'path';
import hardhat, { ethers } from 'hardhat';
import type { SignerWithAddress } from '@nomicfoundation/hardhat-ethers/signers';
import {
    type ERC20Mock,
    type InstanceRegistry,
    ERC20Mock__factory,
    TORN__factory,
    Governance__factory,
    ETHTornado__factory,
    ERC20Tornado__factory,
    Vesting__factory,
    TestnetGovernanceProxy__factory,
    TestnetAdminProxy__factory,
    GasCompensationVault__factory,
    InstanceRegistry__factory,
    GovernanceProposalStateUpgrade__factory,
    RelayerRegistry__factory,
    TornadoStakingRewards__factory,
    TornadoRouter__factory,
    TornadoVault__factory,
    Echoer__factory,
    TestnetFeeManager__factory,
    Aggregator__factory,
} from '../typechain-types';
const { ZeroAddress, parseEther, deployContract } = ethers;

type contracts = {
    [key in string]: {
        DAI: string;
        ENS: string;
    };
};

const contracts: contracts = {
    hardhat: {
        DAI: '',
        ENS: '',
    },
    develop: {
        DAI: '',
        ENS: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
    sepolia: {
        // https://staging.aave.com/faucet/
        DAI: '0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357',
        ENS: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
    },
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const toFixedHex = (number: number, length = 32) => {
    return (
        '0x' +
        BigInt(number)
            .toString(16)
            .padStart(length * 2, '0')
    );
};

async function deployHasher(owner: SignerWithAddress) {
    const bytecode = fs.readFileSync(path.join(__dirname, './bytecodes/hasher.txt'), { encoding: 'utf8' });

    const txReceipt = await owner.sendTransaction({ data: bytecode }).then((t) => t.wait());

    return txReceipt?.contractAddress as unknown as string;
}

async function deployInstances() {
    const [owner] = await ethers.getSigners();
    const { DAI: daiAddress } = contracts[hardhat.network.name];

    let DAI: ERC20Mock;

    if (!daiAddress) {
        DAI = await new ERC20Mock__factory(owner).deploy();
        await DAI.waitForDeployment();

        await DAI.mint(owner.address, parseEther('100000000')).then((t) => t.wait());
    } else {
        DAI = ERC20Mock__factory.connect(daiAddress, owner);
    }

    const Hasher = await deployHasher(owner);

    const Verifier = await deployContract('Verifier');
    await Verifier.waitForDeployment();

    const ETHTornadoFactory = new ETHTornado__factory(owner);

    const ETHTornado1 = await ETHTornadoFactory.deploy(Verifier.target, Hasher, parseEther('0.1'), 20);
    await ETHTornado1.waitForDeployment();
    const ETHTornado2 = await ETHTornadoFactory.deploy(Verifier.target, Hasher, parseEther('1'), 20);
    await ETHTornado2.waitForDeployment();
    const ETHTornado3 = await ETHTornadoFactory.deploy(Verifier.target, Hasher, parseEther('10'), 20);
    await ETHTornado3.waitForDeployment();
    const ETHTornado4 = await ETHTornadoFactory.deploy(Verifier.target, Hasher, parseEther('100'), 20);
    await ETHTornado4.waitForDeployment();

    // Check if deposit works
    // console.log(await ETHTornado1.deposit(toFixedHex(42), { value: parseEther('0.1') }).then(t => t.wait()))

    const DAITornadoFactory = new ERC20Tornado__factory(owner);

    const DAITornado1 = await DAITornadoFactory.deploy(Verifier.target, Hasher, parseEther('100'), 20, DAI.target);
    await DAITornado1.waitForDeployment();
    const DAITornado2 = await DAITornadoFactory.deploy(Verifier.target, Hasher, parseEther('1000'), 20, DAI.target);
    await DAITornado2.waitForDeployment();
    const DAITornado3 = await DAITornadoFactory.deploy(Verifier.target, Hasher, parseEther('10000'), 20, DAI.target);
    await DAITornado3.waitForDeployment();
    const DAITornado4 = await DAITornadoFactory.deploy(Verifier.target, Hasher, parseEther('100000'), 20, DAI.target);
    await DAITornado4.waitForDeployment();

    const ethInstance = {
        isERC20: false,
        token: ZeroAddress,
        state: 1,
        uniswapPoolSwappingFee: 0,
        protocolFeePercentage: 0,
    };

    const daiInstance = {
        isERC20: true,
        token: DAI.target,
        state: 1,
        uniswapPoolSwappingFee: 3000,
        protocolFeePercentage: 0,
    };

    const instances = [
        {
            addr: ETHTornado1.target,
            instance: ethInstance,
        },
        {
            addr: ETHTornado2.target,
            instance: {
                ...ethInstance,
                protocolFeePercentage: 30,
            },
        },
        {
            addr: ETHTornado3.target,
            instance: {
                ...ethInstance,
                protocolFeePercentage: 30,
            },
        },
        {
            addr: ETHTornado4.target,
            instance: {
                ...ethInstance,
                protocolFeePercentage: 30,
            },
        },
        {
            addr: DAITornado1.target,
            instance: daiInstance,
        },
        {
            addr: DAITornado2.target,
            instance: daiInstance,
        },
        {
            addr: DAITornado3.target,
            instance: {
                ...daiInstance,
                protocolFeePercentage: 30,
            },
        },
        {
            addr: DAITornado4.target,
            instance: {
                ...daiInstance,
                protocolFeePercentage: 30,
            },
        },
    ];

    console.log({
        DAI: DAI.target,
        Hasher: Hasher,
        Verifier: Verifier.target,
        instances,
    });

    return {
        DAI,
        Hasher,
        Verifier,
        instances,
    };
}

async function deployGovernance(instances: InstanceRegistry.TornadoStruct[]): Promise<void> {
    const [owner] = await ethers.getSigners();
    const { ENS: ensAddress } = contracts[hardhat.network.name];

    // Deploy V1 logic contact first
    const GovernanceV1 = await new Governance__factory(owner).deploy();
    await GovernanceV1.waitForDeployment();

    // This is what almost every contract would need for constructor args
    const GovernanceProxy = await new TestnetGovernanceProxy__factory(owner).deploy(GovernanceV1.target, '0x');
    await GovernanceProxy.waitForDeployment();

    const TORN = await new TORN__factory(owner).deploy(GovernanceProxy.target, 0, [
        {
            to: owner.address,
            amount: parseEther('10000000'),
        },
    ]);
    await TORN.waitForDeployment();

    // Initialize governance v1 with TORN address
    await Governance__factory.connect(GovernanceProxy.target as string, owner)
        .initialize(TORN.target)
        .then((t) => t.wait());

    // Create governance vesting contract
    const GovernanceVesting = await new Vesting__factory(owner).deploy(TORN.target, GovernanceProxy.target, 0, 3, 60);
    await GovernanceVesting.waitForDeployment();

    await TORN.transfer(GovernanceVesting.target, parseEther('2500000')).then((t) => t.wait());

    // Deploy other governance contracts
    const ProxyFactory = new TestnetAdminProxy__factory(owner);

    // Deploy gas compensation vault
    const GasCompensationVault = await new GasCompensationVault__factory(owner).deploy(GovernanceProxy.target);
    await GasCompensationVault.waitForDeployment();

    // Deploy user vault
    const TornadoVault = await new TornadoVault__factory(owner).deploy(TORN.target, GovernanceProxy.target);
    await TornadoVault.waitForDeployment();

    // Deploy instance registry
    const InstanceRegistryImpl = await new InstanceRegistry__factory(owner).deploy(GovernanceProxy.target);
    await InstanceRegistryImpl.waitForDeployment();

    const InstanceRegistryProxy = await ProxyFactory.deploy(InstanceRegistryImpl.target, GovernanceProxy.target, '0x');
    await InstanceRegistryProxy.waitForDeployment();

    // Deploy FeeManager
    const FeeManagerImpl = await new TestnetFeeManager__factory(owner).deploy(
        TORN.target,
        GovernanceProxy.target,
        InstanceRegistryProxy.target,
    );
    await FeeManagerImpl.waitForDeployment();

    const FeeManagerProxy = await ProxyFactory.deploy(FeeManagerImpl.target, GovernanceProxy.target, '0x');
    await FeeManagerProxy.waitForDeployment();

    // Deploy RelayerRegistry & TornadoStakingRewards
    const RelayerRegistryMock = await new RelayerRegistry__factory(owner).deploy(
        TORN.target,
        GovernanceProxy.target,
        ensAddress || ZeroAddress,
        ZeroAddress, // Use this as zero address as we don't know the proxy address yet
        FeeManagerProxy.target,
    );
    await RelayerRegistryMock.waitForDeployment();

    const RelayerRegistryProxy = await ProxyFactory.deploy(RelayerRegistryMock.target, GovernanceProxy.target, '0x');
    await RelayerRegistryProxy.waitForDeployment();

    const TornadoStakingRewardsImpl = await new TornadoStakingRewards__factory(owner).deploy(
        GovernanceProxy.target,
        TORN.target,
        RelayerRegistryProxy.target,
    );
    await TornadoStakingRewardsImpl.waitForDeployment();

    const TornadoStakingRewardsProxy = await ProxyFactory.deploy(
        TornadoStakingRewardsImpl.target,
        GovernanceProxy.target,
        '0x',
    );
    await TornadoStakingRewardsProxy.waitForDeployment();

    const RelayerRegistryImpl = await new RelayerRegistry__factory(owner).deploy(
        TORN.target,
        GovernanceProxy.target,
        ensAddress || ZeroAddress,
        TornadoStakingRewardsProxy.target,
        FeeManagerProxy.target,
    );
    await RelayerRegistryImpl.waitForDeployment();

    await TestnetAdminProxy__factory.connect(RelayerRegistryProxy.target as string, owner)
        .upgradeToOwner(RelayerRegistryImpl.target)
        .then((t) => t.wait());

    // Deploy Echoer
    const Echoer = await new Echoer__factory(owner).deploy();
    await Echoer.waitForDeployment();

    // Deploy TornadoRouter
    const TornadoRouter = await new TornadoRouter__factory(owner).deploy(
        GovernanceProxy.target,
        InstanceRegistryProxy.target,
        RelayerRegistryProxy.target,
    );
    await TornadoRouter.waitForDeployment();

    // Initialize InstanceRegistry
    await InstanceRegistry__factory.connect(InstanceRegistryProxy.target as string, owner)
        .initialize(instances, TornadoRouter.target)
        .then((t) => t.wait());

    // Initialize RelayerRegistry
    await RelayerRegistry__factory.connect(RelayerRegistryProxy.target as string, owner)
        .initialize(TornadoRouter.target)
        .then((t) => t.wait());

    // Deploy Aggregator
    const Aggregator = await new Aggregator__factory(owner).deploy(
        ensAddress || ZeroAddress,
        RelayerRegistryProxy.target,
    );
    await Aggregator.waitForDeployment();

    // Upgrade Governance
    const GovernanceV5 = await new GovernanceProposalStateUpgrade__factory(owner).deploy(
        TornadoStakingRewardsProxy.target,
        GasCompensationVault.target,
        TornadoVault.target,
    );
    await GovernanceV5.waitForDeployment();

    await TestnetGovernanceProxy__factory.connect(GovernanceProxy.target as string, owner)
        .upgradeToOwner(GovernanceV5.target)
        .then((t) => t.wait());

    // Finalize contracts
    await owner.sendTransaction({ to: GasCompensationVault.target, value: parseEther('0.1') }).then((t) => t.wait());

    console.log({
        TORN: TORN.target,
        GovernanceProxy: GovernanceProxy.target,
        GovernanceV1: GovernanceV1.target,
        GovernanceV5: GovernanceV5.target,
        GovernanceVesting: GovernanceVesting.target,
        GasCompensationVault: GasCompensationVault.target,
        TornadoVault: TornadoVault.target,
        InstanceRegistryProxy: InstanceRegistryProxy.target,
        InstanceRegistryImpl: InstanceRegistryImpl.target,
        FeeManagerProxy: FeeManagerProxy.target,
        FeeManagerImpl: FeeManagerImpl.target,
        RelayerRegistryProxy: RelayerRegistryProxy.target,
        RelayerRegistryImpl: RelayerRegistryImpl.target,
        RelayerRegistryMock: RelayerRegistryMock.target,
        TornadoStakingRewardsProxy: TornadoStakingRewardsProxy.target,
        TornadoStakingRewardsImpl: TornadoStakingRewardsImpl.target,
        TornadoRouter: TornadoRouter.target,
        Aggregator: Aggregator.target,
        Echoer: Echoer.target,
    });
}

async function deploy() {
    const { instances } = await deployInstances();
    await deployGovernance(instances);
}

deploy();
