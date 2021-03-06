import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Route, Switch, Redirect } from 'react-router-dom';
import Modal from './modal';
import SideNavContainer from './side_nav/side_nav_container';
import BrowseContainer from './browse/browse_container';
import CollectionContainer from './collection/collection_container';
import PlaylistShowContainer from './playlist/playlist_show_container';
import AlbumShowContainer from './album/album_show_container';
import ArtistShowContainer from './artist/artist_show_container';
import MusicPlayerContainer from './music_player/music_player_container';
import Search from './search/search';


class Main extends React.Component {

  render () {
    return (
      <div className="main-container" >
      <Modal />
        <ProtectedRoute path="/" component={SideNavContainer} />
      
        <Switch>
          <Route path="/collection" component={CollectionContainer} />
          <Route path="/browse" component={BrowseContainer} />
          <Route path="/search" component={Search} />
          <Route path="/playlists/:playlistId" component={PlaylistShowContainer} />
          <Route path="/albums/:albumId" component={AlbumShowContainer} />
          <Route path="/artists/:artistId" component={ArtistShowContainer} />
          <Redirect to="/browse/albums" />
        </Switch>

        <ProtectedRoute path="/" component={MusicPlayerContainer} />
      </div>
    )
  }
}

export default Main;

