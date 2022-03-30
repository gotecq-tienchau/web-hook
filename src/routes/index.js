const webHooksRoute = require('./web-hook');

const InitialRoute = (app) => {
    app.use('/api/', webHooksRoute);
};

module.exports = InitialRoute;
