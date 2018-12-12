import React from 'react';
import ReactDOM from 'react-dom';
//Components
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Hallo</h1>, root);
});

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { login, signup, logout } from './util/session_api_util';
// import configureStore from './store/store';

// document.addEventListener('DOMContentLoaded', () => {
//   const store = configureStore();
//   const root = document.getElementById('root');
  
// //   window.login = login;
// //   window.signup = signup;
// //   window.logout = logout;

// // // import Root from './components/root';


//   ReactDOM.render(<h1>I'M WORKING!</h1>, root);
// });