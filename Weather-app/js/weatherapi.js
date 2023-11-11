// Define the URLs and options for weather and air quality APIs
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
const api = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city='
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fb8c30240mshbc2f8c87739dc43p12ea77jsn93a901ea7242',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const optionsa = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2fb8c30240mshbc2f8c87739dc43p12ea77jsn93a901ea7242',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

// Get references to HTML elements
const cityInput = document.getElementById('cityInput');
const searchButton = document.getElementById('searchButton');


function getWeather(city) {
	fetch(`${url}${city}`, options)
		.then((response) => response.json())
		.then((response) => {

			const humiDity = response.humidity;
			const mintemp = response.min_temp;
			const maxtemp = response.max_temp;
			const windspeed = response.wind_speed;
			const temperature = response.temp;
			const windDegrees = response.wind_degrees;

			// Convert and display sunrise and sunset timestamps
			const sunriseTimestamp = response.sunrise;
			const sunsetTimestamp = response.sunset;
			const sunriseDate = new Date(sunriseTimestamp * 1000);
			const sunsetDate = new Date(sunsetTimestamp * 1000);

			// Update the HTML elements with the weather data
			cloud_pct = response.cloud_pct;
			humidity.innerHTML = humiDity + "%";
			min_temp.innerHTML = mintemp + "&deg;";
			max_temp.innerHTML = maxtemp + "&deg;";
			wind_speed.innerHTML = windspeed + "MPH";
			temp.innerHTML = temperature + "&deg;";
			sunrise.innerHTML = sunriseDate.toLocaleTimeString() + "AM";
			sunset.innerHTML = sunsetDate.toLocaleTimeString() + "PM";
			wind_degrees.innerHTML = windDegrees + "&deg;";

			// Determine the weather condition and set the appropriate icon
			const weatherData = {
				temp: response.temp,
				humidity: response.humidity,
				wind_speed: response.wind_speed,
			};
			const weatherCondition = getWeatherCondition(weatherData);
			let weatherIconSrc = ''; // Change this variable to hold the icon source URL

			switch (weatherCondition) {
				case 'cloudy':
					weatherIconSrc = 'img/icon/cloudy-icon.png';
					break;
				case 'cold':
					weatherIconSrc = 'img/icon/cold-icon.png';
					break;
				case 'hot':
					weatherIconSrc = 'img/icon/hot-icon.png';
					break;
				case 'windy':
					weatherIconSrc = 'img/icon/windy-icon.png';
					break;
				case 'rainy':
					weatherIconSrc = 'img/icon/rainy-icon.png';
					break;
				default:
					weatherIconSrc = 'img/icon/sunny-icon.png';
			}

			// Set the src attribute of the weather icon image
			const weatherIconElement = document.querySelector('.weather-icon img');
			weatherIconElement.src = weatherIconSrc;
		})
		.catch((error) => {

			console.error(error);

		});

	// Fetch air quality data	
	fetch(`${api}${city}`, optionsa)
		.then((response) => response.json())
		.then((response) => {
			const overallaqi = response.overall_aqi;
			overall_aqi.innerHTML = overallaqi + "AQI";
		})
		.catch((error) => {
			console.error(error);
		});

}




// Function to determine the weather condition based on the data
function getWeatherCondition(data) {
	const { cloud_pct, temp, humidity, wind_speed } = data;

	if (cloud_pct > 70) {
		return 'cloudy';
	} else if (temp < 10) {
		return 'cold';
	} else if (temp > 30) {
		return 'hot';
	} else if (wind_speed > 5) {
		return 'windy';
	} else if (humidity > 80) {
		return 'rainy';
	} else {
		return 'sunny';
	}
}

// Add a click event listener to the search button
searchButton.addEventListener('click', () => {
	const city = cityInput.value.trim(); // Get the city name from the input field
	if (city) {
		getWeather(city);// Call the getWeather function with the user-provided city name
	}
	else {
		document.getElementById('cityInput').style.backgroundColor = 'red'; // Highlight the input box in red if no city is provided
	}
	cityoutput.innerHTML = cityInput.value;
});

// Handle Enter key press in the input field
cityInput.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		searchButton.click(); // Trigger the search button's click event
	}
});

// Call the getWeather function with your city name
getWeather('swansea');
