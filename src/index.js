import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';
import store from './store';

ReactDOM.render(
<<<<<<< HEAD
  <Router basename="/freewall">
=======
  <Provider store={store}>
>>>>>>> main
    <App />
  </Provider>,
  document.getElementById('app')
);
