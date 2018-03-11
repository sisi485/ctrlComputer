//192.168.178.84
const Koa = require("koa");
const Router = require("koa-router");
const serve = require('koa-static');
const wakeup = require('./wol.js');

const app = new Koa();
const router = new Router();

router.get('/wakeup', (ctx, next) => {

    wakeup.wakeup();
    next();

});

app.use(router.routes());
app.use(serve("../static/"));

app.listen(5050);
