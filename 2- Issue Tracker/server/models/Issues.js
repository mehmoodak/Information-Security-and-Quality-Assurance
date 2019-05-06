/**
 * External Imports
 */
const mongoose = require('mongoose');

const { Schema } = mongoose;

const IssueSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  created_by: { type: String, required: true },
  assigned_to: { type: String, default: '' },
  status: { type: String, default: '' },
  open: { type: Boolean, required: true, default: true },
  project: { type: String, required: true },
  created_on: { type: Date, default: Date.now },
  updated_on: { type: Date, default: Date.now },
});

const Issue = mongoose.model('Issue', IssueSchema, 'issue');

module.exports = Issue;
