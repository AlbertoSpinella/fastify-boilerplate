const {
    plusCalculatorOpts,
    minusCalculatorOpts
} = require("./schema");

const calculatorRoutes = (fastify, options, done) => {
    try {
        fastify.post("/plus", plusCalculatorOpts);
        fastify.post("/minus", minusCalculatorOpts);

        done();
    } catch (err) {
        throw err;
    }
};

module.exports = calculatorRoutes;