const db = require('../database/UserModel.js');

const UserController = {
  // createUser is a function that queries
  createUser: async (req, res, next) => {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const checkForUser = `SELECT COUNT(*) FROM member WHERE username = '${username}' OR email = '${email}'`;
    try {
      const response = await db.query(checkForUser);
    } catch (error) {
      next(error);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the database
    const insertUser = `INSERT INTO member (username, email, password) VALUES (${username}, ${email}, ${hashedPassword})`;
    try {
      const response = await db.query(insertUser);
      res.locals.charactersData = response.rows;
    } catch (error) {
      next(error);
    }

    return next();
  },
  forgotPassword: (req, res, next) => {},
};

module.exports = { UserController };
