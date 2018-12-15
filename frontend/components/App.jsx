import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute, ProtectedLoggedInRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import SideNavContainer from './side_nav/side_nav_container';
import FeaturedContainer from './browse/featured_container';
import BrowseLinks from './header_links/browse_links';

const App = () => (
  <div>       
      <ProtectedRoute path="/" component={SideNavContainer}></ProtectedRoute>
      <ProtectedRoute path="/browse" component={BrowseLinks}></ProtectedRoute>

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <ProtectedLoggedInRoute path="/" component={SplashContainer} />
    </Switch>

      <ProtectedRoute path="/browse/featured" component={FeaturedContainer}></ProtectedRoute>
      <Route exact path="/" component={SplashContainer} />
    
  </div>
);

export default App;

