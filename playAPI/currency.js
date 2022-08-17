const request = require('postman-request');

const currency = 'dollar'
const url = `https://restcountries.com/v2/currency/${currency}`;

request({url: url, json: true}, (error, _, body) => {
    console.log(body);
});