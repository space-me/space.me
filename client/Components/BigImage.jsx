import React from 'react';
import FavStar from './FavStar';

// Main image returned from NASA image of the day API
function BigImage({image}) {
  return (
    <div className='main-big-image'>
      <FavStar />
      <img src={image} alt='a very sad dog' />
    </div>
  );
}

export default BigImage;
