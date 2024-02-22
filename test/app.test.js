const request = require('supertest');
const app = require('../app');

describe('GET /wassup', () => {
    it('should return "Wasssup!"', async () => {
        const response = await request(app).get('/wassup');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Wasssup!');
    });
});

describe('GET /Hello', () => {
    it('should return "Helloooo"', async () => {
        const response = await request(app).get('/Hello');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Helloooo');
    });
});

describe('GET /', () => {
    it('should return "Hey"', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hey');
    });
});
