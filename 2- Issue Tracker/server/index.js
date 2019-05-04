/**
 * External Imports
 */
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

/**
 * Initializations
 */
const app = express();


/**
 * Middlewares
 */
app.use(helmet.xssFilter());

/**
 * Routes
 */
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(process.env.PORT);
