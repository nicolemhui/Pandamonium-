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

    // let linkAction;
    // if ( this.state.ui.modal.modalType === "add_song_to_playlist" ) {
    //   linkAction = <Link to={`playlists/${playlist.id}`} className="playlist-name" onClick={this.handleClick}>
    //     {playlist.name}
    //   </Link>
    // } else {
    //   link = 
    // }
    // //
    const click = this.props.modalType === "add_song_to_playlist"
      ? this.handleClick
      : ()=>{};

    let linkAction = (
      <Link to={`playlists/${playlist.id}`} className="playlist-name" onClick={click}>
        <div className="playlist-item-info">
          <div className="playlist-play-btn">
            <i className="fas fa-play"></i>
          </div>
        </div>
        {playlist.name}
      </Link>
    );

    return (
      <div className="playlist-grid-item">
          {linkAction}
      </div>
  
    );
  }
}

export default PlaylistIndexItem;

/* <div className="playlist-item-info">
  <div className="playlist-play-btn">
    <i className="fas fa-play"></i>
  </div>
  {/* <img className="playlist-img" src="" />Picture! */
// </div>