//192.168.178.84
const Koa = require("koa");
const Router = require("koa-router");
const serve = require('koa-static');
const wol = require('./utils/wol.js');

const app = new Koa();
const router = new Router();

router.get('/wakeup', (ctx, next) => {

    console.log("wake up..");
    wol.wakeup();
    next();

});

router.use("/", serve("../static/"));

app.use(router.routes())
    .use(router.allowedMethods())
        .use(router.middleware());

app.listen(8080);
