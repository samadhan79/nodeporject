var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Tops')

db = mongoose.connection;
db.once('open',function(){
    console.log('connected...')
})

var BookSchema = mongoose.Schema({
    name:String,
    price:Number,

});
module.exports = mongoose.model('Book',BookSchema)
