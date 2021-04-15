const Snippet = require('../models/snippet')

module.exports = {
  create,
}

function create(req, res) {
    req.body.addedBy = req.user._id
    Snippet.create(req.body)
    .then(snippet => {res.json(snippet)})
    .catch(err => {res.json(err)})
}