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
import PlaylistShowContainer from './playlist/playlist_show_container';
import SideNavContainer from './side_nav/side_nav_container';
import FeaturedContainer from './browse/featured_container';
import CollectionContainer from './collection/collection_container';
import MusicPlayerContainer from './music_player/music_player_container';
import Modal from './modal';

const App = () => (
  <div>

    {/* testing */}
   

    <Modal />

    <ProtectedRoute path="/" component={SideNavContainer} />

    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path="/collection/playlists/:playlistId" component={PlaylistShowContainer} />
      <ProtectedRoute path="/browse" component={FeaturedContainer} />
      <ProtectedRoute path="/collection" component={CollectionContainer} />
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>

    <ProtectedRoute path="/" component={MusicPlayerContainer} />


  </div>
);

export default App;



//2ND EDIT 
{/* <Switch>

  <AuthRoute path="/login" component={LoginFormContainer} />
  <AuthRoute path="/signup" component={SignupFormContainer} />
  <ProtectedRoute path="/browse" component={Main}/>
  <ProtectedRoute path="/collection" component={Main}/>



  <AuthRoute path="/" component={SplashContainer} />

</Switch> */}


//TEST!
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
