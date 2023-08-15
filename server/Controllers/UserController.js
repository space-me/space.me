const db = require('../database/UserModel.js');
const bcrypt = require('bcrypt')

const UserController = {
  // createUser is a function that queries
  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const checkForUser = `SELECT COUNT(*) FROM member WHERE username = $1 OR email = $2`;
    try {
      const response = await db.query(checkForUser, [username, email]);
      const userCount = response.rows[0].count; // Extract the count value
      console.log('response.rows: ', response.rows);
      console.log('userCount OR  response.rows[0].count: ', userCount)
      if (userCount !== '0') {
        res.sendStatus(401);
        return; // Return here to prevent further execution
      }
    } catch (error) {
      return next({
        log: `Error occured in UserController.createUser, line 21 error: ${error}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured, something went wrong'// message to the user
        },
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const insertUser = `INSERT INTO member (username, email, password) VALUES ($1, $2, $3)`;
    try {
      const response = await db.query(insertUser, [username, email, hashedPassword]);
      console.log('line 36: ', response[0]);
      res.locals.userId = response[0];
      
    } catch (error) {
      return next({
        log: `Error occured in UserController.createUser, line 39 error: ${error}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured, something went wrong'// message to the user
        },
      });
    }
    return next();
    
  },
  

  // for login middleware chain
  //   Verify that the user username and password exist and match.
  verifyUser: async (req, res, next) => {
    const { username, password } = req.body;

    //If the user inputted nothing.
    if (!username || !password) {

    }

    //Verify the username exists before checking password
    const verifyUsername = `SELECT COUNT(*) FROM member WHERE username = '${username}'`;
  },

  //Stretch Feature for now.
  forgotPassword: (req, res, next) => {},
};

module.exports = { UserController };


/*
const UserController = {
  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;

    // Check if the username or email already exists
    const checkForUser = `SELECT COUNT(*) FROM member WHERE username = $1 OR email = $2`; // Use parameterized queries
    try {
      const response = await db.query(checkForUser, [username, email]);
      const userCount = response.rows[0].count; // Extract the count value

      if (userCount !== '0') {
        res.sendStatus(401);
        return; // Return here to prevent further execution
      }
    } catch (error) {
      return next({
        log: `Error occurred in UserController.createUser, line 20 error: ${error}`,
        status: 500,
        message: {
          err: 'An error occurred, something went wrong',
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertUser = `INSERT INTO member (username, email, password) VALUES ($1, $2, $3)`; // Use parameterized queries
    try {
      const response = await db.query(insertUser, [username, email, hashedPassword]);
      console.log('line 39: ', response.rows);

      res.locals.userId = response.rows[0]; // Assuming response.rows contains the inserted row's data
    } catch (error) {
      return next({
        log: `Error occurred in UserController.createUser, line 45 error: ${error}`,
        status: 500,
        message: {
          err: 'An error occurred, something went wrong',
        },
      });
    }
    return next();
  },
};

*/