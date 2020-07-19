import * as Router from 'koa-router';
import { WeatherService } from '../../services/weather.service';
import { OpenWeatherWeatherRepo } from '../../repositories/weather/openweather.weather.repo';
import { LocationService } from '../../services/location.service';
import { IpApiLocationRepo } from '../../repositories/location/ipapi.location.repo';

const router = new Router();
const locationService = new LocationService(new IpApiLocationRepo());
const weatherService = new WeatherService(new OpenWeatherWeatherRepo());
const forecastRouter = router

    /**
     * @api {get} /forecast Get the server 5 days forecast data and weather
     * @apiVersion 1.0.0
     * @apiName GetForecast
     * @apiGroup Forecast
     *
     * @apiDescription Retrieves all location data related to server based on Ip Api service with the 5 day forecast weather.
     *
     *
     * @apiExample Example usage:
     * curl -i http://localhost/v1/forecast
     *
     * @apiSuccess {String}   city          City name
     * @apiSuccess {Object}   weather       An object containing 5 day weather information
     *
     * @apiError  BadRequest Can't reach location.
     *
     * @apiErrorExample Response (example):
     *     HTTP/1.1 400  Bad Request
     *     Can't reach location
     */
    .get('/', async (ctx, next) => {
        // Get data
        const location = await locationService.getLocation();
        const weather = await weatherService.getWeather(location, true);

        // Error handling
        ctx.assert(location, 400);
        ctx.assert(weather, 400);

        // Response
        ctx.status = 200;
        ctx.body = {
            city: location,
            weather,
        };
        await next();
    })

    /**
     * @api {get} /forecast Get the server 5 day forecast data and weather from specified city
     * @apiVersion 1.0.0
     * @apiName GetForecastCity
     * @apiGroup Forecast
     *
     * @apiDescription Retrieves all location data related to server based on Ip Api service with the forecast weather  from specified city.
     *
     *
     * @apiExample Example usage:
     * curl -i http://localhost/v1/forecast/:city
     *
     * @apiParam {String} optional name of the city.
     * @apiSuccess {String}   city          City name
     * @apiSuccess {Object}   weather       An object containing weather information
     *
     * @apiError  BadRequest Can't reach location.
     *
     * @apiErrorExample Response (example):
     *     HTTP/1.1 400  Bad Request
     *     Can't reach location
     */
    .get('/:city', async (ctx, next) => {
        // Get data
        const { city } = ctx.params;
        const weather = await weatherService.getWeather(city, true);
        const { name } = weather.city;

        // Error handling
        ctx.assert(weather, 400);

        // Response
        ctx.status = 200;
        ctx.body = {
            city: name,
            weather,
        };
        await next();
    });

export default forecastRouter;
