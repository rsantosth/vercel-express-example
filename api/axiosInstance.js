const axios = require('axios');
const constants = require('../constants');

const instance = axios.create({
    baseURL: 'https://api.maersk.com/',
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Consumer-Key': constants.MaerskConsumerKey
    }
});

module.exports = instance;