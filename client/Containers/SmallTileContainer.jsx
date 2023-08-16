import React from 'react';
import SmallTile from '../Components/SmallTile';

const SmallTileContainer = ({images}) => {
  const imageArray = ['x', 'x', 'x', 'x', 'x', 'x', 'x', 'x'];
  const smallTiles = images.map((e) => <SmallTile imageData={e} />);

  return <div className='small-tile-container'>{smallTiles}</div>;
};

export default SmallTileContainer;
