import { useState, useEffect } from 'react';
import { Route, Routes, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';

// 
function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  return (
    <>
      <Routes>
        <Route exact path='/home' element={<XX user={user} setUser={setUser} cookies={cookies} setCookie={setCookie}/>}></Route>
        <Route exact path='/login' element={<XX user={user} setUser={setUser} cookies={cookies} setCookie={setCookie}/>}></Route>
        <Route exact path='/XX' element={<XX user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>}></Route>
        <Route exact path='*' element={<XX user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} removeCookie={removeCookie}/>}></Route>
      </Routes>
    </>
  )
})