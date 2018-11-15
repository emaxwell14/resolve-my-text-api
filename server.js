/* eslint-disable no-console */
const express = require('express');
const chalk = require('chalk');

const app = express();
const router = express.Router();

// TODO setup config with nodemon
const port = 8080;

router.get('/', (req, res) => res.json({ data: 'test api' }));
app.use(router);

// Error handler
app.use((error, req, res, next) => {
  console.log(chalk.red('Error handler: '), error);
  res.status(error.status || 500).send({ error });
  next();
});


// Start server
app.listen(port, (err) => {
  if (err) {
    console.log(chalk.red('Server Error: '), err);
  }
  console.log(chalk.blue(`Server is listening on ${port}`));
});
