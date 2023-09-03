import { generateId } from "../utils/GenerateId.js"




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
        <div checked='${this.completed}'></div>
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







}