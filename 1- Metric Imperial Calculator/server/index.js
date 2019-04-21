// External Imports.
require('dotenv').config();
const express = require('express');

// Internal Imports
const routes = require('./routes');

// Initialisatons.
const app = express();
app.use(express.static('public'));

// App Settings
// eslint-disable-next-line no-underscore-dangle
app.engine('pug', require('pug').__express);

// Routes.
app.use('/', routes);

// Start server.
app.listen(process.env.PORT);
