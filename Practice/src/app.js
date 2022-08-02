const path = require('path')
const express = require('express')
var hbs = require('hbs')
const app = express()
const publicDirectory = path.join(__dirname, '../public/');
app.use(express.static(publicDirectory))


const viewPath = path.join(__dirname, '../Templates/views')
const partialPath = path.join(__dirname,'../Templates/partials')
app.set('views', viewPath);
app.set('view engine', 'hbs')
hbs.registerPartials(partialPath)


app.get('', (req, res) => {
    res.render('index',{name:'sam','address':'surat'})
})
app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000)