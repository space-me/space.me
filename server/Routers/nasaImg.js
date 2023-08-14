const express = require('express');
const path = require('path');
const nasaImgRouter = express.Router();
const { nasaImgController } = require('../Controllers/nasaController.js');

// router.get('/', sessionController.isLoggedIn, yelpController.getData, (req, res) => {
//   return res.status(200).json(res.locals.rawData);
// });

// router.get('/', yelpController.getData, (req, res) => {
//   return res.status(200).json(res.locals.rawData);
// });

nasaImgRouter.get('/search', nasaImgController.getData, (req, res) => {
  console.log('inside the nasaImgRouter');
  return res.status(200).json(res.locals.resultsObject);
});

module.exports = nasaImgRouter;
