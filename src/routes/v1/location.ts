import * as Router from 'koa-router';
import { LocationService } from '../../services/location.service';
import { IpApiLocationRepo } from '../../repositories/location/ipapi.location.repo';

const router = new Router();
const service = new LocationService(new IpApiLocationRepo());
const locationRouter = router

    /**
     * @api {get} /location Get the server location data
     * @apiVersion 1.0.0
     * @apiName GetLocation
     * @apiGroup Server
     *
     * @apiDescription Retrieves all location data related to server based on Ip Api sercice.
     *
     *
     * @apiExample Example usage:
     * curl -i http://localhost/v1/location
     *
     * @apiSuccess {String}   city          City name
     *
     * @apiError  BadRequest Can't reach location.
     *
     * @apiErrorExample Response (example):
     *     HTTP/1.1 400  Bad Request
     *     Can't reach location
     */
    .get('/', async (ctx) => {
        // Get data
        const location = await service.getLocation();

        // Error handling
        ctx.assert(location, 400);

        // Response
        ctx.status = 200;
        ctx.body = {
            city: location,
        };
    });

export default locationRouter;
