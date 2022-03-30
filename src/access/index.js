const axios = require('axios');

const URLRequest = {
    post: async (url) => await axios.post(url),
};

module.exports = URLRequest;
