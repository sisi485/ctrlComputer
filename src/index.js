//192.168.178.84
const Koa = require("koa");
const Router  = require("koa-router");
const { sleep, shutdown } = require("./utils/shutdown.js");

const app = new Koa();
const router= new Router();

router.get('/shutdown', async (ctx, next) => {

    shutdown();
    next();
});

router.get('/sleep', async (ctx, next) => {

    sleep();
    next();
});

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(5050);
