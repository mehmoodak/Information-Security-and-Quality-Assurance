/**
 * External Imports
 */
const express = require('express');

/**
 * Internal Imports
 */
const IssueController = require('./../controllers/issueController');

/**
 * Initializations
 */
const router = express.Router();

// Routes
router
  .get('/:projectname', (req, res) => {
    const projectName = req.params.projectname;
    const filters = req.query;

    return IssueController.getIssueList(projectName, filters)
      .then((issueList) => {
        res.json({
          success: true,
          data: issueList,
        });
      }).catch(() => {
        res.status(200).json({
          success: false,
          msg: 'Error while searching issue',
        });
      });
  })
  .post('/:projectname', (req, res) => {
    const issue = {
      project: req.params.projectname,
      ...req.body,
    };

    return IssueController.addIssue(issue)
      .then((newIssue) => {
        res.json({
          success: true,
          data: newIssue,
        });
      }).catch(() => {
        res.status(200).json({
          success: false,
          msg: 'Error while creating new issue',
        });
      });
  })
  .put('/:projectname', (req, res) => {
    // eslint-disable-next-line
    const id = req.body._id;
    const valuesToUpdate = Object.assign({}, req.body);
    // eslint-disable-next-line
    delete valuesToUpdate._id;

    if (!id || !Object.keys(valuesToUpdate).length) {
      return res.json({
        success: false,
        msg: 'Empty id or values to update',
      });
    }

    return IssueController.updateIssue(id, valuesToUpdate)
      .then((updatedIssue) => {
        res.json({
          success: true,
          data: updatedIssue,
        });
      }).catch(() => {
        res.status(200).json({
          success: false,
          msg: `Error while updating issue with id ${id}`,
        });
      });
  })
  .delete('/:projectname', (req, res) => {
    // eslint-disable-next-line
    const id = req.body._id;

    if (!id) {
      return res.json({
        success: false,
        msg: 'Empty or invalid id.',
      });
    }

    return IssueController.deleteIssue(id)
      .then((deletedIssue) => {
        res.json({
          success: true,
          data: deletedIssue,
        });
      }).catch(() => {
        res.status(200).json({
          success: false,
          msg: `Error while deleting issue with id ${id}`,
        });
      });
  });

module.exports = router;
