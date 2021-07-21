import {
    plusCalculator,
    minusCalculator
} from "./controller.js";

const Calculator = {
    body: {
        type: "object",
        required: ["a", "b"],
        properties: {
            a: { type: "number" },
            b: { type: "number" }
        }
    },
    response: {
        200: {
            type: "number"
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