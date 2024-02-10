const apiKey = 'c22a77b8da94540348f9a1e0d996feb1';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchCity = document.querySelector('.input');
const searchBtn = document.querySelector('button');
const weatherIcon = document.querySelector('.weatherIcon')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.windSpeed').innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == 'Mist') {
        weatherIcon.setAttribute('src', 'mist.png')

    } else if (data.weather[0].main == 'Drizzle') {
        weatherIcon.setAttribute('src', 'drizzle.png')

    } else if (data.weather[0].main == 'Clear') {
        weatherIcon.setAttribute('src', 'clear.png')

    } else if (data.weather[0].main == 'Clouds') {
        weatherIcon.setAttribute('src', 'clouds.png')

    } else if (data.weather[0].main == 'Rain') {
        weatherIcon.setAttribute('src', 'rain.png')

    } else if (data.weather[0].main == 'Snow') {
        weatherIcon.setAttribute('src', 'snow.png')

    }

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchCity.value);
});

