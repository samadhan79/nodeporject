const axios = require('axios')
const request = require('request');
const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const staticPath = path.join(__dirname, "./public/");
app.use(express.static(staticPath))
app.set('view engine', 'ejs')
app.get('/', (req, res) => {
    res.render('pages/index')
})
app.get('/products', (req, res) => {
        res.render('pages/products')
})

app.get('/blog', (req, res) => {
    res.render('pages/blog')
})
app.get('/contact', (req, res) => {
    res.render('pages/contact')
})
app.get('/api', (req, res) => {
    res.send("APi")
})

app.listen(3000)
