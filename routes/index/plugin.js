const {
    getIndexOpts,
    postIndexOpts
} = require("./schema");

const indexRoutes = (fastify, options, done) => {
    try {
        fastify.get("/", getIndexOpts);
        fastify.post("/", postIndexOpts);

        done();
    } catch (err) {
        throw err;
    }
};

module.exports = indexRoutes;