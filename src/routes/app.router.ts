import * as Router from "koa-router";
import locationRouter from "./v1/location";
import currentRouter from "./v1/current";
import forecastRouter from "./v1/forecast";

let version = "/v1";
const router = new Router();

// @ts-ignore
const AppRouter = router
    // Index
    .get("/", async ctx => {
        ctx.body = `Up and running. Listening port: ${process.env.NODE_PORT} on ${process.env.NODE_ENV} mode.`;
    })

    // Location
    .use(`${version}/location`, locationRouter.routes(), locationRouter.allowedMethods())

    // Current
    .use(`${version}/current`, currentRouter.routes(), currentRouter.allowedMethods())

    // Forecast
    .use(`${version}/forecast`, forecastRouter.routes(), forecastRouter.allowedMethods())

export default AppRouter;
