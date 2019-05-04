/**
 * External Imports
 */
const express = require('express');

/**
 * Initializatiosn
 */
const router = express.Router();

// Routes
router.get('/', (req, res) => {
  res.send('Hello World');
});

module.exports = router;
