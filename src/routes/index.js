const webHooksRoute = require('./api/web-hook');
const webHooksPageRoute = require('./pages/web-hook');

const InitialRoute = (app) => {
    app.use('/api/', webHooksRoute);
    app.use('/', webHooksPageRoute);
};

module.exports = InitialRoute;
