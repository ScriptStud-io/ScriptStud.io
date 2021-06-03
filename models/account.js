/******* START: IMPORT STATEMENTS *******/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/******* END: IMPORT STATEMENTS *******/


/******* START: MAIN SCHEMA *******/
const accountSchema = new Schema({
    accountUser: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    accountSavedSnippets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Snippet' }],
    accountGitHubUrl: { type: String },
    accountGitHubHandle: { type: String },
    accountStackOverflowUrl:  { type: String },
    accountStackOverflowHandle: { type: String },
    accountTwitterUrl: { type: String },
    accountTwitterHandle: { type: String },
    accountLinkedInUrl: { type: String },
    accountPersonalWesbiteUrl: { type: String }
}, { timestamps: true });
/******* END: MAIN SCHEMA *******/


/******* START: EXPORTS *******/
module.exports = mongoose.model('Account', accountSchema);
/******* END: EXPORTS *******/