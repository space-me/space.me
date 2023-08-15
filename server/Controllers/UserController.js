const db = require('../database/UserModel.js');

const UserController = {
  // createUser is a function that queries
  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const checkForUser = `SELECT COUNT(*) FROM member WHERE username = '${username}' OR email = '${email}'`;
    try {
      const response = await db.query(checkForUser);

      //If the username already exists, send a response. 
      if (response.rows !== 0) { //@TODO we want to check for if a username and or email is already registered in our db
        res.sendStatus(401);
        return next();
      }// todo if everything is fine
    } catch (err) {
      return next({
        log: `Error occured in UserController.createUser, error: ${err}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured, something went wrong'// message to the user
        },
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const insertUser = `INSERT INTO member (username, email, password) VALUES (${username}, ${email}, ${hashedPassword})`;
    try {
      const response = await db.query(insertUser);
      res.locals.userId = response.rows.id;
    } catch (error) {
      return next({
        log: `Error occured in UserController.createUser, error: ${err}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured, something went wrong'// message to the user
        },
      });
    }

    return next();
  },
  

  // for login middleware chain
    // Verify that the user username and password exist and match.
  // verifyUser: async (req, res, next) => {
  //   const { username, password } = req.body;

  //   //If the user inputted nothing.
  //   if (!username || !password) {

  //   }

  //   //Verify the username exists before checking password
  //   const verifyUsername = `SELECT COUNT(*) FROM member WHERE username = '${username}'`;
  // },

  // //Stretch Feature for now.
  // forgotPassword: (req, res, next) => {},
};

module.exports = { UserController };
