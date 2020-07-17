import * as Router from 'koa-router';

const router = new Router();

const BaseRouter = router
    // Index
    .get('/ping', async (ctx) => {
        ctx.body = `
            Pong. 
            
            Up and running. 
            Port: ${process.env.NODE_PORT}
            Env:  ${process.env.NODE_ENV}
            `;
    });

export default BaseRouter;
