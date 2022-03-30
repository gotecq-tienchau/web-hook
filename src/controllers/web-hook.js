class WebHookController {
    GetIndex = (req, res) => {
        const {
            body: { payload },
            query,
            params,
        } = req;
        console.log('🚀 GET', {
            payload: JSON.stringify(payload, null, 4),
            query,
            params,
        });
        res.status(200).json({ body, query, params });
    };
    PostIndex = (req, res) => {
        const {
            body: { payload },
            query,
            params,
        } = req;
        console.log('🚀 POST', {
            payload: JSON.stringify(payload, null, 4),
            query,
            params,
        });
        res.status(200).json({ body, query, params });
    };
}

module.exports = new WebHookController();
