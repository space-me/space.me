import { useState, useEffect } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Home from 'client/Containers/Home.jsx';
import Favorites from 'client/Containers/Favorites.jsx';
import Signup from 'client/Containers/Signup.jsx';
import Login from 'client/Containers/Login.jsx';
import SolarSystem from 'client/Containers/SolarSystem.jsx';
import Themes from 'client/Containers/Themes.jsx';
import NotFound from 'client/Containers/NotFound.jsx';

//
function App() {
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
        ></Route>
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
        ></Route>
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
        ></Route>
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
        ></Route>
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
        ></Route>
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
        ></Route>
        <Route
          exact
          path='*'
          element={
            <XX
              user={user}
              setUser={setUser}
              cookies={cookies}
              setCookie={setCookie}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App