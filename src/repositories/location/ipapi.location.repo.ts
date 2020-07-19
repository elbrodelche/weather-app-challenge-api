import { ILocationRepo } from './location.repo';
import { CityLocation } from '../../models/location';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as ipapi from 'ipapi.co';

export class IpApiLocationRepo implements ILocationRepo {
    async getLocation(): Promise<CityLocation> {
        return new Promise((resolve) => {
            ipapi.location((res: CityLocation | PromiseLike<CityLocation>) => {
                resolve(res);
            });
        });
    }
}
