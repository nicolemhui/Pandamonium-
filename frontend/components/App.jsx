import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import Main from './main';
import Modal from './modal';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/" component={Main} />
    </Switch>
  </div>
);

export default App;