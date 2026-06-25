//api bfc7ab6444374889b86143321262805 http://api.weatherapi.com/v1/current.json?key=bfc7ab6444374889b86143321262805&q=${location}&units=metric&aqi=no

let main = document.getElementById("main")
let temp = document.getElementById("temp")
let weather = document.getElementById("weather")
let userInput = document.getElementById("userInput")
let form = document.getElementById("form")
let hidden = document.querySelector('.iNeedToHideThis')
let c = document.getElementById("c")
let f = document.getElementById("f")
let temperature = document.getElementById("temperature")


async function getWeather() {
    const apiKey = "bfc7ab6444374889b86143321262805"


  let location = userInput.value

    let url =`http://api.weatherapi.com/v1/current.json?key=bfc7ab6444374889b86143321262805&q=${location}&units=metric&aqi=no`

  const response = await fetch(url)

  const data = await response.json()

  console.log(data)


  let forecastUrl =`http://api.weatherapi.com/v1/forecast.json?key=bfc7ab6444374889b86143321262805&q=${location}&days=3&units=metric&aqi=no`

  const forecastResponse = await fetch(forecastUrl)

  const forecastData = await forecastResponse.json()

  console.log(forecastData)

    if(response.status===400){
    main.innerHTML='<h1>No matching location found.</h1>'
  }else{

    weather.innerHTML=`
  <div id="condition">
    <img src="${data.current.condition.icon}" alt="">
    <h1 id="weatherH1">
      ${data.current.condition.text}
    </h1>
 </div>
  <div id="wholeTemp"  class="iNeedToHideThis">
      
  
      
  
  <div id="temperature" >
      ${data.current.temp_c}°C
      </div>
    
      

      <div id="buttons" >
          <input id="c" type="button" value="C">
          <input id="f" type="button" value="F">
      </div>
   
  </div>
  
  `
  main.innerHTML=
  `<main >
      

    
      

  <div id="other">
        <h2>Other</h2>
        <div>Feels-like ${data.current.feelslike_c}(°C)</div>
        <div>Wind-speed: ${data.current.wind_kph} kph</div>
       
        <div>Chance of rain: ${data.current.chance_of_rain}%</div>
        <div>Humidity: ${data.current.humidity}</div>
        <div>visibility: ${data.current.vis_km} km</div>
        <div>Atmospheric pressure: ${data.current.pressure_mb}(mb)</div>
      </div>

       <div id="forecast"  >
        <h2>Forecast</h2>
        <div id="days">
        <div id="day1">
        <h4>Date: ${forecastData.forecast.forecastday[1].date}</h4>
        <div><img src="${forecastData.forecast.forecastday[1].day.condition.icon}" alt="">
       ${forecastData.forecast.forecastday[1].day.condition.text}</div>
        <div>Max temperature: ${forecastData.forecast.forecastday[1].day.maxtemp_c}(°C)</div>
        <div>Min temperature: ${forecastData.forecast.forecastday[1].day.mintemp_c}(°C)</div>
        <div>Average temperature: ${forecastData.forecast.forecastday[1].day.avgtemp_c}(°C)</div>
        <div>Chance of rain: ${forecastData.forecast.forecastday[1].day.daily_chance_of_rain}%</div>
     
      </div>
      <div id="day2">
        
        <h4>Date: ${forecastData.forecast.forecastday[2].date}</h4>
        <div><img src="${forecastData.forecast.forecastday[2].day.condition.icon}" alt="">${forecastData.forecast.forecastday[2].day.condition.text}</div>
        
        <div>Max temperature: ${forecastData.forecast.forecastday[2].day.maxtemp_c}(°C)</div>
        <div>Min temperature: ${forecastData.forecast.forecastday[2].day.mintemp_c}(°C)</div>
        <div>Average temperature: ${forecastData.forecast.forecastday[2].day.avgtemp_c}(°C)</div>
        <div>Chance of rain: ${forecastData.forecast.forecastday[2].day.daily_chance_of_rain}%</div>
     
      </div>
      </div>
     
     
      </div>


      
    </main>`


  weather.innerHTML=`
  <div id="condition">
    <img src="${data.current.condition.icon}" alt="">
    <h1 id="weatherH1">
      ${data.current.condition.text}
    </h1>
 </div>
  <div id="wholeTemp"  class="iNeedToHideThis">
      
  
      
  
  <div id="temperature" >
      ${data.current.temp_c}°C
      </div>
    
      

      <div id="buttons" >
          <input id="c" type="button" value="C">
          <input id="f" type="button" value="F">
      </div>
   
  </div>
  
  `

tempC()
 
   c.addEventListener("click", tempC)
  
 
  
 f.addEventListener("click", tempF)

  
  

function tempC() {

    temperature.textContent = `${data.current.temp_c}°C`
}

function tempF() {
  
    temperature.textContent = `${data.current.temp_f}°F`
}
 
 
 if(data.current.condition.text == 'Sunny'){
 document.body.style.backgroundImage = 'url(./images/)'
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
 }

if(data.current.condition.text == 'Partly Cloudy'){
 document.body.style.backgroundImage = 'url(./images/)'
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
 }

 if(data.current.condition.text == 'Cloudy'){
 document.body.style.backgroundImage = 'url(./images/)'
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
 }

 if(data.current.condition.text == 'Light rain'){
 document.body.style.backgroundImage = 'url(./images/)'
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";

 }
 if(data.current.condition.text == 'Rain'){
 document.body.style.backgroundImage = 'url(./images/)'
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
 }






}}








form.addEventListener("submit", (event) => {


hidden.classList.remove('iNeedToHideThis')
getWeather()
event.preventDefault()
 });

 
