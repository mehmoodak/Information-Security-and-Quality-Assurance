// External Imports
const express = require('express');

// Internal Imports
const { getUnit, getNumber, convert } = require('../services/convertService');

// Initializations
const router = express.Router();

router.get('/', (req, res) => {
  const { input } = req.query;

  const number = getNumber(input);
  const unit = getUnit(input);
  const response = convert(number, unit);

  return res.status(response.success ? 200 : 400).json(response);
});

module.exports = router;
