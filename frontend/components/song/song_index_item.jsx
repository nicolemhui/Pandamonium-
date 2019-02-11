// //NEW EDIT  -- TEST THIS ONE !
import React from 'react';
import SongDetailViewContainer from './song_detail_view_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuOpen: false,
    }

    this.handlePlay = this.handlePlay.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.showOptions = this.showOptions.bind(this);
    this.hideOptions = this.hideOptions.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal("add_song_to_playlist", this.props.song.id);
  }

  handlePlay() {
    this.props.updateQueue(this.props.getSongQueue);
    this.props.setCurrentSong(this.props.song);
  }

  handleDelete() {
    const playlist = this.props.playlist;
    this.props.deletePlaylistSong(playlist.id, this.props.song.id)
  }
  
  showOptions(e) {
    e.preventDefault();
    this.setState({ menuOpen: true }, () => {
      document.addEventListener('click', this.hideOptions);
    });
  }
  
  hideOptions(e) {
    e.preventDefault();
    this.setState({ menuOpen: false }, () => {
      document.removeEventListener('click', this.hideOptions);
    });
  }

  render() {
    const { song } = this.props;
    if (!song) return null;

    const playButton = <button className="option" onClick={this.handlePlay}>Play song</button>;
    const addButton = <button className="option" onClick={this.handleClick}>Add to playlist</button>;
    const deleteButton = <button className="option" onClick={this.handleDelete}>Delete from playlist</button>;

    let songOptions;

    if (this.props.type === "playlist_show") {
      songOptions = <div>{deleteButton}</div>
    } else if (this.props.type === "album_show") {
      songOptions = <div className="song-options-container">
        {playButton}
        {addButton}
      </div>;
    } else if (this.props.type === "song_index" || this.props.type === "artist_show") {
      songOptions = <div className="song-options-container">
        {playButton}
        {addButton}
      </div>
    } else {
      songOptions = ""
    };


    return (
      <div className="songlist-row">
        <div className="left-song-details">
          <div className="song-icon-display">
            <div className="song-music-btn">
              <i className="fas fa-music" />
            </div>

            <div className="song-play-btn" onClick={this.handlePlay}>
              <i className="fas fa-play" />
            </div>
          </div>
          
          <SongDetailViewContainer song={song} songArtists={this.props.songArtists} />
        </div>

        <div className="song-options-container">
          <button className="song-option-btn" onClick={this.showOptions}>
            •••
          </button>

          {
            this.state.menuOpen
              ? (
                <div className="song-options-dropdown">
                  {songOptions}
                </div>
              )
              : (
                null
              )
          }
        </div> 
      </div>
    )
  }
}

export default SongIndexItem;