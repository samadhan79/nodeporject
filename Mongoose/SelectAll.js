var Book = require('./database')
const book = Book.find(function(err,data){
    console.log(data)
})

