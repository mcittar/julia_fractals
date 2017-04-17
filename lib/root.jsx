import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM LOADED");
    const root = document.getElementById('root');
    ReactDOM.render(<App />, root);
  });
