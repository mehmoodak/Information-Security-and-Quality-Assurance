// External Imports
const express = require('express');

// Internal Imports
const { getUnit, getNumber, convert } = require('../services/convertService');

// Initializations
const router = express.Router();

router.get('/', (req, res) => {
  const { input } = req.query;

  if (input) {
    const number = getNumber(input);
    const unit = getUnit(input);

    res.json(convert(number, unit));
  } else {
    throw new Error('Invalid Parameters');
  }
});

module.exports = router;
