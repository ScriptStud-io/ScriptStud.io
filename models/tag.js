/******* START: IMPORT STATEMENTS *******/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/******* END: IMPORT STATEMENTS *******/


/******* START: MAIN SCHEMA *******/
const tagSchema = new Schema({
    tagText: {type: String, required: true},
    taggedSnippets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Snippet' }],
}, { timestamps: true });
/******* END: MAIN SCHEMA *******/


/******* START: EXPORTS *******/
module.exports = mongoose.model('Tag', tagSchema);
/******* END: EXPORTS *******/