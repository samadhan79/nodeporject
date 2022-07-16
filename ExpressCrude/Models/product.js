const db = require('../database.js')
const mongoose = require('mongoose')
const ProductsSchema = new mongoose.Schema({
    Name:String,
    Price:String,
});

module.exports = mongoose.model("Product",ProductsSchema)
