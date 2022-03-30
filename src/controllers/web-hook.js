const URLRequest = require('../access/index');

const WebHookList = {
    '798bddba-e72e-4c82-b5aa-546fba6bc1f7': {
        id: '798bddba-e72e-4c82-b5aa-546fba6bc1f7',
        requestURL:
            'https://api.netlify.com/build_hooks/624416a13ea1225ba5a5264f',
    },
    'c67a8e1d-0d2b-46f1-a94d-130305cf141e': {
        id: 'c67a8e1d-0d2b-46f1-a94d-130305cf141e',
        requestURL:
            'https://api.netlify.com/build_hooks/62441c955e99ca5f950e327a',
    },
};

class WebHookController {
    GetIndex = async (req, res) => {
        if (!req.body?.payload?.web_hook_payload) {
            return res.status(400).end();
        }
        const { web_hook_payload } = req.body?.payload;
        let url = '';
        switch (web_hook_payload.site) {
            case WebHookList[web_hook_payload.site]:
                const path = WebHookList[web_hook_payload.site]?.requestURL;
                console.log(web_hook_payload);
                url = path;
                break;
        }
        if (url) {
            const resp = await URLRequest.post(url);
            console.log(resp);
        }
        res.status(418).end();
    };

    PostIndex = (req, res) => {
        if (!req.body?.payload?.web_hook_payload) {
            return res.status(400).end();
        }
        const { web_hook_payload } = req.body?.payload;
        res.status(200).end();
    };
}

module.exports = new WebHookController();
