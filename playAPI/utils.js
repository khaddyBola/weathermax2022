const request = require('postman-request');


const geoCode = (address, callBakFn) => {
    const accessKey = '20ee868d5cbe09e01b4204cf4764bb78';
    const baseURL = `http://api.openweathermap.org/data/2.5/weather?q=${address}&units=metric&appid=${accessKey}`

    request({url: baseURL, json: true}, (error, _, body) => {
        if (error) {
            callBakFn('Error: Unable to connect.', undefined)
        } else {
            const {temp, feels_like} = body.main;
            callBakFn(undefined, body)
            callBakFn(undefined, `The temperature is ${Math.trunc(temp)} degree celcius`)
        }
        
    });
    

}
module.exports = geoCode;


// http://api.openweathermap.org/data/2.5/weather?q=Lagos&units=metric&appid=20ee868d5cbe09e01b4204cf4764bb78
// https://us1.locationiq.com/v1/reverse?key=pk.dc46745d966e7a874cca48e42a7f37f9&lat=6.5833&lon=3.75&format=json
//https://restcountries.com/v2/name/nigeria