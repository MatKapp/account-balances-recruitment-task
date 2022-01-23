const port = process.env.PORT | 8000;
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('Account.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(port);