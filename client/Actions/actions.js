import * as types from '../Constants/actionTypes';

const actions = {};

// EXAMPLE FROM UNIT 13
// actions.createMarketThunk = (lastMarketId, location) => (dispatch) => {
// 	const marketId = +lastMarketId + 1;

// 	fetch('/api/addMarket', {
// 		method: 'POST',
// 		body: JSON.stringify({ market_id: marketId, location }),
// 		headers: { 'Content-Type': 'application/json' },
// 	})
// 		.then((res) => {
// 			if (res.status === 200) {
// 				dispatch(createMarket(marketId, location));
// 			} else {
// 				console.log(
// 					'in createMarketThunk - Server returned status',
// 					res.status
// 				);
// 			}
// 		})
// 		.catch((err) => console.log('Error in createMarketThunk fetch:', err));
// };

export default actions;
