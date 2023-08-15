import React from 'react';

// favorite star Icon
function FavStar({ isFavorite }) {
  
  return (
    <>
      <i className="fav-star fa-solid fa-star fa-2xl" style={isFavorite ? {color: "yellow"} : {color:"white"}}></i>
    </>
  )
}

export default FavStar;
