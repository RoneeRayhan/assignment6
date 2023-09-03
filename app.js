const express = require('express');
const app = express();
const apiRouter = require('./src/Routes/api');

// Middleware
app.use(express.json());

// Routes
app.use('/api', apiRouter);

module.exports = app;
