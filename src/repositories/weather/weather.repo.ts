import { CurrentWeather } from '../../models/currentWeather';
export interface IWeatherRepo {
    getWeather(city: string, isForecast?: boolean): Promise<CurrentWeather>;
}
