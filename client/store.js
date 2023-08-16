import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers/index.js';

// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(reducers, composeWithDevTools());

export default store;

// import { configureStore } from '@reduxjs/toolkit'

// import postsReducer from '../reducers/postsReducer'
// import usersReducer from '../reducers/usersReducer'

// // Automatically adds the thunk middleware and the Redux DevTools extension
// const store = configureStore({
//   // Automatically calls `combineReducers`
//   reducer: {
//     posts: postsReducer,
//     users: usersReducer
//   }
// })
