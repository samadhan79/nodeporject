const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const staticPath = path.join(__dirname,"../public/");
app.use(express.static(staticPath))
app.get('/',function(req,res){
    // res.render("index1")
})
app.get('/blog',function(req,res){
    res.sendFile(path.join(__dirname,'../public/blog.html'));
})
app.get('/products',function(req,res){
    res.sendFile(path.join(__dirname,'../public/products.html'));
})
app.get('/contact',function(req,res){
    res.sendFile(path.join(__dirname,'../public/contact.html'));
})

app.listen(3000)