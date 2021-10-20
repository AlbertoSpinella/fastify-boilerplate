import app from "./app.js";

const PORT = 3000;

const start = async () => {
    try {
        console.log(`Server starting...`);
        console.log(`Swagger can be found at http://localhost:${PORT}/docs`)
        await app.listen(PORT);
    } catch (error) {
        console.log(error);
        app.log.error(error);
        process.exit(1);      
    }
};

start();