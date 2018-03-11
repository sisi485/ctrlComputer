const Koa = require("koa");
const Router  = require("koa-router");
const { sleep, shutdown } = requrie("./shutdown.js");

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


app.listen(5050);
