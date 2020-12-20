import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.min.css'
import App from './App';
import {ContextProvider} from './context';
import reportWebVitals from './reportWebVitals';

import "./server";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
