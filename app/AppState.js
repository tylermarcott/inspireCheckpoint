import { Todo } from "./models/Todo.js"
import { Value } from './models/Value.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { isValidProp } from './utils/IsValidProp.js'
import { loadState } from './utils/Store.js'

class ObservableAppState extends EventEmitter {





  /** @type {Image|null} */
  randomImage = null


  /** @type {Quote|null} */
  randomQuote = null

  /** @type {Author|null} */
  quoteAuthor = null

  /** @type {Weather|null} */
  weather = null

  /** @type {Todo} */
  // @ts-ignore
  activeTodo = null

  /** @type {Todo[]} */
  todosList = []

  weatherTracker = true



  page = ''
  user = null
  /** @type {import('./models/Account.js').Account | null} */
  // @ts-ignore
  account = null
  /** @type {import('./models/Value.js').Value[]} */
  values = loadState('values', [Value])
  socketData = []

  // Used to load initial data
  init() {

  }
}

export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})