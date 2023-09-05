import { AppState } from "../AppState.js"
import { quoteService } from "../services/QuoteService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"



export class QuoteController {


  _drawQuote() {
    // @ts-ignore
    setHTML('quote', AppState.randomQuote.content)
  }

  _drawAuthor() {
    // @ts-ignore
    setHTML('author', '-' + AppState.quoteAuthor.author)
  }



  constructor() {
    this.getQuote()
    AppState.on('randomQuote', this._drawQuote)
    AppState.on('quoteAuthor', this._drawAuthor)
  }

  async getQuote() {
    try {
      await quoteService.getQuote()
    } catch (error) {
      Pop.error(error)
    }
  }
}