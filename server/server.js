// import Express functionality and init Port on 3000
const express = require('express');
const PORT = 3000;

// init const app as express server
const app = express.use();



// Catch-all route
app.get('*', (req, res) => {
  res.sendStatus(404);
});

// Global error handler
app.use((err, req, res, next) => {
  console.log(err);
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(port, host, () => {
  console.log(`server started on ${PORT}`);
});

// API KEY
// UoizyCJ9LAb16Izq5eFbLulx4xzDSvodXoRV2glO
