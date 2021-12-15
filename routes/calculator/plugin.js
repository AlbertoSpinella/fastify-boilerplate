import {
    plusCalculatorOpts,
    minusCalculatorOpts
} from "./schema.js";

export const calculatorPlugin = (fastify, options, done) => {
    try {
        fastify.post("/plus", plusCalculatorOpts);
        fastify.post("/minus", minusCalculatorOpts);

        done();
    } catch (err) {
        throw err;
    }
};