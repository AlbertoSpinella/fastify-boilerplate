import {
    getIndex,
    postIndex
} from "./controller.js";

export const getIndexOpts = {
    schema: {
        response: {
            200: {
                type: "string"
            }
        }
    },
    handler: getIndex
};

export const postIndexOpts = {
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