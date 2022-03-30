class WebHookController {
    GetIndex = (req, res) => {
        res.status(200).json({ body, query, params });
    };
    PostIndex = (req, res) => {
        const { body, query, params } = req;
        res.status(200).json({ body, query, params });
    };
}

module.exports = new WebHookController();
