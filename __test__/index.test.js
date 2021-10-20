import app from '../app.js';

import { fake } from "../libs/test/fakeHTTP.js";

const { GET, POST } = fake(app);

beforeAll(() => {});

afterAll( async () => {
    await app.close();
});

test('GET /index', async () => {
    const response = await GET('/index', {});
    expect(response.statusCode).toBe(200);
});

test('POST /index', async () => {
    const body = {
        name: "Alberto"
    }
    const response = await POST('/index', {body});
    expect(response.statusCode).toBe(200);
});