import * as Router from "koa-router";
import {LocationService} from "../../services/location.service";
import {IpApiLocationRepo} from "../../repositories/location/ipapi.location.repo";

const router = new Router();
const service = new LocationService(new IpApiLocationRepo());
const locationRouter = router

    // GET Location
    .get("/", async ctx => {
        try {
            // Response
            const location = await service.getLocation();
            if (location) {
                ctx.status = 200;
                ctx.body = {
                    status: "success",
                    data: location
                };
            } else {
                ctx.status = 400;
                ctx.body = {
                    status: "error",
                    message: "Can't reach location."
                };
            }

        } catch (err) {
            ctx.throw(500,  err.message || "Sorry, an error has occurred.");
        }
    })

export default locationRouter;
