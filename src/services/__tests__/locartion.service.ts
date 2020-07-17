import { LocationService } from '../location.service';
import { IpApiLocationRepo } from '../../repositories/location/ipapi.location.repo';

test('Location service returns city location object', async () => {
    const service = new LocationService(new IpApiLocationRepo());
    const location = await service.getLocation();

    expect(location).toEqual(
        expect.objectContaining({
            asn: expect.any(String),
            city: expect.any(String),
            continent_code: expect.any(String),
            country: expect.any(String),
            country_area: expect.any(Number),
            country_calling_code: expect.any(String),
            country_capital: expect.any(String),
            country_code: expect.any(String),
            country_code_iso3: expect.any(String),
            country_name: expect.any(String),
            country_population: expect.any(Number),
            country_tld: expect.any(String),
            currency: expect.any(String),
            currency_name: expect.any(String),
            in_eu: expect.any(Boolean),
            ip: expect.any(String),
            languages: expect.any(String),
            latitude: expect.any(Number),
            longitude: expect.any(Number),
            org: expect.any(String),
            postal: expect.any(String),
            region: expect.any(String),
            region_code: expect.any(String),
            timezone: expect.any(String),
            utc_offset: expect.any(String),
        }),
    );
});
