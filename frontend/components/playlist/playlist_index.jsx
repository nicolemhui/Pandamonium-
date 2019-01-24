import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    let { playlists } = this.props;
    if (!playlists) return null;


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
        <div className="album-grid">
            {playlists}
        </div>
      </div>
    )
  }
}

export default PlaylistIndex;