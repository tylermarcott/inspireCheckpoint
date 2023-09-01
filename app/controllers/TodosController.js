import { AppState } from "../AppState.js";
import { todosService } from "../models/TodosService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js"





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

  async createTodo() {
    try {
      // @ts-ignore
      window.event.preventDefault()

      // @ts-ignore
      const form = window.event.target
      const formData = getFormData(form)

      await todosService.createTodo(formData)

      // @ts-ignore
      form.reset

      // @ts-ignore
      // bootstrap.Collapse.getOrCreateInstance('#todoOffCanvas').hide()
      //FIXME: this collapse no worky right

    } catch (error) {
      Pop.error(error)
    }
  }




}