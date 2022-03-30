const express = require('express');
const Router = express.Router();
const WebHookController = require('../../controllers/api/web-hook');

Router.get('/web-hook/', WebHookController.GetIndex);
Router.post('/web-hook/', WebHookController.PostIndex);
Router.put('/web-hook/', WebHookController.UpdateHook);

module.exports = Router;
