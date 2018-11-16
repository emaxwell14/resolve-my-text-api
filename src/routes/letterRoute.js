const express = require('express');
const { UNPROCESSABLE_ENTITY, OK } = require('http-status-codes');
const { letterService } = require('../services');

module.exports = {
  getRouter,
  computeLetters, // For unit tests
};

function computeLetters({ body: { number } }, res) {
  try {
    const data = letterService.computeLettersForNumber(number);
    return res.status(OK).send({ data });
  } catch ({ message }) {
    return res.status(UNPROCESSABLE_ENTITY).send({ error: message });
  }
}

function getRouter() {
  const router = express.Router();
  router.post('/', computeLetters);
  return router;
}
