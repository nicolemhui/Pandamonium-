import React from 'react';
import { Link } from 'react-router-dom';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
    debugger 
  }

  handleDelete() {
    const playlist = this.props.playlist;

    this.props.deletePlaylist(playlist.id)
      .then(() => this.props.history.push(`/collection/playlists/`))
  }

  render() {
    let { playlist } = this.props;
    if (!playlist) return null;

    return (

      <div className="playlist-content-container">
        <aside className="playlist-info">
          <img src="">PLAYLIST IMAGE</img>
          <div className="playlist-info-text">
            <h3>{this.props.playlist.name}</h3>
            
            <h5>User Name</h5>
          </div>
          <button 
            className="delete-playlist-btn"
            onClick={this.handleDelete()}
            > 
            DELETE
          </button>
        </aside>

      <div className="playlist-song-container">
        <div className="playlist-song-list">
        {/* FIX ME! */}
        {/* render song list items that are IN playlist-- use selector */}
        </div>
      </div>
    </div>
    )
  }
}