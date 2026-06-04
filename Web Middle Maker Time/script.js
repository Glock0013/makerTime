//api bfc7ab6444374889b86143321262805 http://api.weatherapi.com/v1/current.json?key=bfc7ab6444374889b86143321262805&q=${location}&units=metric&aqi=no

let main = document.getElementById("main")
let weather = document.getElementById("weather")
let userInput = document.getElementById("userInput")
let form = document.getElementById("form")
let hidden = document.querySelector('.iNeedToHideThis') 

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


  main.innerHTML=
  `<main >
      <div id="temp">
          <div id="tempC">
            tempC=${data.current.temp_c}
          </div>
          <div id="tempF">
            tempF=${data.current.temp_f}
          </div>
      </div>

      <!-- <div id="weather">
          
        </div> -->
        
      </div>

       <div id="forecast" >
        <h2>Forecast</h2>
        <div>Date: ${forecastData.forecast.forecastday[1].date}</div>
        <div><img src="${forecastData.forecast.forecastday[1].day.condition.icon}" alt=""></div>
        <div> ${forecastData.forecast.forecastday[1].day.condition.text}</div>
        <div>maxtemp_c ${forecastData.forecast.forecastday[1].day.maxtemp_c} </div>
        <div>mintemp_c ${forecastData.forecast.forecastday[1].day.mintemp_c}</div>
        <div>avgtemp_c ${forecastData.forecast.forecastday[1].day.avgtemp_c}</div>
        <div> daily_chance_of_rain ${forecastData.forecast.forecastday[1].day.daily_chance_of_rain}%</div>
      </div>


      <div id="other">
        <h2>Other</h2>
        <div>feels-like=${data.current.feelslike_c}(C)</div>
        <div>wind-speed=${data.current.wind_kph} kph</div>
        <div>wind-direction=${data.current.wind_dir}</div>
        <div>chance of rain=${data.current.chance_of_rain}%</div>
        <div>humidity=${data.current.humidity}</div>
        <div>visibility=${data.current.vis_km} km</div>
        <div>Atmospheric pressure=${data.current.pressure_mb}(mb)</div>
      </div>
    </main>`


  weather.innerHTML=`
    <div id="weather">
    <img src="${data.current.condition.icon}" alt="">
    <h1 id="weatherH1">
      ${data.current.condition.text}
    </h1>
  </div>
  
  `
  
}}










form.addEventListener("submit", (event) => {
console.log(userInput.value)

hidden.classList.remove('iNeedToHideThis')
getWeather()
event.preventDefault()
 });
