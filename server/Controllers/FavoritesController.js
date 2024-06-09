const db = require('../database/UserModel.js');

const FavoritesController = {
  // ---------------------------------- GRAB FAVORITES FUNCTION -----------------------------------------------------
  // on user login / sign up

  fetchFavorites: async (req, res, next) => {
    const userID = res.locals.userID;

    // QUERIES
    const getUserFavortiesQuery =
      'SELECT favorites.id, favorites.title, favorites.href, favorites.description FROM favorites INNER JOIN member_favorites ON favorites.id = member_favorites.favorites_id INNER JOIN member ON member.id = member_favorites.member_id WHERE member.id = $1';
    const getUsernameQuery = 'SELECT username FROM member WHERE id=$1';

    try {
      const usernameResponse = await db.query(getUsernameQuery, [userID]);
      const favoritesResponse = await db.query(getUserFavortiesQuery, [userID]);
      res.locals.returnObject = {
        userID: userID,
        username: usernameResponse.rows[0].username,
        favorites: favoritesResponse.rows,
      };
      return next();
    } catch (error) {
      return next({
        log: `Error occured in FavoritesController.fetchFavorites, error ${error}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured, something went wrong when fetching favs', // message to the user
        },
      });
    }
  },

  // ---------------------------------- ADD FAVORITE FUNCTION -----------------------------------------------------
  //
  addFavorite: async (req, res, next) => {
    const { memberID, title, href, description } = req.body;
    // QUERIES
    const insertFavoriteQuery =
      'INSERT INTO favorites (title, href, description) VALUES ($1, $2, $3) RETURNING id';
    const insertMIDnFIDJTQuery =
      'INSERT INTO member_favorites (member_id, favorites_id) VALUES ($1, $2)';
    try {
      const insertFavoriteResponse = await db.query(insertFavoriteQuery, [
        title,
        href,
        description,
      ]);
      await db.query(insertMIDnFIDJTQuery, [
        memberID,
        insertFavoriteResponse.rows[0].id,
      ]);
      res.locals.userID = memberID;
      return next();
    } catch (error) {
      return next({
        log: `Error occured in FavoritesController.addFavorite, error ${error}`, // to the develpoper
        status: 500,
        message: {
          err: 'an error occured, something went wrong when adding a fav', // message to the user
        },
      });
    }
  },
};

module.exports = { FavoritesController };
