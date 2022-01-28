export const plusCalculator = (req, res) => {
    const { a, b } = req.body;
    const plus = a + b;
    return res.send({ result: plus });
};

export const minusCalculator = (req, res) => {
    const { a, b } = req.body;
    const minus = a - b;
    return res.send({ result: minus });
};