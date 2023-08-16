const server = 'http://localhost:3000';
const request = require('supertest');
const fs = require('fs');
const bcrypt = require('bcrypt');
const db = require('../server/database/UserModel.js');

describe('User Signup', () => {
  //UserController.createUser test

  describe('Create Account', () => {
    //Before all
    const username = 'JackBlack';
    const email = 'JackBlack@email.com';
    const password = 'JackBlack';

    //The route returns a 200 status code and an object with the userID.
    it('Responds with a 200 status code and an object.', (done) => {
      request(server)
        .post('/user/signup')
        .send({ username: username, email: email, password: password })
        .expect(200)
        .end((err, response) => {
          // expect(response.body).toEqual({
          //   userID: expect.anything(),
          //   username: username,
          //   favorites: [],
          // });

          done();
        });

      // .expect({ userID: response.userID, username: username, favorites: [] });
    });

    /*
    res.locals.returnObject = {
        userID: userID,
        username: usernameResponse.rows[0].username,
        favorites: favoritesResponse.rows
      }
    */

    //An already-stored username is not allowed to be repeated.
    it('A username that already exists cannot be reused.', () => {
      //Dummy data - an existing member in the database

      return request(server)
        .post('/user/signup')
        .send({ username: username, email: email, password: password })
        .expect(401);
    });

    //The stored password is hashed and different from the original input password.
    xit('The stored password is hashed and different from the original input password.', () => {
      //Dummy data

      return request(server)
        .post('/user/signup')
        .send({ username: username, email: email, password: password })
        .then((response) => {
          // const passwordMatch = bcrypt.compare(
          //   password,
          //   response.body.password
          // );
          // expect(passwordMatch).toEqual(true);
          // expect(response.body.password).not.toEqual(password);
        });
    });

    afterAll(() => {
      const deleteUserQuery = `DELETE FROM member WHERE username = $1`;
      db.query(deleteUserQuery, [username]);
    });
  });

  //SessionController.createSession test

  //CookieController.createCookie test
});
