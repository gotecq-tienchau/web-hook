const HookModel = require('../../models/hooks');
class WebHookController {
    GetIndex = async (req, res) => {
        try {
            const data = await HookModel.find();
            res.status(200).render('web-hook/home', { data });
        } catch (error) {
            console.log(
                '🚀 ~ file: web-hook.js ~ line 8 ~ WebHookController ~ GetIndex= ~ error',
                error
            );
            res.status(500).end('Error!');
        }
    };
}

module.exports = new WebHookController();
