const express = require('express')
const router = express.Router()
const ProductsController = require('../controllers/product')

router.get('/products', ProductsController.list)
router.get('/products/:id', ProductsController.show)
router.post('/product', ProductsController.create)

module.exports = router