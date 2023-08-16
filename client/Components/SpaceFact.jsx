import React from 'react';

function SpaceFact({ title, description }) {
  return (
    <>
      <div className='main-space-fact'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default SpaceFact;
