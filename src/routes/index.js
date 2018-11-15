const express = require('express');
const letterRoutes = require('./letterRoute');

module.exports = {
  getRouter,
};

function getRouter() {
  const router = express.Router();
  router.use(letterRoutes.getRouter());
  return router;
}
