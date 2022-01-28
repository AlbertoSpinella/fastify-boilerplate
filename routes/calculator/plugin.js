import {
    plusCalculatorOpts,
    minusCalculatorOpts
} from "./schema.js";

export const calculatorPlugin = (fastify, options, done) => {
    fastify.post("/plus", plusCalculatorOpts);
    fastify.post("/minus", minusCalculatorOpts);

    done();
};