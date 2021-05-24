const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

module.exports = mongoose.model('Snippet', snippetSchema);