const express = require('express');
const letterRoute = require('./letterRoute');

module.export = {
  getRouter,
};

function getRouter() {
  const router = express.Router();
  router.post('/', letterRoute);
  return router;
}
