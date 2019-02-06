import React from 'react';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
import SongIndexItem from '../song/song_index_item';

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
    let { searchString } = this.props;
    
    let playlists = <PlaylistIndexContainer searchString={searchString} />;
    // let artists = <ArtistIndexContainer searchString={searchString} />;
    // let albums = <AlbumIndexContainer searchString={searchString} />;
    // let songs = <SongIndexItem searchString={searchString} />;
    
    return (
      <div className="search-results">
        {/* <h1>Artists</h1> */}
          {/* {artists} */}
        {/* <h1>Albums</h1> */}
          {/* {albums} */}
        <h1>Playlists</h1>
          {playlists}
        {/* <h1>Songs</h1> */}
        {/* {songs} */}
      </div>
    );
  }
}



export default SearchResults;