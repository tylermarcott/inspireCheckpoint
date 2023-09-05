import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"


export class Todo {
  constructor(data) {
    this.id = data.id || data._id || generateId()
    this.completed = data.completed || false
    this.creatorId = data.creatorId || ''
    this.description = data.description
    this.author = data.author || ''
  }


  get todoTemplate() {
    return `
    <div class="row">

      <div class="col-2">
        ${this.completedCheckbox}
      </div>

      <div class="col-6">
        <div>${this.description}</div>
      </div>

      <div class="col-2 text-danger fs-5">
        <i class="mdi mdi-delete" onclick="app.TodosController.deleteTodo('${this.id}')"></i>
      </div>
    </div>
  `
  }


  get completedCheckbox() {
    if (this.completed) {
      return `<input type="checkbox" checked onchange="app.TodosController.completeTodo('${this.id}')">`
    } else {
      return `<input type="checkbox" onchange="app.TodosController.completeTodo('${this.id}')">`
    }
  }


  static todoCount() {
    let uncompletedTodos = AppState.todosList.filter(todo => !todo.completed)

    // @ts-ignore
    return `<h5>Total todo count: ${uncompletedTodos.length}</h5>`
  }
}