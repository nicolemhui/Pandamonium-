import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import SideNavContainer from './side_nav/side_nav_container';

const App = () => (
  <div>       
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <Route exact path="/" component={SplashContainer} />
    </Switch>
    
      <ProtectedRoute path="/browse/featured" component={SideNavContainer}></ProtectedRoute>
  </div>
);

export default App;

{/* <Redirect to="/" /> */}
{/* <ProtectedRoute path="/browse/featured" component={MainPageContainer}/> */}
