const express =  require('express')
const app = express()
//const db = require('./database.js')

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

var hbs = require('hbs')
app.set('view engine', 'hbs')
app.set('views', __dirname+'/Templates/views/')

var fetchRouter = require('./Routes/router')

app.use('/',fetchRouter)
app.listen(3000,function(){
   console.log("Server...")
})