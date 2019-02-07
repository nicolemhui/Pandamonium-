import React from 'react';
import AlbumIndexContainer from '../album/album_index_container';
import ArtistIndexContainer from '../artist/artist_index_container';
import PlaylistIndexContainer from '../playlist/playlist_index_container';
import SongIndexContainer from '../song/song_index_container';
import { NavLink, Route, Redirect, Switch } from 'react-router-dom';
import BrowseLinks from '../header_links/browse_links';

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
    let artists = <ArtistIndexContainer searchString={searchString} />;
    let albums = <AlbumIndexContainer searchString={searchString} />;
    let songs = <SongIndexContainer searchString={searchString} />;
    
    return (
      
      <div className="search-nav-and-results">
        <nav className="nav-links">
          <div className="nav-links-container">
            <div className="nav-bar-links">
              <NavLink to="/search/playlists" className="nav-links-link">Playlists<span></span></NavLink>
              <NavLink to="/search/songs" className="nav-links-link">Songs<span></span></NavLink>
              <NavLink to="/search/albums" className="nav-links-link">Albums<span></span></NavLink>
              <NavLink to="/search/artists" className="nav-links-link">Artists<span></span></NavLink>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/search/albums" render={() =>
            <AlbumIndexContainer searchString={searchString} />}
          />
          <Route path="/search/artists" render={() =>
            <ArtistIndexContainer searchString={searchString} />}
          />
          <Route path="/search/playlists" render={() =>
            <PlaylistIndexContainer searchString={searchString} />}
          />
          <Route path="/search/songs" render={() =>
            <SongIndexContainer searchString={searchString} />}
          />

          <Redirect to="/search" />
        </Switch>
      </div>
      
    );
  }
}



export default SearchResults;


{/* // </div >


      // <div className="search-results">
        // <h1 className="search-category">Albums</h1>
          // {albums}
        // <h1 className="search-category">Artists</h1>
          // {artists}
        // <h1 className="search-category">Playlists</h1>
          // {playlists}
        // <h1 className="search-category">Songs</h1>
          // {songs}
      // </div> */}