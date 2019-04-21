// External Imports.
require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

// Internal Imports
const routes = require('./routes');
const config = require('./configs');

// Initialisatons.
const app = express();

// App Settings
app.use(cors({
  origin: config[process.env.NODE_ENV].origin + process.env.PORT,
}));
app.use(express.static('public'));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
// Set Locals
app.locals.title = config[app.get('env')].sitename;

// Routes.
app.use('/', routes);

// Start server.
app.listen(process.env.PORT);
