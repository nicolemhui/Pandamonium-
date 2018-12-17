import React from 'react';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import SplashContainer from './splash/splash_container';
//test
import SongIndexContainer from './song/song_index_container';
import AlbumIndexContainer from './album/album_index_container';
import ArtistIndexContainer from './artist/artist_index_container';
import Main from './main';
import FeaturedContainer from './browse/featured_container';
import BrowseLinks from './header_links/browse_links';
import CollectionLinks from './header_links/collection_links';
import SideNavContainer from './side_nav/side_nav_container';

const App = () => (
  <div>
    {/* testing */}
    {/* <ProtectedRoute path="/" component={SideNavContainer} /> */}
    {/* <ProtectedRoute path="/browse" component={BrowseLinks} /> */}
    {/* <ProtectedRoute path="/collection" component={CollectionLinks} /> */}

    <h1>HERE</h1>

    <Switch>
      {/* <ProtectedRoute path="/artists" component={ArtistIndexContainer} />
      <ProtectedRoute path="/albums" component={AlbumIndexContainer} />
      <ProtectedRoute path="/songs" component={SongIndexContainer} /> */}
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/browse" component={Main}/>
      <ProtectedRoute path="/collection" component={Main}/>
      {/* <ProtectedRoute path="/browse/featured" component={Main}/> */}
      {/* <ProtectedRoute path="/browse/featured" component={FeaturedContainer} /> */}
      {/* <ProtectedRoute path="/collection" component={FeaturedContainer} /> */}
      <AuthRoute path="/" component={SplashContainer} />
      {/* <AuthRoute path="/" component={SplashContainer} /> */}
    </Switch>


  </div>
);

export default App;



// changed the routes to include a main component 


// import React from 'react';
// import LoginFormContainer from './session/login_form_container';
// import SignupFormContainer from './session/signup_form_container';
// import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import { Route, Switch, Redirect } from 'react-router-dom';
// import SplashContainer from './splash/splash_container';
// import SongIndexContainer from './song/song_index_container';
// import FeaturedContainer from './browse/featured_container';

// const App = () => (
//   <div>       
//     {/* testing */}
//     <Route path="/songs" component={SongIndexContainer}/>
    
//     <Switch>
//       <AuthRoute path="/login" component={LoginFormContainer}/>
//       <AuthRoute path="/signup" component={SignupFormContainer}/>
//       <ProtectedRoute path="/browse/featured" component={Main}/>
//       <AuthRoute path="/" component={SplashContainer} />
//     </Switch>

    
//   </div>
// );

// export default App;


// // changed the routes to include a main component 
