const express = require('express');
const Router = express.Router();
const WebHookController = require('../controllers/web-hook');

Router.get('/web-hook/', WebHookController.GetIndex);
Router.get('/web-hook/:slug', WebHookController.GetIndex);
Router.post('/web-hook/', WebHookController.PostIndex);

module.exports = Router;
