import React from 'react';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import SongIndexItem from '../song/song_index_item';
import PlaylistIndex from '../playlist/playlist_index';

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
    
    let artists = <ArtistIndexContainer searchString={searchString} />;
    // let songs = <SongIndexItem searchString={searchString} />;
    let albums = <AlbumIndexContainer searchString={searchString} />;
    // let artists = <PlaylistIndex searchString={searchString} />;
    
    return (
      <div className="search-results">
        <h1>Artists</h1>
          {artists}
        <h1>Albums</h1>
          {albums}
        {/* {songs} */}
        {/* {playlists} */}
      </div>
    );
  }
}



export default SearchResults;