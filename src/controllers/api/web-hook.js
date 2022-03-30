const URLRequest = require('../../access/index');
const HooksModel = require('../../models/hooks');

class WebHookController {
    GetIndex = async (req, res) => {
        if (!req.body?.payload?.web_hook_payload) {
            return res.status(400).end();
        }
        const { web_hook_payload } = req.body?.payload;

        (async (resolve) => {
            await web_hook_payload?.forEach(async (entity) => {
                const hook = await HooksModel.findOne({ hook_id: entity.site });
                await URLRequest.post(hook.trigger_url);
            });
            resolve();
        })(() => {
            return res.status(200).end();
        });
    };

    PostIndex = async (req, res) => {
        if (!req.body?.payload?.web_hook_payload) {
            return res.status(400).end();
        }
        const { web_hook_payload } = req.body?.payload;

        (async (resolve) => {
            await web_hook_payload?.forEach(async (entity) => {
                const hook = await HooksModel.findOne({ hook_id: entity.site });
                hook.status && (await URLRequest.post(hook.trigger_url));
            });
            resolve();
        })(() => {
            res.status(200).end();
        });
    };

    UpdateHook = async (req, res) => {
        if ((req.body?.status || !req.body?.hook_id) === undefined)
            return res.status(418).end();

        const { status, hook_id } = req.body;
        try {
            const resp = await HooksModel.updateOne({ hook_id }, { status });
            return res.status(200).json(resp).end();
        } catch (error) {
            console.log(error);
            return res.status(502).end();
        }
    };

    AddHook = async (req, res) => {
        return res.status(200).end();
    };
}

module.exports = new WebHookController();
