const { json } = require('express');
const URLRequest = require('../../access/index');
const HooksModel = require('../../models/hooks');

class WebHookController {
    GetIndex = async (req, res) => {
        let payload = req.body?.payload || false;
        if (!payload) return res.status(400).end();
        if (Array.isArray(payload)) payload = payload.shift();
        let { web_hook_payload } = payload;
        if (!web_hook_payload) return res.status(400).end();

        (async (resolve) => {
            await web_hook_payload?.forEach(async (entity) => {
                const hook = await HooksModel.findOne({ hook_id: entity.site });
                hook.status && (await URLRequest.post(hook.trigger_url));
            });
            resolve();
        })(() => {
            return res.status(200).end();
        });
    };

    PostIndex = async (req, res) => {
        let payload = req.body?.payload || false;
        if (!payload) return res.status(400).end();
        if (Array.isArray(payload)) payload = payload.shift();
        let { web_hook_payload } = payload;
        if (!web_hook_payload) return res.status(400).end();

        (async (resolve) => {
            await web_hook_payload?.forEach(async (entity) => {
                const hook = await HooksModel.findOne({ hook_id: entity.site });
                hook.status && (await URLRequest.post(hook.trigger_url));
            });
            resolve();
        })(() => {
            return res.status(200).end();
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
        const {
            hook_id = false,
            name = false,
            trigger_url = false,
            status = false,
        } = req.body;
        if ((hook_id || name || trigger_url) === false)
            return res.status(500).end('Please input all fields!');
        try {
            const data = { hook_id, name, trigger_url, status };
            const dataResponse = await HooksModel.create(data);
            return res.status(200).json(dataResponse).end();
        } catch (error) {
            console.log(error);
            return res.status(500).end('Error!');
        }
    };

    deleteHook = async (req, res) => {
        const { hook_id = false } = req.body;
        console.log(req.body);
        if (!hook_id) return res.status(500).end('Please provide a hook id!');
        try {
            const dataResponse = await HooksModel.deleteOne({ hook_id });
            return res.status(200).json(dataResponse).end();
        } catch (error) {
            console.log(error);
            return res.status(500).end('Error!');
        }
    };
}

module.exports = new WebHookController();
