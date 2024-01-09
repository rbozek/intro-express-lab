// import modules
import express from 'express'
import { todos } from './data/todo-data.js'
// OR:  (jackson recommended NOT this method, use first / more specific - created problems when I was trying to access data later)
// import * as todoData from './data/todo-data.js'

// create Express app
const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')


// mount Middleware (app.use)


// Mount routes
app.get('/todos', function(req, res) {
 res.render('todos/index', {
   todos: todos
 })
})

app.get('/', function(req, res) {
 res.send('<h1>Hello Express in main / path</h1>')
})

app.get('/home', function(req, res) {
 res.render('home')
})

app.get('/icecream', function(req, res) {
 res.send('<h1>Testing routing to ice cream path</h1>')
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})