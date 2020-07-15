import {ILocationRepo} from "../repositories/location/location.repo";
import {CityLocation} from "../models/location";

export class LocationService {

    private locationRepo: ILocationRepo;

    constructor(locationRepo:ILocationRepo) {
        this.locationRepo = locationRepo
    }

    async getLocation(): Promise<CityLocation>{
        return await this.locationRepo.getLocation();
    }
}
