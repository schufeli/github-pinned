import axiod from 'https://deno.land/x/axiod/mod.ts';
import { Config, loadConfig } from './lib/config.ts';

const url = 'https://api.github.com/graphql';
const config = await loadConfig('./config.yml');
const auth = { Authorization: 'bearer ' + config.token };
const query = `{user(login: "${config.username}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                    nodes { ... on Repository {
                        name
                        description
                        url
                        forkCount
                        stargazerCount
                        primaryLanguage {
                        name
                        color
                        }
                    }
                }}}}`



axiod.post(url, { query: query }, { headers: auth })
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error(error);
    });