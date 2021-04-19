const router = require('express').Router();
const snippetsCtrl = require('../controllers/snippets');

// Public Routes
router.get('/snip/all', snippetsCtrl.index);
router.get('/snip/:id', snippetsCtrl.getOneSnip)

// Protected Routes
router.use(require('../config/auth'));
router.post('/', checkAuth, snippetsCtrl.create)
router.put('/:id', checkAuth, snippetsCtrl.update)
router.delete('/:id', checkAuth, snippetsCtrl.delete)

function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;