const API_KEY = "61463e4752df5285f8b2ce6bb4c4162a";
const weather = document.querySelector(".js-weather");

const COORDS_LS = "coords";

function getWeather(lat, lng){
    fetch(`https://api.openweathermap.org\
/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}\
&units=metric
`)
.then(response => response.json())
.then(json => {
    // const icon = json.weather[0].icon;
    console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temperature}\u2103 at ${place}`;
})
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS_LS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude =  position.coords.longitude;
    console.log(latitude, longitude);
    const coordsObj = {
        latitude,
        longitude,
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}

function handleGeoError() {
    console.log("cannot access geo location");
}

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError, options);
    
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS_LS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}
function init(){
    loadCoords();
    // getWeather();
}

init();