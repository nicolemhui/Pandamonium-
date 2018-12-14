import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import SplashContainer from './splash/splash_container';


{/* <Route exact path="/" component={SplashContainer} /> */}

const App = () => (
  <div>       
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <Route exact path="/" component={SplashContainer} />
      <Redirect to="/" />
    </Switch>
    
  </div>
);

export default App;

{/* <ProtectedRoute path="/browse/featured" component={MainPageContainer}/> */}
