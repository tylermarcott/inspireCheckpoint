import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"




class WeatherService {
  async getWeather() {
    let res = await api.get('api/weather')

    AppState.weather = res.data
  }


  switchTemperature() {

    if (AppState.weatherTracker == true) {
      AppState.weatherTracker = false
    } else if (AppState.weatherTracker == false) {
      AppState.weatherTracker = true
    }
    AppState.emit('weather')
  }
}



export const weatherService = new WeatherService()