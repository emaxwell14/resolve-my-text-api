const express = require('express');

const ERROR_MSG_MISSING_NUMBER_PARAM = 'Request body must contain number field';
const ERROR_MSG_INVALID_NUMBER_PARAM = 'Request body number field must be an integer';

module.exports = {
  getRouter,
  computeLetters, // For unit tests
};

function computeLetters({ body: { number } }, res) {
  if (number && Number.isInteger(number)) {
    return res.status(200).send();
  }

  const error = number
    ? ERROR_MSG_INVALID_NUMBER_PARAM
    : ERROR_MSG_MISSING_NUMBER_PARAM;

  return res.status(422).send({ error });
}

function getRouter() {
  const router = express.Router();
  router.post('/', computeLetters);
  return router;
}
