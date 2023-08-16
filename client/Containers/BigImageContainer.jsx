import React from 'react';
import BigImage from '../Components/BigImage';
import SpaceFact from '../Components/SpaceFact';

const BigImageContainer = ({image, title, description}) => {
  return (
    <>
      <main className='main'>
        <div className='main-big-image-container'>
          <BigImage image={image} title={title} />
          <SpaceFact title={title} description={description} />
        </div>
      </main>
    </>
  );
};

export default BigImageContainer;
