



export class Todo {

  //TODO: do I have to generate a unique ID for the todo?
  constructor(data) {
    this.id = data.id || ''
    this.completed = data.completed || ''
    this.creatorId = data.creatorId || ''
    this.description = data.description
  }
}