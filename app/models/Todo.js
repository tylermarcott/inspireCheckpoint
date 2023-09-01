import { generateId } from "../utils/GenerateId.js"




export class Todo {

  //TODO: do I have to generate a unique ID for the todo? Make sure this will work with the creatorId
  constructor(data) {
    this.id = data.id || generateId()
    this.completed = data.completed || false
    this.creatorId = data.creatorId || ''
    this.description = data.description
  }


  get todoTemplate() {
    return `
  
      <div class="row">
      <div>
        completed? ${this.completed}
      </div>
      descrip: ${this.description}
    </div>

  
  `
  }







}