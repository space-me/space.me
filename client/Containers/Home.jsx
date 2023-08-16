import React, { useState, useEffect } from 'react';
import BigImageContainer from '../Containers/BigImageContainer.jsx';
import SmallTileContainer from '../Containers/SmallTileContainer.jsx';

const Home = () => {
  const [bigImage, setBigImage] = useState(null)

  useEffect(() => {
		async function fetchBigImage() {
			const response = await fetch('/api/apod')
			const data = await response.json()
			console.log(data)
			setBigImage(data)
		}
		fetchBigImage()
  }, [])

  return (
    <div className='home'>
      <BigImageContainer image={bigImage.image} title={bigImage.title} description={bigImage.description} />
      <button className='main-button'>Give me more, Spaceman</button>
      <SmallTileContainer />
    </div>
  );
};

export default Home;
