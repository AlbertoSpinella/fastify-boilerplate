export const plusCalculator = (req, res) => {
    try {
        const { a, b } = req.body;
        const plus = a + b;
        return res.send(plus);
    } catch (err) {
        throw err;
    }
};

export const minusCalculator = (req, res) => {
    try {
        const { a, b } = req.body;
        const minus = a - b;
        return res.send(minus);
    } catch (err) {
        throw err;
    }
};