import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
import SongIndexContainer from '../song/song_index_container';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchString: props.searchString
    };
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      this.setState({ searchString: newProps.searchString });
    }
  }
  
  render() {
    let { searchString, playlists, songs, artists, albums } = this.props;
    
    let searchedPlaylists = <PlaylistIndexContainer searchString={searchString} />;
    let searchedArtists = <ArtistIndexContainer searchString={searchString} />;
    let searchedAlbums = <AlbumIndexContainer searchString={searchString} />;
    let searchedSongs = <SongIndexContainer searchString={searchString} />;
    

    let noResults;
    if ((Object.entries(playlists).length === 0) && (Object.entries(albums).length === 0) 
      && (Object.entries(artists).length === 0) && (Object.entries(songs).length === 0)){
      noResults = <div className="no-search-content">
        <h1>Nothing to see...</h1>
      </div>
    } 

    return (
      <div className="search-nav-and-results">
        <div className="search-results">
          {noResults}

          <h1 className="search-category">Songs</h1>
            {searchedSongs}
          <h1 className="search-category">Artists</h1>
            {searchedArtists}
          <h1 className="search-category">Albums</h1>
            {searchedAlbums}
          <h1 className="search-category">Playlists</h1>
            {searchedPlaylists}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  songs: state.entities.songs,
  albums: state.entities.albums,
  artists: state.entities.artists,
  playlists: state.entities.playlists,
})

export default withRouter(connect(mapStateToProps, null)(SearchResults));

// export default SearchResults;