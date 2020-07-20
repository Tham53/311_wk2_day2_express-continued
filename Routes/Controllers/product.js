const products = require('../data/products')

const list = (req, res) => {
  res.json(products)
}

const show = (req, res) => {
  const product = products.find(function(item){
    return item._id == req.params.id
    })
    res.json(product)
}

const create = (req, res) => {
  const newProduct = {
    _id: products.length +1,
    name: req.body.name,
    description: req.body.description
  }
    products.push(newProduct)
}

module.exports = { 
  list,
  show,
  create
}