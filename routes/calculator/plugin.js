import {
    plusCalculatorSchema,
    minusCalculatorSchema
} from "./schema.js";

export const calculatorPlugin = (fastify, options, done) => {
    fastify.post("/plus", plusCalculatorSchema);
    fastify.post("/minus", minusCalculatorSchema);

    done();
};