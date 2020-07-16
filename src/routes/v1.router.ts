import * as Router from 'koa-router';
import locationRouter from './v1/location';
import currentRouter from './v1/current';
import forecastRouter from './v1/forecast';

const version = '/v1';
const router = new Router();
router.prefix(version);

const V1Router = router
    // Index
    .get('/ping', async (ctx) => {
        ctx.body = `
            Pong. 
            
            Up and running. 
            Port: ${process.env.NODE_PORT}
            Env:  ${process.env.NODE_ENV}
            `;
    })

    // Location
    .use(`/location`, locationRouter.routes(), locationRouter.allowedMethods())

    // Current
    .use(`/current`, currentRouter.routes(), currentRouter.allowedMethods())

    // Forecast
    .use(`/forecast`, forecastRouter.routes(), forecastRouter.allowedMethods());

export default V1Router;
