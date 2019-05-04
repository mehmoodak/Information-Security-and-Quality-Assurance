/**
 * External Imports
 */
const mongoose = require('mongoose');

/**
 * Initializations
 */
const { Schema } = mongoose;

const IssueSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  created_by: { type: String, required: true },
  assigned_to: { type: String, required: true, default: '' },
  status: { type: String, required: true, default: '' },
  open: { type: Boolean, required: true, default: true },
  project: { type: String, required: true },
  created_on: { type: Date, defaut: Date.now() },
  updated_on: { type: Date, defaut: Date.now() },
});

const Issue = mongoose.model('Issue', IssueSchema);

module.exports = Issue;
