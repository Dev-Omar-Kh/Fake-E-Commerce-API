const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("api/db.json"); // تأكد أن db.json في مجلد api
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
