// External Imports
const express = require('express');

// Initializations
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Metric Imperial Calculator');
});

module.exports = router;
