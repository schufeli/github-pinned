import axiod from 'https://deno.land/x/axiod/mod.ts';
import { Config } from './config.ts';
import { Response } from './response.ts';
import { createQuery } from './query.ts';

export async function fetch(config: Config) {
    return await axiod.post('https://api.github.com/graphql', { query: createQuery(config.username) }, { headers: { Authorization: 'bearer ' + config.token } })
    .then(response => {
        return (response.data as Response).data.user.pinnedItems.nodes;
    })
    .catch(error => {
        console.error(error);
    });
}