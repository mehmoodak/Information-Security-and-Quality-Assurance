// External Imports.
require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');

// Internal Imports
const routes = require('./routes');

// Initialisatons.
const app = express();

// App Settings
app.use(express.static('public'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use(helmet.noSniff());

// Routes.
app.use('/', routes);

// Start server.
app.listen(process.env.PORT);
