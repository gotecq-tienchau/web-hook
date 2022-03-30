const webHooksRoute = require('./api/web-hook');
const webHooksPageRoute = require('./pages/web-hook');
const generateIdRoute = require('./api/generate-id');

const InitialRoute = (app) => {
    app.use('/api/', webHooksRoute, generateIdRoute);
    app.use('/', webHooksPageRoute);
};

module.exports = InitialRoute;
