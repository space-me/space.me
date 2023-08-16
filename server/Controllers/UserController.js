const db = require("../database/UserModel.js");
const bcrypt = require("bcrypt");

const UserController = {
  // createUser is a function that queries
  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const checkForUser = `SELECT COUNT(*) FROM member WHERE username = $1 OR email = $2`;
    try {
      const response = await db.query(checkForUser, [username, email]);
      const userCount = response.rows[0].count; // Extract the count value
      console.log("response.rows: ", response.rows);
      console.log("userCount OR  response.rows[0].count: ", userCount);
      if (userCount !== "0") {
        res.sendStatus(401);
        return; // Return here to prevent further execution
      }
    } catch (error) {
      return next({
        log: `Error occured in UserController.createUser, line 21 error: ${error}`, // to the develpoper
        status: 500,
        message: {
          err: "an error occured, something went wrong", // message to the user
        },
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const insertUser = `INSERT INTO member (username, email, password) VALUES ($1, $2, $3)`;
    try {
      const response = await db.query(insertUser, [
        username,
        email,
        hashedPassword,
      ]);
      console.log("line 36: ", response[0]);
      res.locals.userID = response[0];
    } catch (error) {
      return next({
        log: `Error occured in UserController.createUser, line 39 error: ${error}`, // to the develpoper
        status: 500,
        message: {
          err: "an error occured, something went wrong", // message to the user
        },
      });
    }
    return next();
  },

  // for login middleware chain
  //   Verify that the user username and password exist and match.
  verifyUser: async (req, res, next) => {
    const { email, password } = req.body;
    console.log("email: ", email);
    console.log("password: ", password);

    //Verify the username exists before checking password
    const findUser = 'SELECT * FROM member WHERE email = $1';
    try {
      const response = await db.query(findUser, [email]);
      const hashedPassword = response.rows[0].password;
      // if username is true and (bycrypt.compare(password and username.password)) is true
      const passwordFromDB = await bcrypt.compare(password, hashedPassword);
      if (email && passwordFromDB) {
        res.locals.userID = response.rows[0].id;
        console.log("res.locals.userID: ", res.locals.userID);
        return next();
      }
      // res.locals.userId = response[0]
      //
    } catch (error) {
      return next({
        log: `Error occured in verifyUser Catch: ${error}`, // to the develpoper
        status: 400,
        message: {
          err: "username or password incorrect", // message to the user
        },
      });
    }
  },

  //Stretch Feature for now.
  // forgotPassword: (req, res, next) => {},
};

module.exports = { UserController };
