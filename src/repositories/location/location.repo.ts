import { CityLocation } from '../../models/location';

export interface ILocationRepo {
    getLocation(): Promise<CityLocation>;
}
