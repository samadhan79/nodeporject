var Book = require('./database')

Book.findByIdAndRemove("62d0eabe86507d6e0ab64dc2",function(err,data){
    console.log(data)
})