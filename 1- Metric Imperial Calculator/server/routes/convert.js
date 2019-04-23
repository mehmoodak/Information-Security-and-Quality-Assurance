// External Imports
const express = require('express');

// Internal Imports
const ConvertService = require('../services/convertService');

// Initializations
const router = express.Router();
const convertService = new ConvertService();

router.get('/', (req, res) => {
  const { input } = req.query;

  const number = convertService.getNumber(input);
  const unit = convertService.getUnit(input);
  const response = convertService.convert(number, unit);

  return res.status(response.success ? 200 : 400).json(response);
});

module.exports = router;
