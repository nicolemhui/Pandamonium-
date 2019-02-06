import React from 'react';
import AlbumIndexContainer from '../album/album_index_container';
import SongIndexItem from '../song/song_index_item';
import ArtistIndex from '../artist/artist_index';
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
    
    // let artists = <ArtistIndex searchString={searchString} />;
    // let songs = <SongIndexItem searchString={searchString} />;
    let albums = <AlbumIndexContainer searchString={searchString} />;
    // let artists = <PlaylistIndex searchString={searchString} />;
    
    return (
      <div className="search-results">
        {/* {artists} */}
        {/* {songs} */}
        {albums}
        {/* {playlists} */}
      </div>
    );
  }
}



export default SearchResults;