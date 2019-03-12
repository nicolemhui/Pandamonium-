import React from 'react';
import { Link } from 'react-router-dom';

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
    const click = this.props.modalType === "add_song_to_playlist"
      ? this.handleClick
      : ()=>{};

    let photoUrl;
    playlist.photo_url ? photoUrl = playlist.photo_url : photoUrl = "https://s3-us-west-1.amazonaws.com/pandamonium-resources/gradient.jpg";

    let playIcon;
    this.props.modalType === "add_song_to_playlist" ? playIcon = null : playIcon = <i className="far fa-play-circle"></i>;

    return (
      <li className="index-item">
        <Link to={`/playlists/${playlist.id}`} className="playlist-name" onClick={click}>
          <div className="album-item-info">
            <div className="album-img"><img src={photoUrl}></img></div>
            <div className="album-play-btn">
              {playIcon}
            </div>
          </div>
          <h1 className="album-title">
            {playlist.name}
          </h1>
        </Link>
      </li>
  
    );
  }
}

export default PlaylistIndexItem;
