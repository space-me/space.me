import * as types from '../Constants/actionTypes';

// need to define initialState
const initialState = {
  username: '',
  favorites: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      console.log('logging in');
    }
  }
};

export default userReducer;
