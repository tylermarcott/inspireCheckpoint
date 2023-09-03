import { AppState } from "../AppState.js"
import { generateId } from "../utils/GenerateId.js"
import { Pop } from "../utils/Pop.js"




export class Todo {

  //TODO: do I have to generate a unique ID for the todo? Make sure this will work with the creatorId
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

      <div class="col-2">
        <i class="mdi mdi-delete-circle" onclick="app.TodosController.deleteTodo('${this.id}')"></i>
      </div>
    </div>
  `
  }


  // TODO: create the templates for this.

  get completedCheckbox() {
    if (this.completed) {
      return `<input type="checkbox" checked onchange="app.TodosController.completeTodo('${this.id}')">`
    } else {
      return `<input type="checkbox" onchange="app.TodosController.completeTodo('${this.id}')">`
    }
  }



  // FIXME: got insertion onto page, but I am getting undefined instead of a number. I think I need like some sort of forEach, because this find is only giving me a single array that isn't completed, not an array of all of the uncompleted arrays.

  static todoCount() {
    let uncompletedTodos = AppState.todosList.find(todo => !todo.completed)

    console.log('you have this many uncompleted todos:', uncompletedTodos)

    // @ts-ignore
    return `<h5>Total todo count: ${uncompletedTodos.length}</h5>`
  }



}