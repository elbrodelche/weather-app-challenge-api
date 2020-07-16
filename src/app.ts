import * as dotenv from 'dotenv';
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as logger from 'koa-logger';
import * as serve from 'koa-static';
import V1Router from './routes/v1.router';

// Koa instances
const app = new Koa();
const router = new Router();

// Middleware
dotenv.config();
app.use(logger());

// Router
app.use(router.routes());
app.use(V1Router.routes());
app.use(serve('./public'));

export default app;
