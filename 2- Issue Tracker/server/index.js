/**
 * External Imports
 */
require('dotenv').config();
const express = require('express');

/**
 * Initializations
 */
const app = express();

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT);
