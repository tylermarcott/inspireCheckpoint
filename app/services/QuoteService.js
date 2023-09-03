import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"



class QuoteService {
  async getQuote() {
    let res = await api.get('api/quotes')

    AppState.randomQuote = res.data

    console.log(AppState.randomQuote)


    AppState.quoteAuthor = res.data

    console.log(AppState.quoteAuthor)

    console.log('the author of the quote is:', AppState.quoteAuthor.author)
  }

}



export const quoteService = new QuoteService()