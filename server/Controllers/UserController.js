const db = require('../database/UserModel.js');

const UserController = {
  // createUser is a function that queries
  createUser: async (req, res, next) => {
    // query holds the PostgreSQL query string
    const query = 'SELECT XX FROM XX';
    try {
      const response = await db.query(query);
      res.locals.charactersData = response.rows;
    } catch (error) {
      next(error);
    }
  },
  forgotPassword: (req, res, next) => {},
};

module.exports = { UserController };
