const http = require('http');
require('dotenv').config();
const debug = require('debug')('app:server');
const app = require('./app');

const port = process.env.PORT ?? 4001;

const server = http.createServer(app);

server.listen(port, () => {
    debug(`🚀 Server Listening on http://localhost:${port}`);
});
