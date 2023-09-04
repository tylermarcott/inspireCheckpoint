import { AppState } from "../AppState.js";
import { weatherService } from "../services/WeatherService.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";


function _drawWeather() {
  let weather = AppState.weather
  let city = AppState.weather.name

  let toFahrenheit = (weather.main.temp) * (9 / 5) - 459.67
  let fixedTemp = toFahrenheit.toFixed(0)

  setHTML('city', city)

  setHTML('temperature', fixedTemp)
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
    console.log('hello from weather controller!')
  }
}



// NOTE: this function is able to the use the built in Date() method and pull the hours and minutes from them, then add them in an innerHTML in order to create a clock. The interval runs every second in order ot create an accurate reading.

function getTime() {
  let time = new Date()

  let hours = time.getHours()
  let minutes = time.getMinutes()

  // @ts-ignore
  document.getElementById('clock').innerHTML = (hours - 12) + ':' + minutes
}

setInterval(getTime, 1000)