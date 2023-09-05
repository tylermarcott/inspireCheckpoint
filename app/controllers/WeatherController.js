import { AppState } from "../AppState.js";
import { todosService } from "../models/TodosService.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawWeather() {
  let weather = AppState.weather
  let city = AppState.weather.name
  let weatherType = AppState.weatherTracker

  if (weatherType) {
    let toFahrenheit = (weather.main.temp) * (9 / 5) - 459.67
    let fixedTemp = toFahrenheit.toFixed(0)
    setHTML('temperature', fixedTemp + ' F')
  } else if (!weatherType) {
    let toCelsius = weather.main.temp - 273.15
    let fixedTemp = toCelsius.toFixed(0)
    setHTML('temperature', fixedTemp + ' C')
  }
  setHTML('city', city)
}


export class WeatherController {
  constructor() {
    this.getWeather()
    AppState.on('weather', _drawWeather)
  }

  async getWeather() {
    try {
      await weatherService.getWeather()
    } catch (error) {
      Pop.error(error)
    }
  }

  // TODO: soooo how am I going to do this? I need to be able to do an onclick that toggles between F and Celsius. Maybe use some sort of boolean value? Like onclick, if bool is true, calculate far from base temp value. If false, calculate celsius from base temperature value. Then change the value of the bool! I think this should work out just fine.
  // TODO: orrrrr I could just use a toggle? lolol
  switchTemperature() {
    weatherService.switchTemperature()
  }
}



// NOTE: this function is able to the use the built in Date() method and pull the hours and minutes from them, then add them in an innerHTML in order to create a clock. The interval runs every second in order ot create an accurate reading.

function getTime() {
  let time = new Date()

  let hours = time.getHours()
  let minutes = time.getMinutes()


  // @ts-ignore
  document.getElementById('clock').innerHTML = (12 - hours) + ':' + minutes
}

setInterval(getTime, 1000)