import React from 'react';
import FavStar from './FavStar';

const BigTile = ({image, title}) => {
	return (
		<div className="big-tile">
			<img src={image} alt={title} />
		</div>
	);
};

export default BigTile;
