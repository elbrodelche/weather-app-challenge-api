import * as request from 'supertest';
import app from '../app';

test('should respond 200', async () => {
    const response = await request(app.callback()).get('/v1/current');
    expect(response.status).toBe(200);
    return false;
});
