import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirName = path.resolve(fileURLToPath(import.meta.url), '../');
const config = defineConfig({
	extensions: ['.md', '.svx'],
	layout: {}
});

export default config;
