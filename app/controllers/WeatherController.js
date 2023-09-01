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
}