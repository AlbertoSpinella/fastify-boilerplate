const getIndex = (req, res) => {
    try {
        return res.send("Hello world!");
    } catch (err) {
        throw err;
    }
};

const postIndex = (req, res) => {
    try {
        const { name } = req.body;
        return res.send(`Hello ${name}!`);
    } catch (err) {
        throw err;
    }
};

module.exports = {
    getIndex,
    postIndex
}