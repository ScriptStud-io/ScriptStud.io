const User = require("../models/user")

function index(req, res) {
  console.log("req.user", req.user);
  User.find({})
  .then(users => res.json(users))
}

module.exports = {
  index,
}