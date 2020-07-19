import { CityLocation } from '../../models/location';

export interface ILocationRepo {
    getLocation(city?: string): Promise<CityLocation>;
}
