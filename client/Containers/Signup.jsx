import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActionCreator } from '../Actions/actions';
// renders Signup page components
function Signup() {
  const navigate = useNavigate();
  // dispatch is an instance of useDispatch that dispatches actions to Redux reducers
  const dispatch = useDispatch();
  const inputValidate = (e) => {
    e.preventDefault();
    const username = document.forms['signup']['username'].value;
    const email = document.forms['signup']['email'].value;
    const password = document.forms['signup']['password'].value;
    const confirmPassword = document.forms['signup']['confirmPassword'].value;
    if (password !== confirmPassword) {
      alert('passwords must match');
      return false;
    } else {
      fetch('/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      })
        // parse response from JSON into JS
        .then((response) => response.json())
        // then, dispatch login action to userReducer with payload loginData
        .then((signupData) => {
          if (!signupData || !signupData.err) {
            // console.log('signupData from Login.jsx', signupData);
            dispatch(loginActionCreator(signupData));
            navigate('/');
          }
        })
        // throw new error if fetch request runs into any errors
        .catch((err) => {
          console.log('Error logging user in:', err);
        });
    }
  };

  return (
    <div className='form-container'>
      <div className='login-container'>
        <h2>Sign Up</h2>
        <form
          className='login-form'
          name='signup'
          onSubmit={(e) => inputValidate(e)}
        >
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Enter your username'
            autoFocus
            required
          ></input>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='Enter your email'
            // pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$'
            required
          ></input>
          <label htmlFor='password'>Password</label>
          <input
            type='text'
            id='password'
            name='password'
            placeholder='Enter your password'
            required
          ></input>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='text'
            id='confirmPassword'
            name='confirmPassword'
            placeholder='Enter your confirmPassword'
            required
          ></input>
          <button
            className='login-form-button'
            type='submit'
            placeholder='Sign Up'
          >
            Sign Up
          </button>
        </form>
        <div className='login-form-links'>
          <button className='form-links' onClick={() => navigate('/login')}>
            Already have an account? Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
