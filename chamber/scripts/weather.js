const icon = document.querySelector("#weather-icon");
const currentweatherInfo = document.querySelector("#current-weather-info");
const weatherForecast = document.querySelector("#forecast-weather-info");

const key = "63bfbf52cf8cfcfe2b466a2c4c20e57f";
const forecastKey ="a6d04864c2e9a9c7a635b44e89bc4dc3";
const lat = "-15.79814371484326"; 
const lon = "-47.89961075389943";

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`
const forecastUrl = `//api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`

async function apiFetch(){
    try {
        const response = await fetch(url);
        const forecastResponse = await fetch(forecastUrl)
        if (response.ok && forecastResponse.ok) {
            const weatherData = await response.json();
            const forecastData = await forecastResponse.json()
            console.log(weatherData)
            console.log(forecastData)

            displayData(weatherData);
            displayForecastData(forecastData)
        }else{
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


        currentweatherInfo.append(currentTemp);
        currentweatherInfo.append(desc);
        currentweatherInfo.append(high);
        currentweatherInfo.append(low);
        currentweatherInfo.append(humidity);
        currentweatherInfo.append(wind);
}

function displayForecastData(forecastData){

    // Get one forecast per day
    const forecastlist = forecastData.list.filter((item) =>
        item.dt_txt.includes('12:00:00')
    //limit to four days
    ).slice(0, 5);
   
    const card = document.createElement("div")
    
    forecastlist.forEach((day) => {
        const date = new Date(day.dt_txt).toLocaleDateString("pt-BR",{
            weekday: 'long',
        
        });  
        
        const forecastDay = date
        const temp = day.main.temp
        const forecastTemperature = document.createElement("p")

        forecastTemperature.innerHTML = `${forecastDay} - ${temp}&deg;F`

        card.append(forecastTemperature)

    });

    
    weatherForecast.append(card)


}

apiFetch()