const jsonServer = require("json-server");
const { Low, Memory } = require("lowdb");
const express = require("express");

const server = jsonServer.create();
const router = jsonServer.router(new Low(new Memory())); // استخدام الذاكرة بدلاً من الملفات
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

module.exports = server;
