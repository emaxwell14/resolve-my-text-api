/* eslint-disable no-console */
const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./src/routes');

const app = express();
const port = process.env.PORT;

// Define middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(api.getRouter());

// Error handler
app.use((error, req, res, next) => {
  console.log(chalk.red('Error handler: '), error);
  res.status(error.status || 500).send({ error });
  next();
});

// Start server
app.listen(port, err => {
  if (err) {
    console.log(chalk.red('Server Error: '), err);
  }
  console.log(chalk.blue(`Server is listening on ${port}`));
});
