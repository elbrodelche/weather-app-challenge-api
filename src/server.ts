import  * as Koa from 'koa';
import * as logger from 'koa-logger'
import * as Router from 'koa-router';

// Koa instances
const app = new Koa();
const router = new  Router;

// Middleware
app.use(logger());
app.use(router.routes());

// Listening port
app.listen(3000)

// Success Message
console.log(`Up and running. Listening port: ${process.env.NODE_PORT} on ${process.env.NODE_ENV} mode.`)
