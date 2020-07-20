const vehicles = require('../data/vehicles')

//list
const list = (req, res) => {
res.json(vehicles)
}

//show
const show = (req, res) => {
  const vehicle = comments.find(function(item) {
    return item._id == req.params.id
  })
  res.json(vehicle)
}

//create
const create = (req, res) => {
  const newVehicle = {
    _id: vehicles.length +1,
    body: req.body.body
  }
  vehicles.push(newVehicle)
}

module.exports = {
  list, show, create
}
