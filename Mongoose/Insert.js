var Book = require('./database')


var book1 = new Book({
    name:"HTML",
    price:5000
})
book1.save(function(err,book){
    console.log(book.name)
})