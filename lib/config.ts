import { parse } from 'https://deno.land/std@0.82.0/encoding/yaml.ts';

export interface Config {
    username: string;
    token: string;
}

export async function loadConfig(file: string): Promise<Config> {
    return (parse(await Deno.readTextFile(file)) as Config);
}
