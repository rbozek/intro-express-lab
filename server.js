// import modules
import express from 'express'
import { instruments } from './data/instruments-data.js'

// create Express app
const app = express()

// configure the app (app.set)
app.set('view engine', 'ejs')

// mount Middleware (app.use)

// mount routes
// NOTE - the naming of instruments: instruments is the confusing bit - Jackson re explained, we're adding a new key:value property, with "instruments" as name and 'instruments' object we imported as value! Could have called the key anything, like bacon: instruments
app.get('/instruments', function(req, res) {
  res.render('instruments/index', {
    instruments: instruments,
    name: 'Rich',   // i added to show key:value properties reminder
    otherthing: 'another thing!'
  }) 
})  


app.get('/', function(req, res) {
  res.send('<h1>main directory test</h1>')
})

app.get('/home', function(req, res) {
  // res.render('home')
  res.send('<h1>Testing homepage</h1>')
})
// THIS WILL OVERRIDE CODE ABOVE, if it's moved first & active!
// app.get('/home', function(req, res) {
//   res.send('<h1>Testing homepage!</h1>')
// })

app.get('/', function(req, res) {
  res.redirect('/home')
})




// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})