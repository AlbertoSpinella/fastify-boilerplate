import server  from "fastify";
const fastify = server();
import fastifySwagger from "fastify-swagger";
import { indexPlugin } from "./routes/index/plugin.js";
import { calculatorPlugin } from "./routes/calculator/plugin.js";

fastify.register(fastifySwagger, {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
        info: { title: "checksig-api" }
    },
});

fastify.register(indexPlugin, {
    prefix: "/index"
});

fastify.register(calculatorPlugin, {
    prefix: "/calculator"
});


const PORT = 3000;

const start = async () => {
    try {
        console.log(`Server starting...`);
        console.log(`Swagger can be found at http://localhost:${PORT}/docs`)
        await fastify.listen(PORT);
    } catch (error) {
        fastify.log.error(error);
        process.exit(1);      
    }
};

start();