/**
 * Intenal Imports
 */
const Issue = require('../models/Issues');

module.exports = {

  /**
  * Add issue
  *
  * @param {string} projectName name of the project.
  * @param {object} filters filters for targetting our search.
  * @return {array} list of issues specified for the given project.
  */
  getIssueList(projectName, filters) {
    const query = {
      ...filters,
      project: projectName,
    };

    return new Promise((resolve, reject) => {
      Issue.find(query, (err, issues) => {
        if (err) {
          // console.log(err)
          return reject(new Error('Error while searching issues'));
        }

        return resolve(issues);
      });
    });
  },

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
          // console.log(err);
          return reject(new Error('Error while creating issue'));
        }

        return resolve(newIssue);
      });
    });
  },

  /**
   * For updating the issue
   *
   * @param {integer} id id of the issue
   * @param {object} valuesToUpdate values needs to be updated
   */
  updateIssue(id, valuesToUpdate) {
    const updateObj = Object.assign(valuesToUpdate, { updated_on: new Date() });

    return new Promise((resolve, reject) => {
      Issue.findOneAndUpdate({ _id: id }, updateObj, { new: true }, (err, updatedIssue) => {
        if (err) {
          // console.log(err)
          return reject(new Error('Error while creating issue'));
        }

        return resolve(updatedIssue);
      });
    });
  },

  /**
   * For deleting the issue.
   *
   * @param {integer} id id of the issue.
   */
  deleteIssue(id) {
    return new Promise((resolve, reject) => {
      Issue.findByIdAndDelete(id, (err, deletedIssue) => {
        if (err) {
          // console.log(err)
          return reject(new Error('Error while deleting issue'));
        }

        return resolve(deletedIssue);
      });
    });
  },
};
