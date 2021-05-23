/*******  START: IMPORTS  *******/
const router = require('express').Router();
const snippetsCtrl = require('../controllers/snippets');
/*******  END: IMPORTS  *******/


/*******  START: PUBLIC ROUTES  *******/
router.get('/', snippetsCtrl.index);                    // route for index view (show all snippets)
router.get('/:id', snippetsCtrl.getOneSnip);            // route to view individual snippet
/*******  END PUBLIC ROUTES ROUTES  *******/


/*******  START: PROTECTED ROUTES  *******/
router.use(require('../config/auth'));
router.post('/', checkAuth, snippetsCtrl.create);
router.put('/:id', checkAuth, snippetsCtrl.update);
router.delete('/:id', checkAuth, snippetsCtrl.delete);
/*******  END: PROTECTED ROUTES  *******/


/*******  START: HELPER FUNCTIONS  *******/
function checkAuth(req, res, next) {
    return req.user ? next() : res.status(401).json({msg: 'Not Authorized'});
}
/*******  END: HELPER FUNCTIONS  *******/

module.exports = router;