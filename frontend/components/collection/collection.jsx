import React from 'react';
import { Switch, NavLink } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import CollectionLinks from '../header_links/collection_links';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexContainer from '../song/song_index_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
// import PlaylistShowContainer from '../playlist/playlist_show_container';

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal("create_new_playlist");
  }

  render() {
    return (

      <div className="collection-main">
        <CollectionLinks></CollectionLinks>
        <button className="create-playlist-btn" onClick={this.handleClick}>NEW PLAYLIST</button>
        <div className="collection-container">

          <Switch>
            {/* <ProtectedRoute path="/playlists/playlistId" component={PlaylistShowContainer}/> */}
            <ProtectedRoute path="/collection/albums" component={AlbumIndexContainer}/>
            <ProtectedRoute path="/collection/artists" component={ArtistIndexContainer}/>
            <ProtectedRoute path="/collection/songs" component={SongIndexContainer}/>
            <ProtectedRoute path="/collection/playlists" component={PlaylistIndexContainer}/>
            
          </Switch>

        </div>
      </div>
    )
  }
}

export default Collection;

//  put different routes in here 
// Add playlist container (which has the playlist index & index items)
