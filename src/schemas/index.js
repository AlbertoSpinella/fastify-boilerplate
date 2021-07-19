const {
    getIndex,
    postIndex
} = require("../controllers/index");

const getIndexOpts = {
    schema: {
        response: {
            200: {
                type: "string"
            }
        }
    },
    handler: getIndex
};

const postIndexOpts = {
    schema: {
        body: {
            type: "object",
            required: ["name"],
            properties: {
                name: { type: "string" }
            }
        },
        response: {
            200: {
                type: "string"
            }
        }
    },
    handler: postIndex
};

module.exports = {
    getIndexOpts,
    postIndexOpts
}