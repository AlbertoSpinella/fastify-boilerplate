const {
    plusCalculator,
    minusCalculator
} = require("./controller");

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

const plusCalculatorOpts = {
    schema: Calculator,
    handler: plusCalculator
};

const minusCalculatorOpts = {
    schema: Calculator,
    handler: minusCalculator
};

module.exports = {
    plusCalculatorOpts,
    minusCalculatorOpts
}