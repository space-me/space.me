const db = require('../database/UserModel.js');

const UserController = {
  // createUser is a function that queries
  createUser: async (req, res, next) => {
    
    const { username, email, password } = req.body;

    // query holds the PostgreSQL query string
    const query = `INSERT INTO members (username, email, password) VALUES (${username}, ${email}, ${password})`;

    try {
      const response = await db.query(query);
      res.locals.charactersData = response.rows;
    } catch (error) {
      next(error);
    }

    return next();
  },
  forgotPassword: (req, res, next) => {},
};

module.exports = { UserController };
