var express = require('express');
const { render } = require('pug');
var router = express.Router();
const Product = require('../Models/product.js')

router.get('/', async function (req, res) {
   const product = await Product.find()
   res.render('index', { products: product })
})
router.get('/add', function (req, res) {

   res.render('addproduct')
})
router.post('/add', async function (req, res) {
      const product = new Product(req.body)
      product.save()
      res.redirect('/')
})
router.get('/delete/:id', async function (req, res) {
   const id = req.params.id
   const product = await Product.findByIdAndDelete(id)
   res.redirect('/')

})
router.get('/edit/:id', async function (req, res) {
   const id = req.params.id
   const product = await Product.findById(id)
   console.log(product)
   res.render('editproduct',{product:product})

})
router.post('/edit/:id', async function (req, res) {
   const id = req.params.id
   const product = await Product.findByIdAndUpdate(id,req.body)
   res.redirect('/')

})


module.exports = router