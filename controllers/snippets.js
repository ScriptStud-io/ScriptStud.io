/*******  START: IMPORT STATEMENTS  *******/
const Snippet = require('../models/snippet');           // import the snippet data model
/*******  END: IMPORT STATEMENTS  *******/


/**   ABOUT THIS FILE!
 *
 *    This file holds CRUD controller functions for the snippet data model.
 *    Functions are organized in the C-R-U-D sequence (Create, Read, Update, Destroy).
 *        Within each section, functions are organized from most general to most specific.
 * 
 *    Unless otherwise noted, there is no need for these functions to appear in any order
 *        except as a matter of organization.  In some cases, two separate functions may be 
 *        chained in that one function triggers another.  This will be noted in cases where
 *        it occurs.
 */


/*******  START: CREATE FUNCTIONS  *******/
function create(req, res) {                             // create a new snippet
  req.body.addedBy = req.user._id;                      // add reference to identify user creating the snippet
  req.body.isPrivate = !!req.body.isPrivate;            // specify the snippet as public or private to user
  Snippet.create(req.body)                              // this starts the code block that actually makes the snippet
    .then(snippet => {res.json(snippet)})               
    .catch(err => {res.json(err)});
}
/*******  START: CREATE FUNCTIONS  *******/


/*******  START: READ FUNCTIONS  *******/
function index(req, res) {                               // return all snippets in the database
  Snippet.find({})
    .populate('addedBy')
    .then(snippets => res.json(snippets))
    .catch(err => {res.json(err)})
}

function getOneSnip(req, res) {                         // return one snippet by document id
  Snippet.findById(req.params.id)
    .then(snippet => res.json(snippet))
    .catch(err => res.json(err))
}
/*******  END: READ FUNCTIONS  *******/


/*******  START: UPDATE FUNCTIONS  *******/
function update(req,res) {                              // function to update a snippet
  Snippet.findByIdAndUpdate(req.params.id, req.body)
    .then(snippet => {res.json(snippet)})
    .catch(err => res.json(err))
}
/*******  END: UPDATE FUNCTIONS  *******/


/*******  START: UPDATE FUNCTIONS  *******/
function deleteOne(req,res) {
  Snippet.findByIdAndDelete(req.params.id)
    .then(snippet => res.json(snippet))
    .catch(err => res.json(err));
}
/*******  END: UPDATE FUNCTIONS  *******/

module.exports = {
  create,                   // 'Create' functions
  index, getOneSnip,        // 'Read' functions
  update,                   // 'Update' functions
  delete: deleteOne         // 'Destroy' functions
}