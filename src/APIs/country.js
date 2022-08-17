// https://us1.locationiq.com/v1/reverse?key=pk.dc46745d966e7a874cca48e42a7f37f9&lat=6.5833&lon=3.75&format=json

const { response } = require("express");
const request = require("postman-request");


// https://us1.locationiq.com/v1/reverse?key=(access_key}&lat={latitude}&lon={longtitude}&format=json

const getCountry = (latitude, longtitude, temperature, description, address, humidity, visibility, weather, callBackFN) => {
    const access_key = 'pk.dc46745d966e7a874cca48e42a7f37f9';
    const countryURL = `https://us1.locationiq.com/v1/reverse?key=${access_key}&lat=${latitude}&lon=${longtitude}&format=json`;

    request({url: countryURL, json: true}, (error, response, body) => {
        if (error) {
        callBackFN('Uable to connect', undefined)
    } else {
        callBackFN(undefined, {
            country: body.address.country,
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

// getCountry(6.5833, 3.75, (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);
//     }
// });

module.exports = getCountry;
