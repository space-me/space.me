const server = 'http://localhost:3000';
const request = require('supertest');
const fs = require('fs');
const bcrypt = require('bcrypt');
const db = require('../server/database/UserModel.js');

describe('User Login', () => {
  //UserController.createUser test

  describe('Verify Account', () => {
    //Before all
    const username = 'm';
    const email = 'm@email.com';
    const password = 'm';

    //The route returns a 200 status code and an object with the userID.
    it('Responds with a 200 status code', () => {
      request(server)
        .post('/user/login')
        .send({ email: email, password: password })
        .expect(200)
    });
    //An already-stored username is not allowed to be repeated.
    xit('A username that already exists cannot be reused.', () => {
      //Dummy data - an existing member in the database

      return request(server)
        .post('/user/signup')
        .send({ username: username, email: email, password: password })
        .expect(response.status)
        .toEqual(401);
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
