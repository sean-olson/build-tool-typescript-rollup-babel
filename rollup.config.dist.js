import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'

const extensions = ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'];

export default {
    input: './src/ts/app.ts',
    treeshake: true,
    output: {
        file: './dist/js/app.js',
        format: 'iife',
        sourcemap: false
    },
    plugins: [
      resolve({
        mainFields: ['module', 'main', 'browser'],
        extensions,
        preferBuiltins: true,
      }),
      commonjs(),
      babel({
        extensions,
        babelHelpers: 'bundled',
        include: ['src/**/*'],
      })
    ]
};