import {
    plusCalculator,
    minusCalculator
} from "./controller.js";

export const Calculator = {
    tags: ["CALCULATOR"],
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
            required: ["result"],
            properties: {
                result: { type: "number" },
            },
            additionalProperties: false
        }
    }
};

export const plusCalculatorSchema = {
    schema: Calculator,
    handler: plusCalculator
};

export const minusCalculatorSchema = {
    schema: Calculator,
    handler: minusCalculator
};