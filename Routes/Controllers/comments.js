const comments = require('../data/comments')

//list
const list = (req, res) => {
  res.json(comments)
}


//show
const show = (req, res) => {
  const comment = comments.find(function(item) {
    return item._id == req.params.id
  })
  res.json(comment)
}

//create
const create = (req, res) => {
  const newComment = {
    _id: comments.length +1,
    body: req.body.body
  }
  comments.push(newComment)
}

module.exports = {
  list, show, create
}
