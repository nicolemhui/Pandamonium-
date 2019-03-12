import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import CollectionLinks from '../header_links/collection_links';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';

class Collection extends React.Component {
  render() {
    return (
      <div id="collection-main">
        <CollectionLinks openModal={this.props.openModal}/>
        <div className="collection-container">
          <Switch>
            <ProtectedRoute path="/collection/playlists" component={PlaylistIndexContainer}/>
            <ProtectedRoute path="/collection/albums" component={AlbumIndexContainer}/>
            <ProtectedRoute path="/collection/artists" component={ArtistIndexContainer}/>
            <ProtectedRoute path="/collection/songs" component={SongIndexContainer}/>
            <Redirect to="/collection/albums"/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default Collection;
