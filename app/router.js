import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ImagesController } from "./controllers/ImagesController.js";
import { QuoteController } from "./controllers/QuoteController.js";
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
    controller: [ImagesController, QuoteController, WeatherController],
    view: /*html*/`


    <div class="card text-dark">weather goes here
    <h3 id="city"></h3>
      <p id="temperature"></p> deg F
    </div>

    <h2 class="text-light" id="quote">Test Text</h2>

    


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