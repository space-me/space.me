import React from 'react';
import FavStar from './FavStar';

// Main image returned from NASA image of the day API
function BigImage({image, title}) {
  return (
    <div className='main-big-image'>
      <FavStar />
      <img src={image} alt={title} />
    </div>
  );
}

export default BigImage;
