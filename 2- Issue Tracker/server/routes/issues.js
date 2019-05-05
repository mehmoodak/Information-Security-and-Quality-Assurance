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
    console.log(req.params.projectname);
    console.log(req.query);
    res.json({
      success: true,
      msg: 'List all available filtered issues of the project',
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
      }).catch((err) => {
        res.status(400).json({
          success: false,
          msg: 'Error while creating new issue',
        });
      });
  })
  .put('/:projectname', (req, res) => {
    console.log(req.params.projectname);
    console.log(req.body);
    res.json({
      success: true,
      msg: 'Update the issue of the project',
    });
  })
  .delete('/:projectname', (req, res) => {
    console.log(req.params.projectname);
    console.log(req.body);
    res.json({
      success: true,
      msg: 'Delete the issue of the project',
    });
  });

module.exports = router;
