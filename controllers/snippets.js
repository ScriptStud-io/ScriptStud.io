const Snippet = require('../models/snippet')

module.exports = {
  create,
  index,
  getOneSnip,
  delete: deleteOne,
  update,
}

function update(req,res) {
  Snippet.findByIdAndUpdate(req.params.id, req.body)
  .then(snippet => {res.json(snippet)})
  .catch(err => {res.json(err)})
}

function deleteOne(req,res) {
  Snippet.findByIdAndDelete(req.params.id)
  .then(snippet => {res.json(snippet)})
  .catch(err => {res.json(err)})
}

function index(req,res) {
  Snippet.find({})
    .populate('addedBy')
    .then(snippets => res.json(snippets))
    .catch(err => {res.json(err)})
}                                 

function getOneSnip(req, res) {
  Snippet.findById(req.params.id)
    .then(snippet => res.json(snippet))
    .catch(err => res.json(err))
}

function create(req, res) {
    req.body.addedBy = req.user._id
    Snippet.create(req.body)
    .then(snippet => {res.json(snippet)})
    .catch(err => {res.json(err)})
}