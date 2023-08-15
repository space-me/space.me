const express = require('express');
const UserRouter = express.Router();
const { UserController } = require('../Controllers/UserController.js');

UserRouter.post(
  '/signup',
  UserController.createUser,
  // SessionController.startSession,
  // CookieController.setUUID,
  (req, res) => {
    return res.status(200).json(res.locals.userID);
  }
);

// UserRouter.post(
//   '/login',
//   UserController.verifyUser,
//   // SessionController.startSession,
//   // CookieController.setUUID,
//   (req, res) => {
//     return res.status(200).json(res.locals.userID);
//   }
// );

module.exports = { UserRouter };