/**
 * External Imports
 */
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');

/**
 * Internal Imports
 */
const { initDb } = require('./db');
const routes = require('./routes');

/**
 * Initializations
 */
const app = express();
const router = express.Router();

/**
 * Middlewares
 */
app.use(helmet.xssFilter());
router.use(express.static(`${__dirname}/public`));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/**
 * Routes
 */
app.use('/', routes);

// 400 error
// eslint-disable-next-line no-unused-vars
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    data: {
      message: `Route ${req.url} not found.`,
    },
  });
});

// 500 error
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    data: {
      message: '500 server error',
      stack: err.stack,
    },
  });
});

initDb(() => {
  app.listen(process.env.PORT, (err) => {
    if (err) throw err;

    console.log('Issue Tracker API up and running...');
  });
});
