import supertest from 'supertest';
import createApp from '../src/utilities/app';

const app = createApp();
describe('Test page routes', () => {
    test('Test dashboard route', async () => {
        const response = await supertest(app).get('/dashboard');
        expect(response.statusCode).toBe(200);
    });
});
