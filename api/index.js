const jsonServer = require("json-server");
const low = require("lowdb");
const Memory = require("lowdb/adapters/Memory");

const server = jsonServer.create();
const router = jsonServer.router("api/db.json"); // لا تستخدم هذا الملف، سيتم استبداله لاحقًا
const middlewares = jsonServer.defaults();

// استخدام ذاكرة مؤقتة بدلاً من ملف db.json
const adapter = new Memory();
const db = low(adapter);

// وضع بيانات افتراضية (يمكنك تعديلها)
db.defaults({ posts: [], comments: [], users: [] }).write();

server.use(middlewares);
server.use((req, res, next) => {
  req.db = db; // تخزين البيانات في الذاكرة
  next();
});

server.use(router);

module.exports = server;
