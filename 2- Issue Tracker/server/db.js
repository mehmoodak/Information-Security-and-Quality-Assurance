/**
 * External Imports
 */
const mongoose = require('mongoose');
const assert = require('assert');

const dbString = process.env.DB;
let db;

/**
 * Initializes the database connection
 *
 * @param {function} callback
 */
function initDb(callback) {
  function connected(err, database) {
    if (err) {
      return callback(err);
    }

    console.log(`DB initialized - connected to: ${dbString.split('@')[1]}`);
    return callback(null, database);
  }

  if (db) {
    console.warn('Trying to init DB again!');
    return callback(null, db);
  }

  db = mongoose.connect(dbString, { useNewUrlParser: true }, connected);
  return null;
}
/**
 * Get the connected database instance.
 */
function getDb() {
  assert.ok(db, 'Db has not been initialized. Please called init first.');
  return db;
}

module.exports = {
  initDb,
  getDb,
};
