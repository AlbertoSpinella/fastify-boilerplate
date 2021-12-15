import app from '../app.js';
import { fake } from "../libs/test/fakeHTTP.js";
import { matchers } from 'jest-json-schema';
expect.extend(matchers);

import { Calculator } from '../routes/calculator/schema';

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
    expect(body).toMatchSchema(Calculator.body);
    const response = await POST('/calculator/plus', {body});
    const parsedBody = JSON.parse(response.body);
    expect(parsedBody).toMatchSchema(Calculator.response[200]);
    expect(response.statusCode).toBe(200);
});

test('POST /calculator/minus', async () => {
    const body = {
        a: 1,
        b: 2
    }
    expect(body).toMatchSchema(Calculator.body);
    const response = await POST('/calculator/minus', {body});
    const parsedBody = JSON.parse(response.body);
    expect(parsedBody).toMatchSchema(Calculator.response[200]);
    expect(response.statusCode).toBe(200);
});