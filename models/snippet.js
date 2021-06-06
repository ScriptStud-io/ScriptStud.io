/******* START: IMPORT STATEMENTS *******/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
/******* END: IMPORT STATEMENTS *******/

/******* START: MAIN SCHEMA *******/
const snippetSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	purpose: {
		type: String,
		required: true
	},
	generic: {
		type: String
	},
	notes: {
		type: String
	},
	sample: {
		type: String
	},
	isPrivate: {
		type: Boolean
	},
	tags: {
		type: [String]
	},
	addedBy: { type: Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true })
/******* END: MAIN SCHEMA *******/

/******* START: EXPORTS *******/
module.exports = mongoose.model('Snippet', snippetSchema);
/******* END: EXPORTS *******/