/**
 * Intenal Imports
 */
const Issue = require('../models/Issues');

module.exports = {

  /**
  * Add issue
  *
  * @param {object} issue object which represents the issue.
  * @return {object} represents the issue successfully created.
  */
  addIssue(issueObject) {
    return new Promise((resolve, reject) => {
      Issue.create(issueObject, (err, newIssue) => {
        if (err) {
          // console.log(err)
          return reject(new Error('Error while creating issue'));
        }

        // eslint-disable-next-line
        newIssue.__v = undefined; // for matching the response

        return resolve({
          success: true,
          data: newIssue,
        });
      });
    });
  },
};
