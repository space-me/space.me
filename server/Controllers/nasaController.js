const nasaImgController = {};
// const TOKEN = 'UoizyCJ9LAb16Izq5eFbLulx4xzDSvodXoRV2glO'; dont need api token to retrieve this data
const query = 'mars'; // Your search query

nasaImgController.getData = async (req, res, next) => {
  try {
    
    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}&media_type=image`, {
      // headers: {
      //   'Authorization': `Bearer ${TOKEN}`
      // }
    });

    if (response.ok) {
      const data = await response.json();
      res.locals.resultsObject = data;
      return next();
    } else {
      throw new Error(`NASA API request failed with status ${response.status}`);
    }
  } catch (error) {
    console.log('caught error', error);
    return next({
      log: `Express error handler caught unknown middleware error: ERROR : ${error}`,
      status: error.status || 400,
    });
  }
};

module.exports = { nasaImgController };

