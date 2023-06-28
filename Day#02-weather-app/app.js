// target Element
const inputEl = document.getElementById('cityInput')
const buttonEl = document.getElementById('searchBtn');
const weatherEl = document.getElementById('weather');

// const iconUrl = `https://openweathermap.org/img/wn/${ icon }@2x.png`

const getWeather = () => {
    const cityName = inputEl.value;
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ cityName }&appid=2303d206d6ac0368f29fbe25e182560a`;

    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            // Retrieve weather data and city name from the OpenWeatherMap API response
            const cityName = data.name;

            // Make a request to the Unsplash API for images based on the city name
            const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${ cityName }&client_id=t_4UKaECOU6JI3veXNpZe7ED5-BrmbGRypIQ0ygwr1o`;

            return fetch(unsplashApiUrl);
        })
        .then(response => response.json())
        .then(unsplashData => {
            // Retrieve the image URL from the Unsplash API response
            const imageUrl = unsplashData.results[0].urls.regular;
            console.log(imageUrl)

            // Display the image in your weather app or use it as needed
            const imageElement = document.createElement('img');
            imageElement.src = imageUrl;
            document.body.appendChild(imageElement);
        })
        .catch(error => {
            console.log('An error occurred:', error);
        });


}

// eventListener
buttonEl.addEventListener('click', getWeather)
