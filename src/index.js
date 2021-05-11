import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import DefaultGlobalStyle from './GlobalStyle';




ReactDOM.render(
  <React.StrictMode>
          
          <App />
    <DefaultGlobalStyle />

  </React.StrictMode>,
  document.getElementById('root')
);


