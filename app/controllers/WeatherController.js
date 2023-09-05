import { AppState } from "../AppState.js";
import { todosService } from "../models/TodosService.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawWeather() {
  let weather = AppState.weather
  // @ts-ignore
  let city = AppState.weather.name
  let weatherType = AppState.weatherTracker

  if (weatherType) {
    // @ts-ignore
    let toFahrenheit = (weather.main.temp) * (9 / 5) - 459.67
    let fixedTemp = toFahrenheit.toFixed(0)
    setHTML('temperature', fixedTemp + ' F')
  } else if (!weatherType) {
    // @ts-ignore
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


  switchTemperature() {
    weatherService.switchTemperature()
  }
}



// NOTE: this function is able to the use the built in Date() method and pull the hours and minutes from them, then add them in an innerHTML in order to create a clock. The interval runs every second in order ot create an accurate reading.

function getTime() {
  let time = new Date()

  let hours = time.getHours()
  let minutes = time.getMinutes()

  if (hours >= 12) {
    if (minutes < 10) {
      // @ts-ignore
      document.getElementById('clock').innerHTML = (hours - 12) + ':0' + minutes
    } else if (minutes >= 10) {
      // @ts-ignore
      document.getElementById('clock').innerHTML = (hours - 12) + ':' + minutes
    }
  } else if (hours < 12) {
    if (minutes < 10) {
      // @ts-ignore
      document.getElementById('clock').innerHTML = (hours) + ':0' + minutes
    } else if (minutes >= 10) {
      // @ts-ignore
      document.getElementById('clock').innerHTML = (hours) + ':' + minutes
    }
  }
}

setInterval(getTime, 1000)