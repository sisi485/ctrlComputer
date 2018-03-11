//192.168.178.84
const Koa = require("koa");
const serve = require('koa-static');

const app = new Koa();

app.use(serve("../static/"));

app.listen(5050);
