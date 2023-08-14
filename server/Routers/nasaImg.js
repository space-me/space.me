const express = require('express');
const path = require('path');
const nasaImgRouter = express.Router();

// router.get('/', sessionController.isLoggedIn, yelpController.getData, (req, res) => {
//   return res.status(200).json(res.locals.rawData);
// });

// router.get('/', yelpController.getData, (req, res) => {
//   return res.status(200).json(res.locals.rawData);
// });

nasaImgRouter.get('/search', sessionController.isLoggedIn, yelpController.searchData, (req, res) => {
  console.log('inside the yelp router');
  return res.status(200).json(res.locals.rawData);
});

module.exports = nasaImgRouter;
