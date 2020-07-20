const contacts = require('../data/contacts')

//list
const list = (req, res) => {
  res.json(contacts)
}

//show
const show = (req, res) => {
  const contact = contacts.find(function(item) {
    return item._id == req.params.id
  })
  res.json(contact)
}


//create
const create = (req, res) => {
  const newContact = {
    _id: contacts.length +1,
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  }
  contacts.push(newContact)
}

module.exports = {
  list,
  show,
  bcreate
}
