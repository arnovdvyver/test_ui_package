import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss'
import pkg from './package.json' assert { type: "json" };

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: pkg.main,
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: pkg.module,
                format: 'esm',
                sourcemap: true,
            }
        ],
        plugins: [
            nodeResolve(),
            peerDepsExternal(),
            commonjs(),
            scss(),
            typescript({ tsconfig: './tsconfig.json' }),
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{
            file: 'dist/index.d.ts',
            format: 'esm',
        }],
        plugins: [dts()],
    }
];

