import { CurrentWeather } from '../../models/currentWeather';
export interface IWeatherRepo {
    getWeather(city: string): Promise<CurrentWeather>;
}
