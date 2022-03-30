const { nanoid } = require('nanoid');

class GenerateId {
    getIndex = async (req, res) => {
        try {
            return res
                .status(200)
                .json({ id: nanoid(8) })
                .end();
        } catch (error) {
            console.log(
                '🚀 ~ file: generate-id.js ~ line 11 ~ GenerateId ~ getIndex= ~ error',
                error
            );
            res.status(502).end();
        }
    };
}

module.exports = new GenerateId();
