import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"



class QuoteService {
  async getQuote() {
    let res = await api.get('api/quotes')

    console.log(res.data)

    AppState.randomQuote = res.data
  }

}



export const quoteService = new QuoteService()