import { parse } from 'https://deno.land/std@0.82.0/encoding/yaml.ts';
import type { Config } from './config.ts';

export async function loadConfig(file: string): Promise<Config> {
    return (parse(await Deno.readTextFile(file)) as Config);
}
