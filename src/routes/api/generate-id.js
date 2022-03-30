const express = require('express');
const Router = express.Router();
const GenerateIdController = require('../../controllers/api/generate-id');

Router.get('/generate-id/', GenerateIdController.getIndex);

module.exports = Router;
