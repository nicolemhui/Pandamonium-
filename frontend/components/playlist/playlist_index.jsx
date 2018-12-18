import React from 'react';
import PlaylistIndexItem from './playlist_index_item';

class PlaylistIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  // componentWillMount() {
  //   debugger
  //   this.props.fetchPlaylists()
  // }
  componentDidMount() {
    // debugger
    this.props.fetchPlaylists()
  }

  render() {
    const playlists = this.props.playlists.map(playlist => {
      return (
        <PlaylistIndexItem 
          key={playlist.id}
          playlist={playlist}
        />
      )
    });

    return (
      <div className="playlists-index-container">
        <div className="playlist-grid">
          {playlists}
        </div>
      </div>
    )
  }
}

export default PlaylistIndex;