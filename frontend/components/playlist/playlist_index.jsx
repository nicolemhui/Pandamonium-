import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    let { searchString } = this.props;

    if (this.props.searchString != undefined) {
      this.props.fetchSearchedPlaylists(searchString);
    } else {
      this.props.fetchPlaylists();
    }
  }

  componentWillReceiveProps(newProps) {
    if (this.props.searchString != newProps.searchString) {
      this.props.fetchSearchedPlaylists(newProps.searchString);
    }
  }

  render() {
    let { playlists } = this.props;
    if (!playlists) return null;
      
    let noResults;
    if (playlists.length === 0) {
      noResults = <div className="no-search-content">
        <h1>Nothing to see...</h1>
      </div>
    } else {
      noResults = "";
    }

    playlists = this.props.playlists.map( (playlist, i) => {
      return (
        <PlaylistIndexItem 
          key={i}
          playlist={playlist}
        />
      )
    });

    return (
      <div className="album-item-container">
        {noResults}
        <ul className="index-item-row">
          {playlists}
        </ul>
      </div>
    )
  }
}

export default PlaylistIndex;