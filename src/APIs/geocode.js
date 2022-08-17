// http://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=20ee868d5cbe09e01b4204cf4764bb78


// http://api.openweathermap.org/data/2.5/weather?q={place}&units=metric&appid={access_key}


const { response } = require('express');
const request = require('postman-request');

const geoCode = (address, callBackFN) => {
    const access_key = '20ee868d5cbe09e01b4204cf4764bb78'
    const geocodeURL = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${access_key}`

    request({url: geocodeURL, json: true}, (error, response, body) => {
        // console.log(body)

        if (error) {
            callBackFN('unable to find location', undefined)
        } else {
            callBackFN(undefined, {
                latitude: body.coord.lat,
                longitude: body.coord.lon,
                description: body.weather[0].description,
                temperature: body.main.temp,
                address: body.name,
                humidity: body.main.humidity,
                visibility: body.visibility,
                weather: body.weather[0].main
            })
        }
    })
}
// geoCode('dubai', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(data);

//     }

// })

module.exports = geoCode;