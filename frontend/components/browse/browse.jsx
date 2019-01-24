import React from 'react';
import BrowseLinks from '../header_links/browse_links';
import { Switch } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';

class Browse extends React.Component {
  constructor(props){
    super(props);
  }
  
  // <ProtectedRoute path="/browse" component={BrowseLinks} />
  // {BrowseLinks}
  
  render() {
    return (

      <div className="browse-main">
        <BrowseLinks />
          
        <div className="browse-container">
          <Switch>
            {/* <ProtectedRoute path="/playlists/playlistId" component={PlaylistShowContainer}/> */}
            <ProtectedRoute path="/browse/albums" component={AlbumIndexContainer} />
            {/* <ProtectedRoute path="/browse/made-for-you" component={} /> */}
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

//  put different routes in here 
// Add playlist container (which has the playlist index & index items)
