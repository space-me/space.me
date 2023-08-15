import React from 'react';
import BigImageContainer from '../Containers/BigImageContainer.jsx';
import SmallTileContainer from '../Containers/SmallTileContainer.jsx';

const Home = () => {
  return (
    <>
      <BigImageContainer />
      <button className='main-button'>Give me Spaceman</button>
      <SmallTileContainer />
    </>
  );
};

export default Home;
