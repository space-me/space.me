const server = 'http://localhost:3000';
const request = require('supertest');
const fs = require('fs');

describe('User Login', () => {
  //UserController.createUser test

  describe('Create Account', () => {
    //The route returns a 200 status code and an object with the userID.
    it('Responds with a 200 status code and an object.', () => {
      //Dummy data
      const username = 'Diane';
      const email = 'diane@email.com';
      const password = 'Diane';

      return request(server)
        .post('/user/signup')
        .send({ username, email, password })
        .expect(response.status)
        .toEqual(201)
        .expect('Content-Type', /application\/json/);
    });

    //An already-stored username is not allowed to be repeated.
    it('A username that already exists cannot be reused.', () => {
      //Dummy data - an existing member in the database
      const username = 'l';
      const email = 'l@gmail.com';
      const password = 'l';

      return request(server)
        .post('/user/signup')
        .send({ username, email, password })
        .expect(response.status)
        .toEqual(401);
    });

    //The stored password is hashed and different from the original input password.
    it('The stored password is hashed and different from the original input password.', () => {
      //Dummy data
      
    });
  });

  //SessionController.createSession test

  //CookieController.createCookie test
});
