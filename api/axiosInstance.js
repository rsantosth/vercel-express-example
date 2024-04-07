const axios = require('axios');

const maerskConsumerKey = "6TOeNlAH8j7HvdUjRUD9PmIuXCwoGQOt";

const instance = axios.create({
    baseURL: 'https://api.maersk.com/',
    timeout: 1000,
    headers: {
        'Accept': 'application/json',
        'Consumer-Key': maerskConsumerKey
    }
});

module.exports = instance;