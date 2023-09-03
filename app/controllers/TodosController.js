import { AppState } from "../AppState.js";
import { todosService } from "../models/TodosService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js";


function _drawTodos() {

  console.log('drawing todos');

  let content = ''

  let todos = AppState.todosList

  todos.forEach(todo => content += todo.todoTemplate)

  setHTML('todoList', content)
}

// TODO: stopping off here. Next, I need to do a little formatting on my todos. Add a few more todos, then work on deleting them? Or maybe the checks.



export class TodosController {
  constructor() {
    AppState.on('account', this.getTodos)
    AppState.on('todosList', _drawTodos)
  }


  // FIXME: todos are not persisting through refresh. I can see the todos in the todo api, but they are not being loaded to the page.
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

    } catch (error) {
      Pop.error(error)
    }
  }




}