const express = require('express')
const app = express()
const port = 3000
app.get('/',function(req,res){
    res.end("<h1>Hello NodeJs</h1>")
})
app.get('/about',function(req,res){
    res.send("<h1>About</h1>")
    
})
app.get('/contact',function(req,res){
    res.end("<h1>Contact..</h1>")
})
app.get('/user',function(req,res){
    res.json({
        name:"sam",
        email:null
    })
})


app.listen(port,()=>{
    console.log('Server Started.....')
})