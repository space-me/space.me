import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActionCreator } from '../Actions/actions';

// Login is a function that handles the login logic and renders the Login parent container
function Login() {
  // navigate is an instance of useNavigate that redirects using React-Router
  const navigate = useNavigate();
  // dispatch is an instance of useDispatch that dispatches actions to Redux reducers
  const dispatch = useDispatch();
  // userLogin retrieves email and password information and sends a POST request to frontend
  const userLogin = (e) => {
    e.preventDefault();
    // extract email and password values from input fields
    const email = document.forms['login']['email'].value;
    const password = document.forms['login']['password'].value;
    // send POST request to login endpoint
    fetch('/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      // parse response from JSON into JS
      .then((response) => response.json())
      // then, dispatch login action to userReducer with payload loginData
      .then((loginData) => {
        if (!loginData || !loginData.err) {
          // console.log('logindata from Login.jsx', loginData);
          dispatch(loginActionCreator(loginData));
          navigate('/');
        }
      })
      // throw new error if fetch request runs into any errors
      .catch((err) => {
        console.log('Error logging user in:', err);
      });
  };

  return (
    <div className='form-container'>
      <div className='login-container'>
        <h2>Log In</h2>
        <form
          className='login-form'
          name='login'
          onSubmit={(e) => userLogin(e)}
        >
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Enter your email here'
            // pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
            autoFocus
            required
          ></input>
          <label htmlFor='password'>password</label>
          <input
            type='text'
            id='password'
            name='password'
            placeholder='Enter your password here'
            required
          ></input>
          <button className='login-form-button' type='submit'>
            Log In
          </button>
        </form>
        {/* need to add logic for handling when user forgets their password */}
        <div className='login-form-links'>
          <button className='form-links' onClick={() => navigate('/signup')}>
            Forgot your password?
          </button>
          <button className='form-links' onClick={() => navigate('/signup')}>
            Don't have an account? Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
