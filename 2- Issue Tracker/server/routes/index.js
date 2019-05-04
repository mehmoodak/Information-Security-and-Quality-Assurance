/**
 * External Imports
 */
const express = require('express');

/**
 * Internal Imports
 */
const issueRoutes = require('./issues');

/**
 * Initializatiosn
 */
const router = express.Router();

// Routes
router.use('/api/issues', issueRoutes);

module.exports = router;
