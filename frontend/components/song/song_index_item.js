import React from 'react';
import SongDetailViewContainer from './song_detail_view_container';

class SongIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.playSong = this.playSong.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal("add_song_to_playlist", this.props.song.id);
  }

  // FIX ME !
  // ONLY IF THIS IS ON PLAYLIST PAGE 
  handleDelete() {
    const playlist = this.props.playlist;
    this.props.deletePlaylistSong(playlist.id, this.props.song.id)
  }

  playSong() {

  }

  render() {
    const { song } = this.props;
    if (!song) return null;

    // put some logic here to determine if songs is on the playlist page, if so then have PLAY, DELETE buttons 
    //if songs is on songs page, have ADD and PLAY buttons
    //if songs is on albums page, have ADD and PLAY buttons

    // <div> 
    //   case switch statement  --- reference modal 
    //   switch(type)
    // </div>

    return (

      <li className="songlist-row">
        <div className="song-icon-display">
          <div className="song-music-btn">
            <i className="fas fa-music" />
          </div>

          <div className="song-play-btn">
            <i className="fas fa-play" />
          </div>
        </div>
        
        <SongDetailViewContainer song={song} />
        
        <button className="add-playlist-btn" 
        // value="•••"
        onClick={this.handleClick}
        > ADD </button>

        <button className="add-playlist-btn" onClick={this.playSong}> PLAY </button>
        <button className="add-playlist-btn" onClick={this.handleDelete}> DELETE </button>
      </li>
    )
  }
}

export default SongIndexItem;

//can props be passed down like this?