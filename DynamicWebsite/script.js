// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function display values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function evaluates the expression and returns result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
const input=document.querySelector("input");
const btn= document.getElementById("btn");
const icon= document.querySelector(".icon");
const weather= document.querySelector(".weather")
const temperature= document.querySelector(".temperature")
const description= document.querySelector(".description")
const humidity= document.querySelector(".humidity")


btn.addEventListener("click",()=>{
    let city = input.value;
    getWeather(city);
})

function getWeather(city){
    console.log(city);

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'7f5a4e2af285bb7025240fc1615d40e4'}`)
 .then(response=>response.json())
 .then(data => {
    console.log(data);

    const iconCode= data.weather[0].icon;
    icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Weather Icon"/>`

    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    weather.innerHTML=`${weatherCity}, ${weatherCountry}`;


     let weatherTemp = data.main.temp;
     weatherTemp=  weatherTemp - 273;
     const temp = weatherTemp.toFixed(2)
     temperature.innerHTML= `${temp}°C`;

    const weatherDesc = data.weather[0].description;
    description.innerHTML= weatherDesc;
    const hum= data.main.humidity;
    console.log(hum);
    humidity.innerHTML= hum;
})

}

 // fetch('https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=${'7f5a4e2af285bb7025240fc1615d40e4'}')