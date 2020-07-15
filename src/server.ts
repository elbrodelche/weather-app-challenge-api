import * as dotenv from 'dotenv';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as serve from 'koa-static';
import AppRouter from './routes/app.router';

// Koa instances
const app = new Koa();
const router = new Router();

// Middleware
dotenv.config();
app.use(logger());
app.use(router.routes());
app.use(AppRouter.routes());
app.use(serve('./public'));

// Listening port
app.listen(process.env.NODE_PORT);

// Success Message
console.log(`Up and running. Listening port: ${process.env.NODE_PORT} on ${process.env.NODE_ENV} mode.`);
