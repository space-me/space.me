import React from 'react';
import FavStar from './FavStar';

const SmallTile = ({imageData}) => {

  return (
    <div className='small-tile'>
      <img src={imageData.thumbnailImage} alt="" />
      <FavStar imageData={imageData} />
    </div>
  )
}

export default SmallTile