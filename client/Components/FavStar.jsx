import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { loginActionCreator } from '../Actions/actions';

// favorite star Icon
function FavStar({ imageData }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const userID = useSelector((state) => state.user.userID);
  // dispatch is an instance of useDispatch that dispatches actions to Redux reducers
  const dispatch = useDispatch();
	

  const handleClick = () => {
    async function saveFav() {
      const response = await fetch('/user/addFavorite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userID,
          title: imageData.title,
          href: imageData.largeImage,
          description: imageData.description,
        }),
      }).catch((err) => console.log(err));
      const data = await response.json();
      console.log('data on line 26 of FavStar is:', data);
      dispatch(loginActionCreator(data));
    }
    saveFav();
    setIsFavorite((prev) => !prev);
  };

  return (
    <>
      <i
        className='fav-star fa-solid fa-star fa-2xl'
        onClick={handleClick}
        style={
          isFavorite ? { color: 'orange' } : { color: '#333', opacity: '50%' }
        }
      ></i>
    </>
  );
}

//

export default FavStar;
