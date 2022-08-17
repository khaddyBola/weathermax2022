const { response } = require('express');
const request = require('postman-request');

const getCountry = (address, callBackFn) => {
  const baseURL = `https://restcountries.com/v3.1/capital/${address}`;

    request({url: baseURL, json: true}, (error, response, body) => {
      if (error) {
        callBackFn('Unable to connect', undefined);
      } else {
      const {name, capital, population} = body[0];
        callBackFn(undefined, body)
        callBackFn(undefined, `The country is ${name.common}, ${capital}, ${population}`);
     
      }


    // console.log(body);
    // const {name, capital, population} = body[0];
    // console.log('The country is', name.common)
    // console.log('The Captial is', capital)
    // console.log('The population is', (population / 10000000).toFixed(1))


  }) 
}
getCountry('Abuja');
callBackFn();

// const capCode = (address) => {
// const abjLat = 9.0765;
// const abjLong = 7.3986;
// const access_token = 'pk.c6f0949fc56b7d8f2b162e0dc94bd3c1'
// const locationURL = `https://us1.locationiq.com/v1/reverse?key=${access_token}&lat=${abjLat}&lon=${abjLong}&format=json`

// request({url: locationURL, json: true}, (error, response, body) => {
//   console.log(body);

// })
// }

// capCode('Abuja');








