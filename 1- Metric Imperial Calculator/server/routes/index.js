// External Imports
const express = require('express');

// Internal Imports.
const convertRoute = require('./convert');

// Initializations
const router = express.Router();

router.get('/', (req, res) => res.render('index'));

router.use('/api/convert', convertRoute);

// eslint-disable-next-line no-unused-vars
router.use((req, res, next) => res.status(404).json({
  success: false,
  data: {
    msg: '404 Not Found',
  },
}));

// eslint-disable-next-line no-unused-vars
router.use((err, req, res, next) => res.status(500).json({
  success: false,
  data: {
    msg: '500 Server Error',
    err,
  },
}));

module.exports = router;
