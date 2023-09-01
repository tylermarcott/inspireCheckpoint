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