import * as Router from "koa-router";

const router = new Router();
const forecastRouter = router

    // GET forecast
    .get("/", async ctx => {
        try {
            // Response
            ctx.body = 'GET forecast'

        } catch (err) {
            ctx.throw(500,  err.message || "Sorry, an error has occurred.");
        }
    })

export default forecastRouter;
