const express = require('express');
const geoCode = require('./APIs/geocode');
const getCountry = require('./APIs/country');
const getCountryFlag = require('./APIs/countryflag');
const path = require('path');
const hbs = require('hbs');


const app = express();
app.set('view engine', 'hbs');


// PORT Config
const port = 5000;

// RENDERING
const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../views');
app.set('views', viewsPath)
app.use(express.static(publicDirectory));

app.get('/', (req, res) => {
    res.render('index')
  
});       


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        res.send('Invalid address...input a correct loation!')
    }
geoCode(req.query.address, (error, data) => {
    if (error) {
        console.log(error);
    } else {

        getCountry(data.latitude, data.longitude, data.temperature, data.description, data.address, data.humidity, data.visibility, data.weather,(error, data) => {
            if (error) {
                console.log(error);
            } else {

                getCountryFlag(data.country, data.temperature, data.description, data.address, data.humidity, data.visibility, data.weather,(error, data) => {
                    if (error) {
                        console.log(error);
                    } else {
                        res.json({
                            country: data.country,
                            temperature: data.temperature,
                            description: data.description,
                            address: data.address,
                            flags: data.flags,
                            humidity: data.humidity,
                            visibility: data.visibility,
                            weather: data.weather
                        })
                        console.log(data);
                
                    }
                })
            }
        });
    }
})
})

app.get('*', (req, res) => {
    res.send('<h1>Error: Page Not found</h1>')
})



app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
});