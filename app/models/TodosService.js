


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
    console.log('passed form data:', formData)

    // TODO: ok so I think what I can do to make this work is to add a createdTodos array in the appstate to save all of my todos in. I can do that here in my create. Then, I can copy the data from my form to a new instance of this class. I can then use that appstate array in order to post the to the sandbox my new todos that I create.

    AppState.activeTodo = new Todo(formData)

    console.log('this is out active todo:', AppState.activeTodo);

    // NOTE: NOTE: so the difference between post and push: the reason we post is to send our data to the api. We then also have to push that same data, which will update it on our LOCAL SYSTEM. Post = to API, push = to LOCAL SYSTEM

    let res = await api.post('api/todos', AppState.activeTodo)

    let newTodo = new Todo(res.data)

    AppState.todosList.push(newTodo)

    AppState.emit('todosList')

    // NOTE: this data set is being pushed to the api, we can confirm this with the draw!


  }



  // TODO: duhhhh, I never finished this function, so of COURSE I'm not getting the todos lol

  async getTodos() {
    let res = await api.get('api/todos')

    let mappedTodos = res.data.map(todo => new Todo(todo))

    console.log('mapped todo list:', mappedTodos)

    AppState.todosList = mappedTodos
  }

}



export const todosService = new TodosService()