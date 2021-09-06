import { loadConfig } from './lib/config/config_loader.ts';

const config = await loadConfig('./config.yml');

console.log(config);