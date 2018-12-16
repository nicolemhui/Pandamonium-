import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
import SideNavContainer from './side_nav/side_nav_container';
import FeaturedContainer from './browse/featured_container';
import BrowseLinks from './header_links/browse_links';
import SongIndexContainer from './song/song_index_container';

const App = () => (
  <div>       
    <Route path="/songs" component={SongIndexContainer}/>

      <ProtectedRoute path="/" component={SideNavContainer}></ProtectedRoute>
      <ProtectedRoute path="/browse" component={BrowseLinks}></ProtectedRoute>

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer}/>
      <AuthRoute path="/signup" component={SignupFormContainer}/>
      <ProtectedRoute path="/browse/featured" component={FeaturedContainer}></ProtectedRoute>
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>

    
  </div>
);

export default App;


