import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import SplashContainer from './splash/splash_container';
import AwesomeIcons from '../util/awesome_icons_util';

const App = () => (
  <div>
    <header>
      <SplashContainer />
    </header>
    <AuthRoute path="/login" component={LoginFormContainer}/>
    <AuthRoute path="/signup" component={SignupFormContainer}/>
    
  </div>
);

export default App;

