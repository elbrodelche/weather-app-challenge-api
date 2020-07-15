import { ILocationRepo } from '../repositories/location/location.repo';
import { CityLocation } from '../models/location';

export class LocationService {
    private locationRepo: ILocationRepo;

    constructor(locationRepo: ILocationRepo) {
        this.locationRepo = locationRepo;
    }
    /**
     * @api {get} /location
     * @apiVersion 1.0.0
     * @apiGroup Location
     * @apiName Get Location
     * @apiSuccess {Object[]} Contains the response of the backend with 2 parameters.
     * @apiSuccess {String} status Respnse status.
     * @apiSuccess {String} data Response body.
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": "success",
     *       "data": {"ip":"181.44.60.35","city":"Buenos Aires","region":"Buenos Aires F.D.","region_code":"C","country":"AR","country_code":"AR","country_code_iso3":"ARG","country_capital":"Buenos Aires","country_tld":".ar","country_name":"Argentina","continent_code":"SA","in_eu":false,"postal":"1871","latitude":-34.6021,"longitude":-58.3845,"timezone":"America/Argentina/Buenos_Aires","utc_offset":"-0300","country_calling_code":"+54","currency":"ARS","currency_name":"Peso","languages":"es-AR,en,it,de,fr,gn","country_area":2766890,"country_population":41343201,"asn":"AS27747","org":"Telecentro S.A."}
     *     }
     * @apiError Error Can't reach location.
     * @apiExample {curl} Example usage:
     * curl -i http://localhost:3000/v1/location
     * @apiDescription All users can see their location
     */
    async getLocation(): Promise<CityLocation> {
        return await this.locationRepo.getLocation();
    }
}
