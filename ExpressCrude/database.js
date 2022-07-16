const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/MyDb").then(() => {
    console.log('connected...')
})
var conn = mongoose.connection;
conn.on('connected', function () {
    console.log('Connected...')
})
conn.on('disconnected', function () {
    console.log('Disconnecte...')
})

module.exports = conn