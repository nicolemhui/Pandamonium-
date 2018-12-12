import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { Route } from 'react-router-dom';
import SplashContainer from './splash/splash_container';

const App = () => (
  <div>
    <header>
      <h1>Welcome to Pandamonium </h1>
      <SplashContainer />
    </header>

    <Route path="/login" component={LoginFormContainer}/>
    <Route path="/signup" component={SignupFormContainer}/>
    
  </div>
);

export default App;

