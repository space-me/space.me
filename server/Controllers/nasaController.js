const nasaImgController = {};
const TOKEN = 'UoizyCJ9LAb16Izq5eFbLulx4xzDSvodXoRV2glO';

const baseSearchUrl = '"https://images-api.nasa.gov/search
?q''

nasaImgController.getData = (req, res, next) => {
  fetch()
    .get('https://api.yelp.com/v3/businesses/search', fetchInfo.config)
    .then((response) => {
      res.locals.rawData = response.data;
      return next();
    })
    .catch((error) => {
      //   console.log(err);
      return next({
        log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
        status: error.status || 400,
      });
    });
};

nasaImgController.searchData = (req, res, next) => {
  console.log('entered search controller');
  console.log(req.body);
};

module.exports = nasaImgController;
