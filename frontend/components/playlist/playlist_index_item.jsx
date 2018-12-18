import React from 'react';
import { NavLink } from 'react-router-dom';

class PlaylistIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const playlist = this.props.playlist;

    return (
      <div className="playlist-grid-item">
        <div className="playlist-item-info">
          <div className="playlist-play-btn">
            <i className="fas fa-play"></i>
          </div>
          {/* <img className="playlist-img" src="" />Picture! */}
        </div>
          <NavLink to={`api/playlist/playlistId`} className="playlist-name">{playlist.name}</NavLink>
      </div>
  
    );
  }
}

export default PlaylistIndexItem;
