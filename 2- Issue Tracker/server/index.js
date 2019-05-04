/**
 * External Imports
 */
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

/**
 * Internal Imports
 */
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

/**
 * Routes
 */
app.use('/', routes);

app.listen(process.env.PORT);
