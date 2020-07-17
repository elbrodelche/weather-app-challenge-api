import * as request from 'supertest';
import app from '../app';

test('Serves /location endpoint', async () => {
    const response = await request(app.callback()).get('/v1/forecast');
    expect(response.status).toBe(200);
    return false;
});
