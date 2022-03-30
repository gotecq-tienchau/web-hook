const HookModel = require('../../models/hooks');

class WebHookController {
    GetIndex = async (req, res) => {
        const data = await HookModel.find();
        console.log(
            '🚀 ~ file: web-hook.js ~ line 6 ~ WebHookController ~ GetIndex= ~ data',
            data
        );
        res.status(200).render('web-hook/home', { data });
    };
}

module.exports = new WebHookController();
