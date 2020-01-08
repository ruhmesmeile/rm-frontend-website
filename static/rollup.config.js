import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import builtins from 'rollup-plugin-node-builtins';
import replace from '@rollup/plugin-replace';
import json from '@rollup/plugin-json';
import globals from 'rollup-plugin-node-globals';

const production = false;
// const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'admin/cms.js',
	output: {
		file: 'admin/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true,
    	globals: {
        	'netlify-cms': 'CMS',
        	'create-react-class': 'createClass',
    	},
	},
	plugins: [
		replace({
			values: {
				'process.env.NODE_ENV': '"development"',
			},
			delimiters: ['', ''],
		}),
		json(),
		resolve({
			preferBuiltins: true
		}),
        commonjs({
            namedExports: {
                'uuid': ['v1'],
				'react': ['createElement'],
            }
        }),
		builtins({crypto: false}),
		globals(),
		production && terser()
	],
};
