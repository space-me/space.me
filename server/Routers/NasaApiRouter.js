const express = require('express');
const NasaImgRouter = express.Router();
const { NasaImgController } = require('../Controllers/NasaController.js');

NasaImgRouter.get('/apod', NasaImgController.picOfDay, (req, res) => {
  return res.status(200).json(res.locals.returnObject);
});

NasaImgRouter.get('/search', NasaImgController.getData, (req, res) => {
  return res.status(200).json(res.locals.resultsObject);
});

module.exports = { NasaImgRouter };
