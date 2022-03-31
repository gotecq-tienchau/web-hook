const express = require('express');
const Router = express.Router();
const WebHookController = require('../../controllers/api/web-hook');

Router.get('/web-hook/', WebHookController.GetIndex);
Router.post('/web-hook/', WebHookController.PostIndex);
Router.put('/web-hook/', WebHookController.UpdateHook);
Router.options('/web-hook/', WebHookController.AddHook);
Router.delete('/web-hook/', WebHookController.deleteHook);

module.exports = Router;
