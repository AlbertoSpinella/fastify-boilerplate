import {
    getIndexOpts,
    postIndexOpts
} from "./schema.js";

export const indexPlugin = (fastify, options, done) => {
    fastify.get("/", getIndexOpts);
    fastify.post("/", postIndexOpts);

    done();
};