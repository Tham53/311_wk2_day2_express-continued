const express = require('express')
const app = express()

const products = require('./routers/products')
const vehicles = require("./routers/vehicles")
const comments = require("./routers/comments")
const contacts = require("./routers/contacts")
const port = process.env.PORT || 4001
const bodyParser = require('body-parser')

const vehiclesRoutes = require('./routes/vehicles')
const contactsRoutes = require('./routes/contacts')
const productsRoutes = require('./routes/products')
const commentsRoutes = require('./routes/comments')

app.use(products)
app.use(comments)
app.use(vehicles)
app.use(contacts)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`))
