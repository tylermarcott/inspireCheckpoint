import { AppState } from "../AppState.js";
import { todosService } from "../models/TodosService.js";
import { Pop } from "../utils/Pop.js";
import { getFormData } from "../utils/FormHandler.js"
import { setHTML } from "../utils/Writer.js";
import { Todo } from "../models/Todo.js";


function _drawTodos() {
  let content = ''

  let todos = AppState.todosList

  todos.forEach(todo => content += todo.todoTemplate)

  let uncompletedTodos = Todo.todoCount()

  setHTML('uncompleted-count', uncompletedTodos)

  setHTML('todoList', content)
}




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
      form.reset()

    } catch (error) {
      Pop.error(error)
    }
  }

  async deleteTodo(todoId) {

    try {
      if (await Pop.confirm("Are you sure you want to delete this todo?")) {
        await todosService.deleteTodo(todoId)
      }
    } catch (error) {
      Pop.error(error)
    }
  }



  async completeTodo(todoId) {
    try {
      await todosService.completeTodo(todoId)
    } catch (error) {
      Pop.error(error)
    }
  }
}