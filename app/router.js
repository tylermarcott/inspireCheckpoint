import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ImagesController } from "./controllers/ImagesController.js";
import { QuoteController } from "./controllers/QuoteController.js";
import { TodosController } from "./controllers/TodosController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { WeatherController } from "./controllers/WeatherController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: [ImagesController, QuoteController, WeatherController, TodosController],
    view: /*html*/`




    <div class="offcanvas offcanvas-start clear-card text-light" tabindex="-1" id="todoOffCanvas" aria-labelledby="Todo">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasLabel">Add a new todo to your list:</h5>
        <button class="text-light" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>



      <form class="offcanvas-body" onsubmit="app.TodosController.createTodo()">
        <div class="mb-3">
          <label for="description" class="form-label"></label>
          <input name="description" type="text" class="description" id="description" placeholder="Add Todo">
          <button type="submit" class="mdi mdi-plus-box"></button>
        </div>
      
        <div class="mb-3">
          have list of todos here with checkmarks
        </div>
      </form>
    </div>









    <section class="container-fluid clear-card">

      <div class="col-3">
        <div class="card text-dark">
          <div class="row">
            <div class="col-6">
              <h3 id="city"></h3>
            </div>
            <div class="col-6">
              <p id="temperature"></p>
            </div>
          </div>
        </div>


        

      </div>

      <h2 class="text-light" id="quote"></h2>

      <button class="btn btn-success" data-bs-toggle="offcanvas" data-bs-target="#todoOffCanvas">Add a todo</button>

    </section>

    


    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */