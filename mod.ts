import { loadConfig } from './lib/config.ts';
import { fetch } from './lib/fetch.ts';

const config = await loadConfig('./config.yml');

const repos = await fetch(config);
console.log(repos);