import * as request from 'supertest';
import app from '../app';

test('sould respond 200 to /location', async () => {
    const response = await request(app.callback()).get('/v1/location');
    expect(response.status).toBe(200);
});

test('should return and object with data', async () => {
    const response = await request(app.callback()).get('/v1/location');
    expect(response.body).toEqual(
        expect.objectContaining({
            status: 'success',
            data: expect.any(Object),
        }),
    );
});
