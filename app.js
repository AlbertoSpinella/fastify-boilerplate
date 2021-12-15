import Fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import { indexPlugin } from "./routes/index/plugin.js";
import { calculatorPlugin } from "./routes/calculator/plugin.js";

const app = Fastify();

app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
        info: { title: "fastify-api" }
    },
});

app.register(indexPlugin, {
    prefix: "/index"
});

app.register(calculatorPlugin, {
    prefix: "/calculator"
});

export default app;