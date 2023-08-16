// import React, BrowserRouter, createRoot, and main App component
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';
import './styles.scss';

// init parent container at root element
const container = document.getElementById('root');
// initialize React app root at parent container
const root = createRoot(container);

// render
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App tab='home' />
    </BrowserRouter>
  </Provider>
);
