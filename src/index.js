import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';

ReactDOM.render(
  <Router basename="/freewall">
    <App />
  </Router>,
  document.getElementById('app')
);
