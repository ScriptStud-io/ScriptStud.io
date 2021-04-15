const router = require('express').Router();
const snippetsCtrl = require('../controllers/snippets');

// Public Routes


// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, snippetsCtrl.create)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;