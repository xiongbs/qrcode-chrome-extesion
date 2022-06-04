// import adapter from '@sveltejs/adapter-auto';

import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import {extensionAdapter} from './csp.adpter.js';



/** @type {import('@sveltejs/kit').Config} */

let {name, adapt} = adapter();
async function newAdapter(builder) {
	await adapt(builder);
	await extensionAdapter().adapt(builder);
}
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: {name, adapt: newAdapter},
		csp: {
			mode: "auto",
			
		},
		prerender: {
			default: true
		},
		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		appDir: 'app'
	}
};

export default config;
