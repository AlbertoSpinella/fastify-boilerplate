import Fastify from "fastify";
import fastifySwagger from "fastify-swagger";
import { indexPlugin } from "./routes/index/plugin.js";
import { calculatorPlugin } from "./routes/calculator/plugin.js";

const app = Fastify();

app.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    openapi: {
        info: { title: "fastify-api", version: "0.1.0" },
        tags: [
            { name: "CALCULATOR", description: "Calculator API" },
            { name: "INDEX", description: "Index API" }
        ]
    },
});

app.register(indexPlugin, { prefix: "/index" });

app.register(calculatorPlugin, { prefix: "/calculator" });

export default app;