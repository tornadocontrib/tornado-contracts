import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const external = ['ethers'];

const config = [
    {
        input: 'typechain-types/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: "cjs",
                esModule: false,
            },
        ],
        external,
        plugins: [
            esbuild({
                include: /\.[jt]sx?$/,
                minify: false,
                sourceMap: true,
                target: 'es2022',
            }),
            nodeResolve(),
            commonjs()
        ],
    },
    {
        input: 'typechain-types/index.ts',
        output: [
            {
                file: 'dist/index.mjs',
                format: "esm",
            },
        ],
        external,
        plugins: [
            esbuild({
                include: /\.[jt]sx?$/,
                minify: false,
                sourceMap: true,
                target: 'es2022',
            }),
            nodeResolve()
        ],
    }
]

export default config;