


/* NOTE: Ok so how do I want to start this. I want to be able to do the following:


Todos	endpoint	usage
GET	/api/todos	gets all the todos created by the user sending the request
GET	/api/todos/:id	gets a single todo by its id
POST	/api/todos	creates a new todo from the request body
PUT	/api/todos/:id	targets a single todo by its id and updates it according to the request body
DELETE	/api/todos/:id	removes a single todo by its id


I think maybe what I want to start with is creating a form to create a new todo. I want to have a side bar that toggle an offscreen sort of form deal. So it will say something like: "You have 3 Todos!" <--- click this and it will pull up the create new todo form, as well as the list of todos.

1: Thinking this out now, I think I want to make my flow like this:

- create the side menu and form

- make it so I can take in the data from the form

- map this data to a model of the todos that I need to create

- POST this data to the api



*/

import { AppState } from "../AppState.js";
import { api } from "../services/AxiosService.js"
import { Todo } from "./Todo.js";

class TodosService {

  async createTodo(formData) {
    // console.log('passed form data:', formData)

    AppState.activeTodo = new Todo(formData)

    // NOTE: NOTE: so the difference between post and push: the reason we post is to send our data to the api. We then also have to push that same data, which will update it on our LOCAL SYSTEM. Post = to API, push = to LOCAL SYSTEM

    let res = await api.post('api/todos', AppState.activeTodo)

    let newTodo = new Todo(res.data)

    AppState.todosList.push(newTodo)

    AppState.emit('todosList')

    // NOTE: this data set is being pushed to the api, we can confirm this with the draw!
  }


  async getTodos() {
    let res = await api.get('api/todos')

    let mappedTodos = res.data.map(todo => new Todo(todo))

    // console.log('mapped todo list:', mappedTodos)

    AppState.todosList = mappedTodos
  }




  async deleteTodo(todoId) {

    // NOTE: remember, when you do something like this below, you HAVE to string interpolate, or it's not going to work. It will throw a 400 error when trying to access the api because the endpoint will just be todoId not the actual id lol.

    const res = await api.delete(`api/todos/${todoId}`)

    AppState.todosList = AppState.todosList.filter(todo => todo.id != todoId)
  }





  async completeTodo(todoId) {
    let foundTodo = AppState.todosList.find(todo => todo.id == todoId)

    // console.log('status before:', foundTodo)

    // @ts-ignore
    foundTodo.completed = !foundTodo.completed

    // console.log('status after:', foundTodo)

    // NOTE: syntax in the put: it's find the todo with our passed id, then replacing the current object in the api with our new altered object. Also, you forgot the backticks AGAIN

    let res = await api.put(`api/todos/${todoId}`, foundTodo)

    AppState.emit('todosList')
  }
}



export const todosService = new TodosService()