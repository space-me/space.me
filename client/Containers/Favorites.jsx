import React, { useEffect } from 'react';
import BigTile from '../Components/BigTile';

// Favorites contains all of the images that will be fetched from database
function Favorites() {
  const imageArray = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
  // Fetch images for user from backend (ideally pre-fetch in the background while user is on home page)
  const getImages = () => {
    fetch('')
      // parse response from JSON into JS
      .then((response) => response.json())
      // then, dispatch login action to userReducer with payload loginData
      .then((favoritesData) => {
        dispatch(loginActionCreator(favoritesData));
      })
      // throw new error if fetch request runs into any errors
      .catch((err) => {
        throw new Error('Error logging user in:', err);
      });
  };
  // useEffect()
  // return array with all favorite images

  const bigTiles = imageArray.map((e) => <BigTile />);

  return (
    <>
      <h1 className='favorites-title'>Favorites</h1>
      <div className='favorites-container'>
        <div className='favorites-tiles'>{bigTiles}</div>
      </div>
    </>
  );
}

export default Favorites;
