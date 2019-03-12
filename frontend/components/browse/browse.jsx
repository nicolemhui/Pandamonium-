import React from 'react';
import BrowseLinks from '../header_links/browse_links';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';

class Browse extends React.Component {
  render() {
    return (
      <div className="browse-main">
        <BrowseLinks />
        <div className="browse-container">
          <Switch>
            <ProtectedRoute path="/browse/albums" component={AlbumIndexContainer} />
            <ProtectedRoute path="/browse/artists" component={ArtistIndexContainer} />
            <ProtectedRoute path="/browse/songs" component={SongIndexContainer} />
            <ProtectedRoute path="/browse/playlists" component={PlaylistIndexContainer} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default Browse;
