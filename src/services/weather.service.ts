import { IWeatherRepo } from '../repositories/weather/weather.repo';
import { LocationService } from './location.service';
import { IpApiLocationRepo } from '../repositories/location/ipapi.location.repo';
import { CurrentWeather } from '../models/currentWeather';

export class WeatherService {
    private weatherRepo: IWeatherRepo;

    constructor(weatherRepo: IWeatherRepo) {
        this.weatherRepo = weatherRepo;
    }

    async getWeather(city?: string): Promise<CurrentWeather> {
        const locationService = new LocationService(new IpApiLocationRepo());
        let location;
        if (!city) {
            location = await locationService.getLocation();
        } else {
            location = city;
        }

        return await this.weatherRepo.getWeather(location);
    }
}
