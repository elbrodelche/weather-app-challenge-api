import * as Router from 'koa-router';

const router = new Router();
const currentRouter = router

    // GET Current
    .get('/', async (ctx) => {
        try {
            // Response
            ctx.body = 'GET current';
        } catch (err) {
            ctx.throw(500, err.message || 'Sorry, an error has occurred.');
        }
    });

export default currentRouter;
