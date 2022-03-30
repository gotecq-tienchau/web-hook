const express = require('express');
const Router = express.Router();
const WebHookController = require('../../controllers/page/web-hook');

Router.get('/', WebHookController.GetIndex);
// Router.post('/add-hook', WebHookController.PostIndex);

module.exports = Router;
