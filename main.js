
const apikey = "0a5dcebdd824ba493f8d54a8e7ff0d94";

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";



async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    let error = document.querySelector('.error');

    if(response.status == 404 ) {
        error.style.display = "block";
        card.style.display = "none";
        document.querySelector('.city').style.display = "none";
    }

    else {
    error.style.display = "none";
    document.querySelector('.weather').innerHTML = data.weather[0].main;
    document.querySelector('#humidity_score').innerHTML = data.main.humidity + "%";
    document.querySelector('#wind_speed_score').innerHTML = data.wind.speed + " Km/h";
    document.querySelector('.weather').innerHTML = data.weather[0].main;
    document.querySelector('.temperature').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.city').style.display = "block";
    card.style.display = "block";
    }
}


let inputbox = document.querySelector('.searchbox input');
let searchbtn = document.querySelector('.searchbox button');
let card = document.querySelector('.weather_detail');

searchbtn.addEventListener("click", ()=>{
    var city = inputbox.value;
    // console.log(city);
    checkweather(city);
    // document.querySelector('.weather_detail').style.display = "block"
})
















