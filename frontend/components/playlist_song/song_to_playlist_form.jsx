import React from 'react';
import PlaylistIndexItem from '../playlist/playlist_index_item';

class SongToPlaylistForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    let { playlists, songId, modalType } = this.props;
    
    if (!playlists) return null;
    
    playlists = this.props.playlists.map( (playlist, i) => {
      return (
        <PlaylistIndexItem
        key={i}
        playlist={playlist}
        createPlaylistSong={this.props.createPlaylistSong}
        songId={songId}
        modalType={modalType}
        />
        )
      });

    return (
      <div className="login-signup-form-container">
        <button className="modal-exit" onClick={this.props.closeModal}>X</button>

        <h3>Add to playlist</h3>

        <div className="playlists-index-container">
          <div className="playlist-grid">
            {playlists}
          </div>
        </div>
      </div>
    );
  }
}

export default SongToPlaylistForm;