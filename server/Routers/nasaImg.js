const express = require('express');
const path = require('path');
const router = express.Router();
const sessionController = require('../controllers/sessionController');
const yelpController = require('../controllers/yelpController');

router.get('/', sessionController.isLoggedIn, yelpController.getData, (req, res) => {
  return res.status(200).json(res.locals.rawData);
});

// router.get('/', yelpController.getData, (req, res) => {
//   return res.status(200).json(res.locals.rawData);
// });

router.post('/search', sessionController.isLoggedIn, yelpController.searchData, (req, res) => {
  console.log('inside the yelp router');
  return res.status(200).json(res.locals.rawData);
});

module.exports = router;
