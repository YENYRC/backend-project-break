const request = require('supertest');
const app = require('../index');

describe('Product Controller', () => {
    test('should get products', async () => {
        const response = await request(app).get('/products');
        expect(response.status).toBe(200);
    });
});