import React from 'react';
import { Provider } from 'react-redux';
import App from './app.jsx';

const AppProvider = ({store}) => {

  return(
    <Provider store={ store }>
      <App />
    </Provider>
  );
};

export default AppProvider;
