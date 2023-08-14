import { useState, useEffect } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
// import Home from './Components/Home.jsx';
// import Favorites from './Components/Favorites.jsx';
// import Signup from './Components/Signup.jsx';
// import Login from './Components/Login.jsx';
// import SolarSystem from './Components/SolarSystem.jsx';
// import Themes from './Components/Themes.jsx';
// import NotFound from './Components/NotFound.jsx';

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