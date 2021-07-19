const fastify = require("fastify")();

fastify.register(require("fastify-swagger"), {
    exposeRoute: true,
    routePrefix: "/docs",
    swagger: {
        info: { title: "checksig-api" }
    },
});

fastify.register(require("./src/plugins/index"), {
    prefix: "/index"
});

fastify.register(require("./src/plugins/calculator"), {
    prefix: "/calculate"
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