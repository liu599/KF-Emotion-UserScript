'use strict';
let httpServer = require('http-server');
let server = httpServer.createServer();
server.listen(8080);
process.send('listening');
