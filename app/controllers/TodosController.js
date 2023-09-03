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


  // TODO: creating delete. Ok so I think I remember how they do this. They set the id of whatever todo it is, find that one, then do like a filter and set the filtered todo to a blank string or something like that?
  async deleteTodo(todoId) {

    try {
      await todosService.deleteTodo(todoId)
    } catch (error) {
      Pop.error(error)
    }
  }




}