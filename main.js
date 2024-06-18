const inputBox = document.getElementById('search');
const searchbtn = document.querySelector('.searchbtn');
const weather_image = document.querySelector('.weather-image');
const temperature_deg = document.querySelector('.temperature');
const temp_text = document.querySelector('.temp-text');
const humidity_deg = document.querySelector('.h-deg');
const wind_deg = document.querySelector('.w-deg');
const not_found = document.querySelector('.notfound');
const rowTwo = document.querySelector('.row2');
const humidity_wind = document.querySelector('.humidity-wind');
const heading = document.querySelector('.heading');


searchbtn.addEventListener("click",()=>{
    check_weather(inputBox.value);
})

async function check_weather(city){
    const api_key = "86160b02c125b1941f7985167999d177";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response=>response.json());

    if(weather_data.cod === `404`){
        not_found.style.display = "flex";
        heading.style.display = "none";
        rowTwo.style.display = "none";
        humidity_wind.style.display = "none";
        return;
    }

    not_found.style.display = "none";
    rowTwo.style.display = "flex";
        humidity_wind.style.display = "flex";
        heading.style.display = "none";
    temperature_deg.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}`;
    temp_text.innerHTML = `${weather_data.weather[0].description}`;
    humidity_deg.innerHTML = `${weather_data.main.humidity}`;
    wind_deg.innerHTML = `${weather_data.wind.speed} Km/h`;
    
    switch(weather_data.weather[0].main){
        case 'Clouds' :
        weather_image.src = "assets/cloud.png";
        break;
        case 'Clear' :
        weather_image.src = "assets/clear.png";
        break;
        case 'Rain' :
        weather_image.src = "assets/rain.png";
        break;
        case 'Mist' :
        weather_image.src = "assets/mist.png";
        break;
        case 'Snow' :
        weather_image.src = "assets/snow.png";
        break;

        
    }

}

