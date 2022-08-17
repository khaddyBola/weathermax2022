const request = require('postman-request');

const restCode = (address, callBackFn) => {
  const baseURL = `https://restcountries.com/v3.1/name/${address}`;

  request({url: baseURL, json: true}, (error, _, body) => {
  // console.log(body);
    if (error) {
      callBackFn('Error: Unable to connect.');
    } else {
      const {name, capital, population} = body[0];
      console.log('The country is', name.common);
      console.log('and Capital is', capital);
      console.log('population is also', (population / 10000000).toFixed(1));

    }
});
}

restCode('spain');






