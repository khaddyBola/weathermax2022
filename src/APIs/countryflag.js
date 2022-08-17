//https://restcountries.com/v2/name/nigeria


//https://restcountries.com/v2/name/{country}

const { response } = require('express');
const request = require('postman-request');

const getCountryFlag = (country, temperature, description, address, humidity, visibility, weather, callBackFN) => {
const countryURL = `https://restcountries.com/v2/name/${country}`
    
request({url: countryURL, json: true}, (error, response, body) => {
    if (error) {
        callBackFN('unable to connect', undefined)
    } else {
        callBackFN(undefined, {
            countryName: body[0].cioc,
            flags: body[0].flags.png,
            temperature,
            description,
            address,
            humidity,
            visibility,
            weather
        })
    }
})
}

// getCountryFlag('nigeria', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);

//     }
// })
module.exports = getCountryFlag;