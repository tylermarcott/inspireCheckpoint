import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"



class QuoteService {
  async getQuote() {
    let res = await api.get('api/quotes')

    AppState.randomQuote = res.data

    AppState.quoteAuthor = res.data
  }
}



export const quoteService = new QuoteService()