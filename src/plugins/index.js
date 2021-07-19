const {
    getIndexOpts,
    postIndexOpts
} = require("../schemas/index");

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