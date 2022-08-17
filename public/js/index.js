console.log('This is javasript from client-side....Yayyy! 😋😊');

const formEl = document.querySelector('form');
const inputEl = document.querySelector('.inputSearch');
const cityEl = document.querySelector('.city');
const countryEl = document.querySelector('.country');
const temperatureEl = document.querySelector('.temperature');
const descriptionEl = document.querySelector('.description');
const humidityEl = document.querySelector('.humidity--no');
const weatherEl = document.querySelector('.weather--name');
const visibilityEl = document.querySelector('.visibility--no');
const mainEl = document.querySelector('main');
const flagEl = document.querySelector('.flagImg');
const dateEl = document.querySelector('.date');
const errorMsgEl = document.querySelector('.error-msg');

formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const address = inputEl.value
    fetch(`http://localhost:5000/weather?address=${address}`).then(response => {
        response.json().then(data => {
            if (data.error) {
                errorMsgEl.classList.remove('hidden');
                console.log(data.error.message);
            }else {
                console.log(data)
                mainEl.classList.remove('hidden');
                dateEl.textContent = currentDate();
                cityEl.textContent = data.address;
                countryEl.textContent = data.country;
                temperatureEl.textContent = Math.trunc(data.temperature);
                descriptionEl.textContent = data.description;
                humidityEl.textContent = data.humidity;
                weatherEl.textContent = data.weather;
                visibilityEl.textContent = Math.trunc(data.visibility / 1000);
                flagEl.src = data.flags
                inputEl.value = '';
                inputEl.blur();
            }
        })

    })


})

function currentDate () {
    const d = new Date();
    const date = d.getDate();
    const day = d.toLocaleDateString('en-US', {weekday: 'short'});
    const month = d.toLocaleDateString('en-US', {month: 'short'});
    const year = d.getFullYear();

return (`${day} ${date} ${month} ${year}`);
}





