import {
    plusCalculator,
    minusCalculator
} from "./controller.js";

export const Calculator = {
    body: {
        type: "object",
        required: ["a", "b"],
        properties: {
            a: { type: "number" },
            b: { type: "number" }
        },
        additionalProperties: false
    },
    response: {
        200: {
            type: "object",
            properties: {
                "result": { type: "number" },
            },
            required: ["result"],
            additionalProperties: false
        }
    }
}

export const plusCalculatorOpts = {
    schema: Calculator,
    handler: plusCalculator
};

export const minusCalculatorOpts = {
    schema: Calculator,
    handler: minusCalculator
};