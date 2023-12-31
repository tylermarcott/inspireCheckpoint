import { AppState } from "./AppState.js";
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


        <div id="uncompleted-count"></div>


        <h5 class="offcanvas-title" id="offcanvasLabel">Add a new todo to your list:</h5>

        
        <button class="text-light" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>



      <form class="offcanvas-body" onsubmit="app.TodosController.createTodo()">
        <div class="mb-3">
          <label for="description" class="form-label"></label>
          <input class="rounded p-1" name="description" type="text" class="description" id="description" placeholder="Add Todo">
          <button type="submit" class="mdi mdi-plus-box"></button>
        </div>
      
        <div class="mb-3">
        
         <div id="todoList" class="container-fluid"></div>
        

        </div>
      </form>
    </div>









    <section class="container-fluid clear-card">

    <div class="text-light p-2 fs-5" id="clock"></div>

      <div class="col-3 p-2 clickable">
        <div class="card text-dark">
          <div class="row" onclick="app.WeatherController.switchTemperature()">
            <div class="col-6">
              <h3 class="p-1" id="city"></h3>
            </div>
            <div class="col-6">
              <p class="mt-2 fs-4" id="temperature"></p> 
            </div>
          </div>
        </div>


        

      </div>

      <div class="p-2 ms-3 clickable">
        <h2 class="text-light" id="quote"></h2>
        <h4 class="text-light ms-5" id="author"></h4>
      </div>

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