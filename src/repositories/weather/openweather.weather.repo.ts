import { IWeatherRepo } from './weather.repo';
import fetch from 'node-fetch';
import * as dotenv from 'dotenv';
import * as process from 'process';
import { CurrentWeather } from '../../models/currentWeather';

dotenv.config();

export class OpenWeatherWeatherRepo implements IWeatherRepo {
    private readonly appUrl: string;
    private readonly appId: string;

    constructor() {
        this.appUrl = process.env.OPEN_WEATHER_URL;
        this.appId = process.env.OPEN_WEATHER_API;
    }

    async getWeather(city: string, isForecast?: boolean): Promise<CurrentWeather> {
        const url = isForecast
            ? `${this.appUrl}forecast?q=${city}&appid=${this.appId}`
            : `${this.appUrl}weather?q=${city}&appid=${this.appId}`;
        const response = await fetch(url);
        return await response.json();
    }
}
