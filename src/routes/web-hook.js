const express = require('express');
const Router = express.Router();
const WebHookController = require('../controllers/web-hook');

Router.get('/web-hook/', WebHookController.getIndex);

module.exports = Router;
