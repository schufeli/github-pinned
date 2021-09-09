import { Application as _application } from 'https://deno.land/x/oak/mod.ts';
import { loadConfig } from './lib/config.ts';
import { fetch } from './lib/fetch.ts';

const config = await loadConfig('./config.yml');
const app = new _application();
const port = 8080

app.use(async (res) => {
    res.response.body = JSON.stringify(await fetch(config));
})

app.addEventListener('listen', () => {
    console.info(`Server up and running..`);
});

await app.listen({ port });