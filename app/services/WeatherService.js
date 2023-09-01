import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"




class WeatherService {
  async getWeather() {
    let res = await api.get('api/weather')

    AppState.weather = res.data
  }

}



export const weatherService = new WeatherService()