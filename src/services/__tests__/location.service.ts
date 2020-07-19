import { LocationService } from '../location.service';
import { IpApiLocationRepo } from '../../repositories/location/ipapi.location.repo';

test('Location service returns city location object', async () => {
    const service = new LocationService(new IpApiLocationRepo());
    const location = await service.getLocation();
    expect(location).toEqual(expect.any(String));
});
