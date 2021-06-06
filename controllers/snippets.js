/*******  START: IMPORT STATEMENTS  *******/
const Snippet = require('../models/snippet');           // import the Snippet data model
const Tag = require('../models/tag');                   // import the Tag data model
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
 * 
 *    Controller functions for the Tag data model are located in this file rather than in a
 *        dedicated tag.js file.  This is because the Tag model exists purely as a way to
 *        organize references to Snippet documents, so all CRUD operations on the Tag model
 *        will be chained to Snippet controller functions.
 */


/*******  START: CREATE FUNCTIONS  *******/
function create(req, res) {                             // create a new snippet
  req.body.addedBy = req.user._id;                      // add reference to identify user creating the snippet
  req.body.isPrivate = !!req.body.isPrivate;            // specify the snippet as public or private to user
  console.log('req.body: ', req.body)
  Snippet.create(req.body)                              // this starts the code block that actually makes the snippet
    .then(snippet => res.json(snippet))
    // .then(snippet => {console.log(snippet); 
    //                   addOrUpdateTagDoc(req, res, snippet)})               
    .catch(err => {res.json(err)});
}

function addOrUpdateTagDoc(req, res, snip) {
  const tagArray = snip.tags.split(', ');
  tagArray.forEach(tag => {
    Tag.exists({tagText: tag}, (err, result) => {
      if (!result) {
        console.log(`tag '${tag}' is not yet in the database`);
        createTagDoc(tag, snip._id);
      } else {
        console.log(`tag '${tag}' is already in the database`);
      }
    })
  });
}

function createTagDoc(newTag, snipId) {
  const tagData = { tagText: newTag, taggedSnippets: snipId };
  Tag.create(tagData);
}
/*******  END: CREATE FUNCTIONS  *******/


/*******  START: READ FUNCTIONS  *******/

    /**   IMPORTANT!  At this time function index() has no use
     *      in the web app, since it would allow any user to 
     *      view snippets created and marked private by other
     *      users.  Though we've deprecated this function, we're
     *      keeping it available here for testing putposes.
     */

function index(req, res) {                               // returns all snippets in the database
  Snippet.find({})                                       // DEPRECATED!  Use only for testing purposes
    .populate('addedBy')
    .then(snippets => res.json(snippets))
    .catch(err => {res.json(err)})
}

function getUserVisibleSnippets(req, res) {
  Snippet.find({
    $or: [
      {isPrivate: false},
      {addedBy: req.params.userid, isPrivate: true}
    ]
  })
    .populate('addedBy')
    .then(snippets => res.json(snippets))
    .catch(err => {res.json(err)})
}

function getUserPrivateSnippets (req, res) {
  Snippet.find({addedBy: req.params.userid, isPrivate: true})
    .populate('addedBy')
    .then(snippets => res.json(snippets))
    .catch(err => {res.json(err)})
}

function getAllPublicSnippets (req, res) {
  Snippet.find({isPrivate: false})
    .populate('addedBy')
    .then(snippets => res.json(snippets))
    .catch(err => {res.json(err)})
}

function indexCurrentUser(req, res) {                   // return all snippets created by the current user
  Snippet.find({addedBy: req.params.userid})
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
function update(req, res) {                              // function to update a snippet
  req.body.isPrivate = !!req.body.isPrivate;             // necessary to allow user to toggle private or public status
  Snippet.findByIdAndUpdate(req.params.id, req.body)
    .then(snippet => {res.json(snippet)})
    .catch(err => res.json(err))
}
/*******  END: UPDATE FUNCTIONS  *******/


/*******  START: UPDATE FUNCTIONS  *******/
function deleteOne(req, res) {
  Snippet.findByIdAndDelete(req.params.id)
    .then(snippet => res.json(snippet))
    .catch(err => res.json(err));
}
/*******  END: UPDATE FUNCTIONS  *******/


/*******  START: EXPORTS  *******/
module.exports = {
  create,                                                                                 // 'Create' functions
  /* Start: READ Functions */
  index,
  getUserVisibleSnippets,
  indexCurrentUser,
  getUserPrivateSnippets,
  getAllPublicSnippets,
  getOneSnip,
  /* End: READ Functions */
  update,                                                                                 // 'Update' functions
  delete: deleteOne                                                                       // 'Destroy' functions
}
/*******  END: EXPORTS  *******/