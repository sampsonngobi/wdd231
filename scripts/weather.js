const currentWeather = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("#caption");

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&appid=63bfbf52cf8cfcfe2b466a2c4c20e57f';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayWeatherInfo(data)
        }

        else{
            throw Error(await response.text());
        }
    }catch (error){
        console.log(error)
    };

   
}
function displayWeatherInfo(data){
    currentWeather.innerHTML = `${data.main.temp}&deg;F`;
    let Icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', Icon);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch();