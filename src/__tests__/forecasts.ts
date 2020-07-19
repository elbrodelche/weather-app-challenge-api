import * as request from 'supertest';
import app from '../app';

test('should respond 200', async () => {
    const response = await request(app.callback()).get('/v1/forecast');
    expect(response.status).toBe(200);
    return false;
});

test('should return and object with current weather containing city and weather', async () => {
    const response = await request(app.callback()).get('/v1/forecast');
    expect(response.body).toEqual(
        expect.objectContaining({
            city: expect.any(String),
            weather: expect.any(Object),
        }),
    );
});

test('should return and object with specific city weather (mexico) containing city and weather', async () => {
    const response = await request(app.callback()).get('/v1/forecast/mexico');
    expect(response.body).toEqual(
        expect.objectContaining({
            city: expect.any(String),
            weather: expect.any(Object),
        }),
    );
});
