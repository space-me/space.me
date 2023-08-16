import * as types from '../Constants/actionTypes';

// initialState is an object that contains the string username, the string userID, and the array favorites
const initialState = {
  username: '',
  userID: '',
  favorites: [],
};

const userReducer = (state = initialState, action) => {
  const newState = action.payload;
  // JSON.parse(JSON.stringify(initialState));
  // const newState = {...initialState};
  switch (action.type) {
    // log user in
    case types.LOGIN: {
      return newState;
    }
  }
};

export default userReducer;
