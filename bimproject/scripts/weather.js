const icon = document.querySelector("#weather-icon")
const currentWeatherInfo = document.querySelector("#current-weather-info")

const key = "63bfbf52cf8cfcfe2b466a2c4c20e57f";
const forecastKey ="a6d04864c2e9a9c7a635b44e89bc4dc3";
const lat = "-15.79814371484326"; 
const lon = "-47.89961075389943";

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`

export async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok){
            const weatherData = await response.json();

            displayData(weatherData);
        }
        else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    };
    
};

function displayData(weatherData){
   
    
        const currentTemp = document.createElement('p');
        const desc = document.createElement('p');
        const high = document.createElement('p');
        const low = document.createElement('p');
        const humidity = document.createElement('p');
        const wind = document.createElement('p');
       

        let weatherIcon =  `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
        icon.setAttribute('src', weatherIcon) 
        icon.setAttribute('alt', weatherData.weather[0].description) 


       
        currentTemp.innerHTML = `${weatherData.main.temp}&deg;F`;
        desc.innerHTML = `${weatherData.weather[0].description}`;
        high.innerHTML = `High: ${weatherData.main.temp_max}&deg;F`;
        low.innerHTML = `Low: ${weatherData.main.temp_min}&deg;F`;
        humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;
        wind.innerHTML = `Wind: ${weatherData.wind.speed}mph`;


        currentWeatherInfo.append(currentTemp);
        currentWeatherInfo.append(desc);
        currentWeatherInfo.append(high);
        currentWeatherInfo.append(low);
        currentWeatherInfo.append(humidity);
        currentWeatherInfo.append(wind);
}