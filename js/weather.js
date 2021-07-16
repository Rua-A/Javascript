const API_KEY = "e48c4df5cdf7c36c9464b6a841dbf74c"

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");       
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}'c`;
    });
}
function onGeoError(){
    alert("현재 위치를 찾을 수 없습니다. 날씨를 표시할 수 없습니다.")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);