const HookModel = require('../../models/hooks');
class WebHookController {
    GetIndex = async (req, res) => {
        const data = await HookModel.find();
        res.status(200).render('web-hook/home', { data });
    };
}

module.exports = new WebHookController();
