// External Imports.
require('dotenv').config();
const express = require('express');

// Initialisatons.
const app = express();
app.use(express.static('public'));
// eslint-disable-next-line no-underscore-dangle
app.engine('pug', require('pug').__express);

// Routes.
app.get('/api/convert', (req, res) => {
  res.send('Metric Imperial Calculator');
});

app.use((req, res) => {
  res.status(404).send('Error 404, Not Found.');
});

// Start server.
app.listen(process.env.PORT);
