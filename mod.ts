import axiod from 'https://deno.land/x/axiod/mod.ts';
import { loadConfig } from './lib/config.ts';
import { Response } from './lib/response.ts';

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
        let respositories = (response.data as Response).data.user.pinnedItems.nodes;

        respositories.forEach(element => {
            console.log(element);
        });
    })
    .catch(error => {
        console.error(error);
    });