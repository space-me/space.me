const NasaImgController = {};
const TOKEN = 'UoizyCJ9LAb16Izq5eFbLulx4xzDSvodXoRV2glO';

const baseSearchUrl = 'https://images-api.nasa.gov/search?q=';
const query = 'mars'; // placeholder => hard coded for now
NasaImgController.getData = (req, res, next) => {
  fetch(`${baseSearchUrl}${query}`, {
    headers: {
      Authorization: `Bearer: ${TOKEN}`,
    },
  })
    .then((response) => {
      res.locals.reultsObject = response;
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

// nasaImgController.searchData = (req, res, next) => {
//   console.log('entered search controller');
//   console.log(req.body);
// };

module.exports = { NasaImgController };
