import { AppState } from "../AppState.js";
import { todosService } from "../models/TodosService.js";
import { Pop } from "../utils/Pop.js";




export class TodosController {
  constructor() {
    AppState.on('account', this.getTodos)
  }

  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      Pop.error(error)
    }
  }




}