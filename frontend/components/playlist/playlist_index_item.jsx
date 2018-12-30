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
        <div className="album-item-info">
          <div className="album-img"><img src={playlist.photo_url}></img></div>
          <div className="album-play-btn">
            <i class="far fa-play-circle"></i>
            {/* <i className="fas fa-play"></i> */}
          </div>
        </div>
        {playlist.name}
      </Link>
    );

    return (
      <div className="album-grid-item">
          
          {linkAction}
      </div>
  
    );
  }
}

export default PlaylistIndexItem;
