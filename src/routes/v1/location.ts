import * as Router from "koa-router";

const router = new Router();
const locationRouter = router

    // GET Location
    .get("/", async ctx => {
        try {
            // Response
            ctx.body = 'GET location'

        } catch (err) {
            ctx.throw(500,  err.message || "Sorry, an error has occurred.");
        }
    })

export default locationRouter;
