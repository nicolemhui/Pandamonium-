import React from 'react';
import SongIndexItemContainer from '../song/song_index_item_container';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this);
    this.getSongQueue = this.getSongQueue.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }
  
  componentDidMount() {
    let playlistId = this.props.match.params.playlistId;
    this.props.fetchPlaylist(playlistId);
  }

  handleDelete() {
    const playlist = this.props.playlist;
    this.props.deletePlaylist(playlist.id);
    this.props.history.push(`/collection/playlists/`);
  }

  handlePlay() {
    let { playlistSongs } = this.props; 
    this.props.updateQueue(playlistSongs);
    this.props.setCurrentSong(playlistSongs[0]);
  }

  getSongQueue(songId) {
    let { playlistSongs } = this.props;
    let songIdx = 0;

    for (let i = 0; i < playlistSongs.length; i++) {
      if (playlistSongs[i].id === songId) {
        songIdx = i;
      }
    }

    const songQueue = playlistSongs.slice(songIdx).concat(playlistSongs.slice(0, songIdx));
    return songQueue;
  }

  render() {
    let { playlist } = this.props;
    let { playlistSongs } = this.props;

    if (!playlist || !playlistSongs) {
      return null;
    } else {
      playlistSongs = playlistSongs.map( song => {
        if (song) {
          return (
            <SongIndexItemContainer 
              type={"playlist_show"}
              key={song.id * Math.random()}
              song={song}
              playlist={playlist}  
              getSongQueue={this.getSongQueue(song.id)}
            />
          );
        } else {
          return null;
        }
      });
    }
    
    let buttons;
    debugger;
    
    if (this.props.userId === playlist.creator_id) {
      buttons = 
        <div className="playlist-btns">
          <button
            className="delete-playlist-btn"
            onClick={this.handlePlay}>
            PLAY
          </button>
          <button
              className="delete-playlist-btn"
              onClick={this.handleDelete}>
              DELETE
          </button>
        </div>
    } else if (this.props.playlistSongs.length === 0) {

      buttons =
        <div className="playlist-btns">
          <button
            className="delete-playlist-btn"
            onClick={this.handleDelete}>
            DELETE
          </button>
        </div>
    } else {
      buttons =
        <div className="playlist-btns">
          <button
            className="delete-playlist-btn"
            onClick={this.handlePlay}>
            PLAY
          </button>
        </div>
    }

    let photoUrl;
    playlist.photo_url ? photoUrl = playlist.photo_url : photoUrl = "https://s3-us-west-1.amazonaws.com/pandamonium-resources/gradient.jpg";

    return (
      <div className="playlist-main-container">
        <div className="playlist-content-container">
          <div className="playlist-info">
            <div className="playlist-cover"><img src={photoUrl} className="cover-photo"></img></div>
            <div className="playlist-info-text">
              <h3>{playlist.name}</h3>
            </div>
            {buttons}
          </div>
          <br/>
          <div className="playlist-song-container">
            <ul className="song-list">
              {playlistSongs}
            </ul>
          </div>
      </div>
    </div>
    )
  }
}

export default PlaylistShow;