class WebHookController {
    GetIndex = (req, res) => {
        const { body, query, params } = req;
        console.log(
            '🚀 ~ file: web-hook.js ~ line 4 ~ WebHookController ~ { body, query, params }',
            { body, query, params }
        );
        res.status(200).json({ body, query, params });
    };
    PostIndex = (req, res) => {
        const { body, query, params } = req;
        console.log(
            '🚀 ~ file: web-hook.js ~ line 12 ~ WebHookController ~ { body, query, params }',
            { body, query, params }
        );
        res.status(200).json({ body, query, params });
    };
}

module.exports = new WebHookController();
