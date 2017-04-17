import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import configureStore from './store';
import AppProvider from './provider.jsx';

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM LOADED");
    let store = configureStore();
    const root = document.getElementById('root');

    ReactDOM.render(<AppProvider store={ store }/>, root);
  });
