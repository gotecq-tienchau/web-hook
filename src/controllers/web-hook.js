const fetch = require('node-fetch');

class WebHookController {
    GetIndex = async (req, res) => {
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
        if (payload['web_hook_payload'][0].site === 'vlipa') {
            const data = await (
                await fetch(
                    'https://api.netlify.com/build_hooks/624416a13ea1225ba5a5264f',
                    { method: 'POST' }
                )
            ).json();
            console.log(
                '🚀 ~ file: web-hook.js ~ line 21 ~ WebHookController ~ GetIndex= ~ data',
                data
            );
        }
        res.status(200).json({ payload, query, params });
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
        res.status(200).json({ payload, query, params });
    };
}

module.exports = new WebHookController();
