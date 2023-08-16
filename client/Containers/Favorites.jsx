import React, { useEffect } from 'react';
import BigTile from '../Components/BigTile';

// Favorites contains all of the images that will be fetched from database
function Favorites() {
  const imageArray = ['get favs from state'];

  const bigTiles = imageArray.map((e) => (
    <BigTile image={e.href} title={e.title} />
  ));

  return (
    <>
      <h1 className='favorites-title'>Favorites</h1>
      <div className='favorites-container'>
        <div className='favorites-tiles'>
          {bigTiles ? bigTiles : 'fetching images...'}
        </div>
      </div>
    </>
  );
}

export default Favorites;
