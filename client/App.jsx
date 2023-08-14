import React, { useState, useEffect } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Home from './Containers/Home.jsx';
import Favorites from './Containers/Favorites.jsx';
import Signup from './Containers/Signup.jsx';
import Login from './Containers/Login.jsx';
import SolarSystem from './Containers/SolarSystem.jsx';
import Themes from './Containers/Themes.jsx';
import NotFound from './Containers/NotFound.jsx';

//
function App() {
  const [user, setUser] = useState('testuser');
  const [cookies, setCookie, removeCookie] = useCookies(['user']);

  return (
    <>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <Home
              user={user}
              setUser={setUser}
              cookies={cookies}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        <Route
          exact
          path='/login'
          element={
            <Login
              user={user}
              setUser={setUser}
              cookies={cookies}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        <Route
          exact
          path='/signup'
          element={
            <Signup
              user={user}
              setUser={setUser}
              cookies={cookies}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        <Route
          exact
          path='/solarsystem'
          element={
            <SolarSystem
              user={user}
              setUser={setUser}
              cookies={cookies}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        <Route
          exact
          path='/favorites'
          element={
            <Favorites
              user={user}
              setUser={setUser}
              cookies={cookies}
              setCookie={setCookie}
              removeCookie={removeCookie}
            />
          }
        />
        <Route
          exact
          path='/themes'
          element={
            <Themes
              user={user}
              setUser={setUser}
              cookies={cookies}
              setCookie={setCookie}
            />
          }
        />
        <Route
          exact
          path='*'
          element={
            <NotFound
              user={user}
              setUser={setUser}
              cookies={cookies}
              setCookie={setCookie}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
