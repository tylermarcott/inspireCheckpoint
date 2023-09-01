


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

    let res = await api.post('api/todos', AppState.activeTodo)

    let newTodo = new Todo(res.data)

    //TODO: ok so now I have my new class instance of my posted data. Now I just need to draw it to the page each time a new one is created.

    // TODO: ok so I'm able to do a push on the todo. Now I just need to make another function that gets the todos so I can draw them.


  }





  async getTodos() {
    let res = await api.get('api/todos')


    // NOTE: we are getting a 401 error UNAUTHORIZED. As you can see, we can go to the network tab and see the order of things that are happening. When we are trying to access something in the sandbox that needs credentials, we need to be able to complete our account auth first before running our TODOS:
    // NOTE: also we can see since we haven't added any todos yet, we are going to get back an empty array. Once we start adding todos, we will be able to see this list populate. Once this happens, we will finish this guy up.

    //TODO: finish this once you have your form and post done.

  }

}



export const todosService = new TodosService()