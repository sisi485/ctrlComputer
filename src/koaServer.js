//192.168.178.84
const Koa = require("koa");
const Router = require("koa-router");
const serve = require('koa-static');
const shutdown = require('./shutdown');

const app = new Koa();
const router = new Router();

router.get('/sleep', (ctx, next) => {

    shutdown.sleep();
    next();

});

app.use(router.routes());
app.use(serve("../static/"));

app.listen(5050);
