/**
 * External Imports
 */
const express = require('express');

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
    console.log(req.params.projectname);
    console.log(req.body);
    res.json({
      success: true,
      msg: 'Add issue to the project',
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
