// Express App Setup
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialization
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers
app.get('/test', (req, res) => {
  res.status(200).send({ text: 'This simple Node.js App Is Working As Expected! Yes!' });
});

module.exports = app;
