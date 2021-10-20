import app from '../app.js';

import { fake } from "../libs/test/fakeHTTP.js";

const { POST } = fake(app);

beforeAll(() => {});

afterAll( async () => {
    await app.close();
});

test('POST /calculator/plus', async () => {
    const body = {
        a: 1,
        b: 2
    }
    const response = await POST('/calculator/plus', {body});
    expect(response.statusCode).toBe(200);
});

test('POST /calculator/minus', async () => {
    const body = {
        a: 1,
        b: 2
    }
    const response = await POST('/calculator/minus', {body});
    expect(response.statusCode).toBe(200);
});