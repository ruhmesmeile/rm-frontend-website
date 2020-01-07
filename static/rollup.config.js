import resolve from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import builtins from 'rollup-plugin-node-builtins';
import replace from '@rollup/plugin-replace';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
	input: 'admin/cms.js',
	output: {
		file: 'admin/bundle.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true,
    	globals: {
        	crypto: 'crypto',
        	'netlify-cms': 'CMS',
        	'create-react-class': 'createClass',
    	},
	},
	plugins: [
		replace({
			'process.env.NODE_ENV': '"development"'
		}),
		resolve(), // tells Rollup how to find date-fns in node_modules
        commonjs({
            namedExports: {
                'uuid': ['v1'],
                'react': ['createElement'],
            }
        }), // converts date-fns to ES modules
        builtins({crypto: false}),
		production && terser() // minify, but only in production
	],
};
