/* eslint-disable strict*/

'use strict';

const httpServer = require('http-server');

const server = httpServer.createServer();
server.listen(8080);
process.send('listening');
