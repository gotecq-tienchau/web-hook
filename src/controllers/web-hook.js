class WebHookController {
    getIndex = (req, res) => {
        res.status(200).end('web-hook');
    };
}

module.exports = new WebHookController();
