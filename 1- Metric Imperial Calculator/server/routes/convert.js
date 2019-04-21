// External Imports
const express = require('express');

// Internal Imports
const { getUnit, getNumber, convert } = require('../services/convertService');

// Initializations
const router = express.Router();

router.get('/', (req, res) => {
  const { input } = req.query;

  if (!input) throw new Error('Invalid Parameters');

  const number = getNumber(input);
  const unit = getUnit(input);

  return res.json(convert(number, unit));
});

module.exports = router;
