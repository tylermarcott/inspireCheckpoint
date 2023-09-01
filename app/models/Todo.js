



export class Todo {

  //TODO: might have to alter this a bit
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.creatorId = data.creatorId
    this.description = data.description
  }
}