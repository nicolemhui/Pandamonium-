import React from 'react';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import CollectionLinks from '../header_links/collection_links';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';
// import PlaylistIndex from '../playlist/playlist_index';

class Collection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="collection-main">
        <CollectionLinks></CollectionLinks>

        <div className="collection-container">

          <Switch>
            <ProtectedRoute path="/collection/albums" component={AlbumIndexContainer}></ProtectedRoute>
            <ProtectedRoute path="/collection/artists" component={ArtistIndexContainer}></ProtectedRoute>
            <ProtectedRoute path="/collection/songs" component={SongIndexContainer}></ProtectedRoute>
            {/* <ProtectedRoute path="/collection/playlists" component={PlaylistIndex}></ProtectedRoute> */}
          </Switch>

        </div>
      </div>
    )
  }
}

export default Collection;

//  put different routes in here 
// Add playlist container (which has the playlist index & index items)