import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.createPlaylistSong(this.props.playlist.id, this.props.songId);
  }

  render() {
    const playlist = this.props.playlist;
    // debugger 

    // let linkAction;
    // if ( this.state.ui.modal.modalType === "add_song_to_playlist" ) {
    //   linkAction = <Link to={`playlists/${playlist.id}`} className="playlist-name" onClick={this.handleClick}>
    //     {playlist.name}
    //   </Link>
    // } else {
    //   link = 
    // }
    // //
    let click = this.props.modalType === "add_song_to_playlist"
      ? this.handleClick
      : ()=>{};

    let linkAction = (
      <Link to={`playlists/${playlist.id}`} className="playlist-name" onClick={click}>
        {playlist.name}
      </Link>
    );
    
    //

    return (
      <div className="playlist-grid-item">
        <div className="playlist-item-info" onClick={this.handleClick}>
          <div className="playlist-play-btn">
            <i className="fas fa-play"></i>
          </div>
          {/* <img className="playlist-img" src="" />Picture! */}
        </div>
          {linkAction}
      </div>
  
    );
  }
}

export default PlaylistIndexItem;
