import { ILocationRepo } from '../repositories/location/location.repo';

export class LocationService {
    private locationRepo: ILocationRepo;

    constructor(locationRepo: ILocationRepo) {
        this.locationRepo = locationRepo;
    }

    async getLocation(): Promise<string> {
        const location = await this.locationRepo.getLocation();
        const { city } = location;
        return city;
    }
}
