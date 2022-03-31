const express = require('express');
const Router = express.Router();
const WebHookController = require('../../controllers/page/web-hook');

Router.get('/', WebHookController.GetIndex);

module.exports = Router;
